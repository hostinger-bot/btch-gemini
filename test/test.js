const Gemini = require('../index');

(async () => {
    // Test gemini_chat
    try {
        console.log('Testing gemini_chat...');
        const chatPrompt = "Hello, how are you?";
        const res_chat = await Gemini.gemini_chat(chatPrompt);
        console.log('gemini_chat Response:', res_chat);
    } catch (error) {
        console.error('gemini_chat Error:', error.message);
    }

    // Test gemini_image
    try {
        console.log('Testing gemini_image...');
        const img_prompt = "What is this image about?";
        const imageUrl = "https://pomf2.lain.la/f/zo78e4kd.jpg"; // URL IMAGE
        const img_response = await Gemini.gemini_image(img_prompt, imageUrl);
        console.log('gemini_image Response:', img_response);
    } catch (error) {
        console.error('gemini_image Error:', error.message);
    }
})();
