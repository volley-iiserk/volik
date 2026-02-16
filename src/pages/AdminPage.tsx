import { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient'; // Import your new Supabase client
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LogIn, LogOut, Users, Calendar, Image, Bell, Shield, Plus, Trash2, Loader2 } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { useAnnouncements } from '../hooks/useQueries'; // Use the hook to fetch data

export default function AdminPage() {
  const [session, setSession] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');

  // Login Form States
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authLoading, setAuthLoading] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);

  // Announcement Form States
  const [newAnnounceTitle, setNewAnnounceTitle] = useState('');
  const [newAnnounceContent, setNewAnnounceContent] = useState('');
  const [isPosting, setIsPosting] = useState(false);

  // Fetch data using your hook
  const { data: announcements, refetch: refetchAnnouncements } = useAnnouncements();

  // 1. Check for existing session on load
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  // 2. Handle Login
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthLoading(true);
    setAuthError(null);
    
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setAuthError(error.message);
    }
    setAuthLoading(false);
  };

  // 3. Handle Logout
  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  // 4. Handle Add Announcement
  const handleAddAnnouncement = async () => {
    if (!newAnnounceTitle || !newAnnounceContent) return;
    setIsPosting(true);

    const { error } = await supabase
      .from('announcements')
      .insert([{ title: newAnnounceTitle, content: newAnnounceContent, is_pinned: false }]);

    if (!error) {
      setNewAnnounceTitle('');
      setNewAnnounceContent('');
      refetchAnnouncements(); // Refresh the list
    } else {
      alert('Error posting: ' + error.message);
    }
    setIsPosting(false);
  };

  // 5. Handle Delete Announcement
  const handleDeleteAnnouncement = async (id: string) => {
    if (!confirm('Are you sure you want to delete this?')) return;

    const { error } = await supabase
      .from('announcements')
      .delete()
      .eq('id', id);

    if (!error) {
      refetchAnnouncements();
    } else {
      alert('Error deleting: ' + error.message);
    }
  };

  if (loading) {
    return <div className="flex h-screen items-center justify-center"><Loader2 className="h-8 w-8 animate-spin text-brand" /></div>;
  }

  // --- RENDER: LOGIN SCREEN (If not logged in) ---
  if (!session) {
    return (
      <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center bg-gradient-to-br from-secondary via-background to-background p-4">
        <Card className="w-full max-w-md border border-border shadow-brand-lg">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-lg bg-club-gradient text-white shadow-brand">
              <Shield className="h-10 w-10" />
            </div>
            <CardTitle className="text-3xl font-extrabold">Admin Access</CardTitle>
            <CardDescription className="font-medium">Sign in to manage VOLIK</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              {authError && (
                <Alert variant="destructive" className="border-red-500/50 bg-red-500/10 text-red-500">
                  <AlertDescription>{authError}</AlertDescription>
                </Alert>
              )}
              <div className="space-y-2">
                <input
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  required
                />
              </div>
              <Button
                type="submit"
                disabled={authLoading}
                className="w-full bg-club-gradient text-white font-bold shadow-brand-lg hover:shadow-brand hover:scale-[1.02] transition-all py-6"
              >
                {authLoading ? (
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                ) : (
                  <LogIn className="mr-2 h-5 w-5" />
                )}
                {authLoading ? 'Signing In...' : 'Sign In'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  // --- RENDER: DASHBOARD (If logged in) ---
  const adminSections = [
    { id: 'people', title: 'Manage People', description: 'Add, edit, or move team members', icon: Users },
    { id: 'events', title: 'Manage Events', description: 'Create and update events', icon: Calendar },
    { id: 'gallery', title: 'Manage Gallery', description: 'Upload and organize images', icon: Image },
    { id: 'announcements', title: 'Manage Announcements', description: 'Post and edit announcements', icon: Bell },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="border-b border-border bg-gradient-to-br from-secondary via-background to-background py-8">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
                Admin <span className="text-gradient-brand">Dashboard</span>
              </h1>
              <p className="text-sm md:text-base font-medium text-muted-foreground">
                Welcome back, {session.user.email}
              </p>
            </div>
            <Button
              onClick={handleLogout}
              variant="outline"
              className="border-2 border-brand text-brand hover:bg-brand hover:text-white font-bold transition-all"
            >
              <LogOut className="mr-2 h-4 w-4" />
              Sign Out
            </Button>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-8 md:py-12 flex-1">
        <div className="container">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="mb-8 grid w-full grid-cols-2 lg:w-auto lg:grid-cols-5 bg-secondary p-1 h-auto gap-1 border border-border">
              <TabsTrigger value="overview" className="data-[state=active]:bg-club-gradient data-[state=active]:text-white font-bold py-3">Overview</TabsTrigger>
              <TabsTrigger value="people" className="data-[state=active]:bg-club-gradient data-[state=active]:text-white font-bold py-3">People</TabsTrigger>
              <TabsTrigger value="events" className="data-[state=active]:bg-club-gradient data-[state=active]:text-white font-bold py-3">Events</TabsTrigger>
              <TabsTrigger value="gallery" className="data-[state=active]:bg-club-gradient data-[state=active]:text-white font-bold py-3">Gallery</TabsTrigger>
              <TabsTrigger value="announcements" className="data-[state=active]:bg-club-gradient data-[state=active]:text-white font-bold py-3">Announcements</TabsTrigger>
            </TabsList>

            {/* OVERVIEW TAB */}
            <TabsContent value="overview" className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {adminSections.map((section) => (
                  <Card
                    key={section.id}
                    className="cursor-pointer border border-border bg-card transition-all hover:scale-105 hover:border-brand hover:shadow-brand-lg"
                    onClick={() => setActiveTab(section.id)}
                  >
                    <CardHeader>
                      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-club-gradient text-white shadow-brand">
                        <section.icon className="h-7 w-7" />
                      </div>
                      <CardTitle className="text-xl font-bold">{section.title}</CardTitle>
                      <CardDescription className="font-medium">{section.description}</CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* ANNOUNCEMENTS TAB (Fully Implemented) */}
            <TabsContent value="announcements" className="space-y-6">
              <div className="grid gap-8 lg:grid-cols-3">
                {/* Form Side */}
                <Card className="lg:col-span-1 border border-border bg-card shadow-premium h-fit">
                  <CardHeader>
                    <CardTitle className="text-xl font-extrabold flex items-center gap-2">
                      <Plus className="h-5 w-5 text-brand" /> Create New
                    </CardTitle>
                    <CardDescription>Post a new update to the notice board</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <input
                      placeholder="Announcement Title"
                      value={newAnnounceTitle}
                      onChange={(e) => setNewAnnounceTitle(e.target.value)}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                    />
                    <textarea
                      placeholder="Content details..."
                      value={newAnnounceContent}
                      onChange={(e) => setNewAnnounceContent(e.target.value)}
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                    />
                    <Button 
                      onClick={handleAddAnnouncement} 
                      disabled={isPosting || !newAnnounceTitle}
                      className="w-full bg-club-gradient text-white font-bold"
                    >
                      {isPosting ? 'Posting...' : 'Post Announcement'}
                    </Button>
                  </CardContent>
                </Card>

                {/* List Side */}
                <Card className="lg:col-span-2 border border-border bg-card shadow-premium">
                  <CardHeader>
                    <CardTitle className="text-xl font-extrabold flex items-center gap-2">
                      <Bell className="h-5 w-5 text-brand" /> Current Announcements
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {announcements?.length === 0 && (
                        <p className="text-muted-foreground text-center py-8">No announcements found.</p>
                      )}
                      {announcements?.map((item) => (
                        <div key={item.id} className="flex items-start justify-between rounded-lg border border-border bg-secondary/50 p-4 transition-all hover:bg-secondary">
                          <div>
                            <h4 className="font-bold text-foreground">{item.title}</h4>
                            <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{item.content}</p>
                            <span className="text-xs text-brand font-medium mt-2 block">
                              {new Date(item.created_at).toLocaleDateString()}
                            </span>
                          </div>
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            onClick={() => handleDeleteAnnouncement(item.id)}
                            className="text-red-500 hover:text-red-700 hover:bg-red-500/10"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* OTHER TABS (Placeholders for now) */}
            <TabsContent value="people" className="space-y-6">
              <Card className="border border-border bg-card shadow-premium">
                <CardHeader>
                  <CardTitle>Manage People</CardTitle>
                  <CardDescription>You can copy the Announcement logic above to implement this!</CardDescription>
                </CardHeader>
              </Card>
            </TabsContent>

            <TabsContent value="events" className="space-y-6">
              <Card className="border border-border bg-card shadow-premium">
                <CardHeader>
                  <CardTitle>Manage Events</CardTitle>
                  <CardDescription>You can copy the Announcement logic above to implement this!</CardDescription>
                </CardHeader>
              </Card>
            </TabsContent>
            
            <TabsContent value="gallery" className="space-y-6">
              <Card className="border border-border bg-card shadow-premium">
                <CardHeader>
                  <CardTitle>Manage Gallery</CardTitle>
                  <CardDescription>Gallery upload logic goes here.</CardDescription>
                </CardHeader>
              </Card>
            </TabsContent>

          </Tabs>
        </div>
      </section>
    </div>
  );
}
