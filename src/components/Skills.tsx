
import { Card, CardContent } from '@/components/ui/card';
import { Code, Layout, Server, Database, Cloud } from 'lucide-react';

type SkillCategory = {
  name: string;
  icon: React.ElementType;
  skills: string[];
};

const skillCategories: SkillCategory[] = [
  {
    name: 'Programming Languages',
    icon: Code,
    skills: ['C++', 'Python', 'Java', 'JavaScript', 'SQL'],
  },
  {
    name: 'Frontend',
    icon: Layout,
    skills: ['React.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'UI/UX Design'],
  },
  {
    name: 'Backend',
    icon: Server,
    skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT Authentication'],
  },
  {
    name: 'Databases',
    icon: Database,
    skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'Firebase'],
  },
  {
    name: 'Cloud & DevOps',
    icon: Cloud,
    skills: ['Heroku', 'Azure', 'Docker', 'CI/CD', 'Git'],
  },
];
const skillLogos: Record<string, string> = {
  'C++': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
  Python: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  Java: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
  JavaScript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  SQL: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  'React.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  HTML5: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  CSS3: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  'Tailwind CSS': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1200px-Tailwind_CSS_Logo.svg.png',
  'UI/UX Design': 'https://img.icons8.com/fluency/48/figma.png',
  'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  'Express.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
  'REST APIs': 'https://dasarpai.com/assets/images/dspost/dsp6121-REST-API.jpg',
  'JWT Authentication': 'https://cdn.worldvectorlogo.com/logos/jwt-3.svg',
  MongoDB: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  MySQL: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  PostgreSQL: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  Firebase: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
  Heroku: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg',
  Azure: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
  Docker: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
  'CI/CD': 'https://www.mabl.com/hubfs/CICDBlog.png',
  Git: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
};

const Skills = () => {
  return (
    <section id="skills" className="bg-secondary/50 dark:bg-background">
      <div className="section-container">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-accent mb-8"></div>
          <p className="text-muted-foreground text-center max-w-2xl">
            A comprehensive overview of my technical skills and experience in software development, 
            data science, and system design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <Card key={category.name} className="overflow-hidden border-accent/10 hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-accent/10 p-2 rounded text-accent">
                    <category.icon size={24} />
                  </div>
                  <h3 className="text-xl font-semibold">{category.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
  {category.skills.map((skill) => (
  <div
    key={skill}
    className="flex items-center gap-2 bg-muted px-3 py-2 rounded-md shadow-sm m-1"
  >
    {skillLogos[skill] && (
      <img
        src={skillLogos[skill]}
        alt={skill}
        className="w-6 h-6 md:w-8 md:h-8"
      />
    )}
    <span className="text-base md:text-lg font-medium">{skill}</span>
  </div>
))}

</div>

              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Additionally, I have expertise in various tools and frameworks including VS Code, Jupyter Notebook, 
            Postman, and have strong knowledge of data structures and algorithms.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
