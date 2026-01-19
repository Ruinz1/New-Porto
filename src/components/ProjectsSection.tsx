import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "Sistem Informasi Terpadu Al Qolam",
      description: "Sistem informasi sekolah yang membantu pengelolaan data siswa, guru, dan administrasi sekolah secara efisien.",
      technologies: ["Laravel", "PHP", "MySQL", "Filament"],
      github: "https://github.com/Ruinz1/SITALQ",
      demo: "#",
      image: "/SITALQ.jpg"
    },
    {
      id: 2,
      title: "Sistem Informasi Pariwisata Daerah",
      description: "Sistem informasi pariwisata yang membantu pengelolaan data wisata, pengunjung, dan administrasi pariwisata secara efisien.",
      technologies: ["Laravel", "PHP", "MySQL", "Javascript"],
      github: "https://github.com/Ruinz1/SIPARDA",
      demo: "https://taskmanager-demo.com",
      image: "/Siparda.jpg"
    },
    {
      id: 3,
      title: "KedaiPOS-App",
      description: "Aplikasi Point of Sale (POS) modern untuk manajemen kasir, inventori, dan laporan penjualan secara real-time",
      technologies: ["Laravel", "PHP", "MySQL", "ReactJS", "TailwindCSS", "Vite"],
      github: "https://github.com/Ruinz1/KasirPOS-App",
      demo: "#",
      image: "/KedaiPOS.png"
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "Responsive portfolio website built with modern web technologies",
      technologies: ["React", "Tailwind CSS", "Vite"],
      github: "https://github.com/johndoe/portfolio",
      demo: "https://portfolio-demo.com",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=250&fit=crop"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            My <span className="portfolio-gradient bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore some of my recent work and side projects that showcase my skills and creativity
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className={`group overflow-hidden card-gradient border-border/50 transition-smooth hover:scale-105 cursor-pointer ${hoveredProject === project.id ? "glow-effect" : "subtle-shadow"
                }`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <div className="flex space-x-2">
                    {/* <Button variant="hero" size="sm" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} />
                        Demo
                      </a>
                    </Button> */}
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github size={16} />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <a href="https://github.com/Ruinz1?tab=repositories" target="_blank" rel="noopener noreferrer">
              <Github size={20} />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;