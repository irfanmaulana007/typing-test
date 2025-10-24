const About = () => {
  return (
    <main className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <article className="bg-white rounded-lg shadow-lg p-8">
          <header>
            <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
              About Our Free Online Typing Speed Test
            </h1>
          </header>
          
          <div className="prose prose-lg max-w-none">
            <div className="grid md:grid-cols-2 gap-8">
              <section>
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                  What is Our Free Typing Speed Test?
                </h2>
                <p className="text-gray-600 mb-4">
                  Our Typing Test is a modern, free web application designed to help users improve their typing speed and accuracy. 
                  Built with cutting-edge technologies like React and TypeScript, it provides a seamless and engaging typing experience for users of all skill levels.
                </p>
                <p className="text-gray-600 mb-4">
                  Whether you're a beginner looking to learn touch typing, a student preparing for exams, or an experienced professional wanting to improve 
                  your typing speed and accuracy, our free online typing test offers various challenges and exercises to help you achieve your goals.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                  Key Features of Our Free Typing Test
                </h2>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Real-time WPM (Words Per Minute) calculation
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Advanced accuracy tracking and detailed analysis
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Multiple difficulty levels and word sets
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Progress tracking and performance analytics
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Fully responsive design for desktop, tablet, and mobile
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Indonesian language support for localized practice
                  </li>
                </ul>
              </section>
            </div>
            
            <section className="mt-8 pt-8 border-t border-gray-200">
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                Modern Technology Stack
              </h2>
              <p className="text-gray-600 mb-6">
                Our typing test is built with modern web technologies to ensure fast performance, 
                excellent user experience, and accessibility across all devices.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-blue-600">React</div>
                  <div className="text-sm text-gray-600">Frontend Library</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-blue-600">TypeScript</div>
                  <div className="text-sm text-gray-600">Type Safety</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-blue-600">Vite</div>
                  <div className="text-sm text-gray-600">Build Tool</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-blue-600">Tailwind</div>
                  <div className="text-sm text-gray-600">Styling</div>
                </div>
              </div>
            </section>
          </div>
        </article>
      </div>
    </main>
  );
};

export default About;
