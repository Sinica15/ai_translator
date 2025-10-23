import './App.css';
import { useTranslator } from './hooks';
import { 
  Header, 
  ApiKeyInput, 
  LanguageSelector, 
  TranslationArea, 
  ErrorMessage, 
  TranslateButton 
} from './components';

function App() {
  const {
    apiKey,
    sourceLang,
    targetLang,
    sourceText,
    translatedText,
    isLoading,
    error,
    setApiKey,
    setSourceLang,
    setTargetLang,
    setSourceText,
    translateText,
    swapLanguages,
    clearTexts,
    clearAllData,
  } = useTranslator();

  const isTranslateDisabled = isLoading || !sourceText.trim() || !apiKey.trim();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <Header onClearAll={clearAllData} />
        
        <ApiKeyInput 
          apiKey={apiKey} 
          onApiKeyChange={setApiKey} 
        />
        
        <LanguageSelector
          sourceLang={sourceLang}
          targetLang={targetLang}
          onSourceLangChange={setSourceLang}
          onTargetLangChange={setTargetLang}
          onSwapLanguages={swapLanguages}
        />
        
        <TranslationArea
          sourceLang={sourceLang}
          targetLang={targetLang}
          sourceText={sourceText}
          translatedText={translatedText}
          isLoading={isLoading}
          onSourceTextChange={setSourceText}
          onClearTexts={clearTexts}
          onTranslate={translateText}
        />
        
        <ErrorMessage error={error} />
        
        <TranslateButton
          isLoading={isLoading}
          disabled={isTranslateDisabled}
          onTranslate={translateText}
        />
      </div>
    </div>
  );
}

export default App;
