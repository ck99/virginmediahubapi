const _ = require('lodash');
let ConnectedClientInfo = require('../definitions/ConnectedClientInfo')
let schemaTools = require('../schema_tools')

let schema = schemaTools.fromExample({
    Ethernet: schemaTools.arrayOf(ConnectedClientInfo.name),
    WIFI: schemaTools.arrayOf(ConnectedClientInfo.name),
    totalClient: "2",
    Customer: "upc"
})

module.exports = {
    name: "LanUserTable",
    route: "lan_user_table",
    functionNumber: 123,
    tags: ["LAN"],
    description: "Show details of connected devices",
    schema,
    normalizers: [
        response => {
            ["Ethernet", "WIFI"].forEach(key => {
                if(_.isString(response[key])) {
                    response[key] = [];
                } else if(_.isPlainObject(response[key])) {
                    response[key] = [response[key]];
                }
            })
            return response;
        }
    ]
}