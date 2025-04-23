import axios from 'axios';
export async function versionControl(version) {
    if (process.env.JEST_WORKER_ID) { //Saat test skip aja
        return;
    }
    try {
        const response = await axios.get('https://registry.npmjs.org/btch-gemini');
        const pack = response.data;
        const latestVersion = pack['dist-tags'].latest;
        if (latestVersion !== version) {
            console.log(`\x1b[38;5;215mYou are using an Outdated Version for btch-gemini. Run the \x1b[38;5;119m'npm i btch-gemini@${latestVersion}' \x1b[38;5;215mCommand for the Latest Version.\x1B[0m`);
        }
        else {
            console.log(`\x1b[38;5;119mYou are using the Latest Version (${latestVersion}) of btch-gemini.\x1B[0m`);
        }
    }
    catch (er) {
        console.error('Version check failed:', er.message || er);
    }
}
