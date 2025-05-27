
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Linkedin, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-gray-900 text-white" id="contact">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          Get In Touch
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a project in mind or just want to chat about technology, 
                feel free to reach out!
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-blue-600 rounded-lg">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <a href="mailto:mouryamohitsingh@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                    mouryamohitsingh@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-green-600 rounded-lg">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <a href="tel:+916260335083" className="text-gray-300 hover:text-white transition-colors">
                    +91 6260335083
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-blue-700 rounded-lg">
                  <Linkedin className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium">LinkedIn</p>
                  <a href="https://www.linkedin.com/in/mohit-rajput-mr13" className="text-gray-300 hover:text-white transition-colors">
                    linkedin.com/in/mohit-rajput-mr13
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Send a Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Input 
                  placeholder="First Name" 
                  className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                />
                <Input 
                  placeholder="Last Name" 
                  className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                />
              </div>
              <Input 
                placeholder="Email" 
                type="email" 
                className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
              />
              <Input 
                placeholder="Subject" 
                className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
              />
              <Textarea 
                placeholder="Your message..." 
                rows={5}
                className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
              />
              <Button className="w-full bg-blue-600 hover:bg-blue-700 transition-colors">
                Send Message
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
