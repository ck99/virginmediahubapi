let schemaTools = require('../schema_tools')

let schema = schemaTools.fromExample({
  "count2G": "0",
  "count5G": "0",
  "BandMode_2_4G": "",
  "BandMode_5G": ""
});

let name = "WirelessSiteSurvey";
module.exports = {
    name,
    route: "wireless_site_survey",
    functionNumber: 305,
    tags: ["Internal"],
    schema,
}