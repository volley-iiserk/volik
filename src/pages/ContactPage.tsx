import { Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary via-background to-background py-20 md:py-28">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-foreground md:text-6xl">
              Get in <span className="text-gradient-brand">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Have questions? We'd love to hear from you
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h2 className="mb-6 text-3xl font-extrabold text-foreground">Contact Information</h2>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Reach out to us for any queries about VOLIK, membership, events, or collaborations.
                </p>
              </div>

              <div className="space-y-4">
                <Card className="border border-border bg-card shadow-premium">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-club-gradient text-white shadow-brand">
                        <Mail className="h-6 w-6" />
                      </div>
                      <div>
                        <CardTitle className="text-lg font-bold">Email</CardTitle>
                        <p className="text-sm font-medium text-muted-foreground">volik@iiserkol.ac.in</p>
                      </div>
                    </div>
                  </CardHeader>
                </Card>

                <Card className="border border-border bg-card shadow-premium">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-club-gradient text-white shadow-brand">
                        <Phone className="h-6 w-6" />
                      </div>
                      <div>
                        <CardTitle className="text-lg font-bold">Phone</CardTitle>
                        <p className="text-sm font-medium text-muted-foreground">+91 98765 43210</p>
                      </div>
                    </div>
                  </CardHeader>
                </Card>

                <Card className="border border-border bg-card shadow-premium">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-club-gradient text-white shadow-brand">
                        <MapPin className="h-6 w-6" />
                      </div>
                      <div>
                        <CardTitle className="text-lg font-bold">Location</CardTitle>
                        <p className="text-sm font-medium text-muted-foreground">
                          IISER Kolkata, Mohanpur Campus, West Bengal
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="border border-border bg-card shadow-premium">
              <CardHeader>
                <CardTitle className="text-2xl font-extrabold">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="font-semibold">Name</Label>
                    <Input id="name" placeholder="Your name" required className="border-border" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="font-semibold">Email</Label>
                    <Input id="email" type="email" placeholder="your.email@example.com" required className="border-border" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="font-semibold">Subject</Label>
                    <Input id="subject" placeholder="What is this about?" required className="border-border" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="font-semibold">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Your message..."
                      rows={5}
                      required
                      className="border-border resize-none"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-club-gradient text-white font-bold shadow-brand hover:shadow-brand-lg hover:scale-105 transition-all">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

