let _ = require('lodash');
let schemaTools = require('../schema_tools')

let schema = schemaTools.fromExample({
  "config_file_url": schemaTools.ref("TFTPConfig"),
  "config_file_content": schemaTools.arrayOf("KeyValue")
});

let name = "Provisioning";
module.exports = {
  name,
  route: "provisioning",
  rootElement: "Provivsioning",
  functionNumber: 504,
  tags: ["Configuration"],
  description: "Internal Configs for router, including config of attached telephone line",
  schema,
  normalizers: [
    response => {
      response.config_file_content = _(response.config_file_content)
          .filter(entry => {
            return entry.startsWith(".")
          })
          .map(entry => {
            let [key, value] = entry.split(" ")
            return {key,value};
          })
      return response;
    }
  ]
}