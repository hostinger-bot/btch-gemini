const axios = require('axios');
const package_v = require('./package.json'); 
async function versionControl(version) {
    try {
        const response = await axios.get(`https://registry.npmjs.com/-/v1/search?text=btch-gemini`);
        const pack = response.data;

        if (pack && pack.objects && pack.objects[0] && pack.objects[0].package.version !== version) {
            console.log(
                `\x1b[38;5;215mYou are using an Outdated Version for btch-gemini, Run the \x1b[38;5;119m' npm i btch-gemini@${pack.objects[0].package.version} '\x1b[38;5;215m Command for the Current Version.\x1B[0m`
            );
        }
    } catch (er) {
        console.error('Version check failed:', er.message || er);
    }
}

versionControl(package_v.version);

module.exports = { versionControl };
