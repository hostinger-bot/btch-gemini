/**
 * @module main
 * @description This module validates input data and calls the corresponding methods from the `Api` module for all Gemini services.
 * @remarks
 * - Ensures that input data is valid before calling any API methods
 * - Provides appropriate error messages if input validation fails
 * - Handles validation for chat, image, audio, video, history, and prompt endpoints
 */
interface Message {
    role: 'user' | 'assistant';
    content: string;
}
export declare function gemini_chat(prompt: string): Promise<unknown>;
export declare function gemini_image(prompt: string, imageUrl: string): Promise<unknown>;
export declare function gemini_audio(audioUrl: string, prompt?: string | null): Promise<unknown>;
export declare function gemini_video(videoUrl: string, prompt?: string | null): Promise<unknown>;
export declare function gemini_history(messages: Message[]): Promise<unknown>;
export declare function gemini_prompt(systemPrompt: string, query: string): Promise<unknown>;
export declare function gemini_imgedit(prompt: string, imageUrl: string, method?: 'GET' | 'POST'): Promise<Buffer>;
export {};
