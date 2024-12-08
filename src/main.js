/**
 * @module main
 * @description This module validates input data and calls the corresponding methods from the `Api` module for chat and image processing.
 * @remarks
 * - Ensures that input data is valid before calling the `gemini_chat` and `gemini_image` methods.
 * - Provides appropriate error messages if input validation fails.
 */

const Api = require('./Api');

module.exports = {
    /**
     * @method gemini_chat
     * @description Validates the prompt and calls the `gemini_chat` method from the `Api` module.
     * @param {string} prompt - The prompt text for the chat.
     * @returns {Promise} - A promise that resolves with the response data from the `gemini_chat` method.
     * @throws {Error} - Throws an error if the prompt is empty, not a string, or only spaces.
     */
    async gemini_chat(prompt) {
        if (!prompt) {
            throw new Error('Prompt cannot be empty');
        }

        if (typeof prompt !== 'string') {
            throw new Error('Prompt must be a string');
        }

        if (prompt.trim().length === 0) {
            throw new Error('Prompt cannot contain only spaces');
        }

        return await Api.gemini_chat(prompt);
    },

    /**
     * @method gemini_image
     * @description Validates the prompt and image URL, and calls the `gemini_image` method from the `Api` module.
     * @param {string} prompt - The prompt text for the image processing.
     * @param {string} imageUrl - The URL of the image to be processed.
     * @returns {Promise} - A promise that resolves with the response data from the `gemini_image` method.
     * @throws {Error} - Throws an error if the prompt or image URL is empty, not a string, or only spaces.
     */
    async gemini_image(prompt, imageUrl) {
        if (!prompt) {
            throw new Error('Prompt cannot be empty');
        }

        if (typeof prompt !== 'string') {
            throw new Error('Prompt must be a string');
        }

        if (prompt.trim().length === 0) {
            throw new Error('Prompt cannot contain only spaces');
        }

        if (!imageUrl) {
            throw new Error('Image URL cannot be empty');
        }

        if (typeof imageUrl !== 'string') {
            throw new Error('Image URL must be a string');
        }

        if (imageUrl.trim().length === 0) {
            throw new Error('Image URL cannot contain only spaces');
        }

        return await Api.gemini_image(prompt, imageUrl);
    }
};
