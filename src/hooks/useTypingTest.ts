import { useRef, useState } from 'react';
import { useTimer } from './useTimer';
import { useTypingStats } from './useTypingStats';
import { useWordManager } from './useWordManager';
import { KEYBOARD_KEYS } from '../constants/typing';

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
  };

  const finalResult = calculateFinalResult(isTimeUp);

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
