const _ = require('lodash');
const path = require('path');
const schemaTools = require('./schema_tools');
const logger = require('../logger').localLogger;
let routes = {};

let template = require('./swaggerTemplate.json');
template.definitions = {};

const modelPath = path.join(__dirname, 'models');
const definitionsPath = path.join(__dirname, 'definitions');


Object.getOwnPropertyNames(schemaTools.basicSchema).forEach(s => {
    template.definitions[s] = schemaTools.basicSchema[s];
})


let routeBuilder = model => {
    let responseNormalizers = [
        response => {
            return response[model.rootElement]
        }
    ];
    if(model.normalizers) {
        responseNormalizers = responseNormalizers.concat(model.normalizers);
    }
    return apiClient => {
        return async () => {
            let client = await apiClient;
            let deviceResponse = await client.responseFor(model.functionNumber, model.functionRule);
            return responseNormalizers.reduce((response, f) => {
                return f(response);
            },deviceResponse)
        }
    }
}

[definitionsPath, modelPath].forEach(loaderPath => {
    _(require("fs").readdirSync(loaderPath))
        .map(file => path.join(loaderPath, file))
        .map(modelFilePath => {
            return {
                modelFilePath,
                model: require(modelFilePath)
            }
        })
        .sortBy(({model}) => model.route)
        .sortBy(({model}) => model.tags ? model.tags[0] : 'zzzzzzzz')
        .forEach(({modelFilePath, model}) => {
            if(!model.rootElement) {
                model.rootElement = model.name
            }
            template.definitions[model.name] = model.schema

            if(model.functionNumber) {
                if(loaderPath === definitionsPath) {
                    logger.debug(`${modelFilePath} looks like a model, but its in the definitions path`)
                }

                if(routes[model.route]) {
                    logger.alert(`route conflict detected: ${model.route} already exists, while adding ${model.name}`)
                }

                routes[model.route] = routeBuilder(model)
                template.paths[`/${model.route}`] = {
                    get: {
                        tags: model.tags || ["untagged"],
                        summary: `${(model.description || model.name)} [${model.functionNumber}]`,
                        description: `Gets ${model.name} data from hub by proxying internal function #${model.functionNumber}`,
                        produces: [
                            "application/json"
                        ],
                        responses: {
                            200: {
                                description: "Success",
                                schema: schemaTools.ref(model.name)
                            }
                        }
                    }
                }

                logger.debug(`Added route: ${model.route} -> ${model.name} (${modelFilePath})`)

            } else {
                if(loaderPath === modelPath) {
                    logger.debug(`${modelFilePath} looks like a definition, but its in the models path`)
                }
            }
        })
        .valueOf();
})


_.sortBy(template.paths, (p, k) => {
    return k;
})

module.exports = {
    getSwaggerDocument: () => template,
    getRoutes: () => routes
}