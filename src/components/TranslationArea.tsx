interface TranslationAreaProps {
  sourceLang: string;
  targetLang: string;
  sourceText: string;
  translatedText: string;
  isLoading: boolean;
  onSourceTextChange: (value: string) => void;
  onClearTexts: () => void;
}

export function TranslationArea({
  sourceLang,
  targetLang,
  sourceText,
  translatedText,
  isLoading,
  onSourceTextChange,
  onClearTexts
}: TranslationAreaProps) {
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
          placeholder="Enter text to translate..."
          className="w-full h-40 p-3 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Translated Text */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          {targetLang}
        </h3>
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
