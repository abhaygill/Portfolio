
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Phone, FileText } from 'lucide-react';

const About = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/abhay-singh-gill-a10a2021a',
      icon: Linkedin,
    },
    {
      name: 'GitHub',
      url: 'https://github.com/abhaygill',
      icon: Github,
    },
    {
      name: 'Email',
      url: 'mailto:abhaygill8303@gmail.com',
      icon: Mail,
    },
    {
      name: 'Phone',
      url: 'tel:+918303006547',
      icon: Phone,
    },
  ];

  const downloadResume = () => {
    // Logic to download resume would go here
    window.location.href = 'Abhay_Specialized_Resume (1).pdf';
    alert('Resume download would start here');
  };

  return (
    <section id="about" className="bg-white dark:bg-card py-20">
      <div className="section-container">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">About Me</h2>
          <div className="w-20 h-1 bg-accent mb-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          <div className="col-span-1 order-2 md:order-1">
            <div className="bg-blue-500/10 dark:bg-blue-500/5 rounded-xl overflow-hidden border border-accent/20">
               {<img
    src="abhaygill3.PNG"
    alt="Profile"
    className="object-cover w-full h-full"
  />}
              {/* <span className="text-lg font-medium">Profile Image</span> */}
            </div>
          </div>

          <div className="col-span-2 order-1 md:order-2">
            <h3 className="text-2xl font-semibold mb-4">Software Engineer</h3>
            <p className="text-muted-foreground mb-6">
              Results-driven Software Engineer with expertise in full-stack development (MERN), machine learning, and scalable system
              design. Proficient in architecting and optimizing high-performance web applications, implementing secure authentication,
              and leveraging AI-driven insights. Passionate about solving complex problems, driving innovation, and building user-centric 
              solutions at scale.
            </p>

            <div className="mb-8">
              <h4 className="text-lg font-medium mb-3">Connect with me</h4>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-secondary hover:bg-accent/10 hover:text-accent transition-colors"
                    aria-label={link.name}
                  >
                    <link.icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button onClick={downloadResume} className="flex items-center gap-2">
                <FileText size={18} />
                Download CV
              </Button>
              <Button variant="outline" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
