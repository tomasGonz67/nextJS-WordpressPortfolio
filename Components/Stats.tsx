type StatEntry = {
  id: number;
  format: string;
  promptTokens: number;
  completionTokens: number;
  totalTokens: number;
  ttft?: number;
  latency?: number;
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
  ttft?: number;
  latency?: number;
  timestamp: Date;
};

type StatsProps = {
  statsHistory: StatEntry[];
  efficientStatsHistory: EfficientStatEntry[];
  mode: 'normal' | 'efficient';
};

export default function Stats({ statsHistory, efficientStatsHistory, mode }: StatsProps) {
  const calculateInputCost = (tokens: number) => {
    return ((tokens / 1_000_000) * 0.59).toFixed(6);
  };

  const calculateOutputCost = (tokens: number) => {
    return ((tokens / 1_000_000) * 0.79).toFixed(6);
  };

  if (mode === 'efficient') {
    return (
      <div className="space-y-4">
        {efficientStatsHistory.length === 0 ? (
          <div className="text-gray-400 text-center py-8">
            No efficient stats yet. Use "Efficient" mode to see token comparisons!
          </div>
        ) : (
          <div className="space-y-3">
            {efficientStatsHistory.map((stat) => {
              const inputCost = calculateInputCost(stat.totalTokens);
              const outputCost = calculateOutputCost(stat.completionTokens);
              const totalCost = (parseFloat(inputCost) + parseFloat(outputCost)).toFixed(6);
              const saved = stat.formatUsed === 'JSON' 
                ? stat.toonTokens - stat.jsonTokens 
                : stat.jsonTokens - stat.toonTokens;
              
              // Calculate money saved
              const jsonInputCost = (stat.jsonTokens / 1_000_000) * 0.59;
              const toonInputCost = (stat.toonTokens / 1_000_000) * 0.59;
              const moneySaved = Math.abs(toonInputCost - jsonInputCost).toFixed(6);
              
              return (
                <div key={stat.id} className="bg-gray-900 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-400 text-xs">
                      {stat.timestamp.toLocaleTimeString()}
                    </span>
                    <span className="text-blue-400 text-xs font-semibold">
                      Used: {stat.formatUsed}
                    </span>
                  </div>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">JSON Tokens:</span>
                      <span className={`font-semibold ${stat.formatUsed === 'JSON' ? 'text-green-400' : 'text-white'}`}>
                        {stat.jsonTokens}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">TOON Tokens:</span>
                      <span className={`font-semibold ${stat.formatUsed === 'TOON' ? 'text-green-400' : 'text-white'}`}>
                        {stat.toonTokens}
                      </span>
                    </div>
                    <div className="flex justify-between items-center pt-1 border-t border-gray-700">
                      <span className="text-yellow-400 font-semibold">Tokens Saved:</span>
                      <span className="text-yellow-400 font-bold">{saved} tokens</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-green-400 font-semibold">Money Saved:</span>
                      <span className="text-green-400 font-bold">${moneySaved}</span>
                    </div>
                    {stat.ttft !== undefined && (
                      <div className="flex justify-between items-center pt-1 border-t border-gray-700">
                        <span className="text-purple-400 font-semibold">TTFT:</span>
                        <span className="text-purple-400 font-bold">{stat.ttft}ms</span>
                      </div>
                    )}
                    {stat.latency !== undefined && (
                      <div className="flex justify-between items-center">
                        <span className="text-purple-400 font-semibold">Latency:</span>
                        <span className="text-purple-400 font-bold">{stat.latency}ms</span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {statsHistory.length === 0 ? (
        <div className="text-gray-400 text-center py-8">
          No stats yet. Send a message to see token usage!
        </div>
      ) : (
        <div className="space-y-3">
          {statsHistory.map((stat) => {
            const inputCost = calculateInputCost(stat.totalTokens);
            const outputCost = calculateOutputCost(stat.completionTokens);
            const totalCost = (parseFloat(inputCost) + parseFloat(outputCost)).toFixed(6);
            
            return (
              <div key={stat.id} className="bg-gray-900 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-400 text-xs">
                    {stat.timestamp.toLocaleTimeString()}
                  </span>
                  <span className="text-blue-400 text-xs font-semibold">
                    {stat.format}
                  </span>
                </div>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Token Prompt:</span>
                    <span className="text-white font-semibold">{stat.promptTokens}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Token Completion:</span>
                    <span className="text-white font-semibold">{stat.completionTokens}</span>
                  </div>
                  <div className="flex justify-between items-center pt-1 border-t border-gray-700">
                    <span className="text-gray-300 font-semibold">Total Tokens:</span>
                    <span className="text-blue-400 font-bold">{stat.totalTokens}</span>
                  </div>
                  <div className="flex justify-between items-center pt-1 border-t border-gray-700">
                    <span className="text-green-400 font-semibold">Input Cost:</span>
                    <span className="text-green-400 font-bold">${inputCost}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-green-400 font-semibold">Total Cost:</span>
                    <span className="text-green-400 font-bold">${totalCost}</span>
                  </div>
                  {stat.ttft !== undefined && (
                    <div className="flex justify-between items-center pt-1 border-t border-gray-700">
                      <span className="text-purple-400 font-semibold">TTFT:</span>
                      <span className="text-purple-400 font-bold">{stat.ttft}ms</span>
                    </div>
                  )}
                  {stat.latency !== undefined && (
                    <div className="flex justify-between items-center">
                      <span className="text-purple-400 font-semibold">Latency:</span>
                      <span className="text-purple-400 font-bold">{stat.latency}ms</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

