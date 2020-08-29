const express = require('express')
const hubclient = require('./hubclient')
const bodyParser = require('body-parser')
const _ = require('lodash');
const app = express()
const config = require('./config');

const logger = require('./logger').localLogger;
const swaggerUi = require('swagger-ui-express');

app.use(bodyParser.urlencoded({ extended: true }))

let browser = hubclient(config.hubserver, config.hubuser, config.hubpassword);

const camelToSnakeCase = str => str[0].toLowerCase() + str.slice(1, str.length).replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
app.get('/hub_debug/function/:id', async (req, res) => {
    let client = await browser;
    let hubResponse = await client.responseFor(req.params.id)
    let rootElement = "";
    let route = "";
    if(hubResponse) {
        if(Object.getOwnPropertyNames(hubResponse).length === 1) {
            rootElement = Object.getOwnPropertyNames(hubResponse)[0];
            route = camelToSnakeCase(rootElement);
            hubResponse = hubResponse[rootElement];

            if(route === rootElement) {
                route = "name"
            } else {
                route = `"${route}"`
            }

        }

        let response = `let schemaTools = require('../schema_tools')

let schema = schemaTools.fromExample(${JSON.stringify(hubResponse, null, 2)});

let name = "${rootElement}";
module.exports = {
    name,
    route: ${route},
    functionNumber: ${req.params.id},
    schema,
}`


        res.send(response)
    } else {
        res.sendStatus(404);
    }
});

let routerAPI = require('./api');

let routerRoutes = routerAPI.getRoutes();
Object.getOwnPropertyNames(routerRoutes).forEach(route => {
    let handler = routerRoutes[route](browser);
    app.get(`/hub/${route}`, async (req, res) => {
        res.send(await handler())
    })
})

app.use('/', function(req, res, next){
    let swaggerDocument = routerAPI.getSwaggerDocument();
    swaggerDocument.host = req.get('host');
    req.swaggerDoc = swaggerDocument;
    next();
}, swaggerUi.serve, swaggerUi.setup());

module.exports = () => {
    app.listen(config.port, () => {
        logger.info(`HubServer listening at http://localhost:${config.port}`)
    })
}
