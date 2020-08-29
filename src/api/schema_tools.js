const _ = require('lodash')
let ref = name => {
    return {
        $ref: `#/definitions/${name}`
    }
}

let arrayOf = name => {
    return {
        type: "array",
        items: ref(name)
    }
}

let string = (example) => {
    if(example) {
        if(_.isString(example)) {
            return {
                type: "string",
                example: example
            }
        } else {
            return example;
        }
    } else {
        return {
            type: "string"
        }
    }


}

let objectWithStringProps = props => {
    let properties = {};
    props.forEach(prop => {
        properties[prop[0]] = string(prop[1])
    })
    return {
        type: "object",
        properties: properties
    }
}

let fromExample = example => {
    return {
        type: "object",
        properties: _(example).mapValues(string).valueOf()
    }
}

const basicSchema = {
    AdminPIN: string("12345678"),
    SSID: string("MyWiFiSSID"),
    PSK: string("some-secret1"),
    IPV4Address: string("192.168.0.1"),
    IPV4AddressWithSubnet: string("192.168.0.1/24"),
    IPV4AddressWithSubnetMask: string("10.0.0.1/255.255.252.0"),
    IPV4SubnetMask: string("255.255.255.0"),
    MACAddress: string("BE:EF:FA:CE:CA:FE"),
    IPV6Address: string("beef:face:ca:fe::/64"),
    IPV6Subnet: string("beef:face:ca:fe::/64"),
    IPV6Prefix: string("beef:face:ca:fe::"),
    Language: string("en"),
    TFTPConfig: string("tftp://10.0.0.100/mta/e/2/ac22056b422e.bin"),
    FQDN: string("something.example.com"),
}

module.exports = {
    ref,
    arrayOf,
    objectWithStringProps,
    fromExample,
    basicSchema
}


Object.getOwnPropertyNames(basicSchema).forEach(s => {
    module.exports[s] = ref(s);
})
