import { useRef, useState, useEffect } from 'react';
import { useTimer } from './useTimer';
import { useTypingStats } from './useTypingStats';
import { useWordManager } from './useWordManager';
import { KEYBOARD_KEYS } from '../constants/typing';
import { 
  trackTypingTestStart, 
  trackTypingTestComplete, 
  trackUserEngagement 
} from '../utils/analytics';

export const useTypingTest = () => {
  const [isRunning, setIsRunning] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const { time, isTimeUp, resetTimer } = useTimer(isRunning);
  const { 
    result, 
    characterStats, 
    addWordResult, 
    updateCharacterStats, 
    calculateFinalResult, 
    resetStats 
  } = useTypingStats();
  
  const {
    currentWords,
    currentIndex,
    typedWord,
    setTypedWord,
    wordsContainerRef,
    activeWordRef,
    handleNextWord,
    resetWordManager,
  } = useWordManager();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setTypedWord(newValue);

    if (!isRunning) {
      setIsRunning(true);
      // Track typing test start
      trackTypingTestStart('standard');
      trackUserEngagement('typing_started');
    }
    
    // Track character-level statistics
    const currentWord = currentWords[currentIndex]?.word || '';
    const previousLength = typedWord.length;
    const newLength = newValue.length;
    
    // Only process if the user is typing (not deleting)
    if (newLength > previousLength) {
      const newChar = newValue[newLength - 1];
      const expectedChar = currentWord[newLength - 1];
      
      updateCharacterStats(newChar === expectedChar);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === KEYBOARD_KEYS.SPACE) {
      e.preventDefault();
      handleCheckWord(typedWord);
    }
  };

  const handleCheckWord = (word: string) => {
    const activeWord = currentWords[currentIndex];
    if (!activeWord) return;

    const isCorrect = word === activeWord.word;
    addWordResult(currentIndex, word, isCorrect);
    handleNextWord();
  };

  const resetTest = () => {
    setIsRunning(false);
    resetTimer();
    resetStats();
    resetWordManager();
    inputRef.current?.focus();
    // Track test reset
    trackUserEngagement('test_reset');
  };

  const finalResult = calculateFinalResult(isTimeUp);

  // Track test completion when time is up
  useEffect(() => {
    if (isTimeUp && finalResult) {
      trackTypingTestComplete({
        wpm: finalResult.wpm,
        accuracy: finalResult.accuracy,
        timeSpent: time,
        wordsTyped: finalResult.totalWords,
        errors: finalResult.incorrectWords,
      });
      trackUserEngagement('test_completed', {
        wpm: finalResult.wpm,
        accuracy: finalResult.accuracy,
      });
    }
  }, [isTimeUp, finalResult, time]);

  return {
    // State
    time,
    isTimeUp,
    isRunning,
    currentWords,
    currentIndex,
    typedWord,
    result,
    characterStats,
    finalResult,
    
    // Refs
    inputRef,
    wordsContainerRef,
    activeWordRef,
    
    // Handlers
    handleInputChange,
    handleKeyDown,
    resetTest,
  };
};
