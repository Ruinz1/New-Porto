import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const skills = [
    "Tailwind CSS", "PostgreSQL", "MySQL", "Docker", 
    "PHP", "Laravel", "Git", "Figma",
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            About <span className="portfolio-gradient bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my background, skills, and passion for development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Description */}
          <div className="space-y-6">
            <Card className="card-gradient subtle-shadow border-border/50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-primary">My Story</h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                  I am a dedicated backend developer with over 2 years of experience in developing reliable and scalable systems. 
                  My passion for coding began during vocational high school (SMK), 
                  where I was first introduced to software development. Since then, 
                  I have continued to grow my skills through hands-on projects, freelance work, and academic studies. 
                  I am currently pursuing a degree while actively working as a freelancer.
                  </p>
                  <p>
                  Currently I focus on developing modern web applications using Laravel and PHP. 
                  I focus on creating robust backend architectures, 
                  RESTful APIs, and clean, maintainable code that ensures scalability and performance.
                  </p>
                  <p>
                  Outside of backend development, I spend my time learning about digital marketing and enhancing my frontend skills to grow into a well-rounded full-stack developer. 
                  I'm particularly interested in how user experience and backend systems can work together to deliver impactful digital solutions.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-center lg:text-left">
              Technologies & Tools
            </h3>
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              {skills.map((skill, index) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="text-sm py-2 px-4 transition-smooth hover:bg-primary/10 hover:text-primary hover:scale-105 cursor-default"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  {skill}
                </Badge>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <Card className="text-center p-4 card-gradient border-border/50">
                <CardContent className="p-0">
                  <div className="text-2xl font-bold text-primary">10+</div>
                  <div className="text-sm text-muted-foreground">Projects</div>
                </CardContent>
              </Card>
              <Card className="text-center p-4 card-gradient border-border/50">
                <CardContent className="p-0">
                  <div className="text-2xl font-bold text-primary">1+</div>
                  <div className="text-sm text-muted-foreground">Years Exp</div>
                </CardContent>
              </Card>
              <Card className="text-center p-4 card-gradient border-border/50">
                <CardContent className="p-0">
                  <div className="text-2xl font-bold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground">Dedicated</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;