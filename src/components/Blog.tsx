
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { YoutubeIcon, BookOpen, ArrowRight } from 'lucide-react';

type BlogPost = {
  title: string;
  description: string;
  date: string;
  link: string;
  type: 'blog' | 'youtube';
};

const posts: BlogPost[] = [
  {
    title: "Mastering React Hooks",
    description: "A comprehensive guide to using React Hooks effectively in your projects.",
    date: "March 15, 2024",
    link: "#",
    type: "blog",
  },
  {
    title: "Machine Learning Fundamentals",
    description: "Introduction to core ML concepts and how to implement them in Python.",
    date: "February 10, 2024",
    link: "#",
    type: "youtube",
  },
  // Add more posts as needed
];

const Blog = () => {
  return (
    <section id="blog" className="bg-white dark:bg-card">
      <div className="section-container">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Blog & YouTube</h2>
          <div className="w-20 h-1 bg-accent mb-8"></div>
          <p className="text-muted-foreground text-center max-w-2xl">
            Explore my latest blog posts and YouTube videos where I share insights, tutorials, and thoughts on software development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <Card key={index} className="overflow-hidden border-accent/10 hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center mb-2">
                  {post.type === 'blog' ? (
                    <BookOpen className="h-5 w-5 text-accent" />
                  ) : (
                    <YoutubeIcon className="h-5 w-5 text-red-500" />
                  )}
                  <span className="text-xs text-muted-foreground">{post.date}</span>
                </div>
                <CardTitle className="text-lg">{post.title}</CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                  {post.description}
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button variant="ghost" size="sm" asChild className="pl-0 text-accent">
                  <a href={post.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                    Read {post.type === 'blog' ? 'Article' : 'Watch Video'}
                    <ArrowRight size={14} />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center space-y-4">
          <p className="text-muted-foreground">
            More content coming soon! Subscribe to stay updated.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild variant="outline">
              <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <BookOpen size={18} />
                All Blog Posts
              </a>
            </Button>
            <Button asChild>
              <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <YoutubeIcon size={18} />
                YouTube Channel
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
