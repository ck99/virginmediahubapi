let schemaTools = require('../schema_tools')
module.exports = {
    name: "WANIPv6DNSAddrEntry",
    schema: {
        type: "object",
        properties: {
            wan_ipv6_dnsaddr_entry: schemaTools.arrayOf("IPV6Address")
        }
    }
}