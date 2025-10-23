import { GenerativeModel, GoogleGenerativeAI } from '@google/generative-ai';

export class GeminiApiService {
    private genAI: GoogleGenerativeAI;
    private model: GenerativeModel;

    constructor(apiKey: string) {
        this.genAI = new GoogleGenerativeAI(apiKey);
        this.model = this.genAI.getGenerativeModel({ model: 'gemini-flash-lite-latest' });
    }

    /**
     * Переводит текст с помощью Gemini API
     * @param text - Текст для перевода
     * @param sourceLang - Исходный язык
     * @param targetLang - Целевой язык
     * @returns Переведенный текст
     */
    async translateText(
        text: string,
        sourceLang: string,
        targetLang: string
    ): Promise<string> {
        const prompt = `Translate the following text from ${sourceLang} to ${targetLang}. Only return the translation, nothing else:\n\n${text}`;

        try {
            const result = await this.model.generateContent(prompt);
            const response = await result.response;
            const translatedText = response.text();

            if (!translatedText) {
                throw new Error('No translation received from API');
            }

            return translatedText.trim();
        } catch (error) {
            console.error('Error translating text:', error);
            
            // Проверяем специфичные ошибки API
            if (error instanceof Error) {
                if (error.message.includes('API_KEY_INVALID')) {
                    throw new Error('Invalid API key. Please check your Gemini API key.');
                } else if (error.message.includes('QUOTA_EXCEEDED')) {
                    throw new Error('API quota exceeded. Please try again later.');
                } else if (error.message.includes('SAFETY')) {
                    throw new Error('Content was blocked due to safety reasons.');
                }
            }
            
            throw new Error('Failed to translate text. Please check your API key and try again.');
        }
    }

    /**
     * Определяет язык текста
     * @param text - Текст для определения языка
     * @returns Язык текста
     */
    async detectLanguage(text: string): Promise<string> {
        const prompt = `Detect the language of the following text and return only the language name in English (e.g., "English", "Russian", "Spanish", etc.):\n\n${text}`;

        try {
            const result = await this.model.generateContent(prompt);
            const response = await result.response;
            const detectedLanguage = response.text();

            if (!detectedLanguage) {
                throw new Error('Language detection failed');
            }

            return detectedLanguage.trim();
        } catch (error) {
            console.error('Error detecting language:', error);
            
            // Проверяем специфичные ошибки API
            if (error instanceof Error) {
                if (error.message.includes('API_KEY_INVALID')) {
                    throw new Error('Invalid API key. Please check your Gemini API key.');
                } else if (error.message.includes('QUOTA_EXCEEDED')) {
                    throw new Error('API quota exceeded. Please try again later.');
                }
            }
            
            throw new Error('Failed to detect language. Please try again.');
        }
    }
}
