interface ApiKeyInputProps {
  apiKey: string;
  onApiKeyChange: (value: string) => void;
}

export function ApiKeyInput({ apiKey, onApiKeyChange }: ApiKeyInputProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
      <div className="mb-4">
        <label htmlFor="apiKey" className="block text-sm font-medium text-gray-700 mb-2">
          Gemini API Key
        </label>
        <input
          type="password"
          id="apiKey"
          value={apiKey}
          onChange={(e) => onApiKeyChange(e.target.value)}
          placeholder="Enter your Gemini API key..."
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        <p className="text-xs text-gray-500 mt-1">
          Get your API key from{' '}
          <a
            href="https://aistudio.google.com/app/apikey"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Google AI Studio
          </a>
          {apiKey && (
            <span className="ml-2 text-green-600">
              ✓ Saved locally
            </span>
          )}
        </p>
      </div>
    </div>
  );
}
