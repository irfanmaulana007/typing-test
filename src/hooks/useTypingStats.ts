import { useState } from 'react';
import type { CharacterStats, TypingResult, WordResult } from '../types/typing';
import { TYPING_CONFIG } from '../constants/typing';

export const useTypingStats = () => {
  const [result, setResult] = useState<WordResult[]>([]);
  const [characterStats, setCharacterStats] = useState<CharacterStats>({
    correct: 0,
    incorrect: 0,
    total: 0,
  });

  const addWordResult = (index: number, word: string, isCorrect: boolean) => {
    setResult(prev => [...prev, { index, word, isCorrect }]);
  };

  const updateCharacterStats = (isCorrect: boolean) => {
    setCharacterStats(prev => ({
      total: prev.total + 1,
      correct: prev.correct + (isCorrect ? 1 : 0),
      incorrect: prev.incorrect + (isCorrect ? 0 : 1),
    }));
  };

  const calculateFinalResult = (isTimeUp: boolean): TypingResult | null => {
    if (!isTimeUp) return null;

    const totalWords = result.length;
    const correctWords = result.filter(r => r.isCorrect).length;
    const incorrectWords = totalWords - correctWords;
    
    const { total: totalCharacters, correct: correctCharacters, incorrect: incorrectCharacters } = characterStats;
    
    // Accuracy = ((Correct Characters − Incorrect Characters) / Total Characters) × 100
    const accuracy = totalCharacters > 0 
      ? Math.max(0, ((correctCharacters - incorrectCharacters) / totalCharacters) * 100)
      : 0;
    
    // WPM = (Total Characters / 5) / Duration in Minutes
    const durationInMinutes = TYPING_CONFIG.TEST_DURATION / 60;
    const wpm = durationInMinutes > 0 
      ? (totalCharacters / TYPING_CONFIG.CHARACTERS_PER_WORD) / durationInMinutes 
      : 0;
    
    return {
      accuracy,
      wpm,
      incorrectWords,
      totalWords,
      correctWords,
      correctCharacters,
      incorrectCharacters,
      totalCharacters,
    };
  };

  const resetStats = () => {
    setResult([]);
    setCharacterStats({ correct: 0, incorrect: 0, total: 0 });
  };

  return {
    result,
    characterStats,
    addWordResult,
    updateCharacterStats,
    calculateFinalResult,
    resetStats,
  };
};
