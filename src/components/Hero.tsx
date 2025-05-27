import { Button } from "@/components/ui/button";
import { Github, Mail, Phone, Linkedin } from "lucide-react";

const Hero = () => {
  const backgroundPattern =
    "data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E";

  return (
    <section className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden py-8 px-4 sm:px-6">
      <div
        className="absolute inset-0 opacity-20"
        style={{ backgroundImage: `url('${backgroundPattern}')` }}
      ></div>

      {/* 3D Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="floating-cube absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg transform-3d"></div>
        <div className="floating-sphere absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-full transform-3d delay-1000"></div>
        <div className="floating-triangle absolute bottom-32 left-20 w-0 h-0 border-l-[15px] border-r-[15px] border-b-[25px] border-l-transparent border-r-transparent border-b-indigo-500/30 transform-3d delay-2000"></div>
        <div className="floating-cube absolute bottom-20 right-10 w-12 h-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg transform-3d delay-500"></div>
      </div>

      <div className="container mx-auto relative z-10 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left animate-fade-in transform-3d-container order-2 lg:order-1 w-full lg:w-1/2">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent transform-3d-text">
              Abhishekh Jadam
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl mb-4 sm:mb-8 text-gray-300 font-light transform hover:scale-105 transition-transform duration-300">
              Software Developer
            </p>
            <p className="text-base sm:text-lg mb-8 sm:mb-12 text-gray-400 max-w-3xl leading-relaxed transform hover:scale-105 transition-all duration-300">
              A highly qualified software developer with 1 year of professional
              experience at NewTech Fusion Pvt Ltd. Proficient in Core Java,
              JavaScript, and the MERN stack, with hands-on experience working on
              live projects.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8 sm:mb-12">
              <Button
                variant="outline"
                size="lg"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-all duration-300 transform hover:scale-110 hover:rotate-1 hover-3d text-sm sm:text-base"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </Button>
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-110 hover:-rotate-1 hover-3d text-sm sm:text-base"
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                View Projects
              </Button>
            </div>

            <div className="flex justify-center lg:justify-start space-x-4 sm:space-x-6">
              <a
                href="tel:+917879710456"
                className="p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 transform hover:scale-110 hover:rotate-12 hover-3d"
              >
                <Phone className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
              <a
                href="mailto:abhishekhjadam787971@gmail.com"
                className="p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 transform hover:scale-110 hover:-rotate-12 hover-3d"
              >
                <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/abhishekh-jadam"
                className="p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 transform hover:scale-110 hover:rotate-12 hover-3d"
              >
                <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
              <a
                href="https://github.com/abhishekh011"
                className="p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 transform hover:scale-110 hover:-rotate-12 hover-3d"
              >
                <Github className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-1 order-1 lg:order-2 w-full lg:w-1/2 max-w-sm sm:max-w-md lg:max-w-lg mx-auto">
            <div className="relative">
              <img
                src="/abhi.jpeg"
                alt="Abhishekh Jadam"
                className="rounded-full w-60 h-60 sm:w-72 sm:h-72 lg:w-80 lg:h-80 mx-auto object-cover shadow-2xl transform hover:scale-105 transition-transform duration-300 border-4 border-purple-500/30"
                style={{
                  boxShadow: "0 0 50px rgba(123, 97, 255, 0.3)",
                }}
              />
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-16 sm:w-24 h-16 sm:h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-50 blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-50 blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
