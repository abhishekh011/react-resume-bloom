
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className={`text-xl font-bold transition-colors ${
            isScrolled ? 'text-gray-800' : 'text-white'
          }`}>
            Mohit Rajput
          </div>
          
          <div className="hidden md:flex space-x-8">
            {['about', 'experience', 'projects', 'skills', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize transition-colors hover:text-blue-600 ${
                  isScrolled ? 'text-gray-700' : 'text-gray-300'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
          
          <Button 
            variant="outline" 
            onClick={() => scrollToSection('contact')}
            className={`${
              isScrolled 
                ? 'border-gray-300 text-gray-700 hover:bg-gray-100' 
                : 'border-white/20 text-white hover:bg-white/10'
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
