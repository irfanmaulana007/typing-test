import { useTypingTest } from '../hooks/useTypingTest';
import { WordContainer } from '../components/WordContainer';
import { TypingInput } from '../components/TypingInput';
import { Timer } from '../components/Timer';
import { ResultsDisplay } from '../components/ResultsDisplay';

const Home = () => {
  const {
    time,
    isTimeUp,
    currentWords,
    currentIndex,
    typedWord,
    result,
    finalResult,
    inputRef,
    wordsContainerRef,
    activeWordRef,
    handleInputChange,
    handleKeyDown,
    resetTest,
  } = useTypingTest();

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="container mx-auto px-6 py-20 max-w-6xl">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            🚀 Free Online Typing Speed Test
          </h1>
          <p className="text-gray-600 text-lg">
            Test your typing speed and accuracy with Indonesian words. Improve your WPM (Words Per Minute) and keyboard skills with our free typing test.
          </p>
        </header>

        {/* Main Content */}
        <section className="space-y-6" aria-label="Typing test interface">
          {/* Word Display Container */}
          <article className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
            <WordContainer
              ref={wordsContainerRef}
              words={currentWords}
              currentIndex={currentIndex}
              typedWord={typedWord}
              results={result}
              activeWordRef={activeWordRef}
            />
          </article>

          {/* Input and Timer Section */}
          <section className="flex items-center gap-4 px-4" aria-label="Typing controls">
            <TypingInput
              ref={inputRef}
              value={typedWord}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              disabled={isTimeUp}
              placeholder={isTimeUp ? "Test completed!" : "Start typing to begin..."}
            />
            <Timer time={time} isTimeUp={isTimeUp} />
          </section>

          {/* Instructions */}
          {!isTimeUp && (
            <aside className="text-center" aria-label="Typing instructions">
              <p className="text-gray-600 text-sm" id="typing-instructions">
                Press <kbd className="px-2 py-1 bg-gray-200 rounded text-xs">Space</kbd> to submit each word
              </p>
            </aside>
          )}

          {/* Results Display */}
          {finalResult && (
            <section aria-label="Typing test results">
              <ResultsDisplay result={finalResult} />
            </section>
          )}

          {/* Reset Button */}
          {isTimeUp && (
            <div className="text-center">
              <button
                onClick={resetTest}
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                aria-label="Start a new typing test"
              >
                🔄 Try Again
              </button>
            </div>
          )}
        </section>
      </div>
    </main>
  );
};

export default Home;
