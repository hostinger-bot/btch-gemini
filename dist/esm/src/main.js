/**
 * @module main
 * @description This module validates input data and calls the corresponding methods from the `Api` module for all Gemini services.
 * @remarks
 * - Ensures that input data is valid before calling any API methods
 * - Provides appropriate error messages if input validation fails
 * - Handles validation for chat, image, audio, video, history, and prompt endpoints
 */
import { GeminiService } from './Api';
export async function gemini_chat(prompt) {
    if (!prompt) {
        throw new Error('Prompt cannot be empty');
    }
    if (typeof prompt !== 'string') {
        throw new Error('Prompt must be a string');
    }
    if (prompt.trim().length === 0) {
        throw new Error('Prompt cannot contain only spaces');
    }
    return await (new GeminiService()).gemini_chat(prompt);
}
export async function gemini_image(prompt, imageUrl) {
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
    return await (new GeminiService()).gemini_image(prompt, imageUrl);
}
export async function gemini_audio(audioUrl, prompt = null) {
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
    return await (new GeminiService()).gemini_audio(audioUrl, prompt);
}
export async function gemini_video(videoUrl, prompt = null) {
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
    return await (new GeminiService()).gemini_video(videoUrl, prompt);
}
export async function gemini_history(messages) {
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
    return await (new GeminiService()).gemini_history(messages);
}
export async function gemini_prompt(systemPrompt, query) {
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
    return await (new GeminiService()).gemini_prompt(systemPrompt, query);
}
export async function gemini_imgedit(prompt, imageUrl, method = 'POST') {
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
    return await (new GeminiService()).gemini_imgedit(prompt, imageUrl, method);
}
