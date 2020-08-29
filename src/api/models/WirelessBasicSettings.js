let schemaTools = require('../schema_tools')

let schema = schemaTools.fromExample({
  "NvCountry": "1",
  "Bandmode": "3",
  "ChannelRange": "2",
  "BssEnable2g": "1",
  "SSID2G": schemaTools.ref("SSID"),
  "HideNetwork2G": "2",
  "BandWidth2G": "1",
  "BssCoexistence": "1",
  "TransmissionRate2g": "0",
  "TransmissionMode2g": "1",
  "SecurityMode2g": "8",
  "MulticastRate2G": "1",
  "ChannelSetting2G": "0",
  "CurrentChannel2G": "6",
  "PreSharedKey2g": schemaTools.ref("PSK"),
  "GroupRekeyInterval2g": "0",
  "WpaAlgorithm2G": "3",
  "SONAdminStatus": "1",
  "SONOperationalStatus": "1",
  "BssEnable5g": "1",
  "SSID5G": schemaTools.ref("SSID"),
  "HideNetwork5G": "2",
  "BandWidth5G": "3",
  "TransmissionRate5g": "0",
  "TransmissionMode5g": "14",
  "SecurityMode5g": "4",
  "MulticastRate5G": "1",
  "ChannelSetting5G": "0",
  "CurrentChannel5G": "100",
  "PreSharedKey5g": schemaTools.ref("PSK"),
  "GroupRekeyInterval5g": "0",
  "WpaAlgorithm5G": "2"
});

let name = "WirelessBasicSettings";
module.exports = {
    name,
    rootElement: "WirelessBasic",
    route: "wireless_basic_settings",
    functionNumber: 300,
    schema,
}