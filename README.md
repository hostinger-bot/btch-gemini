# btch-gemini Unofficial Module

## Description

**btch-gemini** is a lightweight Node.js package for seamlessly interacting with the Gemini API. It provides simple, efficient methods for sending chat prompts, processing image descriptions, and handling various media types like audio and video with robust error handling.

## Prerequisites

- Node.js version 16 or higher
- An active internet connection
- API access to the Gemini service

## Installation

Install the package using npm:

```bash
npm install btch-gemini
```

## Features

- 🤖 `gemini_chat`: Send text prompts to the Gemini chat API
- 🖼️ `gemini_image`: Process image descriptions using text prompts and image URLs
- 🎨 `gemini_imgedit`: Edit image descriptions using text prompts and image URLs
- 🎵 `gemini_audio`: Process audio files from URLs
- 🎥 `gemini_video`: Analyze video files from URLs
- 🧠 `gemini_history`: Retrieve past interactions to continue conversations
- 🔐 Comprehensive input validation
- 🚀 Easy-to-use asynchronous methods

## Usage

### Import the Package

```javascript
const Gemini = require('btch-gemini');
```

### ESM
```javascript
import pkg from 'btch-gemini';
const Gemini = pkg;
```

### Chat Interaction

```javascript
async function chatExample() {
    try {
        const prompt = "Hello, how are you?";
        const response = await Gemini.gemini_chat(prompt);
        console.log(response);
    } catch (error) {
        console.error('Chat Error:', error.message);
    }
}
```

### Image Processing

```javascript
async function imageExample() {
    try {
        const prompt = "What is this image about?";
        const imageUrl = "https://files.catbox.moe/a13ppy.jpg";
        const response = await Gemini.gemini_image(prompt, imageUrl);
        console.log(response);
    } catch (error) {
        console.error('Image Processing Error:', error.message);
    }
}
```
### Image Edit

```javascript
async function imageeditExample() {
    try {
        const prompt = "Transform this into a watercolor painting";
        const imageUrl = "https://files.catbox.moe/a13ppy.jpg";
        const response = await Gemini.gemini_imgedit(prompt, imageUrl);
        console.log(response); // image buffer 
    } catch (error) {
        console.error('Edit Image Error:', error.message);
    }
}
```


### Audio Processing

```javascript
async function audioExample() {
    try {
        const audioUrl = "https://files.catbox.moe/pj7g2g.opus"; // URL AUDIO
        let prompt = "Please transcribe this audio"
        const response = await Gemini.gemini_audio(audioUrl, prompt);
        console.log(response);
    } catch (error) {
        console.error('Audio Processing Error:', error.message);
    }
}
```

### Video Processing

```javascript
async function videoExample() {
    try {
        const videoUrl = "https://files.catbox.moe/4fozd2.mp4";
       let prompt = "Please describe this video and transcribe the audio"
        const response = await Gemini.gemini_video(videoUrl, prompt)
        console.log(response);
    } catch (error) {
        console.error('Video Processing Error:', error.message);
    }
}
```

### History Interaction

```javascript
async function historyExample() {
    try {
        const history = [
            { role: "user", content: "Hai! Nama saya Tio" },
            { role: "assistant", content: "Halo Tio, Senang bertemu dengan mu." },
            { role: "user", content: "Siapa nama saya yah jelaskan arti nama saya" }
        ];
        const response = await Gemini.gemini_history(history);
        console.log(response);
    } catch (error) {
        console.error('History Interaction Error:', error.message);
    }
}
```

### System Prompt and Query

```javascript
async function promptExample() {
    try {
        const systemPrompt = "This is a system instruction";
        const query = "What is the meaning of life?";
        const response = await Gemini.gemini_prompt(systemPrompt, query);
        console.log(response);
    } catch (error) {
        console.error('Prompt Interaction Error:', error.message);
    }
}
```

## Error Handling

The package provides detailed error messages:

- `gemini_chat`: Validates prompt input
- `gemini_image`: Validates both prompt and image URL
- `gemini_audio`: Validates audio URL
- `gemini_video`: Validates video URL
- `gemini_history`: Ensures valid message structure
- `gemini_prompt`: Validates prompt and query
- Errors are thrown for invalid inputs or API communication issues
- `gemini_imgedit`: Validates both prompt and image URL

## API Endpoints

- Chat API: `https://gemini-api.zone.id/gemini/chat`
- Image API: `https://gemini-api.zone.id/gemini/image`
- Audio API: `https://gemini-api.zone.id/gemini/audio`
- Video API: `https://gemini-api.zone.id/gemini/video`
- Edit API: `https://gemini-api.zone.id/gemini/imgedit`
- History API: `https://gemini-api.zone.id/gemini/history`
- Prompt API: `https://gemini-api.zone.id/gemini/prompt`

## Support

If you encounter any issues or have questions, please [open an issue](https://github.com/hostinger-bot/btch-gemini/issues) on GitHub.

## License

Distributed under the MIT License. See `LICENSE` for more information.
