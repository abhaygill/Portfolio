
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Github, Linkedin, Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form handling logic would go here
    alert('Your message has been sent!');
  };

  return (
    <section id="contact" className="bg-secondary/50 dark:bg-background">
      <div className="section-container">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-accent mb-8"></div>
          <p className="text-muted-foreground text-center max-w-2xl">
            Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="border-accent/10">
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>
                Feel free to contact me through any of these channels
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-accent/10 p-2 rounded text-accent">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm font-medium">Email</p>
                  <a href="mailto:abhaygill8303@gmail.com" className="text-muted-foreground hover:text-accent">
                    abhaygill8303@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="bg-accent/10 p-2 rounded text-accent">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm font-medium">Phone</p>
                  <a href="tel:+918303006547" className="text-muted-foreground hover:text-accent">
                    +91 8303006547
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="bg-accent/10 p-2 rounded text-accent">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm font-medium">Location</p>
                  <p className="text-muted-foreground">Punjab, India</p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t">
                <p className="text-sm font-medium mb-3">Connect on Social Media</p>
                <div className="flex gap-3">
                  <a
                    href="https://linkedin.com/in/abhay-singh-gill-a10a2021a"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-secondary p-2 rounded hover:bg-accent/10 hover:text-accent transition-colors"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="https://github.com/abhaygill"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-secondary p-2 rounded hover:bg-accent/10 hover:text-accent transition-colors"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-accent/10">
            <CardHeader>
              <CardTitle>Send Me a Message</CardTitle>
              <CardDescription>
                I'll get back to you as soon as possible
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input id="name" placeholder="Your name" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="Your email" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input id="subject" placeholder="Message subject" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea id="message" placeholder="Your message" rows={5} required />
                </div>
                <Button type="submit" className="w-full flex items-center gap-2">
                  <Send size={16} />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
