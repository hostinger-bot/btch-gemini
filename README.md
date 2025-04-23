
# btch-gemini Unofficial Module

## Description

**btch-gemini** is a lightweight, TypeScript-based Node.js package for interacting with the Gemini API. It provides simple, efficient methods for sending chat prompts, processing images, audio, and video, editing images, managing conversation history, and handling system prompts. Built with robust error handling and dual-module support (CommonJS and ESM), it’s ideal for modern JavaScript and TypeScript projects.

## Prerequisites

- Node.js version 16 or higher
- An active internet connection
- API access to the Gemini service (ensure `https://gemini-api.zone.id` is accessible)

## Installation

Install the package using npm:

```bash
npm install btch-gemini
```

## Features

- 🤖 `gemini_chat`: Send text prompts to the Gemini chat API
- 🖼️ `gemini_image`: Analyze images using text prompts and image URLs
- 🎨 `gemini_imgedit`: Edit images using text prompts and image URLs
- 🎵 `gemini_audio`: Process audio files from URLs
- 🎥 `gemini_video`: Analyze video files from URLs
- 🧠 `gemini_history`: Continue conversations using past interactions
- 📜 `gemini_prompt`: Execute system prompts with queries
- 🔐 Comprehensive input validation
- 🚀 Asynchronous methods with TypeScript support
- ⚙️ Dual-module support (CommonJS and ESM)

## Usage

### Import the Package

#### CommonJS (CJS)

```javascript
const { gemini_chat, gemini_image, gemini_imgedit, gemini_audio, gemini_video, gemini_history, gemini_prompt } = require('btch-gemini');
```

#### ECMAScript Modules (ESM)

```javascript
import { gemini_chat, gemini_image, gemini_imgedit, gemini_audio, gemini_video, gemini_history, gemini_prompt } from 'btch-gemini';
```

#### TypeScript

```typescript
import { gemini_chat, gemini_image, gemini_imgedit, gemini_audio, gemini_video, gemini_history, gemini_prompt } from 'btch-gemini';
```

**Note**: The package provides TypeScript declaration files (`.d.ts`) in the `dist/` directory, ensuring full type safety.

### Sample ESM/CJS Code

#### CommonJS Example

```javascript
const { gemini_chat, gemini_image, gemini_imgedit, gemini_audio, gemini_video, gemini_history, gemini_prompt } = require('btch-gemini');

async function runExamples() {
  // Chat Interaction
  try {
    console.log('Testing gemini_chat...');
    const prompt = 'Hello, how are you?';
    const response = await gemini_chat(prompt);
    console.log('gemini_chat Response:', response);
  } catch (error) {
    console.error('Chat Error:', error.message);
  }

  // Other examples (image, audio, etc.) follow the same pattern
}

runExamples();
```

#### ESM Example

```javascript
import { gemini_chat, gemini_image, gemini_imgedit, gemini_audio, gemini_video, gemini_history, gemini_prompt } from 'btch-gemini';

async function runExamples() {
  // Chat Interaction
  try {
    console.log('Testing gemini_chat...');
    const prompt = 'Hello, how are you?';
    const response = await gemini_chat(prompt);
    console.log('gemini_chat Response:', response);
  } catch (error) {
    console.error('Chat Error:', error.message);
  }

  // Other examples (image, audio, etc.) follow the same pattern
}

runExamples();
```

### Chat Interaction

```javascript
async function chatExample() {
  try {
    const prompt = 'Hello, how are you?';
    const response = await gemini_chat(prompt);
    console.log('Response:', response);
  } catch (error) {
    console.error('Chat Error:', error.message);
  }
}
chatExample();
```

### Image Processing

```javascript
async function imageExample() {
  try {
    const prompt = 'What is this image about?';
    const imageUrl = 'https://files.catbox.moe/a13ppy.jpg';
    const response = await gemini_image(prompt, imageUrl);
    console.log('Response:', response);
  } catch (error) {
    console.error('Image Processing Error:', error.message);
  }
}
imageExample();
```

### Image Editing

```javascript
async function imageEditExample() {
  try {
    const prompt = 'Transform this into a watercolor painting';
    const imageUrl = 'https://files.catbox.moe/a13ppy.jpg';
    const response = await gemini_imgedit(prompt, imageUrl);
    console.log('Response:', `<Buffer ${response.toString('hex', 0, 50)} ... ${response.length - 50} more bytes>`);
  } catch (error) {
    console.error('Image Edit Error:', error.message);
  }
}
imageEditExample();
```

### Audio Processing

```javascript
async function audioExample() {
  try {
    const audioUrl = 'https://files.catbox.moe/pj7g2g.opus';
    const prompt = 'Please transcribe this audio';
    const response = await gemini_audio(audioUrl, prompt);
    console.log('Response:', response);
  } catch (error) {
    console.error('Audio Processing Error:', error.message);
  }
}
audioExample();
```

### Video Processing

```javascript
async function videoExample() {
  try {
    const videoUrl = 'https://files.catbox.moe/4fozd2.mp4';
    const prompt = 'Please describe this video and transcribe the audio';
    const response = await gemini_video(videoUrl, prompt);
    console.log('Response:', response);
  } catch (error) {
    console.error('Video Processing Error:', error.message);
  }
}
videoExample();
```

### History Interaction

```javascript
async function historyExample() {
  try {
    const history = [
      { role: 'user', content: 'Hai! Nama saya Tio' },
      { role: 'assistant', content: 'Halo Tio, Senang bertemu dengan mu.' },
      { role: 'user', content: 'Siapa nama saya yah jelaskan arti nama saya' }
    ];
    const response = await gemini_history(history);
    console.log('Response:', response);
  } catch (error) {
    console.error('History Interaction Error:', error.message);
  }
}
historyExample();
```

### System Prompt and Query

```javascript
async function promptExample() {
  try {
    const systemPrompt = 'This is a system instruction';
    const query = 'What is the meaning of life?';
    const response = await gemini_prompt(systemPrompt, query);
    console.log('Response:', response);
  } catch (error) {
    console.error('Prompt Interaction Error:', error.message);
  }
}
promptExample();
```

## Error Handling

The package includes robust input validation with detailed error messages:

- `gemini_chat`: Ensures prompt is a non-empty string
- `gemini_image`: Validates prompt and image URL
- `gemini_imgedit`: Validates prompt and image URL, returns a Buffer
- `gemini_audio`: Validates audio URL and optional prompt
- `gemini_video`: Validates video URL and optional prompt
- `gemini_history`: Ensures valid message array with correct role and content
- `gemini_prompt`: Validates system prompt and query
- Errors are thrown for invalid inputs or API communication issues

## API Endpoints

The package interacts with the following Gemini API endpoints:

- Chat: `https://gemini-api.zone.id/gemini/chat`
- Image: `https://gemini-api.zone.id/gemini/image`
- Image Edit: `https://gemini-api.zone.id/gemini/imgedit`
- Audio: `https://gemini-api.zone.id/gemini/audio`
- Video: `https://gemini-api.zone.id/gemini/video`
- History: `https://gemini-api.zone.id/gemini/history`
- Prompt: `https://gemini-api.zone.id/gemini/prompt`

## Support

For issues or questions, please [open an issue](https://github.com/hostinger-bot/btch-gemini/issues) on GitHub.

## License

Distributed under the [MIT License](LICENSE). See the `LICENSE` file for more information.
