interface HeaderProps {
  onClearAll: () => void;
}

export function Header({ onClearAll }: HeaderProps) {
  return (
    <div className="text-center mb-8">
      <div className="flex justify-between items-center mb-4">
        <div></div>
        <div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            AI Translator
          </h1>
          <p className="text-gray-600">
            Powered by Google Gemini Flash Lite
          </p>
        </div>
        <button
          onClick={onClearAll}
          className="px-4 py-2 bg-red-100 hover:bg-red-200 text-red-700 text-sm font-medium rounded-lg transition-colors"
          title="Clear all saved data"
        >
          Reset All
        </button>
      </div>
    </div>
  );
}
