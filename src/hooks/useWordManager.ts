import { useMemo, useRef, useState } from 'react';
import type { WordItem } from '../types/typing';
import { WORDS } from '../constants/words';
import { TYPING_CONFIG } from '../constants/typing';

export const useWordManager = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [typedWord, setTypedWord] = useState<string>('');
  const wordsContainerRef = useRef<HTMLDivElement>(null);
  const activeWordRef = useRef<HTMLDivElement>(null);

  const shuffleWords = (words: string[]): string[] => {
    return [...words].sort(() => Math.random() - 0.5);
  };

  const currentWords = useMemo((): WordItem[] => {
    const shuffledWords = shuffleWords(WORDS);
    return shuffledWords.map((word, index) => ({
      word,
      index,
    }));
  }, []);

  const handleNextWord = () => {
    setCurrentIndex(prev => prev + 1);
    setTimeout(() => {
      setTypedWord('');
    }, TYPING_CONFIG.SCROLL_DELAY);

    // Auto-scroll to keep active word visible
    setTimeout(() => {
      if (wordsContainerRef.current && activeWordRef.current) {
        const container = wordsContainerRef.current;
        const activeWord = activeWordRef.current;

        // Get container and word positions
        const containerRect = container.getBoundingClientRect();
        const wordRect = activeWord.getBoundingClientRect();

        // Check if word is outside the visible area
        const isWordBelowContainer =
          wordRect.bottom > containerRect.bottom - containerRect.bottom / 4;
        const isWordAboveContainer = wordRect.top < containerRect.top;

        if (isWordBelowContainer || isWordAboveContainer) {
          // Scroll to make the word visible
          const scrollTop =
            activeWord.offsetTop -
            container.offsetTop -
            container.clientHeight / 2 +
            activeWord.clientHeight / 2;
          container.scrollTo({
            top: Math.max(0, scrollTop),
            behavior: 'smooth',
          });
        }
      }
    }, 50); // Small delay to ensure DOM is updated
  };

  const resetWordManager = () => {
    if (wordsContainerRef.current) {
      const container = wordsContainerRef.current;
      container.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
    
    setCurrentIndex(0);
    setTypedWord('');
  };

  return {
    currentWords,
    currentIndex,
    typedWord,
    setTypedWord,
    wordsContainerRef,
    activeWordRef,
    handleNextWord,
    resetWordManager,
  };
};
