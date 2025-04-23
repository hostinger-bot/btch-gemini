/**
 * @file index
 * @description The main module for importing functions from `src/main.ts` and executing a version check from `version.ts`.
 * @remarks
 * - Imports `gemini_chat`, `gemini_image`, `gemini_audio`, `gemini_video`, `gemini_history`, `gemini_imgedit`, and `gemini_prompt` functions to make them available for use in other parts of the project.
 * - Calls `versionControl` to check that the current project version is up to date with the latest version of `btch-gemini`.
 * - Retrieves the current project version from `package.json` to use in the version check.
 */
import * as main from './src/main';
export declare const gemini_chat: typeof main.gemini_chat, gemini_image: typeof main.gemini_image, gemini_audio: typeof main.gemini_audio, gemini_video: typeof main.gemini_video, gemini_history: typeof main.gemini_history, gemini_prompt: typeof main.gemini_prompt, gemini_imgedit: typeof main.gemini_imgedit;
