# Chatbot for Model Insights Using RAG

## Overview

Chat interface built with React and Material-UI, featuring real-time message formatting and API integration.

## Tech Stack

- **Frontend**: React 18, Material-UI
- **Tools**: Vite, Axios
- **Package Manager**: npm

## Project Structure

```
frontend/
├── src/
│   ├── features/
│   │   └── chat/
│   │       ├── components/
│   │       │   ├── ChatWindow.jsx
│   │       │   ├── ChatHeader.jsx
│   │       │   ├── MessageList.jsx
│   │       │   ├── ChatInput.jsx
│   │       │   └── FormattedMessage.jsx
│   │       ├── services/
│   │       │   └── chatService.js
│   │       └── pages/
│   │           └── Chat.jsx
│   ├── theme/
│   │   └── theme.js
│   └── App.jsx
```

## Features

- 💬 Real-time chat interface
- 🎨 Material Design components
- 📝 JSON message formatting
- ⚡️ Loading states and animations
- 🔄 API integration
- 🛠 Error handling

## Getting Started

### Prerequisites

- Node.js (v16+)
- npm (v8+)

### Installation

1. Clone and install frontend dependencies:

```bash
git clone https://github.com/coderTtxi12/frontend.git
cd frontend
npm install
```

### Development

Start the frontend development server:

```bash
npm run dev
```

Visit `http://localhost:5173` in your browser.

## API Reference

### Generate Response

- **Endpoint**: `/generate`
- **Method**: `POST`
- **Body**:

```json
{
  "question": "string"
}
```

### Response Format

```json
{
  "answer": "string",
  "timestamp": "ISO-8601 string"
}
```

## Contributing

1. Create a feature branch:

```bash
git checkout -b feature/your-feature-name
```

2. Commit your changes:

```bash
git commit -m "feat: add some feature"
```

3. Push to the branch:

```bash
git push origin feature/your-feature-name
```

4. Submit a pull request

## Scripts

- **Development**: `npm run dev`
- **Build**: `npm run build`
- **Preview**: `npm run preview`

## Error Handling

The application includes comprehensive error handling:

- API communication errors
- Network connectivity issues
- Loading state management

## Styling

- Custom Material-UI theme
- Responsive design
- Modern chat interface
- Loading animations
- JSON message formatting

## License

MIT
