import { Bell, Pin } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// Mock data - will be replaced with backend data
const mockAnnouncements = [
  {
    id: 1,
    title: 'Registration Open for Inter-IISER Championship',
    content: 'We are excited to announce that registrations are now open for the upcoming Inter-IISER Volleyball Championship 2026. All interested players should register by March 1st.',
    date: '2026-02-10',
    priority: 'high',
    isPinned: true,
  },
  {
    id: 2,
    title: 'New Training Schedule',
    content: 'Starting next week, we will have additional training sessions on Saturdays from 6 AM to 8 AM. All team members are encouraged to attend.',
    date: '2026-02-08',
    priority: 'medium',
    isPinned: false,
  },
  {
    id: 3,
    title: 'Team Meeting This Friday',
    content: 'Mandatory team meeting this Friday at 5 PM in the Sports Complex conference room. We will discuss upcoming events and team strategies.',
    date: '2026-02-05',
    priority: 'high',
    isPinned: false,
  },
];

export default function AnnouncementsPage() {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-club-gradient text-white font-bold shadow-brand';
      case 'medium':
        return 'bg-secondary text-brand font-bold border border-brand/20';
      case 'low':
        return 'bg-muted text-muted-foreground font-bold';
      default:
        return 'bg-muted text-muted-foreground font-bold';
    }
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary via-background to-background py-20 md:py-28">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-foreground md:text-6xl">
              <span className="text-gradient-brand">Announcements</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Stay informed with the latest updates from VOLIK
            </p>
          </div>
        </div>
      </section>

      {/* Announcements Section */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="mx-auto max-w-4xl space-y-6">
            {mockAnnouncements.map((announcement) => (
              <Card
                key={announcement.id}
                className={`border transition-all hover:scale-[1.02] hover:shadow-brand-lg ${
                  announcement.isPinned
                    ? 'border-brand bg-gradient-to-br from-secondary to-card shadow-brand'
                    : 'border-border bg-card hover:border-brand'
                }`}
              >
                <CardHeader>
                  <div className="mb-3 flex items-start justify-between gap-4">
                    <div className="flex items-center gap-2">
                      {announcement.isPinned && (
                        <Pin className="h-5 w-5 text-brand fill-brand" />
                      )}
                      <Badge className={getPriorityColor(announcement.priority)}>
                        {announcement.priority.charAt(0).toUpperCase() + announcement.priority.slice(1)} Priority
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 text-sm font-semibold text-muted-foreground">
                      <Bell className="h-4 w-4 text-brand" />
                      {formatDate(announcement.date)}
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-bold">{announcement.title}</CardTitle>
                  <CardDescription className="text-base font-medium">{announcement.content}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
