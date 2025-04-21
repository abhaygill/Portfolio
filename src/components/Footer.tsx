
import { Github, Linkedin, Mail, Phone, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-white dark:bg-card py-12 border-t border-accent/10">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold">Abhay Singh Gill</h3>
            <p className="text-muted-foreground mt-1">Software Engineer</p>
          </div>

          <div className="flex gap-4">
            <a
              href="https://linkedin.com/in/abhay-singh-gill-a10a2021a"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="bg-secondary/70 p-2 rounded-full hover:bg-accent/10 hover:text-accent transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/abhaygill"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="bg-secondary/70 p-2 rounded-full hover:bg-accent/10 hover:text-accent transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="mailto:abhaygill8303@gmail.com"
              aria-label="Email"
              className="bg-secondary/70 p-2 rounded-full hover:bg-accent/10 hover:text-accent transition-colors"
            >
              <Mail size={20} />
            </a>
            <a
              href="tel:+918303006547"
              aria-label="Phone"
              className="bg-secondary/70 p-2 rounded-full hover:bg-accent/10 hover:text-accent transition-colors"
            >
              <Phone size={20} />
            </a>
          </div>
        </div>

        <div className="border-t border-accent/5 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            &copy; {currentYear} Abhay Singh Gill. All rights reserved.
          </p>
          <Button variant="ghost" size="icon" onClick={scrollToTop} className="rounded-full">
            <ArrowUp size={20} />
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
