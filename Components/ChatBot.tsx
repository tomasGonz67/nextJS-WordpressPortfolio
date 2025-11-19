import { useState } from 'react';
import { knowledge } from '../data/knowledge';
import Stats from './Stats';

type Message = {
  id: number;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
};

type StatEntry = {
  id: number;
  format: string;
  promptTokens: number;
  completionTokens: number;
  totalTokens: number;
  timestamp: Date;
};

type EfficientStatEntry = {
  id: number;
  jsonTokens: number;
  toonTokens: number;
  formatUsed: string;
  promptTokens: number;
  completionTokens: number;
  totalTokens: number;
  timestamp: Date;
};

export default function ChatBot() {
  const [isExpanded, setIsExpanded] = useState(true);
  const [selectedFormat, setSelectedFormat] = useState<'toon' | 'json' | 'efficient'>('toon');
  const [showStats, setShowStats] = useState(false);
  const [statsMode, setStatsMode] = useState<'normal' | 'efficient'>('normal');
  const [statsHistory, setStatsHistory] = useState<StatEntry[]>([]);
  const [efficientStatsHistory, setEfficientStatsHistory] = useState<EfficientStatEntry[]>([]);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm Mini Masi! I am an AI powered assistant based off Tomas Gonzalez! Ask me anything about me or my work :).",
      sender: 'ai',
      timestamp: new Date(),
    }
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;
    const userMessage: Message = {
      id: Date.now(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    const currentInput = inputValue;
    setInputValue('');

    // Create a placeholder for AI response
    const aiMessageId = Date.now() + 1;
    const aiMessage: Message = {
      id: aiMessageId,
      text: '',
      sender: 'ai',
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, aiMessage]);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: currentInput,
          knowledgeContext: knowledge,
          selectedFormat: selectedFormat,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();

      if (!reader) {
        throw new Error('No reader available');
      }

      let accumulatedText = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value);
        const lines = chunk.split('\n');

        for (const line of lines) {
          if (line.startsWith('data: ')) {
            const data = line.slice(6);
            if (data === '[DONE]') {
              break;
            }
            try {
              const parsed = JSON.parse(data);
              if (parsed.content) {
                accumulatedText += parsed.content;
                
                // Check for redirect command
                if (accumulatedText.includes('[REDIRECT:CONTACT]')) {
                  const cleanText = accumulatedText.replace('[REDIRECT:CONTACT]', '').trim();
                  setMessages(prev =>
                    prev.map(msg =>
                      msg.id === aiMessageId
                        ? { ...msg, text: cleanText }
                        : msg
                    )
                  );
                  // Redirect after showing the message
                  setTimeout(() => {
                    window.location.href = '/contact';
                  }, 2000);
                } else {
                  setMessages(prev =>
                    prev.map(msg =>
                      msg.id === aiMessageId
                        ? { ...msg, text: accumulatedText }
                        : msg
                    )
                  );
                }
              }
              if (parsed.stats) {
                if (parsed.stats.isEfficient) {
                  // Add to efficient stats history
                  const newEfficientStat: EfficientStatEntry = {
                    id: Date.now(),
                    jsonTokens: parsed.stats.jsonTokens,
                    toonTokens: parsed.stats.toonTokens,
                    formatUsed: parsed.stats.format,
                    promptTokens: parsed.stats.promptTokens,
                    completionTokens: parsed.stats.completionTokens,
                    totalTokens: parsed.stats.totalTokens,
                    timestamp: new Date()
                  };
                  setEfficientStatsHistory(prev => [...prev, newEfficientStat]);
                } else {
                  // Add to normal stats history
                  const newStat: StatEntry = {
                    id: Date.now(),
                    format: parsed.stats.format,
                    promptTokens: parsed.stats.promptTokens,
                    completionTokens: parsed.stats.completionTokens,
                    totalTokens: parsed.stats.totalTokens,
                    timestamp: new Date()
                  };
                  setStatsHistory(prev => [...prev, newStat]);
                }
              }
            } catch (e) {
              // Skip invalid JSON
            }
          }
        }
      }
    } catch (error) {
      console.error('Error getting AI response:', error);
      setMessages(prev =>
        prev.map(msg =>
          msg.id === aiMessageId
            ? { ...msg, text: 'Sorry, I encountered an error. Please try again.' }
            : msg
        )
      );
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const handleQuickAction = async (quickMessage: string) => {
    const userMessage: Message = {
      id: Date.now(),
      text: quickMessage,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);

    // Create a placeholder for AI response
    const aiMessageId = Date.now() + 1;
    const aiMessage: Message = {
      id: aiMessageId,
      text: '',
      sender: 'ai',
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, aiMessage]);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: quickMessage,
          knowledgeContext: knowledge,
          selectedFormat: selectedFormat,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();

      if (!reader) {
        throw new Error('No reader available');
      }

      let accumulatedText = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value);
        const lines = chunk.split('\n');

        for (const line of lines) {
          if (line.startsWith('data: ')) {
            const data = line.slice(6);
            if (data === '[DONE]') {
              break;
            }
            try {
              const parsed = JSON.parse(data);
              if (parsed.content) {
                accumulatedText += parsed.content;
                
                // Check for redirect command
                if (accumulatedText.includes('[REDIRECT:CONTACT]')) {
                  const cleanText = accumulatedText.replace('[REDIRECT:CONTACT]', '').trim();
                  setMessages(prev =>
                    prev.map(msg =>
                      msg.id === aiMessageId
                        ? { ...msg, text: cleanText }
                        : msg
                    )
                  );
                  // Redirect after showing the message
                  setTimeout(() => {
                    window.location.href = '/contact';
                  }, 2000);
                } else {
                  setMessages(prev =>
                    prev.map(msg =>
                      msg.id === aiMessageId
                        ? { ...msg, text: accumulatedText }
                        : msg
                    )
                  );
                }
              }
              if (parsed.stats) {
                if (parsed.stats.isEfficient) {
                  // Add to efficient stats history
                  const newEfficientStat: EfficientStatEntry = {
                    id: Date.now(),
                    jsonTokens: parsed.stats.jsonTokens,
                    toonTokens: parsed.stats.toonTokens,
                    formatUsed: parsed.stats.format,
                    promptTokens: parsed.stats.promptTokens,
                    completionTokens: parsed.stats.completionTokens,
                    totalTokens: parsed.stats.totalTokens,
                    timestamp: new Date()
                  };
                  setEfficientStatsHistory(prev => [...prev, newEfficientStat]);
                } else {
                  // Add to normal stats history
                  const newStat: StatEntry = {
                    id: Date.now(),
                    format: parsed.stats.format,
                    promptTokens: parsed.stats.promptTokens,
                    completionTokens: parsed.stats.completionTokens,
                    totalTokens: parsed.stats.totalTokens,
                    timestamp: new Date()
                  };
                  setStatsHistory(prev => [...prev, newStat]);
                }
              }
            } catch (e) {
              // Skip invalid JSON
            }
          }
        }
      }
    } catch (error) {
      console.error('Error getting AI response:', error);
      setMessages(prev =>
        prev.map(msg =>
          msg.id === aiMessageId
            ? { ...msg, text: 'Sorry, I encountered an error. Please try again.' }
            : msg
        )
      );
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
      <div className="bg-gray-900 px-4 py-3 rounded-t-lg border-b border-gray-700">
        <div className="flex justify-between items-center mb-2">
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
        
        {/* Format Toggle and Stats */}
        <div className="flex gap-2 items-center">
          <span className="text-gray-400 text-xs">Data Format:</span>
          <div className="flex gap-1 bg-gray-800 rounded-lg p-0.5 text-xs">
            <button
              onClick={() => setSelectedFormat('toon')}
              className={`px-2 py-1 rounded transition-colors ${
                selectedFormat === 'toon' 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              TOON
            </button>
            <button
              onClick={() => setSelectedFormat('json')}
              className={`px-2 py-1 rounded transition-colors ${
                selectedFormat === 'json' 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              JSON
            </button>
            <button
              onClick={() => setSelectedFormat('efficient')}
              className={`px-2 py-1 rounded transition-colors ${
                selectedFormat === 'efficient' 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Efficient
            </button>
          </div>
          <button 
            onClick={() => setShowStats(!showStats)}
            className="px-3 py-1 bg-gray-700 hover:bg-gray-600 text-white text-xs rounded transition-colors"
          >
            Stats
          </button>
        </div>
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
        {/* Quick Action Buttons */}
        <div className="flex gap-2 mb-3 flex-wrap">
          <button
            onClick={() => handleQuickAction("Tell me about your experience")}
            className="flex-1 px-3 py-1.5 bg-gray-700 hover:bg-gray-600 text-white text-xs rounded-md transition-colors"
          >
            Ask about my experience
          </button>
          <button
            onClick={() => handleQuickAction("Tell me about this project")}
            className="flex-1 px-3 py-1.5 bg-gray-700 hover:bg-gray-600 text-white text-xs rounded-md transition-colors"
          >
            Ask about this project
          </button>
          <button
            onClick={() => handleQuickAction("Tell me about your personal life")}
            className="flex-1 px-3 py-1.5 bg-gray-700 hover:bg-gray-600 text-white text-xs rounded-md transition-colors"
          >
            Ask about my personal life
          </button>
        </div>
        
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

      {/* Stats Modal */}
      {showStats && (
        <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
          <div className="bg-gray-800 rounded-lg shadow-2xl border border-gray-700 w-[500px] h-[600px] flex flex-col pointer-events-auto">
            <div className="flex justify-between items-center p-6 pb-4 flex-shrink-0">
              <div>
                <h2 className="text-white text-xl font-semibold">Stats</h2>
                <p className="text-gray-400 text-xs mt-1">Groq's llama-3.3-70b-versatile</p>
              </div>
              <button
                onClick={() => setShowStats(false)}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Close stats"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-6 pb-4">
              <Stats 
                statsHistory={statsHistory} 
                efficientStatsHistory={efficientStatsHistory}
                mode={statsMode}
              />
            </div>
            
            {/* Mode Toggle */}
            <div className="px-6 pb-6 pt-2 border-t border-gray-700 flex-shrink-0">
              <div className="flex gap-2 bg-gray-900 rounded-lg p-1">
                <button
                  onClick={() => setStatsMode('normal')}
                  className={`flex-1 px-4 py-2 rounded-md font-semibold transition-colors ${
                    statsMode === 'normal'
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  JSON/TOON
                </button>
                <button
                  onClick={() => setStatsMode('efficient')}
                  className={`flex-1 px-4 py-2 rounded-md font-semibold transition-colors ${
                    statsMode === 'efficient'
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Efficient
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

