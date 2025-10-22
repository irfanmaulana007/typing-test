import type { TypingResult } from '../types/typing';

interface ResultsDisplayProps {
  result: TypingResult;
}

interface StatItemProps {
  label: string;
  value: string | number;
  color?: 'primary' | 'success' | 'warning' | 'danger';
}

const StatItem = ({ label, value, color = 'primary' }: StatItemProps) => {
  const colorClasses = {
    primary: 'bg-blue-100 text-blue-800 border-blue-200',
    success: 'bg-green-100 text-green-800 border-green-200',
    warning: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    danger: 'bg-red-100 text-red-800 border-red-200',
  };

  return (
    <div className={`px-4 py-3 rounded-lg border-2 ${colorClasses[color]} shadow-sm`}>
      <div className="text-sm font-medium opacity-75">{label}</div>
      <div className="text-xl font-bold">{value}</div>
    </div>
  );
};

export const ResultsDisplay = ({ result }: ResultsDisplayProps) => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        🎉 Test Complete!
      </h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatItem 
          label="Accuracy" 
          value={`${result.accuracy.toFixed(1)}%`} 
          color={result.accuracy >= 90 ? 'success' : result.accuracy >= 70 ? 'warning' : 'danger'}
        />
        <StatItem 
          label="WPM" 
          value={result.wpm.toFixed(1)} 
          color={result.wpm >= 60 ? 'success' : result.wpm >= 40 ? 'warning' : 'danger'}
        />
        <StatItem 
          label="Total Words" 
          value={result.totalWords} 
        />
        <StatItem 
          label="Correct Words" 
          value={result.correctWords} 
          color="success"
        />
        <StatItem 
          label="Incorrect Words" 
          value={result.incorrectWords} 
          color="danger"
        />
        <StatItem 
          label="Total Characters" 
          value={result.totalCharacters} 
        />
        <StatItem 
          label="Correct Characters" 
          value={result.correctCharacters} 
          color="success"
        />
        <StatItem 
          label="Incorrect Characters" 
          value={result.incorrectCharacters} 
          color="danger"
        />
      </div>
    </div>
  );
};
