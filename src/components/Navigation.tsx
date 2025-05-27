
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 transform ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg translate-y-0' : 'bg-transparent translate-y-0'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className={`text-xl font-bold transition-all duration-300 transform hover:scale-110 ${
            isScrolled ? 'text-gray-800' : 'text-white'
          }`}>
            Mohit Rajput
          </div>
          
          <div className="hidden md:flex space-x-8">
            {['about', 'experience', 'projects', 'skills', 'contact'].map((item, index) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 hover:font-semibold ${
                  isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-gray-300 hover:text-blue-400'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item}
              </button>
            ))}
          </div>
          
          <Button 
            variant="outline" 
            onClick={() => scrollToSection('contact')}
            className={`transform hover:scale-110 hover:rotate-1 transition-all duration-300 hover:shadow-lg ${
              isScrolled 
                ? 'border-gray-300 text-gray-700 hover:bg-gray-100 hover:border-blue-500' 
                : 'border-white/20 text-white hover:bg-white/10 hover:border-blue-400'
            }`}
          >
            Contact
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
