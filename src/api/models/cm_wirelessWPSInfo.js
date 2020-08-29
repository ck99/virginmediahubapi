let schemaTools = require('../schema_tools')

let schema = schemaTools.fromExample({
  "WpsEnable24G": "1",
  "WpsEnable5G": "1",
  "WpsMethod24G": "1",
  "WpsMethod5G": "1",
  "WpsAPPIN24G": schemaTools.ref("AdminPIN"),
  "WpsAPPIN5G": schemaTools.ref("AdminPIN"),
  "WpsPINNUM24G": "",
  "WpsPINNUM5G": "",
  "WpsEnablePBC": "1",
  "WpsEnablePIN": "2",
  "WpsEnablePBC5G": "1",
  "WpsEnablePIN5G": "2"
});

let name = "cm_wirelessWPSInfo";
module.exports = {
    name,
    route: "cm_wireless_wps_info",
    rootElement: "cm_wirelessWPS",
    functionNumber: 309,
    schema,
}