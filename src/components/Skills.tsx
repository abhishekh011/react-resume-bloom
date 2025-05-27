
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
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
          Skills & Technologies
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-lg text-gray-800">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span 
                      key={idx} 
                      className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full font-medium hover:bg-blue-200 transition-colors duration-200"
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
