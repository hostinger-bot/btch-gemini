/**
 * @file index
 * @description The main module for importing functions from `src/main.js` and executing a version check from `version.js`.
 * @remarks
 * - Imports `gemini_chat`, `gemini_image`, `gemini_audio`, `gemini_video`, `gemini_history`, `gemini_imgedit`, and `gemini_prompt` functions to make them available for use in other parts of the project.
 * - Calls `versionControl` to check that the current project version is up to date with the latest version of `btch-gemini`.
 * - Retrieves the current project version from `package.json` to use in the version check.
 */

const { versionControl } = require('./version');
const version = require("./package.json").version;

module.exports = {
    gemini_chat: require('./src/main').gemini_chat,
    gemini_image: require('./src/main').gemini_image,
    gemini_audio: require('./src/main').gemini_audio,
    gemini_video: require('./src/main').gemini_video,
    gemini_history: require('./src/main').gemini_history,
    gemini_prompt: require('./src/main').gemini_prompt,
    gemini_imgedit: require('./src/main').gemini_imgedit
};
