import { forwardRef } from 'react';
import type { WordItem } from '../types/typing';
import { cn } from '../utils/common';

interface WordDisplayProps {
  word: WordItem;
  isActive: boolean;
  isCorrect?: boolean;
  isTypingIncorrectly: boolean;
  currentIndex: number;
}

export const WordDisplay = forwardRef<HTMLDivElement, WordDisplayProps>(
  ({ word, isActive, isCorrect, isTypingIncorrectly, currentIndex }, ref) => {
    const getWordClassName = () => {
      const baseClasses =
        'text-2xl font-medium px-3 py-2 rounded-lg transition-all duration-200';

      if (isTypingIncorrectly) {
        return cn(baseClasses, 'text-red-600 bg-red-50');
      }

      if (isActive) {
        return cn(baseClasses, 'bg-blue-100 text-blue-900 shadow-md');
      }

      if (isCorrect !== undefined && currentIndex > word.index) {
        return cn(
          baseClasses,
          isCorrect ? 'text-green-600 bg-green-50' : 'text-red-600 bg-red-50'
        );
      }

      return cn(baseClasses, 'text-gray-700 hover:text-gray-900');
    };

    return (
      <div
        ref={ref}
        className={getWordClassName()}
        aria-label={`Word: ${word.word}`}
      >
        {word.word}
      </div>
    );
  }
);

WordDisplay.displayName = 'WordDisplay';
