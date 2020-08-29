const PORT = process.env.PORT || 3000;
const HUB = process.env.HUB || "";
const HUB_USER = process.env.HUB_USER || "null";
const HUB_PASSWORD = process.env.HUB_PASSWORD || "";
const MODE = process.env.NODE_ENV || "prod";


module.exports = {
    port: PORT,
    hubserver: HUB,
    hubuser: HUB_USER,
    hubpassword: HUB_PASSWORD,
    debug: MODE !== "prod"
}