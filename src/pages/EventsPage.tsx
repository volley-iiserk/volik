import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Clock } from 'lucide-react';

// Mock data - will be replaced with backend data
const mockEvents = [
  {
    id: 1,
    title: 'Inter-IISER Volleyball Championship 2026',
    description: 'Annual tournament featuring teams from all IISER campuses across India',
    date: '2026-03-15',
    location: 'IISER Kolkata Sports Complex',
    status: 'upcoming',
    time: '09:00 AM',
  },
  {
    id: 2,
    title: 'VOLIK Training Camp',
    description: 'Intensive training session for all team members with professional coaches',
    date: '2026-02-20',
    location: 'Main Volleyball Court',
    status: 'current',
    time: '05:00 PM',
  },
  {
    id: 3,
    title: 'Freshers Welcome Match',
    description: 'Friendly match to welcome new members to the VOLIK family',
    date: '2026-02-25',
    location: 'Indoor Sports Arena',
    status: 'upcoming',
    time: '04:00 PM',
  },
  {
    id: 4,
    title: 'State Level Tournament',
    description: 'Competed against top colleges in West Bengal',
    date: '2025-11-20',
    location: 'Kolkata Sports Stadium',
    status: 'past',
    time: '10:00 AM',
  },
];

export default function EventsPage() {
  const [activeTab, setActiveTab] = useState('upcoming');

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'upcoming':
        return 'bg-club-gradient text-white font-bold shadow-brand';
      case 'current':
        return 'bg-gradient-to-r from-success to-success/80 text-white font-bold shadow-sm';
      case 'past':
        return 'bg-muted text-muted-foreground font-bold';
      default:
        return 'bg-muted text-muted-foreground font-bold';
    }
  };

  const filterEvents = (status: string) => {
    return mockEvents.filter((event) => event.status === status);
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary via-background to-background py-20 md:py-28">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-foreground md:text-6xl">
              Our <span className="text-gradient-brand">Events</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Stay updated with our tournaments, training sessions, and team activities
            </p>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20 md:py-28">
        <div className="container">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="mb-12 grid w-full md:w-auto md:inline-grid md:grid-cols-3 bg-secondary p-1 h-auto gap-1 border border-border">
              <TabsTrigger 
                value="upcoming"
                className="data-[state=active]:bg-club-gradient data-[state=active]:text-white data-[state=active]:shadow-brand font-bold py-3"
              >
                Upcoming
              </TabsTrigger>
              <TabsTrigger 
                value="current"
                className="data-[state=active]:bg-club-gradient data-[state=active]:text-white data-[state=active]:shadow-brand font-bold py-3"
              >
                Current
              </TabsTrigger>
              <TabsTrigger 
                value="past"
                className="data-[state=active]:bg-club-gradient data-[state=active]:text-white data-[state=active]:shadow-brand font-bold py-3"
              >
                Past
              </TabsTrigger>
            </TabsList>

            <TabsContent value="upcoming" className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                {filterEvents('upcoming').map((event) => (
                  <Card key={event.id} className="border border-border bg-card transition-all hover:scale-105 hover:border-brand hover:shadow-brand-lg">
                    <CardHeader>
                      <div className="mb-2 flex items-start justify-between gap-4">
                        <Badge className={getStatusColor(event.status)}>
                          {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl font-bold">{event.title}</CardTitle>
                      <CardDescription className="font-medium">{event.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="flex items-center gap-2 text-sm font-semibold text-muted-foreground">
                        <Calendar className="h-4 w-4 text-brand" />
                        {formatDate(event.date)}
                      </div>
                      <div className="flex items-center gap-2 text-sm font-semibold text-muted-foreground">
                        <Clock className="h-4 w-4 text-brand" />
                        {event.time}
                      </div>
                      <div className="flex items-center gap-2 text-sm font-semibold text-muted-foreground">
                        <MapPin className="h-4 w-4 text-brand" />
                        {event.location}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="current" className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                {filterEvents('current').map((event) => (
                  <Card key={event.id} className="border border-success/30 bg-card transition-all hover:scale-105 hover:border-success hover:shadow-lg">
                    <CardHeader>
                      <div className="mb-2 flex items-start justify-between gap-4">
                        <Badge className={getStatusColor(event.status)}>
                          {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl font-bold">{event.title}</CardTitle>
                      <CardDescription className="font-medium">{event.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="flex items-center gap-2 text-sm font-semibold text-muted-foreground">
                        <Calendar className="h-4 w-4 text-success" />
                        {formatDate(event.date)}
                      </div>
                      <div className="flex items-center gap-2 text-sm font-semibold text-muted-foreground">
                        <Clock className="h-4 w-4 text-success" />
                        {event.time}
                      </div>
                      <div className="flex items-center gap-2 text-sm font-semibold text-muted-foreground">
                        <MapPin className="h-4 w-4 text-success" />
                        {event.location}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="past" className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                {filterEvents('past').map((event) => (
                  <Card key={event.id} className="border border-border/50 bg-card transition-all hover:scale-105 hover:border-brand/50 hover:shadow-lg">
                    <CardHeader>
                      <div className="mb-2 flex items-start justify-between gap-4">
                        <Badge className={getStatusColor(event.status)}>
                          {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl font-bold">{event.title}</CardTitle>
                      <CardDescription className="font-medium">{event.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="flex items-center gap-2 text-sm font-semibold text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        {formatDate(event.date)}
                      </div>
                      <div className="flex items-center gap-2 text-sm font-semibold text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        {event.time}
                      </div>
                      <div className="flex items-center gap-2 text-sm font-semibold text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        {event.location}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}

