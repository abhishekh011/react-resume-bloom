
const Experience = () => {
  return (
    <section className="py-20 bg-gray-50" id="experience">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800 transform-3d-text animate-fade-in">
          Experience
        </h2>
        
        <div className="max-w-4xl mx-auto">
          {/* Current Role */}
          <div className="relative border-l-4 border-blue-500 pl-8 pb-12 animate-slide-in-left">
            <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2 top-0 animate-pulse"></div>
            <div className="bg-white rounded-lg p-6 shadow-lg transform hover:scale-105 hover:shadow-2xl transition-all duration-500 hover:rotate-1 hover-3d">
              <h3 className="text-2xl font-bold text-gray-800 mb-2 transform hover:text-blue-600 transition-colors duration-300">Associate Software Developer</h3>
              <p className="text-blue-600 font-semibold mb-2 transform hover:scale-105 transition-transform duration-300">NewTech Fusion Pvt Ltd.</p>
              <p className="text-gray-500 mb-4 transform hover:text-gray-700 transition-colors duration-300">2024 - Present</p>
              
              <ul className="space-y-2 text-gray-600">
                <li className="transform hover:scale-105 hover:text-gray-800 transition-all duration-300 hover:bg-blue-50 p-2 rounded">• Developed and maintained full-stack web applications using the MERN stack (MongoDB, Express.js, React.js, and Node.js)</li>
                <li className="transform hover:scale-105 hover:text-gray-800 transition-all duration-300 hover:bg-blue-50 p-2 rounded">• Delivered scalable and responsive software solutions for live client projects across multiple industries</li>
                <li className="transform hover:scale-105 hover:text-gray-800 transition-all duration-300 hover:bg-blue-50 p-2 rounded">• Built and integrated RESTful APIs to ensure seamless communication between front-end, and back-end services</li>
                <li className="transform hover:scale-105 hover:text-gray-800 transition-all duration-300 hover:bg-blue-50 p-2 rounded">• Designed and implemented responsive user interfaces using HTML, CSS, JavaScript, and Bootstrap</li>
              </ul>
            </div>
          </div>
          
          {/* Training Program */}
          <div className="relative border-l-4 border-purple-500 pl-8 animate-slide-in-right">
            <div className="absolute w-4 h-4 bg-purple-500 rounded-full -left-2 top-0 animate-pulse"></div>
            <div className="bg-white rounded-lg p-6 shadow-lg transform hover:scale-105 hover:shadow-2xl transition-all duration-500 hover:-rotate-1 hover-3d">
              <h3 className="text-2xl font-bold text-gray-800 mb-2 transform hover:text-purple-600 transition-colors duration-300">Trainee - Information Technology Excellence Program</h3>
              <p className="text-purple-600 font-semibold mb-2 transform hover:scale-105 transition-transform duration-300">MPIF Associate (InfoBeans Foundation)</p>
              <p className="text-gray-500 mb-4 transform hover:text-gray-700 transition-colors duration-300">2023 - 2024</p>
              
              <ul className="space-y-2 text-gray-600">
                <li className="transform hover:scale-105 hover:text-gray-800 transition-all duration-300 hover:bg-purple-50 p-2 rounded">• Completed a 1-year intensive training program under the Infobeans Foundation, designed to prepare candidates for industry-level software development roles</li>
                <li className="transform hover:scale-105 hover:text-gray-800 transition-all duration-300 hover:bg-purple-50 p-2 rounded">• Gained practical, hands-on experience in Java, JavaScript, HTML, CSS, Bootstrap, MySQL, MongoDB, and React.js</li>
                <li className="transform hover:scale-105 hover:text-gray-800 transition-all duration-300 hover:bg-purple-50 p-2 rounded">• Built collaborative projects simulating real-world product development environments</li>
                <li className="transform hover:scale-105 hover:text-gray-800 transition-all duration-300 hover:bg-purple-50 p-2 rounded">• Strengthened fundamentals in full-stack development, problem-solving, and teamwork</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
