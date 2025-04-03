 /**
 * @module main
 * @description This module validates input data and calls the corresponding methods from the `Api` module for all Gemini services.
 * @remarks
 * - Ensures that input data is valid before calling any API methods
 * - Provides appropriate error messages if input validation fails
 * - Handles validation for chat, image, audio, video, history, and prompt endpoints
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
    },

    /**
     * @method gemini_audio
     * @description Validates the audio URL and optional prompt, and calls the `gemini_audio` method from the `Api` module.
     * @param {string} audioUrl - The URL of the audio to be processed.
     * @param {string} [prompt] - Optional prompt for audio processing.
     * @returns {Promise} - A promise that resolves with the response data from the `gemini_audio` method.
     * @throws {Error} - Throws an error if the audio URL is invalid or prompt is invalid when provided.
     */
    async gemini_audio(audioUrl, prompt = null) {
        if (!audioUrl) {
            throw new Error('Audio URL cannot be empty');
        }

        if (typeof audioUrl !== 'string') {
            throw new Error('Audio URL must be a string');
        }

        if (audioUrl.trim().length === 0) {
            throw new Error('Audio URL cannot contain only spaces');
        }

        if (prompt !== null) {
            if (typeof prompt !== 'string') {
                throw new Error('Prompt must be a string when provided');
            }

            if (prompt.trim().length === 0) {
                throw new Error('Prompt cannot contain only spaces when provided');
            }
        }

        return await Api.gemini_audio(audioUrl, prompt);
    },

    /**
     * @method gemini_video
     * @description Validates the video URL and optional prompt, and calls the `gemini_video` method from the `Api` module.
     * @param {string} videoUrl - The URL of the video to be processed.
     * @param {string} [prompt] - Optional prompt for video processing.
     * @returns {Promise} - A promise that resolves with the response data from the `gemini_video` method.
     * @throws {Error} - Throws an error if the video URL is invalid or prompt is invalid when provided.
     */
    async gemini_video(videoUrl, prompt = null) {
        if (!videoUrl) {
            throw new Error('Video URL cannot be empty');
        }

        if (typeof videoUrl !== 'string') {
            throw new Error('Video URL must be a string');
        }

        if (videoUrl.trim().length === 0) {
            throw new Error('Video URL cannot contain only spaces');
        }

        if (prompt !== null) {
            if (typeof prompt !== 'string') {
                throw new Error('Prompt must be a string when provided');
            }

            if (prompt.trim().length === 0) {
                throw new Error('Prompt cannot contain only spaces when provided');
            }
        }

        return await Api.gemini_video(videoUrl, prompt);
    },

    /**
     * @method gemini_history
     * @description Validates the messages array and calls the `gemini_history` method from the `Api` module.
     * @param {Array} messages - Array of message objects with role and content.
     * @returns {Promise} - A promise that resolves with the response data from the `gemini_history` method.
     * @throws {Error} - Throws an error if the messages array is invalid or contains invalid messages.
     */
    async gemini_history(messages) {
        if (!Array.isArray(messages)) {
            throw new Error('Messages must be an array');
        }

        if (messages.length === 0) {
            throw new Error('Messages array cannot be empty');
        }

        for (const message of messages) {
            if (!message.role || !message.content) {
                throw new Error('Each message must have a role and content');
            }

            if (!['user', 'assistant'].includes(message.role)) {
                throw new Error('Message role must be either "user" or "assistant"');
            }

            if (typeof message.content !== 'string') {
                throw new Error('Message content must be a string');
            }

            if (message.content.trim().length === 0) {
                throw new Error('Message content cannot contain only spaces');
            }
        }

        return await Api.gemini_history(messages);
    },

    /**
     * @method gemini_prompt
     * @description Validates the system prompt and query, and calls the `gemini_prompt` method from the `Api` module.
     * @param {string} systemPrompt - The system instruction to use.
     * @param {string} query - The query to process.
     * @returns {Promise} - A promise that resolves with the response data from the `gemini_prompt` method.
     * @throws {Error} - Throws an error if the system prompt or query is invalid.
     */
    async gemini_prompt(systemPrompt, query) {
        if (!systemPrompt) {
            throw new Error('System prompt cannot be empty');
        }

        if (typeof systemPrompt !== 'string') {
            throw new Error('System prompt must be a string');
        }

        if (systemPrompt.trim().length === 0) {
            throw new Error('System prompt cannot contain only spaces');
        }

        if (!query) {
            throw new Error('Query cannot be empty');
        }

        if (typeof query !== 'string') {
            throw new Error('Query must be a string');
        }

        if (query.trim().length === 0) {
            throw new Error('Query cannot contain only spaces');
        }

        return await Api.gemini_prompt(systemPrompt, query);
    },
    
    /**
     * @method gemini_imgedit
     * @description Validates the prompt and image URL, and calls the `gemini_imgedit` method from the `Api` module.
     * @param {string} prompt - The transformation prompt.
     * @param {string} imageUrl - The URL of the image to be edited.
     * @param {string} [method='POST'] - HTTP method to use ('GET' or 'POST').
     * @returns {Promise} - A promise that resolves with the response data from the `gemini_imgedit` method.
     * @throws {Error} - Throws an error if inputs are invalid.
     */
    async gemini_imgedit(prompt, imageUrl, method = 'POST') {
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

        return await Api.gemini_imgedit(prompt, imageUrl, method);
    }
};
