
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Core Java", "JavaScript", "HTML", "CSS", "TypeScript"]
    },
    {
      title: "Frontend",
      skills: ["React.js", "Bootstrap", "Redux", "Tailwind CSS", "Material UI", "Ant Design"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js"]
    },
    {
      title: "Databases",
      skills: ["MongoDB", "MySQL"]
    },
    {
      title: "API & Tools",
      skills: ["RESTful APIs", "Webhooks", "Postman", "GitHub"]
    }
  ];

  return (
    <section className="py-20 bg-gray-50" id="skills">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800 transform-3d-text">
          Skills & Technologies
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:-rotate-1 skill-card-3d"
              style={{ 
                animationDelay: `${index * 200}ms`,
                transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)'
              }}
            >
              <CardHeader>
                <CardTitle className="text-lg text-gray-800">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span 
                      key={idx} 
                      className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full font-medium hover:bg-blue-200 transition-all duration-300 transform hover:scale-110 hover:rotate-3 skill-tag-3d"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
