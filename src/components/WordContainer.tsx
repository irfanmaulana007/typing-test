import { forwardRef } from 'react';
import type { WordItem, WordResult } from '../types/typing';
import { WordDisplay } from './WordDisplay';

interface WordContainerProps {
  words: WordItem[];
  currentIndex: number;
  typedWord: string;
  results: WordResult[];
  activeWordRef: React.RefObject<HTMLDivElement | null>;
}

export const WordContainer = forwardRef<HTMLDivElement, WordContainerProps>(
  ({ words, currentIndex, typedWord, results, activeWordRef }, ref) => {
    return (
      <div
        ref={ref}
        className="flex flex-wrap gap-2 h-40 overflow-hidden p-4 bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl border border-slate-200 shadow-inner"
        role="region"
        aria-label="Typing test words"
      >
        {words.map((word) => {
          const isActive = word.index === currentIndex;
          const isCorrect = results.find(r => r.index === word.index)?.isCorrect ?? undefined;
          const isTypingIncorrectly = Boolean(isActive && typedWord && !word.word.startsWith(typedWord));

          return (
            <WordDisplay
              key={word.index}
              ref={word.index === currentIndex + 1 ? activeWordRef : undefined}
              word={word}
              isActive={isActive}
              isCorrect={isCorrect}
              isTypingIncorrectly={isTypingIncorrectly}
              currentIndex={currentIndex}
            />
          );
        })}
      </div>
    );
  }
);

WordContainer.displayName = 'WordContainer';
