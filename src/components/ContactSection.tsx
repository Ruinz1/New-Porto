import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Github, Linkedin, Instagram, MessageSquare } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "muamarfarhan07@gmail.com",
      href: "mailto:muamarfarhan07@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "WhatsApp",
      value: "+62 821-9373-4482",
      href: "https://wa.me/6282193734482"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Palu, Indonesia",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      href: "https://github.com/Ruinz1",
      username: "@Ruinz1"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/muamar-farhan-205259222/",
      username: "Muamar Farhan"
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      label: "Instagram",
      href: "https://www.instagram.com/_muamarfarhan_/",
      username: "@_muamarfarhan_"
    },
    
  ];

  return (
    <footer id="contact" className="bg-card py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Get In <span className="portfolio-gradient bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always interested in new opportunities and interesting projects. Let's connect!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <Card
                    key={index}
                    className="card-gradient border-border/50 hover:scale-105 transition-smooth cursor-pointer"
                  >
                    <CardContent className="p-4">
                      <a
                        href={item.href}
                        className="flex items-center gap-4 text-foreground hover:text-primary transition-colors"
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg text-primary">
                          {item.icon}
                        </div>
                        <div>
                          <div className="font-medium">{item.label}</div>
                          <div className="text-muted-foreground">{item.value}</div>
                        </div>
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <Card className="card-gradient border-primary/20 glow-effect">
              <CardContent className="p-6 text-center">
                <h4 className="text-xl font-semibold mb-2">Ready to work together?</h4>
                <p className="text-muted-foreground mb-4">
                  Let's discuss your project and bring your ideas to life!
                </p>
                <Button variant="hero" size="lg" asChild>
                  <a href="mailto:john.doe@example.com">
                    <Mail size={20} />
                    Send Email
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Social Media Links */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Connect With Me</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {socialLinks.map((link, index) => (
                  <Card
                    key={index}
                    className="card-gradient border-border/50 hover:scale-105 transition-smooth group"
                  >
                    <CardContent className="p-4">
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 text-foreground group-hover:text-primary transition-colors"
                      >
                        <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg text-primary group-hover:bg-primary/20 transition-colors">
                          {link.icon}
                        </div>
                        <div>
                          <div className="font-medium">{link.label}</div>
                          <div className="text-muted-foreground text-sm">{link.username}</div>
                        </div>
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Additional Info */}
            <Card className="card-gradient border-border/50">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold mb-3">Let's Build Something Amazing</h4>
                <p className="text-muted-foreground leading-relaxed">
                  I'm passionate about creating innovative solutions and collaborating with 
                  talented teams. Whether you have a project in mind or just want to chat 
                  about technology, I'd love to hear from you.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border mt-16 pt-8 text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Muamar Farhan. All rights reserved. Built with using React & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default ContactSection;