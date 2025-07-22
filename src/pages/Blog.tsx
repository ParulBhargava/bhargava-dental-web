import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowRight } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Importance of Regular Dental Checkups",
      excerpt: "Learn why maintaining regular dental appointments is crucial for your oral health and overall well-being.",
      author: "Dr. Rajesh Bhargava",
      date: "2024-01-15",
      category: "Preventive Care",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&h=250&fit=crop"
    },
    {
      id: 2,
      title: "Modern Orthodontic Solutions: Beyond Traditional Braces",
      excerpt: "Discover the latest advancements in orthodontic treatments including clear aligners and invisible braces.",
      author: "Dr. Priya Sharma",
      date: "2024-01-10",
      category: "Orthodontics",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop"
    },
    {
      id: 3,
      title: "Cosmetic Dentistry: Enhancing Your Smile Safely",
      excerpt: "Explore safe and effective cosmetic dental procedures that can transform your smile and boost your confidence.",
      author: "Dr. Rajesh Bhargava",
      date: "2024-01-05",
      category: "Cosmetic Dentistry",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=400&h=250&fit=crop"
    },
    {
      id: 4,
      title: "Dental Care for Children: Building Healthy Habits Early",
      excerpt: "Tips and strategies for parents to establish good oral hygiene habits in children from an early age.",
      author: "Dr. Priya Sharma",
      date: "2023-12-28",
      category: "Pediatric Dentistry",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=250&fit=crop"
    },
    {
      id: 5,
      title: "Emergency Dental Care: When to Seek Immediate Help",
      excerpt: "Know the signs of dental emergencies and understand when to seek immediate professional dental care.",
      author: "Dr. Rajesh Bhargava",
      date: "2023-12-20",
      category: "Emergency Care",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&h=250&fit=crop"
    },
    {
      id: 6,
      title: "Nutrition and Oral Health: Foods That Benefit Your Teeth",
      excerpt: "Discover which foods promote healthy teeth and gums, and which ones to limit for optimal oral health.",
      author: "Dr. Priya Sharma",
      date: "2023-12-15",
      category: "Nutrition",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=250&fit=crop"
    }
  ];

  const categories = ["All", "Preventive Care", "Orthodontics", "Cosmetic Dentistry", "Pediatric Dentistry", "Emergency Care", "Nutrition"];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-medical-blue to-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Dental Health Blog
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto">
            Stay informed with the latest insights, tips, and advances in dental care from our expert team.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-medical-light/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Badge 
                key={category} 
                variant={category === "All" ? "default" : "outline"}
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors px-4 py-2"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden border-0 shadow-card hover:shadow-soft transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4 bg-primary">
                    {post.category}
                  </Badge>
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-xl font-bold line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{post.readTime}</span>
                    <div className="flex items-center text-primary font-medium group-hover:text-primary-hover transition-colors">
                      <span className="text-sm">Read More</span>
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-medical-light/50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Stay Updated with Our Latest Articles
            </h2>
            <p className="text-muted-foreground mb-8">
              Subscribe to our newsletter and get the latest dental health tips and insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary-hover transition-colors font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;