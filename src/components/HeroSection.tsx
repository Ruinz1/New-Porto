import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background"></div>
      
      {/* Floating elements for visual interest */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Profile Image Placeholder */}
        <div className="mb-8">
          <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full bg-gradient-to-br from-primary to-primary-glow p-1 animate-glow">
            <div className="w-full h-full rounded-full bg-muted flex items-center justify-center text-4xl md:text-5xl font-bold text-primary">
              <img src="../public/me.jpeg" alt="profile" className="w-full h-full rounded-full" />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-6 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
            Hi, I'm{" "}
            <span className="portfolio-gradient bg-clip-text text-transparent">
              Muamar Farhan
            </span>
          </h1>
          
          <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-medium">
            Backend Developer
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          I'm a backend developer with a passion for building scalable and efficient systems. Currently,
          I'm pursuing my studies at university while also working as a freelancer.
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-4 pt-4">
            <Button variant="contact" size="icon" asChild>
              <a href="https://github.com/Ruinz1" target="_blank" rel="noopener noreferrer">
                <Github size={20} />
              </a>
            </Button>
            <Button variant="contact" size="icon" asChild>
              <a href="https://www.linkedin.com/in/muamar-farhan-205259222/" target="_blank" rel="noopener noreferrer">
                <Linkedin size={20} />
              </a>
            </Button>
            <Button variant="contact" size="icon" asChild>
              <a href="mailto:muamarfarhan07@gmail.com">
                <Mail size={20} />
              </a>
            </Button>
          </div>

          {/* CTA Buttons */}
          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button 
              variant="hero" 
              size="xl"
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="xl"
            >
              Get In Touch
            </Button>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;