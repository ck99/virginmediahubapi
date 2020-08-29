const fs = require('fs').promises;

module.exports = {
    injectUserScripts: async (browserTab) => {
        await browserTab.evaluateOnNewDocument(await fs.readFile(__dirname + '/timerManager.js', 'utf8'));
        await browserTab.evaluateOnNewDocument(await fs.readFile(__dirname + '/hubHelper.js', 'utf8'));
        return browserTab;
    }
}