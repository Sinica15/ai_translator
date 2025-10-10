import { useState } from 'react';
import { GeminiApiService } from '../services/geminiApi';
import { useLocalStorage } from './useLocalStorage';
import { STORAGE_KEYS } from '../constants/languages';

export function useTranslator() {
  const [apiKey, setApiKey] = useLocalStorage(STORAGE_KEYS.API_KEY, '');
  const [sourceLang, setSourceLang] = useLocalStorage(STORAGE_KEYS.SOURCE_LANG, 'auto');
  const [targetLang, setTargetLang] = useLocalStorage(STORAGE_KEYS.TARGET_LANG, 'English');
  const [sourceText, setSourceText] = useLocalStorage(STORAGE_KEYS.SOURCE_TEXT, '');
  const [translatedText, setTranslatedText] = useLocalStorage(STORAGE_KEYS.TRANSLATED_TEXT, '');
  
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const translateText = async () => {
    if (!sourceText.trim()) {
      setError('Please enter text to translate');
      return;
    }

    if (!apiKey.trim()) {
      setError('Please enter your Gemini API key');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const geminiService = new GeminiApiService(apiKey);
      
      let detectedSourceLang = sourceLang;
      
      // Если выбрано автоопределение языка, сначала определяем язык
      if (sourceLang === 'auto') {
        detectedSourceLang = await geminiService.detectLanguage(sourceText);
      }

      const translation = await geminiService.translateText(
        sourceText,
        detectedSourceLang,
        targetLang
      );

      setTranslatedText(translation);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const swapLanguages = () => {
    if (sourceLang !== 'auto') {
      const newSourceLang = targetLang;
      const newTargetLang = sourceLang;
      const newSourceText = translatedText;
      const newTranslatedText = sourceText;

      setSourceLang(newSourceLang);
      setTargetLang(newTargetLang);
      setSourceText(newSourceText);
      setTranslatedText(newTranslatedText);
    }
  };

  const clearTexts = () => {
    setSourceText('');
    setTranslatedText('');
    setError('');
  };

  const clearAllData = () => {
    setApiKey('');
    setSourceLang('auto');
    setTargetLang('English');
    setSourceText('');
    setTranslatedText('');
    setError('');
  };

  return {
    // State
    apiKey,
    sourceLang,
    targetLang,
    sourceText,
    translatedText,
    isLoading,
    error,
    
    // Actions
    setApiKey,
    setSourceLang,
    setTargetLang,
    setSourceText,
    setTranslatedText,
    setError,
    translateText,
    swapLanguages,
    clearTexts,
    clearAllData,
  };
}
