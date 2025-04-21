'use client';

import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { Award } from 'lucide-react';
import { motion } from 'framer-motion';

type Certification = {
  title: string;
  issuer: string;
  image: string;
};

const certifications: Certification[] = [
  {
    title: "Databases and SQL for Data Science with Python",
    issuer: "IBM",
    image: "db.png",
  },
  {
    title: "Supervised Machine Learning: Regression & Classification",
    issuer: "DeepLearning.AI",
    image: "super.png",
  },
  {
    title: "Cloud Computing",
    issuer: "NPTEL (IIT Kharagpur)",
    image: "cld.png",
  },
  {
    title: "Prompt Engineering for GPT-3/4",
    issuer: "DeepLearning.AI",
    image: "gpt.png",
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="bg-white dark:bg-card py-20">
      <div className="section-container">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Certifications & Courses</h2>
          <div className="w-20 h-1 bg-accent mb-8"></div>
          <p className="text-muted-foreground text-center max-w-2xl">
            Professional certifications and specialized courses I've completed to enhance my knowledge and skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden border-accent/10 transition-transform hover:scale-[1.01] hover:shadow-md">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-auto object-cover transition duration-300 hover:brightness-105"
                />
                <CardHeader className="flex items-start gap-3 px-4 pb-4 pt-3">
                  <Award className="h-6 w-6 mt-1 text-accent" />
                  <div>
                    <CardTitle className="text-base">{cert.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  </div>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
