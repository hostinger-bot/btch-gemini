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

    // Test gemini_audio
    try {
        console.log('Testing gemini_audio...');
        const audioUrl = "https://files.catbox.moe/pj7g2g.opus"; // URL AUDIO
        let prompt = "Please transcribe this audio"
        const audio_response = await Gemini.gemini_audio(audioUrl, prompt);
        console.log('gemini_audio Response:', audio_response);
    } catch (error) {
        console.error('gemini_audio Error:', error.message);
    }

    // Test gemini_video
    try {
        console.log('Testing gemini_video...');
        const videoUrl = "https://files.catbox.moe/4fozd2.mp4"; // URL VIDEO
        let prompt = "Please describe this video and transcribe the audio"
        const video_response = await Gemini.gemini_video(videoUrl, prompt);
        console.log('gemini_video Response:', video_response);
    } catch (error) {
        console.error('gemini_video Error:', error.message);
    }

    // Test gemini_history
    try {
        console.log('Testing gemini_history...');
        const messages = [
            { role: "user", content: "Hai! Nama saya Tio" },
            { role: "assistant", content: "Halo Tio, Senang bertemu dengan mu." },
            { role: "user", content: "Siapa nama saya yah jelaskan arti nama saya" },
        ];
        const history_response = await Gemini.gemini_history(messages);
        console.log('gemini_history Response:', history_response);
    } catch (error) {
        console.error('gemini_history Error:', error.message);
    }

    // Test gemini_prompt
    try {
        console.log('Testing gemini_prompt...');
        const systemPrompt = "This is a system instruction";
        const query = "What is the meaning of life?";
        const prompt_response = await Gemini.gemini_prompt(systemPrompt, query);
        console.log('gemini_prompt Response:', prompt_response);
    } catch (error) {
        console.error('gemini_prompt Error:', error.message);
    }
})();
