
const About = () => {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-800">Summary</h3>
              <p className="text-gray-600 leading-relaxed">
                A highly qualified software developer with 1 year of professional experience at NewTech Fusion Pvt Ltd. 
                Proficient in Core Java, JavaScript, and the MERN stack, with hands-on experience working on live projects 
                such as Gradient, Medicity, and AI Assistance.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Quick learner with strong problem-solving skills, committed to continuous learning and contributing 
                effectively to team success.
              </p>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-800">Education</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h4 className="font-semibold text-gray-800">Bachelor of Commerce (Computer Applications)</h4>
                  <p className="text-gray-600">Barkatullah University | 6.85 CGPA</p>
                  <p className="text-sm text-gray-500">2021 - 2023</p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-6">
                  <h4 className="font-semibold text-gray-800">Higher Secondary Certificate (Commerce Stream)</h4>
                  <p className="text-gray-600">Aacharya Chankya Higher Secondary School, Seoni Malwa (MP Board)</p>
                  <p className="text-sm text-gray-500">2020 - 2021</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
