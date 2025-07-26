import { WaitingListForm } from "@/components/WaitingListForm";
import { FeatureCard } from "@/components/FeatureCard";
import { 
  BarChart3, 
  Users, 
  Calendar, 
  DollarSign, 
  Zap, 
  Instagram,
  Youtube,
  Twitter,
  Star,
  TrendingUp,
  Smartphone
} from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Index = () => {
  const features = [
    {
      icon: BarChart3,
      title: "Unified Analytics",
      description: "Track performance across Instagram, YouTube, TikTok & more in one dashboard"
    },
    {
      icon: Users,
      title: "Team Management",
      description: "Collaborate with managers, editors & assistants with role-based permissions"
    },
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description: "Plan content, track deadlines & sync with your calendar effortlessly"
    },
    {
      icon: DollarSign,
      title: "Deal Tracking",
      description: "Manage brand partnerships, contracts & revenue streams in one place"
    },
    {
      icon: Zap,
      title: "Cross-Platform Posting",
      description: "Create once, post everywhere. Schedule content across all platforms"
    },
    {
      icon: TrendingUp,
      title: "Business Insights",
      description: "Get actionable insights to grow your creator business like a startup"
    }
  ];

  const platforms = [
    { icon: Instagram, name: "Instagram" },
    { icon: Youtube, name: "YouTube" },
    { icon: Twitter, name: "X (Twitter)" },
    { icon: Smartphone, name: "TikTok" }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                  <Star className="w-4 h-4 text-primary mr-2" />
                  <span className="text-sm font-medium text-primary">Coming Soon</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Your Creator
                  <span className="block text-transparent bg-gradient-primary bg-clip-text">
                    Command Center
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  One dashboard. One login. Everything that matters for your creator business.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex flex-wrap gap-4">
                  {platforms.map((platform, index) => (
                    <div 
                      key={index}
                      className="flex items-center space-x-2 px-3 py-2 bg-card rounded-lg border border-primary/10 shadow-soft"
                    >
                      <platform.icon className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium">{platform.name}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 items-start">
                  <WaitingListForm />
                  <div className="text-sm text-muted-foreground space-y-1">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                      <span>Early access benefits</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                      <span>Lifetime discounts</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                      <span>Shape the product</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:order-first">
              <div className="relative">
                <img 
                  src={heroImage}
                  alt="Crelyzor Dashboard Preview"
                  className="w-full h-auto rounded-2xl shadow-large"
                />
                <div className="absolute inset-0 bg-gradient-primary opacity-10 rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              Everything Creators Need
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Stop juggling 10+ tools. Crelyzor centralizes your entire creator business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <FeatureCard 
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-8">
            <h2 className="text-2xl md:text-3xl font-bold">
              Join Thousands of Creators
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">1000+</div>
                <div className="text-sm text-muted-foreground">Creators Waiting</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">4</div>
                <div className="text-sm text-muted-foreground">Platforms Integrated</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Analytics Tracking</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">∞</div>
                <div className="text-sm text-muted-foreground">Growth Potential</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-8 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Level Up Your Creator Game?
            </h2>
            <p className="text-xl text-muted-foreground">
              Join the waitlist and be among the first to experience the future of creator management.
            </p>
            <WaitingListForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-primary/10">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-transparent bg-gradient-primary bg-clip-text mb-2">
              Crelyzor
            </h3>
            <p className="text-sm text-muted-foreground">
              Empowering creators with unified business management
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
