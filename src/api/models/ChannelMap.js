let schemaTools = require('../schema_tools')

let schema = schemaTools.fromExample({
  "count2G": "0",
  "MyCurrentChannel2G": "6",
  "count5G": "0",
  "MyCurrentChannel5G": "100",
  "BandMode_2_4G": schemaTools.fromExample({
    "W2GCH1": "0",
    "W2GCH2": "0",
    "W2GCH3": "0",
    "W2GCH4": "0",
    "W2GCH5": "0",
    "W2GCH6": "0",
    "W2GCH7": "0",
    "W2GCH8": "0",
    "W2GCH9": "0",
    "W2GCH10": "0",
    "W2GCH11": "0",
    "W2GCH12": "0",
    "W2GCH13": "0",
    "maxaxis2G": "14",
    "total2g": "0"
  }),
  "BandMode_5G": schemaTools.fromExample({
    "W5GCH1": "0",
    "W5GCH2": "0",
    "W5GCH3": "0",
    "W5GCH4": "0",
    "W5GCH5": "0",
    "W5GCH6": "0",
    "W5GCH7": "0",
    "W5GCH8": "0",
    "W5GCH9": "0",
    "W5GCH10": "0",
    "W5GCH11": "0",
    "W5GCH12": "0",
    "W5GCH13": "0",
    "W5GCH14": "0",
    "W5GCH15": "0",
    "W5GCH16": "0",
    "W5GCH17": "0",
    "W5GCH18": "0",
    "W5GCH19": "0",
    "maxaxis5G": "14",
    "total5g": "0"
  })
});

let name = "ChannelMap";
module.exports = {
    name,
    route: "channel_map",
    functionNumber: 313,
    schema,
}