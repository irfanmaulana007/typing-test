import { forwardRef } from 'react';
import { cn } from '../utils/common';

interface TypingInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  disabled: boolean;
  placeholder?: string;
}

export const TypingInput = forwardRef<HTMLInputElement, TypingInputProps>(
  ({ value, onChange, onKeyDown, disabled, placeholder = "Start typing..." }, ref) => {
    return (
      <input
        ref={ref}
        type="text"
        autoFocus
        disabled={disabled}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
        className={cn(
          'w-full h-16 text-2xl border-2 rounded-xl px-4 py-3',
          'focus:outline-none focus:ring-4 focus:ring-blue-200 focus:border-blue-400',
          'transition-all duration-200 ease-in-out',
          'bg-white text-gray-800 placeholder-gray-400',
          'shadow-md hover:shadow-lg',
          disabled && 'opacity-50 cursor-not-allowed bg-gray-100'
        )}
        aria-label="Typing input field"
        aria-describedby="typing-instructions"
      />
    );
  }
);

TypingInput.displayName = 'TypingInput';
