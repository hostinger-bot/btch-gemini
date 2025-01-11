# btch-gemini

## Description

**btch-gemini** is a lightweight Node.js package for seamlessly interacting with the Gemini API. It provides simple, efficient methods for sending chat prompts and processing image descriptions with robust error handling.

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
- 🛡️ Comprehensive input validation
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
        const prompt = "Describe the contents of this image";
        const imageUrl = "https://example.com/sample.jpg";
        const response = await Gemini.gemini_image(prompt, imageUrl);
        console.log(response);
    } catch (error) {
        console.error('Image Processing Error:', error.message);
    }
}
```

### Combined Usage

```javascript
async function combinedExample() {
    try {
        const chatResponse = await Gemini.gemini_chat("What can you do?");
        console.log("Chat Response:", chatResponse);

        const imageResponse = await Gemini.gemini_image(
            "What is in this picture?", 
            "https://example.com/sample.jpg"
        );
        console.log("Image Response:", imageResponse);
    } catch (error) {
        console.error('Combined Example Error:', error.message);
    }
}
```

## Error Handling

The package provides detailed error messages:

- `gemini_chat`: Validates prompt input
- `gemini_image`: Validates both prompt and image URL
- Errors are thrown for invalid inputs or API communication issues

## API Endpoints

- Chat API: `https://gemini-api-5k0h.onrender.com/gemini/chat`
- Image API: `https://gemini-api-5k0h.onrender.com/gemini/image`


## Support

If you encounter any issues or have questions, please [open an issue](https://github.com/hostinger-bot/btch-gemini/issues) on GitHub.

## License

Distributed under the MIT License. See `LICENSE` for more information.
