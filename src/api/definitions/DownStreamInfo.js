let schemaTools = require('../schema_tools')

let name = "DownStreamInfo";
let schema = schemaTools.fromExample({
    "freq": "722000000",
    "pow": "-5",
    "snr": "37",
    "mod": "256qam",
    "chid": "1",
    "RxMER": "37.636",
    "PreRs": "647885395",
    "PostRs": "43",
    "IsQamLocked": "1",
    "IsFECLocked": "1",
    "IsMpegLocked": "1"
})

module.exports = {name, schema}