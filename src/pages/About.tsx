const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
            About Typing Test
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                  What is Typing Test?
                </h2>
                <p className="text-gray-600 mb-4">
                  Typing Test is a modern web application designed to help users improve their typing speed and accuracy. 
                  Built with cutting-edge technologies, it provides a seamless and engaging typing experience.
                </p>
                <p className="text-gray-600 mb-4">
                  Whether you're a beginner looking to learn touch typing or an experienced typist wanting to improve 
                  your speed, our application offers various challenges and exercises to help you achieve your goals.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                  Features
                </h2>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Real-time typing speed calculation
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Accuracy tracking and analysis
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Multiple difficulty levels
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Progress tracking over time
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Responsive design for all devices
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                Technology Stack
              </h2>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
