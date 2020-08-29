const _ = require('lodash');

module.exports = {
    objectToArray: keys => {
        return response => {
            keys.forEach(key => {
                if(_.isString(response[key])) {
                    response[key] = [];
                } else if(_.isPlainObject(response[key])) {
                    response[key] = [response[key]];
                }
            })
            return response;
        }
    },
    emptyStringElementsToEmptyObjects: keys => {
        return response => {
            keys.forEach(key => {
                response[key] = _.map(response[key], v => {
                    if(v === "") {
                        return {}
                    } else return v
                })
            })
            return response;
        }
    },
}