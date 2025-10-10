# AI Translator

AI-powered translator using Google Gemini Flash Lite API. Supports 75+ languages with automatic language detection.

## Features

- 🌍 **75+ Languages** - Support for major world languages
- 🤖 **Auto-detection** - Automatically detect source language
- 💾 **Local Storage** - Save your settings and translations
- 🔄 **Language Swap** - Quick language switching
- 📱 **Responsive Design** - Works on desktop and mobile
- ⚡ **Fast Translation** - Powered by Google Gemini Flash Lite

## Live Demo

🚀 **[Visit AI Translator](https://your-username.github.io/ai_translator/)**

## Getting Started

### Prerequisites

- Node.js 20.19+ or 22.12+
- Google Gemini API key from [Google AI Studio](https://aistudio.google.com/app/apikey)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/ai_translator.git
cd ai_translator
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
```

## Deployment

### Automatic Deployment (GitHub Actions)

This project is configured for automatic deployment to GitHub Pages:

1. **Push to main branch** - Automatically triggers deployment
2. **GitHub Actions** - Builds and deploys the app
3. **Live on GitHub Pages** - Available at `https://your-username.github.io/ai_translator/`

### Manual Deployment

```bash
# Deploy to GitHub Pages manually
npm run deploy
```

### Setting up GitHub Pages

1. Go to your repository settings
2. Navigate to **Pages** section
3. Select **GitHub Actions** as source
4. Push to main branch to trigger deployment

## Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx
│   ├── ApiKeyInput.tsx
│   ├── LanguageSelector.tsx
│   ├── TranslationArea.tsx
│   ├── ErrorMessage.tsx
│   └── TranslateButton.tsx
├── hooks/              # Custom React hooks
│   ├── useLocalStorage.ts
│   └── useTranslator.ts
├── services/           # API services
│   └── geminiApi.ts
├── constants/          # App constants
│   └── languages.ts
├── types/             # TypeScript types
│   └── index.ts
└── App.tsx            # Main app component
```

## Supported Languages

Auto-detect + 75 languages including:
- English, Russian, Spanish, French, German
- Chinese, Japanese, Korean, Arabic, Hindi
- And many more...

## Technologies

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Vite** - Build tool
- **Google Generative AI** - Translation API
- **GitHub Actions** - CI/CD
- **GitHub Pages** - Hosting

## Configuration

### Environment Variables

The app uses Google Gemini API key entered directly in the UI and stored in localStorage for convenience.

### Vite Configuration

- **Base URL**: Automatically configured for GitHub Pages
- **Build Output**: `dist/` directory
- **Assets**: Optimized for production

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -am 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Google Gemini API for translation services
- React team for the amazing framework
- Tailwind CSS for utility-first styling