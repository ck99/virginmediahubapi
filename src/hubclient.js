const puppeteer = require("puppeteer");
const {localLogger, remoteLogger} = require('./logger');
const remoteScripts = require('./remoteScripts');

const parseXML = new (require('xml2js')).Parser({
    explicitArray: false
}).parseStringPromise;

let createBrowser = async (baseUrl) => {
    return await puppeteer.launch({
        bindAddress: "0.0.0.0",
        args: [
            "--headless",
            "--disable-gpu",
            "--no-sandbox",
            "--disable-dev-shm-usage",
            "--remote-debugging-port=9222",
            "--remote-debugging-address=0.0.0.0"
        ]
    }).then(async browser => {
        return browser.createIncognitoBrowserContext()
            .then(async context => {
                return await context.newPage().then(async page => {
                    await remoteScripts.injectUserScripts(page)
                    page.on('console', msg => {
                        let logLevel = msg._type;
                        if(logLevel === 'log') {
                            logLevel = "debug";
                        }
                        remoteLogger[logLevel](`BROWSER: [${msg._type}] ${msg._text}`);
                    });
                    return page;
                });
            })
    }).then(async tab => {
        await tab.goto(baseUrl, { waitUntil: ["networkidle0", "domcontentloaded"] })
        let pageUrl = await tab.url();
        localLogger.info(`Browser loaded ${pageUrl}`);
        return tab;
    });
};


const hubClient = async (baseUrl, user, password) => {
    let loginUri = `${baseUrl}/common_page/login.html`;
    const tab = await createBrowser(loginUri)
        .then(async tab => {
            try {
                await tab.evaluate(async ({user, password}) => {
                    hubclient.init(user, password);
                    return hubclient.login();
                }, {user, password});
                localLogger.info("Logged In via JS")
            } catch(err) {
                localLogger.emerg(err)
            }

            return tab;
        });

    let doAjaxGet = async (functionNumber, functionRule) => {
        return tab.evaluate(async ({functionNumber, functionRule}) => {
            return hubclient.get(functionNumber, functionRule);
        }, {functionNumber, functionRule})
        .then(rawResponse => {
            remoteLogger.debug(rawResponse);
            return rawResponse;
        })
        .then(parseXML)
    }

    return {
        responseFor: (functionNumber, functionRule) => {
            return doAjaxGet(functionNumber, functionRule);
        }
    }
};

module.exports = hubClient;







