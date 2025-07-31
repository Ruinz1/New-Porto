import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Code, Calendar } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      id: 1,
      type: "bootcamp",
      title: "Full Stack Web Development Bootcamp",
      institution: "TechCamp Academy",
      period: "Jan 2023 - Jun 2023",
      description: "Intensive 6-month program covering modern web development technologies and best practices.",
      skills: ["React", "Node.js", "Express.js", "MongoDB", "JavaScript", "Git"],
      icon: <Code className="w-6 h-6" />
    },
    {
      id: 2,
      type: "education",
      title: "Bachelor of Computer Science",
      institution: "University of Technology",
      period: "Sep 2019 - Dec 2022",
      description: "Comprehensive computer science education with focus on software engineering and data structures.",
      skills: ["Java", "Python", "C++", "Data Structures", "Algorithms", "Database Design"],
      icon: <GraduationCap className="w-6 h-6" />
    },
    {
      id: 3,
      type: "bootcamp",
      title: "UI/UX Design Intensive",
      institution: "Design Institute",
      period: "Jul 2023 - Sep 2023",
      description: "Specialized program focusing on user experience design and modern design principles.",
      skills: ["Figma", "Adobe XD", "User Research", "Prototyping", "Design Systems", "Usability Testing"],
      icon: <Code className="w-6 h-6" />
    },
    {
      id: 4,
      type: "education",
      title: "Frontend Development Certification",
      institution: "CodeCamp Online",
      period: "Oct 2023 - Dec 2023",
      description: "Advanced frontend development course with focus on React ecosystem and modern practices.",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Testing", "Performance Optimization"],
      icon: <GraduationCap className="w-6 h-6" />
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            My <span className="portfolio-gradient bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My educational background and learning experiences that shaped my development skills
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-px h-full w-0.5 bg-border"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div
                key={experience.id}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                style={{
                  animationDelay: `${index * 0.2}s`,
                }}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-3 h-3 bg-primary rounded-full border-4 border-background z-10"></div>

                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"} ml-12 md:ml-0`}>
                  <Card className="card-gradient subtle-shadow border-border/50 hover:scale-105 transition-smooth">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg text-primary">
                          {experience.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-2">
                            <Calendar size={16} className="text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">{experience.period}</span>
                          </div>
                          <h3 className="text-xl font-semibold mb-2 text-foreground">
                            {experience.title}
                          </h3>
                          <p className="text-primary font-medium mb-3">
                            {experience.institution}
                          </p>
                          <p className="text-muted-foreground mb-4 leading-relaxed">
                            {experience.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {experience.skills.map((skill) => (
                              <span
                                key={skill}
                                className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;