
const Experience = () => {
  return (
    <section className="py-20 bg-gray-50" id="experience">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
          Experience
        </h2>
        
        <div className="max-w-4xl mx-auto">
          {/* Current Role */}
          <div className="relative border-l-4 border-blue-500 pl-8 pb-12">
            <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2 top-0"></div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Associate Software Developer</h3>
              <p className="text-blue-600 font-semibold mb-2">NewTech Fusion Pvt Ltd.</p>
              <p className="text-gray-500 mb-4">2024 - Present</p>
              
              <ul className="space-y-2 text-gray-600">
                <li>• Developed and maintained full-stack web applications using the MERN stack (MongoDB, Express.js, React.js, and Node.js)</li>
                <li>• Delivered scalable and responsive software solutions for live client projects across multiple industries</li>
                <li>• Built and integrated RESTful APIs to ensure seamless communication between front-end, and back-end services</li>
                <li>• Designed and implemented responsive user interfaces using HTML, CSS, JavaScript, and Bootstrap</li>
              </ul>
            </div>
          </div>
          
          {/* Training Program */}
          <div className="relative border-l-4 border-purple-500 pl-8">
            <div className="absolute w-4 h-4 bg-purple-500 rounded-full -left-2 top-0"></div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Trainee - Information Technology Excellence Program</h3>
              <p className="text-purple-600 font-semibold mb-2">MPIF Associate (InfoBeans Foundation)</p>
              <p className="text-gray-500 mb-4">2023 - 2024</p>
              
              <ul className="space-y-2 text-gray-600">
                <li>• Completed a 1-year intensive training program under the Infobeans Foundation, designed to prepare candidates for industry-level software development roles</li>
                <li>• Gained practical, hands-on experience in Java, JavaScript, HTML, CSS, Bootstrap, MySQL, MongoDB, and React.js</li>
                <li>• Built collaborative projects simulating real-world product development environments</li>
                <li>• Strengthened fundamentals in full-stack development, problem-solving, and teamwork</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
