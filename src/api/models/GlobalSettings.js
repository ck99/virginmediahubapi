let schemaTools = require('../schema_tools')

module.exports = {
    name: "GlobalSettings",
    route: "global_settings",
    functionNumber: 1,
    schema: schemaTools.fromExample({
        "AccessLevel": "1",
        "SwVersion": "CH7465LG-NCIP-6.12.18.26-3p7-1-NOSH",
        "CmProvisionMode": "IPv4",
        "DsLite": "1",
        "GwProvisionMode": "IPv6",
        "GWOperMode": "IPv6",
        "ConfigVenderModel": "CH7465LG",
        "HideRemoteAccess": "False",
        "HideModemMode": "True",
        "OperatorId": "VIRGINMEDIA",
        "AccessDenied": "NONE",
        "LockedOut": "Disable",
        "CountryID": "6",
        "title": "Hub 3.0",
        "Interface": "1",
        "operStatus": "1"
    })
}