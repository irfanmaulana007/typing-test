export interface WordResult {
  index: number;
  word: string;
  isCorrect: boolean;
}

export interface CharacterStats {
  correct: number;
  incorrect: number;
  total: number;
}

export interface TypingResult {
  accuracy: number;
  wpm: number;
  incorrectWords: number;
  totalWords: number;
  correctWords: number;
  correctCharacters: number;
  incorrectCharacters: number;
  totalCharacters: number;
}

export interface WordItem {
  word: string;
  index: number;
}

export interface TypingTestConfig {
  duration: number;
  words: string[];
}
