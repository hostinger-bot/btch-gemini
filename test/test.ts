import {
  gemini_chat,
  gemini_image,
  gemini_audio,
  gemini_video,
  gemini_history,
  gemini_imgedit,
  gemini_prompt,
} from '../index';

// Define the Message interface to match src/main.ts
interface Message {
  role: 'user' | 'assistant';
  content: string;
}

describe('btch-gemini API Tests', () => {
  jest.setTimeout(30000); // Increase timeout for API calls

  test('gemini_chat should return a response for a valid prompt', async () => {
    console.log('Testing gemini_chat...');
    const chatPrompt = 'Hello, how are you?';
    const response = await gemini_chat(chatPrompt);
    console.log('gemini_chat Response:', JSON.stringify(response, null, 2));
    expect(response).toBeDefined();
    expect(typeof response).toBe('object');
    expect(response).toHaveProperty('success', true);
    expect(response).toHaveProperty('content');
  });

  test('gemini_chat should throw an error for an empty prompt', async () => {
    await expect(gemini_chat('')).rejects.toThrow('Prompt cannot be empty');
  });

  test('gemini_imgedit should return a Buffer for valid inputs', async () => {
    console.log('Testing gemini_imgedit...');
    const imgPrompt = 'Transform this into a watercolor painting';
    const imageUrl = 'https://files.catbox.moe/a13ppy.jpg';
    const response = await gemini_imgedit(imgPrompt, imageUrl);
    console.log('gemini_imgedit Response:', `<Buffer ${response.toString('hex', 0, 50)} ... ${response.length - 50} more bytes>`);
    expect(response).toBeInstanceOf(Buffer);
  });

  test('gemini_imgedit should throw an error for an invalid image URL', async () => {
    const imgPrompt = 'Transform this into a watercolor painting';
    await expect(gemini_imgedit(imgPrompt, '')).rejects.toThrow('Image URL cannot be empty');
  });

  test('gemini_image should return a response for a valid inputs', async () => {
    console.log('Testing gemini_image...');
    const imgPrompt = 'What is this image about?';
    const imageUrl = 'https://files.catbox.moe/a13ppy.jpg';
    const response = await gemini_image(imgPrompt, imageUrl);
    console.log('gemini_image Response:', JSON.stringify(response, null, 2));
    expect(response).toBeDefined();
    expect(typeof response).toBe('object');
    expect(response).toHaveProperty('success', true);
    expect(response).toHaveProperty('content');
  });

  test('gemini_image should throw an error for an empty prompt', async () => {
    const imageUrl = 'https://files.catbox.moe/a13ppy.jpg';
    await expect(gemini_image('', imageUrl)).rejects.toThrow('Prompt cannot be empty');
  });

  test('gemini_audio should return a response for valid inputs', async () => {
    console.log('Testing gemini_audio...');
    const audioUrl = 'https://files.catbox.moe/pj7g2g.opus';
    const prompt = 'Please transcribe this audio';
    const response = await gemini_audio(audioUrl, prompt);
    console.log('gemini_audio Response:', JSON.stringify(response, null, 2));
    expect(response).toBeDefined();
    expect(typeof response).toBe('object');
    expect(response).toHaveProperty('success', true);
    expect(response).toHaveProperty('content');
  });

  test('gemini_audio should throw an error for an empty audio URL', async () => {
    await expect(gemini_audio('', 'Please transcribe')).rejects.toThrow('Audio URL cannot be empty');
  });

  test('gemini_video should return a response for valid inputs', async () => {
    console.log('Testing gemini_video...');
    const videoUrl = 'https://files.catbox.moe/4fozd2.mp4';
    const prompt = 'Please describe this video and transcribe the audio';
    const response = await gemini_video(videoUrl, prompt);
    console.log('gemini_video Response:', JSON.stringify(response, null, 2));
    expect(response).toBeDefined();
    expect(typeof response).toBe('object');
    expect(response).toHaveProperty('success', true);
    expect(response).toHaveProperty('content');
  });

  test('gemini_video should throw an error for an empty video URL', async () => {
    await expect(gemini_video('', 'Describe this')).rejects.toThrow('Video URL cannot be empty');
  });

  test('gemini_history should return a response for valid messages', async () => {
    console.log('Testing gemini_history...');
    const messages: Message[] = [
      { role: 'user', content: 'Hai! Nama saya Tio' },
      { role: 'assistant', content: 'Halo Tio, Senang bertemu dengan mu.' },
      { role: 'user', content: 'Siapa nama saya yah jelaskan arti nama saya' },
    ];
    const response = await gemini_history(messages);
    console.log('gemini_history Response:', JSON.stringify(response, null, 2));
    expect(response).toBeDefined();
    expect(typeof response).toBe('object');
    expect(response).toHaveProperty('success', true);
    expect(response).toHaveProperty('content');
  });

  test('gemini_history should throw an error for an empty messages array', async () => {
    await expect(gemini_history([])).rejects.toThrow('Messages array cannot be empty');
  });

  test('gemini_prompt should return a response for valid inputs', async () => {
    console.log('Testing gemini_prompt...');
    const systemPrompt = 'This is a system instruction';
    const query = 'What is the meaning of life?';
    const response = await gemini_prompt(systemPrompt, query);
    console.log('gemini_prompt Response:', JSON.stringify(response, null, 2));
    expect(response).toBeDefined();
    expect(typeof response).toBe('object');
    expect(response).toHaveProperty('success', true);
    expect(response).toHaveProperty('content');
  });

  test('gemini_prompt should throw an error for an empty system prompt', async () => {
    await expect(gemini_prompt('', 'What is life?')).rejects.toThrow('System prompt cannot be empty');
  });
});