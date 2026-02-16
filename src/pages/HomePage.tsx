import { ArrowRight, Trophy, Users, Calendar, Image } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from '@tanstack/react-router';

export default function HomePage() {
  const navigate = useNavigate();

  const features = [
    {
      icon: Users,
      title: 'Our Team',
      description: 'Meet our talented players and dedicated office bearers',
      link: '/people',
    },
    {
      icon: Calendar,
      title: 'Events',
      description: 'Stay updated with upcoming tournaments and matches',
      link: '/events',
    },
    {
      icon: Image,
      title: 'Gallery',
      description: 'Explore moments captured from our journey',
      link: '/gallery',
    },
    {
      icon: Trophy,
      title: 'Achievements',
      description: 'Celebrating our victories and milestones',
      link: '/about',
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-secondary via-background to-background py-24 md:py-36">
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-block rounded-full bg-club-gradient px-5 py-2 text-sm font-bold text-white shadow-brand">
              IISER Kolkata Volleyball Club
            </div>
            <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-foreground md:text-7xl">
              Welcome to <span className="text-gradient-brand">VOLIK</span>
            </h1>
            <p className="mb-10 text-xl text-muted-foreground md:text-2xl">
              Where passion meets the court. Join us in our journey of sportsmanship, teamwork, and excellence in volleyball.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button
                size="lg"
                className="bg-club-gradient text-white font-bold shadow-brand-lg hover:shadow-brand hover:scale-105 transition-all text-base px-8 py-6"
                onClick={() => navigate({ to: '/about' })}
              >
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-brand text-brand hover:bg-brand hover:text-white font-bold transition-all hover:scale-105 text-base px-8 py-6"
                onClick={() => navigate({ to: '/contact' })}
              >
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-brand/5 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-brand-accent/5 blur-3xl" />
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
              Explore <span className="text-gradient-brand">VOLIK</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Discover everything about our club, from team members to upcoming events
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group cursor-pointer border border-border bg-card transition-all hover:scale-105 hover:border-brand hover:shadow-brand-lg"
                onClick={() => navigate({ to: feature.link })}
              >
                <CardHeader>
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-club-gradient text-white shadow-brand transition-transform group-hover:scale-110">
                    <feature.icon className="h-7 w-7" />
                  </div>
                  <CardTitle className="text-xl font-bold">{feature.title}</CardTitle>
                  <CardDescription className="font-medium">{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" size="sm" className="group-hover:text-brand font-semibold">
                    Explore <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-club-gradient py-20 text-white shadow-brand-lg">
        <div className="container relative z-10 text-center">
          <h2 className="mb-4 text-4xl font-extrabold md:text-5xl">Join Our Community</h2>
          <p className="mb-10 text-xl opacity-95">
            Be part of IISER Kolkata's premier volleyball club
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="bg-white text-brand hover:bg-white/90 font-bold shadow-lg hover:scale-105 transition-all text-base px-8 py-6"
            onClick={() => navigate({ to: '/contact' })}
          >
            Contact Us Today
          </Button>
        </div>
        <div className="absolute -right-20 top-0 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
      </section>
    </div>
  );
}

