export interface TranslatorState {
  sourceText: string;
  translatedText: string;
  sourceLang: string;
  targetLang: string;
  apiKey: string;
  isLoading: boolean;
  error: string;
}

export interface StorageKeys {
  API_KEY: string;
  SOURCE_LANG: string;
  TARGET_LANG: string;
  SOURCE_TEXT: string;
  TRANSLATED_TEXT: string;
}

export type Language = string;
