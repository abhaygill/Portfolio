
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-background to-secondary/30 dark:from-background dark:to-secondary/10">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col space-y-6 animate-slide-in-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="block">Hello, I'm</span>
              <span className="text-accent block">Abhay Singh Gill</span>
            </h1>
            <p className="text-xl lg:text-2xl font-light text-muted-foreground">
              Software Engineer specializing in full-stack development and machine learning solutions
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild size="lg" className="rounded-full">
                <a href="#contact">Get in Touch</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full">
                <a href="#projects">View My Work</a>
              </Button>
            </div>
          </div>
          <div className="hidden md:block bg-blue-500/10 dark:bg-blue-500/5 rounded-2xl p-8 animate-slide-in-right">
            <div className="aspect-square max-w-md mx-auto rounded-xl overflow-hidden bg-gradient-to-br from-accent/40 to-secondary border border-accent/20">
              {<img
    src="abhaygill3.png"
    alt="Profile"
    className="object-cover w-full h-full"
  />}
              <div className="h-full w-full flex items-center justify-center text-white">
                <span className="text-lg font-medium">Profile Image</span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block animate-pulse">
          <a href="#about" aria-label="Scroll down">
            <ArrowDown className="h-10 w-10 text-muted-foreground hover:text-accent transition-colors" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
