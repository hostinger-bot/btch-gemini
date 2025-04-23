/**
 * @class GeminiService
 * @description A class that handles communication with the Gemini API for all services including chat, image, audio, video, and history processing.
 * @remarks
 * - The class includes methods for all Gemini API endpoints
 * - Utilizes the `axios` library for making HTTP requests
 * - Implements comprehensive error handling
 * - Supports both GET and POST methods where applicable
 */

import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import packageJson from '../package.json';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export class GeminiService {
  private baseUrl: string;
  private headers: Record<string, string>;

  constructor() {
    this.baseUrl = packageJson.config.baseUrl;
    this.headers = {
      accept: 'application/json',
      'Content-Type': 'application/json',
      'User-Agent': `btch/${packageJson.version}`,
    };
  }

  async gemini_chat(prompt: string, method: 'GET' | 'POST' = 'POST'): Promise<unknown> {
    try {
      return await this._processRequest('/gemini/chat', method, { prompt }, { q: prompt });
    } catch (error) {
      throw error;
    }
  }

  async gemini_image(prompt: string, imageUrl: string, method: 'GET' | 'POST' = 'POST'): Promise<unknown> {
    try {
      const data = method === 'POST' ? { prompt, imgUrl: imageUrl } : null;
      const params = method === 'GET' ? { q: prompt, url: imageUrl } : null;
      return await this._processRequest('/gemini/image', method, data, params);
    } catch (error) {
      throw error;
    }
  }

  async gemini_imgedit(prompt: string, imageUrl: string, method: 'GET' | 'POST' = 'POST'): Promise<Buffer> {
    try {
      const data = method === 'POST' ? { prompt, imgUrl: imageUrl } : null;
      const params = method === 'GET' ? { q: prompt, url: imageUrl } : null;
      const customHeaders = {
        ...this.headers,
        accept: 'image/*',
      };
      return await this._processRequest('/gemini/imgedit', method, data, params, true, customHeaders);
    } catch (error) {
      throw error;
    }
  }

  async gemini_audio(audioUrl: string, prompt: string | null = null, method: 'GET' | 'POST' = 'POST'): Promise<unknown> {
    try {
      const data = method === 'POST' ? { url: audioUrl, prompt } : null;
      const params = method === 'GET' ? { url: audioUrl, q: prompt } : null;
      return await this._processRequest('/gemini/audio', method, data, params);
    } catch (error) {
      throw error;
    }
  }

  async gemini_video(videoUrl: string, prompt: string | null = null, method: 'GET' | 'POST' = 'POST'): Promise<unknown> {
    try {
      const data = method === 'POST' ? { url: videoUrl, prompt } : null;
      const params = method === 'GET' ? { url: videoUrl, q: prompt } : null;
      return await this._processRequest('/gemini/video', method, data, params);
    } catch (error) {
      throw error;
    }
  }

  async gemini_history(messages: Message[]): Promise<unknown> {
    try {
      return await this._processRequest('/gemini/history', 'POST', { messages });
    } catch (error) {
      throw error;
    }
  }

  async gemini_prompt(systemPrompt: string, query: string, method: 'GET' | 'POST' = 'POST'): Promise<unknown> {
    try {
      const data = method === 'POST' ? { prompt: systemPrompt, q: query } : null;
      const params = method === 'GET' ? { prompt: systemPrompt, q: query } : null;
      return await this._processRequest('/prompt/gemini', method, data, params);
    } catch (error) {
      throw error;
    }
  }

  private async _processRequest(
    endpoint: string,
    method: 'GET' | 'POST',
    data: any = null,
    params: any = null,
    asBuffer: boolean = false,
    customHeaders: Record<string, string> | null = null
  ): Promise<any> {
    const url = `${this.baseUrl}${endpoint}`;
    const config: AxiosRequestConfig = {
      headers: customHeaders || this.headers,
      params: method === 'GET' ? params : undefined,
      responseType: asBuffer ? 'arraybuffer' : 'json',
    };

    try {
      const response: AxiosResponse = method === 'POST'
        ? await axios.post(url, data, config)
        : await axios.get(url, config);

      if (asBuffer && response.data) {
        return Buffer.from(response.data);
      }

      return response.data;
    } catch (error) {
      throw error;
    }
  }
}