import { useState } from 'react';

type Message = {
  id: number;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
};

export default function ChatBot() {
  const [isExpanded, setIsExpanded] = useState(true);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm Mini Masi! I am an AI powered assistant based off Tomas Gonzalez! I am a hugging face model connected to his stuff via stuff. I am connected to all of his skills, and have a personality based off him. Feel free to ask me anything about my skills, work experience, personal experience or anything if you would just like to chat :).",
      sender: 'ai',
      timestamp: new Date(),
    }
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const newMessage: Message = {
      id: Date.now(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages([...messages, newMessage]);
    setInputValue('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  // Minimized bar view
  if (!isExpanded) {
    return (
      <div className="fixed bottom-6 right-6 bg-gray-800 rounded-lg shadow-2xl border border-gray-700 px-4 py-3 flex items-center gap-3 cursor-pointer hover:bg-gray-700 transition-colors" onClick={() => setIsExpanded(true)}>
        <h3 className="text-white font-semibold">Chat</h3>
        <button
          className="text-gray-400 hover:text-white transition-colors"
          aria-label="Expand chat"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
        </button>
      </div>
    );
  }

  // Expanded chat view
  return (
    <div className="fixed bottom-6 right-6 w-80 bg-gray-800 rounded-lg shadow-2xl border border-gray-700">
      {/* Chat Header */}
      <div className="bg-gray-900 px-4 py-3 rounded-t-lg border-b border-gray-700 flex justify-between items-center">
        <h3 className="text-white font-semibold">Chat</h3>
        <button
          onClick={() => setIsExpanded(false)}
          className="text-gray-400 hover:text-white transition-colors"
          aria-label="Minimize chat"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20 12H4"
            />
          </svg>
        </button>
      </div>

      {/* Chat Messages Area */}
      <div className="h-96 p-4 overflow-y-auto bg-gray-800">
        <div className="flex flex-col space-y-3">
          {messages.length === 0 ? (
            <p className="text-gray-500 text-sm text-center mt-8">
              Start a conversation...
            </p>
          ) : (
            messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[75%] px-4 py-2 rounded-lg ${
                    message.sender === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-900'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Chat Input */}
      <div className="p-3 border-t border-gray-700 rounded-b-lg">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Type a message..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-1 px-3 py-2 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:border-blue-500"
          />
          <button
            onClick={handleSendMessage}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

