import { Award, Target, Heart, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'Striving for the highest standards in every game and practice session',
    },
    {
      icon: Heart,
      title: 'Teamwork',
      description: 'Building strong bonds and working together towards common goals',
    },
    {
      icon: Zap,
      title: 'Passion',
      description: 'Bringing energy and enthusiasm to everything we do on and off the court',
    },
    {
      icon: Award,
      title: 'Sportsmanship',
      description: 'Competing with integrity, respect, and fair play',
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary via-background to-background py-20 md:py-28">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-foreground md:text-6xl">
              About <span className="text-gradient-brand">VOLIK</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              The official volleyball club of IISER Kolkata, dedicated to promoting sports culture and athletic excellence
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="rounded-lg border border-border bg-card p-8 shadow-premium">
              <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-foreground">Our Mission</h2>
              <p className="mb-4 text-base text-muted-foreground leading-relaxed">
                VOLIK was established with the vision of creating a vibrant volleyball community at IISER Kolkata. We aim to provide a platform for students to develop their athletic skills, build lasting friendships, and represent our institution in various tournaments.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                Through regular training sessions, competitive matches, and team-building activities, we foster an environment where passion for volleyball meets academic excellence. Our club welcomes players of all skill levels, from beginners to experienced athletes.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-8 shadow-premium">
              <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-foreground">Our Vision</h2>
              <p className="mb-4 text-base text-muted-foreground leading-relaxed">
                We envision VOLIK as a cornerstone of sports culture at IISER Kolkata, producing skilled athletes who excel both on the court and in their academic pursuits. Our goal is to create a legacy of excellence, sportsmanship, and camaraderie.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                By participating in inter-college tournaments and organizing events, we aim to put IISER Kolkata on the map as a formidable force in collegiate volleyball while maintaining the highest standards of integrity and fair play.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-secondary/30 py-20 md:py-28">
        <div className="container">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
              Our Core <span className="text-gradient-brand">Values</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              The principles that guide everything we do at VOLIK
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <Card key={index} className="border border-border bg-card transition-all hover:scale-105 hover:border-brand hover:shadow-brand-lg">
                <CardHeader>
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-club-gradient text-white shadow-brand">
                    <value.icon className="h-7 w-7" />
                  </div>
                  <CardTitle className="text-xl font-bold">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
              Our <span className="text-gradient-brand">Achievements</span>
            </h2>
            <p className="mb-12 text-lg text-muted-foreground">
              VOLIK has consistently performed well in various inter-college tournaments, bringing pride to IISER Kolkata. Our teams have secured multiple podium finishes and continue to raise the bar with each competition.
            </p>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-lg border border-brand/20 bg-gradient-to-br from-secondary to-background p-8 shadow-brand transition-all hover:scale-105">
                <div className="mb-2 text-5xl font-extrabold text-gradient-brand">15+</div>
                <div className="text-sm font-bold text-muted-foreground uppercase tracking-wide">Tournaments Participated</div>
              </div>
              <div className="rounded-lg border border-brand/20 bg-gradient-to-br from-secondary to-background p-8 shadow-brand transition-all hover:scale-105">
                <div className="mb-2 text-5xl font-extrabold text-gradient-brand">50+</div>
                <div className="text-sm font-bold text-muted-foreground uppercase tracking-wide">Active Members</div>
              </div>
              <div className="rounded-lg border border-brand/20 bg-gradient-to-br from-secondary to-background p-8 shadow-brand transition-all hover:scale-105">
                <div className="mb-2 text-5xl font-extrabold text-gradient-brand">8+</div>
                <div className="text-sm font-bold text-muted-foreground uppercase tracking-wide">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

