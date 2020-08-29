let schemaTools = require('../schema_tools')

let schema = schemaTools.fromExample({
  "provisioning_st": "Online",
  "provisioning_st_num": "12",
  "cm_comment": "Operational",
  "ds_num": "1",
  "downstream": schemaTools.arrayOf("DownstreamChannel"),
  "us_num": "1",
  "upstream": schemaTools.arrayOf("UpstreamChannel"),
  "cm_docsis_mode": "DOCSIS 3.0",
  "cm_network_access": "Allowed",
  "NumberOfCpes": "245",
  "dMaxCpes": "10",
  "bpiEnable": "1",
  "FileName": "CH7465LG_cm_res008_v6-sip.bin",
  "serviceflow": schemaTools.arrayOf("ServiceFlow")
});

let name = "cmstatus";
module.exports = {
    name,
    route: name,
    functionNumber: 144,
    schema,
}