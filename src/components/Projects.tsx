
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "AI Assistance (Pkalla)",
      description: "Voice-Based Virtual Agent using Vapi.ai",
      technologies: ["React.js", "Redux", "Material UI", "Node.js", "Vapi.ai"],
      details: [
        "Automated inbound and outbound calls for businesses such as clinics, service providers, and other organisations",
        "Built using Vapi.ai, Node.js, and webhooks to handle real-time, natural language conversations"
      ]
    },
    {
      title: "Gradient - Analytics Dashboard",
      description: "Interactive dashboard for visualising business metrics and KPIs",
      technologies: ["React.js", "Ant Design", "Redux", "Bootstrap"],
      details: [
        "Developed an interactive dashboard for visualising business metrics and KPIs",
        "Implemented role-based access control for different types of users and administrators"
      ]
    },
    {
      title: "Medicity - Healthcare Management System",
      description: "Complete system for managing patients, bookings, and staff communication",
      technologies: ["React.js", "Redux", "Bootstrap", "Firebase"],
      details: [
        "Created a complete system for managing patients, bookings, and staff communication in clinics",
        "Built with the MERN stack and integrated with SMS and email APIs for appointment notifications"
      ]
    },
    {
      title: "Vehivalue - Second-Hand Car Selling Platform",
      description: "Platform for buying and selling second-hand cars",
      technologies: ["React.js", "Redux", "Node.js", "MongoDB"],
      details: [
        "Built a second-hand car selling platform using the MERN stack",
        "Featured role-based modules for users (listing and booking cars), employees (managing listings), and admins (monitoring sales and user activity)",
        "Implemented secure authentication and responsive UI"
      ]
    }
  ];

  return (
    <section className="py-20 bg-white" id="projects">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
          Key Projects
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-gray-800">{project.title}</CardTitle>
                <CardDescription className="text-gray-600">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <ul className="space-y-2 text-sm text-gray-600">
                    {project.details.map((detail, idx) => (
                      <li key={idx}>• {detail}</li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex space-x-3 pt-4">
                    <Button size="sm" variant="outline" className="flex items-center space-x-1">
                      <Github className="h-4 w-4" />
                      <span>Code</span>
                    </Button>
                    <Button size="sm" className="flex items-center space-x-1">
                      <ExternalLink className="h-4 w-4" />
                      <span>Live Demo</span>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
