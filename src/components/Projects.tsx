import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Ready Doc",
      description: "Healthcare Management System",
      technologies: [
        "React.js",
        "Redux",
        "Material UI",
        "Ant Design",
        "CloudScap",
        "Vite.js",
      ],
      details: [
        "Incredable is a secure, HIPAA-compliant digital platform that simplifies credentialing by streamlining license management, payer enrollments, and workflow processes for providers and facilities.",
        "It helps reduce administrative burden, save time and cost, improve compliance, and enhance staff retention.",
      ],
    },
    {
      title: "Interview-Byte",
      description:
        "Interactive dashboard for visualising business metrics and KPIs",
      technologies: ["React.js", "Ant Design", "Redux", "Bootstrap", "CSS"],
      details: [
        "Developed an interactive dashboard for visualising business metrics and KPIs",
        "Implemented role-based access control for different types of users and administrators",
      ],
    },
    {
      title: "Medicity - Healthcare Management System",
      description:
        "Complete system for managing patients, bookings, and staff communication",
      technologies: ["React.js", "Redux", "Bootstrap", "Firebase"],
      details: [
        "Created a complete system for managing patients, bookings, and staff communication in clinics",
        "Built with the MERN stack and integrated with SMS and email APIs for appointment notifications",
      ],
    },
    {
      title: "The Great Ayurveda",
      description: "Platform for buying and selling second-hand cars",
      technologies: ["React.js", "Redux", "Node.js", "MongoDB"],
      details: [
        "Built a second-hand car selling platform using the MERN stack",
        "Featured role-based modules for users (listing and booking cars), employees (managing listings), and admins (monitoring sales and user activity)",
        "Implemented secure authentication and responsive UI",
      ],
    },
  ];

  return (
    <section className="py-20 bg-white" id="projects">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800 transform-3d-text">
          Key Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="hover:shadow-2xl transition-all duration-500 transform hover:scale-105 project-card-3d group"
              style={{
                animationDelay: `${index * 300}ms`,
                transform: "perspective(1000px) rotateX(0deg) rotateY(0deg)",
              }}
            >
              <CardHeader>
                <CardTitle className="text-xl text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {project.description}
                </CardDescription>
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
                      <Badge
                        key={idx}
                        variant="secondary"
                        className="text-xs transform hover:scale-110 hover:rotate-1 transition-all duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex space-x-3 pt-4">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex items-center space-x-1 transform hover:scale-110 hover:rotate-1 transition-all duration-300"
                    >
                      <Github className="h-4 w-4" />
                      <span>Code</span>
                    </Button>
                    <Button
                      size="sm"
                      className="flex items-center space-x-1 transform hover:scale-110 hover:-rotate-1 transition-all duration-300"
                    >
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
