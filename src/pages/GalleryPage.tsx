import { Image as ImageIcon } from 'lucide-react';
import { Card } from '@/components/ui/card';

// Mock data - will be replaced with backend data
const mockGalleryItems = [
  { id: 1, title: 'Championship Victory 2025', category: 'Tournament', image: null },
  { id: 2, title: 'Team Practice Session', category: 'Training', image: null },
  { id: 3, title: 'Inter-IISER Match', category: 'Tournament', image: null },
  { id: 4, title: 'Freshers Welcome', category: 'Event', image: null },
  { id: 5, title: 'Team Bonding', category: 'Event', image: null },
  { id: 6, title: 'State Championship', category: 'Tournament', image: null },
];

export default function GalleryPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary via-background to-background py-20 md:py-28">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-foreground md:text-6xl">
              Our <span className="text-gradient-brand">Gallery</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Explore memorable moments from our journey
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {mockGalleryItems.map((item) => (
              <Card
                key={item.id}
                className="group overflow-hidden border border-border bg-card transition-all hover:scale-105 hover:border-brand hover:shadow-brand-lg cursor-pointer"
              >
                <div className="aspect-video bg-gradient-to-br from-secondary to-muted flex items-center justify-center">
                  {item.image ? (
                    <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
                  ) : (
                    <ImageIcon className="h-16 w-16 text-muted-foreground/30" />
                  )}
                </div>
                <div className="p-4">
                  <h3 className="mb-1 text-lg font-bold text-foreground">{item.title}</h3>
                  <p className="text-sm font-semibold text-brand uppercase tracking-wide">{item.category}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
