import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

type Project = {
  title: string;
  description: string;
  techStack: string[];
  githubLink: string;
  liveLink?: string;
  image?: string;
};

const projects: Project[] = [
  {
    title: 'AI Lead Generator & Management System',
    description: 'Developed an AI-powered lead generation and management system to optimize software sales workflow, with AI-driven analytics for lead scoring and data-driven decision making.',
    techStack: ['MERN Stack', 'OpenAI API', 'FastAPI', 'Data Visualization'],
    githubLink: 'https://github.com/abhaygill/AI-Lead-Generator-and-Management-System',
    image: 'leadgen (1).png',
  },
  {
    title: 'Forest Fire Prediction System',
    description: 'Built a Flask-based web app to predict forest fires using the Algerian Forest Fires dataset with precision 85%. Performed EDA to identify key climatic factors impacting fire outbreaks.',
    techStack: ['Flask', 'Python', 'Machine Learning', 'Heroku', 'Data Analysis'],
    githubLink: 'https://github.com/abhaygill/Wildlife-Fire-Prediction-System',
    image: 'fire.png',
  },
  {
    title: '🏋️‍♂️ BMI Calculator',
    description: 'A simple Body Mass Index (BMI) Calculator built using HTML, CSS, and JavaScript. Calculates BMI based on user input (height and weight) and displays the result along with its category.',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    githubLink: 'https://github.com/abhaygill/BMI-Calculator',
    image: 'bmi.png',
  },
  {
    title: 'Tic-Tac-Toe Game',
    description: 'A Tic-Tac-Toe game built using C++ and DSA concepts. Players can take turns to place their mark on the grid, and the game ends when there is a winner or draw.',
    techStack: ['C++', 'Data Structures'],
    githubLink: 'https://github.com/abhaygill/Tic-Tac-Toe-Game',
    image: 'ticTac.png',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-white dark:bg-card">
      <div className="section-container">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Projects</h2>
          <div className="w-20 h-1 bg-accent mb-8"></div>
          <p className="text-muted-foreground text-center max-w-2xl">
            Explore a collection of my recent projects, demonstrating my expertise in 
            full-stack development, machine learning, and system design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group overflow-hidden border-accent/10 hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              {/* Image always visible, with zoom effect on hover */}
              {project.image && (
                <div className="w-full h-64 relative">
                  <img
                    src={project.image}
                    alt={`${project.title} logo`}
                    className="absolute top-0 left-0 w-full h-full object-cover rounded-t-md group-hover:scale-110 transition-all duration-300 ease-in-out"
                  />
                </div>
              )}
              <Card className="relative z-10 transition-transform transform group-hover:scale-105">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">
                    <div className="flex flex-wrap gap-1 mt-2">
                      {project.techStack.map((tech, idx) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="mr-1 mb-1 opacity-0 group-hover:opacity-100 transition-opacity delay-[100ms] ease-in-out duration-500"
                          style={{ animationDelay: `${idx * 100}ms` }} // Staggered animation for tech stack
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{project.description}</p>
                </CardContent>
                <CardFooter className="flex gap-3">
                  <Button size="sm" variant="outline" asChild>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <Github size={16} />
                      GitHub
                    </a>
                  </Button>
                  {project.liveLink && (
                    <Button size="sm" asChild>
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button asChild variant="outline">
            <a href="https://github.com/abhaygill" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Github size={18} />
              View More on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
