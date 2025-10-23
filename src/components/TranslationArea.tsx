import { useState } from 'react';

interface TranslationAreaProps {
  sourceLang: string;
  targetLang: string;
  sourceText: string;
  translatedText: string;
  isLoading: boolean;
  onSourceTextChange: (value: string) => void;
  onClearTexts: () => void;
  onTranslate: () => void;
}

export function TranslationArea({
  sourceLang,
  targetLang,
  sourceText,
  translatedText,
  isLoading,
  onSourceTextChange,
  onClearTexts,
  onTranslate
}: TranslationAreaProps) {
  const [copySuccess, setCopySuccess] = useState(false);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (sourceText.trim()) {
        onTranslate();
      }
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(translatedText);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error('Failed to copy text:', err);
    }
  };
  return (
    <div className="grid md:grid-cols-2 gap-6 mb-6">
      {/* Source Text */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-800">
            {sourceLang === 'auto' ? 'Auto Detect' : sourceLang}
          </h3>
          <button
            onClick={onClearTexts}
            className="text-gray-500 hover:text-gray-700 text-sm"
          >
            Clear
          </button>
        </div>
        <textarea
          value={sourceText}
          onChange={(e) => onSourceTextChange(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Enter text to translate... (Press Enter to translate, Shift+Enter for new line)"
          className="w-full h-40 p-3 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Translated Text */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-800">
            {targetLang}
          </h3>
          {translatedText && !isLoading && (
            <button
              onClick={handleCopy}
              className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" 
                />
              </svg>
              {copySuccess ? 'Copied!' : 'Copy'}
            </button>
          )}
        </div>
        <div className="w-full h-40 p-3 border border-gray-300 rounded-md bg-gray-50 overflow-y-auto">
          {isLoading ? (
            <div className="flex items-center justify-center h-full">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            </div>
          ) : translatedText ? (
            <p className="text-gray-800 whitespace-pre-wrap">{translatedText}</p>
          ) : (
            <p className="text-gray-500">Translation will appear here...</p>
          )}
        </div>
      </div>
    </div>
  );
}
