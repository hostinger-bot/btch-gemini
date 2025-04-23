"use strict";
/**
 * @file index
 * @description The main module for importing functions from `src/main.ts` and executing a version check from `version.ts`.
 * @remarks
 * - Imports `gemini_chat`, `gemini_image`, `gemini_audio`, `gemini_video`, `gemini_history`, `gemini_imgedit`, and `gemini_prompt` functions to make them available for use in other parts of the project.
 * - Calls `versionControl` to check that the current project version is up to date with the latest version of `btch-gemini`.
 * - Retrieves the current project version from `package.json` to use in the version check.
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.gemini_imgedit = exports.gemini_prompt = exports.gemini_history = exports.gemini_video = exports.gemini_audio = exports.gemini_image = exports.gemini_chat = void 0;
const version_1 = require("./version");
const main = __importStar(require("./src/main"));
// ESM exports
exports.gemini_chat = main.gemini_chat, exports.gemini_image = main.gemini_image, exports.gemini_audio = main.gemini_audio, exports.gemini_video = main.gemini_video, exports.gemini_history = main.gemini_history, exports.gemini_prompt = main.gemini_prompt, exports.gemini_imgedit = main.gemini_imgedit;
// CJS exports
module.exports = {
    gemini_chat: exports.gemini_chat,
    gemini_image: exports.gemini_image,
    gemini_audio: exports.gemini_audio,
    gemini_video: exports.gemini_video,
    gemini_history: exports.gemini_history,
    gemini_prompt: exports.gemini_prompt,
    gemini_imgedit: exports.gemini_imgedit,
};
// Run version control
const package_json_1 = __importDefault(require("./package.json"));
(0, version_1.versionControl)(package_json_1.default.version);
