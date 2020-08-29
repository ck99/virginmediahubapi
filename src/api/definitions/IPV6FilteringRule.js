let schemaTools = require('../schema_tools')

module.exports = {
    name: "IPV6FilteringRule",
    schema: schemaTools.fromExample({
        "idd": "1",
        "src_addr": schemaTools.ref("IPV6Address"),
        "src_prefix": "128",
        "dst_addr": schemaTools.ref("IPV6Address"),
        "dst_prefix": "128",
        "src_sport": "65530",
        "src_eport": "65530",
        "dst_sport": "65530",
        "dst_eport": "65530",
        "protocol": "1",
        "allow": "1",
        "enabled": "0"
    })
}