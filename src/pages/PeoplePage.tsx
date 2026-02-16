import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { User } from 'lucide-react';

// Mock data - will be replaced with backend data
const mockOfficeBearers = [
  { id: 1, name: 'Rahul Sharma', role: 'President', batch: '2021', image: null },
  { id: 2, name: 'Priya Patel', role: 'Vice President', batch: '2021', image: null },
  { id: 3, name: 'Arjun Kumar', role: 'Secretary', batch: '2022', image: null },
  { id: 4, name: 'Sneha Reddy', role: 'Treasurer', batch: '2022', image: null },
];

const mockBoys = [
  { id: 5, name: 'Vikram Singh', role: 'Captain', batch: '2021', image: null },
  { id: 6, name: 'Aditya Verma', role: 'Player', batch: '2022', image: null },
  { id: 7, name: 'Rohan Gupta', role: 'Player', batch: '2023', image: null },
  { id: 8, name: 'Karan Mehta', role: 'Player', batch: '2023', image: null },
];

const mockGirls = [
  { id: 9, name: 'Ananya Das', role: 'Captain', batch: '2021', image: null },
  { id: 10, name: 'Ishita Joshi', role: 'Player', batch: '2022', image: null },
  { id: 11, name: 'Riya Nair', role: 'Player', batch: '2023', image: null },
  { id: 12, name: 'Kavya Iyer', role: 'Player', batch: '2023', image: null },
];

const mockAlumni = [
  { id: 13, name: 'Amit Desai', role: 'Former Captain', batch: '2019', image: null },
  { id: 14, name: 'Neha Kapoor', role: 'Former President', batch: '2018', image: null },
  { id: 15, name: 'Siddharth Roy', role: 'Former Player', batch: '2020', image: null },
];

interface PersonCardProps {
  person: {
    id: number;
    name: string;
    role: string;
    batch: string;
    image: string | null;
  };
}

function PersonCard({ person }: PersonCardProps) {
  return (
    <Card className="group overflow-hidden border border-border bg-card transition-all hover:scale-105 hover:border-brand hover:shadow-brand-lg">
      <CardContent className="p-6">
        <div className="mb-4 flex justify-center">
          <div className="flex h-28 w-28 items-center justify-center rounded-full bg-club-gradient text-white shadow-brand transition-transform group-hover:scale-110">
            {person.image ? (
              <img src={person.image} alt={person.name} className="h-full w-full rounded-full object-cover" />
            ) : (
              <User className="h-14 w-14" />
            )}
          </div>
        </div>
        <div className="text-center">
          <h3 className="mb-2 text-lg font-bold text-foreground">{person.name}</h3>
          <Badge variant="secondary" className="mb-2 bg-secondary text-brand font-bold border border-brand/20">
            {person.role}
          </Badge>
          <p className="text-sm font-semibold text-muted-foreground">Batch of {person.batch}</p>
        </div>
      </CardContent>
    </Card>
  );
}

export default function PeoplePage() {
  const [activeTab, setActiveTab] = useState('office-bearers');

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary via-background to-background py-20 md:py-28">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-foreground md:text-6xl">
              Our <span className="text-gradient-brand">Team</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Meet the passionate individuals who make VOLIK a success
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 md:py-28">
        <div className="container">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="mb-12 grid w-full grid-cols-2 lg:w-auto lg:grid-cols-4 bg-secondary p-1 h-auto gap-1 border border-border">
              <TabsTrigger 
                value="office-bearers" 
                className="data-[state=active]:bg-club-gradient data-[state=active]:text-white data-[state=active]:shadow-brand font-bold py-3"
              >
                Office Bearers
              </TabsTrigger>
              <TabsTrigger 
                value="boys"
                className="data-[state=active]:bg-club-gradient data-[state=active]:text-white data-[state=active]:shadow-brand font-bold py-3"
              >
                Boys Team
              </TabsTrigger>
              <TabsTrigger 
                value="girls"
                className="data-[state=active]:bg-club-gradient data-[state=active]:text-white data-[state=active]:shadow-brand font-bold py-3"
              >
                Girls Team
              </TabsTrigger>
              <TabsTrigger 
                value="alumni"
                className="data-[state=active]:bg-club-gradient data-[state=active]:text-white data-[state=active]:shadow-brand font-bold py-3"
              >
                Alumni
              </TabsTrigger>
            </TabsList>

            <TabsContent value="office-bearers" className="space-y-8">
              <div>
                <h2 className="mb-8 text-3xl font-extrabold text-foreground">Office Bearers</h2>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {mockOfficeBearers.map((person) => (
                    <PersonCard key={person.id} person={person} />
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="boys" className="space-y-8">
              <div>
                <h2 className="mb-8 text-3xl font-extrabold text-foreground">Boys Team</h2>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {mockBoys.map((person) => (
                    <PersonCard key={person.id} person={person} />
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="girls" className="space-y-8">
              <div>
                <h2 className="mb-8 text-3xl font-extrabold text-foreground">Girls Team</h2>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {mockGirls.map((person) => (
                    <PersonCard key={person.id} person={person} />
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="alumni" className="space-y-8">
              <div>
                <h2 className="mb-8 text-3xl font-extrabold text-foreground">Alumni</h2>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {mockAlumni.map((person) => (
                    <PersonCard key={person.id} person={person} />
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}
