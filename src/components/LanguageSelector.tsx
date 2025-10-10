import { LANGUAGES } from '../constants/languages';

interface LanguageSelectorProps {
  sourceLang: string;
  targetLang: string;
  onSourceLangChange: (value: string) => void;
  onTargetLangChange: (value: string) => void;
  onSwapLanguages: () => void;
}

export function LanguageSelector({
  sourceLang,
  targetLang,
  onSourceLangChange,
  onTargetLangChange,
  onSwapLanguages
}: LanguageSelectorProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
      <div className="flex items-center justify-center gap-4 mb-4">
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            From
          </label>
          <select
            value={sourceLang}
            onChange={(e) => onSourceLangChange(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            {LANGUAGES.map((lang) => (
              <option key={lang} value={lang}>
                {lang === 'auto' ? 'Auto Detect' : lang}
              </option>
            ))}
          </select>
        </div>
        
        <button
          onClick={onSwapLanguages}
          disabled={sourceLang === 'auto'}
          className="mt-6 p-2 bg-gray-100 hover:bg-gray-200 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-lg transition-colors"
        >
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
          </svg>
        </button>

        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            To
          </label>
          <select
            value={targetLang}
            onChange={(e) => onTargetLangChange(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            {LANGUAGES.filter(lang => lang !== 'auto').map((lang) => (
              <option key={lang} value={lang}>
                {lang}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
