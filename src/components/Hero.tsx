
import { Button } from "@/components/ui/button";
import { Github, Mail, Phone, Linkedin } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            MOHIT RAJPUT
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 font-light">
            Software Developer
          </p>
          <p className="text-lg mb-12 text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A highly qualified software developer with 1 year of professional experience at NewTech Fusion Pvt Ltd. 
            Proficient in Core Java, JavaScript, and the MERN stack, with hands-on experience working on live projects.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button 
              variant="outline" 
              size="lg"
              className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-all duration-300"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </Button>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Projects
            </Button>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a href="tel:+916260335083" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300">
              <Phone className="h-6 w-6" />
            </a>
            <a href="mailto:mouryamohitsingh@gmail.com" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300">
              <Mail className="h-6 w-6" />
            </a>
            <a href="https://www.linkedin.com/in/mohit-rajput-mr13" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="#" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300">
              <Github className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
