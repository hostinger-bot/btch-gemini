/**
 * @class GeminiService
 * @description A class that handles communication with the Gemini API for all services including chat, image, audio, video, and history processing.
 * @remarks
 * - The class includes methods for all Gemini API endpoints
 * - Utilizes the `axios` library for making HTTP requests
 * - Implements comprehensive error handling
 * - Supports both GET and POST methods where applicable
 */
interface Message {
    role: 'user' | 'assistant';
    content: string;
}
export declare class GeminiService {
    private baseUrl;
    private headers;
    constructor();
    gemini_chat(prompt: string, method?: 'GET' | 'POST'): Promise<unknown>;
    gemini_image(prompt: string, imageUrl: string, method?: 'GET' | 'POST'): Promise<unknown>;
    gemini_imgedit(prompt: string, imageUrl: string, method?: 'GET' | 'POST'): Promise<Buffer>;
    gemini_audio(audioUrl: string, prompt?: string | null, method?: 'GET' | 'POST'): Promise<unknown>;
    gemini_video(videoUrl: string, prompt?: string | null, method?: 'GET' | 'POST'): Promise<unknown>;
    gemini_history(messages: Message[]): Promise<unknown>;
    gemini_prompt(systemPrompt: string, query: string, method?: 'GET' | 'POST'): Promise<unknown>;
    private _processRequest;
}
export {};
