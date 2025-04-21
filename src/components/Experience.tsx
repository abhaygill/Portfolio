
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, Calendar } from 'lucide-react';

type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
};

const experiences: ExperienceItem[] = [
  {
    role: "Summer Training",
    company: "GeeksforGeeks",
    period: "May 2024 - Aug 2024",
    description: "Completed a 16-week comprehensive training on Data Structures and Algorithms. Learned and implemented advanced topics such as Graphs, Dynamic Programming, and Recursion. Solved 250+ practice problems to strengthen problem-solving skills.",
    technologies: ["Data Structures", "Algorithms", "Problem Solving"],
  },
  // Additional experience can be added as needed
];

const Experience = () => {
  return (
    <section id="experience" className="bg-secondary/50 dark:bg-background">
      <div className="section-container">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Experience</h2>
          <div className="w-20 h-1 bg-accent mb-8"></div>
          <p className="text-muted-foreground text-center max-w-2xl">
            My professional journey and hands-on experience in software development and technical roles.
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="overflow-hidden border-accent/10">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">{exp.role}</CardTitle>
                    <CardDescription>{exp.company}</CardDescription>
                  </div>
                  <div className="flex items-center text-muted-foreground text-sm">
                    <Calendar size={14} className="mr-1" />
                    {exp.period}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-1">
                  {exp.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="mr-1 mb-1">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
