
import { Card, CardContent } from '@/components/ui/card';
import { Trophy, Code, Clock, Zap } from 'lucide-react';

type Achievement = {
  icon: React.ElementType;
  title: string;
  description: string;
};

const achievements: Achievement[] = [
  {
    icon: Code,
    title: "450+ DSA Problems Solved",
    description: "Solved over 450 Data Structures & Algorithm problems on LeetCode, GeeksforGeeks, and Codolio.",
  },
  {
    icon: Clock,
    title: "100-Day Coding Streak",
    description: "Maintained a 100-day coding streak on LeetCode, demonstrating consistency and problem-solving skills.",
  },
  {
    icon: Trophy,
    title: "Hackathon Top Performer",
    description: "Participated in 5+ hackathons and coding contests, securing top 10 positions.",
  },
  {
    icon: Zap,
    title: "Full-Stack Applications",
    description: "Built multiple full-stack applications with scalability and performance optimizations.",
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="bg-secondary/50 dark:bg-background">
      <div className="section-container">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Achievements & Competitions</h2>
          <div className="w-20 h-1 bg-accent mb-8"></div>
          <p className="text-muted-foreground text-center max-w-2xl">
            Key accomplishments that demonstrate my skills, dedication, and passion for software engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <Card key={index} className="overflow-hidden border-accent/10">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className="bg-accent/10 p-3 rounded-full h-12 w-12 flex items-center justify-center text-accent shrink-0">
                    <achievement.icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{achievement.title}</h3>
                    <p className="text-muted-foreground">{achievement.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
