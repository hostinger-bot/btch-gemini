/**
 * @class GeminiService
 * @description A class that handles communication with the Gemini API for chat and image processing.
 * @remarks
 * - The class includes methods for sending prompts to the `gemini/chat` and `gemini/image` endpoints.
 * - Utilizes the `axios` library for making HTTP requests.
 * - Error handling is implemented to log and rethrow errors for debugging and further processing.
 */

const axios = require('axios');

class GeminiService {
    /**
     * @method gemini_chat
     * @description Sends a chat prompt to the Gemini API and returns the response.
     * @param {string} prompt - The prompt text to be sent to the API.
     * @returns {Promise} - A promise that resolves with the response data.
     * @throws {Error} - Throws an error if the request fails.
     */
    async gemini_chat(prompt) {
        try {
            console.log('Processing request...');
            return await this._processChat(prompt);
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    /**
     * @method gemini_image
     * @description Sends a prompt and image URL to the Gemini API for image processing.
     * @param {string} prompt - The prompt text to be sent to the API.
     * @param {string} imageUrl - The URL of the image to be processed.
     * @returns {Promise} - A promise that resolves with the response data.
     * @throws {Error} - Throws an error if the request fails.
     */
    async gemini_image(prompt, imageUrl) {
        try {
            console.log('Processing request...');
            return await this._processImage(prompt, imageUrl);
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    /**
     * @method _processChat
     * @description Private method that makes a POST request to the `gemini/chat` endpoint.
     * @param {string} prompt - The prompt to be sent to the API.
     * @returns {Promise} - A promise that resolves with the response data.
     * @throws {Error} - Throws an error if the request fails.
     */
    async _processChat(prompt) {
        const url = 'https://gemini-api-5k0h.onrender.com/gemini/chat';
        const headers = {
            'accept': 'application/json',
            'Content-Type': 'application/json',
        };
        const body = {
            prompt: prompt,
        };

        try {
            const response = await axios.post(url, body, { headers });
            return response.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    /**
     * @method _processImage
     * @description Private method that makes a POST request to the `gemini/image` endpoint.
     * @param {string} prompt - The prompt to be sent to the API.
     * @param {string} imageUrl - The URL of the image to be processed.
     * @returns {Promise} - A promise that resolves with the response data.
     * @throws {Error} - Throws an error if the request fails.
     */
    async _processImage(prompt, imageUrl) {
        const url = 'https://gemini-api-5k0h.onrender.com/gemini/image';
        const headers = {
            'accept': 'application/json',
            'Content-Type': 'application/json',
        };
        const body = {
            prompt: prompt,
            imgUrl: imageUrl,
        };

        try {
            const response = await axios.post(url, body, { headers });
            return response.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}

module.exports = new GeminiService();
