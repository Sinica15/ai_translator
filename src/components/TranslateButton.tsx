interface TranslateButtonProps {
  isLoading: boolean;
  disabled: boolean;
  onTranslate: () => void;
}

export function TranslateButton({ isLoading, disabled, onTranslate }: TranslateButtonProps) {
  return (
    <div className="text-center">
      <button
        onClick={onTranslate}
        disabled={disabled}
        className="px-8 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-colors text-lg"
      >
        {isLoading ? 'Translating...' : 'Translate'}
      </button>
    </div>
  );
}
