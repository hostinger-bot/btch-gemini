---
### btch-gemini

### Description

**btch-gemini** is a Node.js package for interacting with the Gemini API. It includes functionalities for sending chat prompts and processing image descriptions in a seamless and efficient way. The package ensures robust error handling and easy integration for developers.

---

### Installation

To install the package, run:

```bash
npm install btch-gemini
```

Make sure you have Node.js version 16x or higher.

---

### Features

- **gemini_chat**: Sends a text prompt to the Gemini chat API and retrieves a response.
- **gemini_image**: Sends a text prompt and an image URL to the Gemini image API and retrieves a descriptive response.

---

### Usage

#### Import the Package

Start by importing the `btch-gemini` module:

```javascript
const Gemini = require('btch-gemini');
```

---

#### Chat with `gemini_chat`

Use the `gemini_chat` method to send a prompt to the Gemini API and get a response.

```javascript
(async () => {
    try {
        const prompt = "Hello, how are you?";
        const response = await Gemini.gemini_chat(prompt);
        console.log(response);
    } catch (error) {
        console.error(error.message);
    }
})();
```

##### **How it Works**
- The `gemini_chat` method validates the input prompt to ensure it's a non-empty string.
- It sends the prompt to the `https://gemini-api-5k0h.onrender.com/gemini/chat` endpoint.
- The API's response is returned as a JSON object.

---

#### Process Images with `gemini_image`

Use the `gemini_image` method to process an image using a prompt and a valid image URL.

```javascript
(async () => {
    try {
        const prompt = "Describe the image.";
        const imageUrl = "https://example.com/sample.jpg";
        const response = await Gemini.gemini_image(prompt, imageUrl);
        console.log(response);
    } catch (error) {
        console.error(error.message);
    }
})();
```

##### **How it Works**
- The `gemini_image` method validates the prompt and image URL to ensure both are valid, non-empty strings.
- It sends the data to the `https://gemini-api-5k0h.onrender.com/gemini/image` endpoint.
- The API's response, containing the image description, is returned as a JSON object.

---

### Error Handling

The package includes robust validation:
1. **`gemini_chat`**:
   - Throws an error if the prompt is missing, not a string, or only contains spaces.
2. **`gemini_image`**:
   - Throws an error if the prompt or image URL is missing, not a string, or only contains spaces.

You can catch these errors using `try...catch` blocks in your code.

---

### Example of Combined Usage

Here’s an example of using both methods together:

```javascript
(async () => {
    try {
        const chatPrompt = "What can you do?";
        const chatResponse = await Gemini.gemini_chat(chatPrompt);
        console.log(chatResponse);

        const imagePrompt = "What is in this picture?";
        const imageUrl = "https://example.com/sample.jpg";
        const imageResponse = await Gemini.gemini_image(imagePrompt, imageUrl);
        console.log(imageResponse);
    } catch (error) {
        console.error(error.message);
    }
})();
```

### Contribution

Feel free to fork the repository and submit pull requests. Feedback and suggestions are welcome!

---

### License

This project is licensed under the MIT License. See the `LICENSE` file for more details.
