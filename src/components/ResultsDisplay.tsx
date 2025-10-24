import type { TypingResult } from '../types/typing';

interface ResultsDisplayProps {
  result: TypingResult;
}

interface StatCardProps {
  label: string;
  value: string | number;
  icon: string;
  color: 'blue' | 'green' | 'purple' | 'orange';
  description?: string;
}

const StatCard = ({
  label,
  value,
  icon,
  color,
  description,
}: StatCardProps) => {
  const colorClasses = {
    blue: 'bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 text-blue-800',
    green:
      'bg-gradient-to-br from-green-50 to-green-100 border-green-200 text-green-800',
    purple:
      'bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200 text-purple-800',
    orange:
      'bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200 text-orange-800',
  };

  return (
    <div
      className={`relative overflow-hidden rounded-xl border-2 ${colorClasses[color]} shadow-lg hover:shadow-xl transition-all duration-300`}
    >
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <div className="text-2xl">{icon}</div>
          <div className="text-xl font-bold">{value}</div>
        </div>
        <div className="space-y-1">
          <h3 className="text-sm font-semibold">{label}</h3>
          {description && <p className="text-xs opacity-75">{description}</p>}
        </div>
      </div>
      <div className="absolute top-0 right-0 w-12 h-12 bg-white/20 rounded-full -translate-y-6 translate-x-6"></div>
      <div className="absolute bottom-0 left-0 w-8 h-8 bg-white/10 rounded-full translate-y-4 -translate-x-4"></div>
    </div>
  );
};

export const ResultsDisplay = ({ result }: ResultsDisplayProps) => {
  const getWPMColor = (wpm: number) => {
    if (wpm >= 80) return 'green';
    if (wpm >= 60) return 'blue';
    if (wpm >= 40) return 'orange';
    return 'orange';
  };

  const getAccuracyColor = (accuracy: number) => {
    if (accuracy >= 95) return 'green';
    if (accuracy >= 85) return 'blue';
    if (accuracy >= 70) return 'orange';
    return 'orange';
  };

  const getWPMDescription = (wpm: number) => {
    if (wpm >= 80) return 'Excellent speed! 🚀';
    if (wpm >= 60) return 'Great job! 💪';
    if (wpm >= 40) return 'Good progress! 📈';
    return 'Keep practicing! 💪';
  };

  const getAccuracyDescription = (accuracy: number) => {
    if (accuracy >= 95) return 'Outstanding precision! 🎯';
    if (accuracy >= 85) return 'Very accurate! ✨';
    if (accuracy >= 70) return 'Good accuracy! 👍';
    return 'Focus on accuracy! 🎯';
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 shadow-xl p-4 max-w-2xl mx-auto">
      <div className="text-center mb-4">
        <div className="text-3xl mb-2">🎉</div>
        <h2 className="text-xl font-bold text-gray-800 mb-1">Test Complete!</h2>
        <p className="text-gray-600 text-sm">Here are your typing results</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <StatCard
          label="Words Per Minute"
          value={result.wpm.toFixed(1)}
          icon="⚡"
          color={getWPMColor(result.wpm)}
          description={getWPMDescription(result.wpm)}
        />
        <StatCard
          label="Accuracy"
          value={`${result.accuracy.toFixed(1)}%`}
          icon="🎯"
          color={getAccuracyColor(result.accuracy)}
          description={getAccuracyDescription(result.accuracy)}
        />
      </div>

      <div className="mt-4 text-center">
        <div className="inline-flex items-center space-x-2 text-gray-600">
          <span className="text-xs">
            Great job! Keep practicing to improve your typing skills.
          </span>
        </div>
      </div>
    </div>
  );
};
