/**
 * @class GeminiService
 * @description A class that handles communication with the Gemini API for all services including chat, image, audio, video, and history processing.
 * @remarks
 * - The class includes methods for all Gemini API endpoints
 * - Utilizes the `axios` library for making HTTP requests
 * - Implements comprehensive error handling
 * - Supports both GET and POST methods where applicable
 */

const axios = require('axios');

class GeminiService {
    constructor() {
        this.baseUrl = 'https://gemini-api-5k0h.onrender.com';
        this.headers = {
            'accept': 'application/json',
            'Content-Type': 'application/json',
        };
    }

    /**
     * @method gemini_chat
     * @description Sends a chat prompt to the Gemini API and returns the response.
     * @param {string} prompt - The prompt text to be sent to the API.
     * @param {string} method - The HTTP method to use ('GET' or 'POST').
     * @returns {Promise} - A promise that resolves with the response data.
     * @throws {Error} - Throws an error if the request fails.
     */
    async gemini_chat(prompt, method = 'POST') {
        try {
            console.log('Processing chat request...');
            return await this._processRequest('/gemini/chat', method, { prompt }, { q: prompt });
        } catch (error) {
            console.error('Chat processing error:', error);
            throw error;
        }
    }

    /**
     * @method gemini_image
     * @description Sends a prompt and image URL to the Gemini API for image processing.
     * @param {string} prompt - The prompt text to be sent to the API.
     * @param {string} imageUrl - The URL of the image to be processed.
     * @param {string} method - The HTTP method to use ('GET' or 'POST').
     * @returns {Promise} - A promise that resolves with the response data.
     * @throws {Error} - Throws an error if the request fails.
     */
    async gemini_image(prompt, imageUrl, method = 'POST') {
        try {
            console.log('Processing image request...');
            const data = method === 'POST' ? { prompt, imgUrl: imageUrl } : null;
            const params = method === 'GET' ? { q: prompt, url: imageUrl } : null;
            return await this._processRequest('/gemini/image', method, data, params);
        } catch (error) {
            console.error('Image processing error:', error);
            throw error;
        }
    }

    /**
     * @method gemini_audio
     * @description Processes audio content from a provided URL.
     * @param {string} audioUrl - The URL of the audio to be processed.
     * @param {string} prompt - Optional prompt for audio processing.
     * @param {string} method - The HTTP method to use ('GET' or 'POST').
     * @returns {Promise} - A promise that resolves with the response data.
     * @throws {Error} - Throws an error if the request fails.
     */
    async gemini_audio(audioUrl, prompt = null, method = 'POST') {
        try {
            console.log('Processing audio request...');
            const data = method === 'POST' ? { url: audioUrl, prompt } : null;
            const params = method === 'GET' ? { url: audioUrl, q: prompt } : null;
            return await this._processRequest('/gemini/audio', method, data, params);
        } catch (error) {
            console.error('Audio processing error:', error);
            throw error;
        }
    }

    /**
     * @method gemini_video
     * @description Processes video content from a provided URL.
     * @param {string} videoUrl - The URL of the video to be processed.
     * @param {string} prompt - Optional prompt for video processing.
     * @param {string} method - The HTTP method to use ('GET' or 'POST').
     * @returns {Promise} - A promise that resolves with the response data.
     * @throws {Error} - Throws an error if the request fails.
     */
    async gemini_video(videoUrl, prompt = null, method = 'POST') {
        try {
            console.log('Processing video request...');
            const data = method === 'POST' ? { url: videoUrl, prompt } : null;
            const params = method === 'GET' ? { url: videoUrl, q: prompt } : null;
            return await this._processRequest('/gemini/video', method, data, params);
        } catch (error) {
            console.error('Video processing error:', error);
            throw error;
        }
    }

    /**
     * @method gemini_history
     * @description Processes chat history and generates a response.
     * @param {Array} messages - Array of message objects with role and content.
     * @returns {Promise} - A promise that resolves with the response data.
     * @throws {Error} - Throws an error if the request fails.
     */
    async gemini_history(messages) {
        try {
            console.log('Processing history request...');
            return await this._processRequest('/gemini/history', 'POST', { messages });
        } catch (error) {
            console.error('History processing error:', error);
            throw error;
        }
    }

    /**
     * @method gemini_prompt
     * @description Generates content using a custom system instruction and query.
     * @param {string} systemPrompt - The system instruction to use.
     * @param {string} query - The query to process.
     * @param {string} method - The HTTP method to use ('GET' or 'POST').
     * @returns {Promise} - A promise that resolves with the response data.
     * @throws {Error} - Throws an error if the request fails.
     */
    async gemini_prompt(systemPrompt, query, method = 'POST') {
        try {
            console.log('Processing prompt request...');
            const data = method === 'POST' ? { prompt: systemPrompt, q: query } : null;
            const params = method === 'GET' ? { prompt: systemPrompt, q: query } : null;
            return await this._processRequest('/prompt/gemini', method, data, params);
        } catch (error) {
            console.error('Prompt processing error:', error);
            throw error;
        }
    }

    /**
     * @method _processRequest
     * @description Private method that handles all HTTP requests to the Gemini API.
     * @param {string} endpoint - The API endpoint to call.
     * @param {string} method - The HTTP method to use ('GET' or 'POST').
     * @param {Object} data - The request body for POST requests.
     * @param {Object} params - The query parameters for GET requests.
     * @returns {Promise} - A promise that resolves with the response data.
     * @throws {Error} - Throws an error if the request fails.
     * @private
     */
    async _processRequest(endpoint, method, data = null, params = null) {
        const url = `${this.baseUrl}${endpoint}`;
        const config = {
            headers: this.headers,
            params: method === 'GET' ? params : undefined
        };

        try {
            const response = method === 'POST' 
                ? await axios.post(url, data, config)
                : await axios.get(url, config);
            return response.data;
        } catch (error) {
            console.error(`Request to ${endpoint} failed:`, error);
            throw error;
        }
    }
}

module.exports = new GeminiService();
