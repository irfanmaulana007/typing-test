export const TYPING_CONFIG = {
  TEST_DURATION: 60, // in seconds
  CHARACTERS_PER_WORD: 5, // Standard for WPM calculation
  SCROLL_DELAY: 10, // milliseconds
} as const;

export const KEYBOARD_KEYS = {
  SPACE: ' ',
} as const;

export const WORD_STATES = {
  ACTIVE: 'active',
  CORRECT: 'correct',
  INCORRECT: 'incorrect',
  TYPING_INCORRECTLY: 'typing-incorrectly',
} as const;
