import { useState } from 'react';
import { Link, useNavigate } from '@tanstack/react-router';
import { Menu, X, Volleyball } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'People', path: '/people' },
  { name: 'Events', path: '/events' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Announcements', path: '/announcements' },
  { name: 'Contact', path: '/contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/90 shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-3 transition-transform hover:scale-105">
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-club-gradient shadow-brand">
            <Volleyball className="h-5 w-5 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-extrabold leading-none tracking-tight text-brand">VOLIK</span>
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">IISER Kolkata</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="rounded-md px-4 py-2 text-sm font-semibold text-foreground/70 transition-all hover:bg-secondary hover:text-brand"
              activeProps={{
                className: 'bg-secondary text-brand font-bold',
              }}
            >
              {item.name}
            </Link>
          ))}
          <Button
            variant="default"
            size="sm"
            className="ml-3 bg-club-gradient text-white font-bold shadow-brand hover:shadow-brand-lg hover:scale-105 transition-all"
            onClick={() => navigate({ to: '/admin' })}
          >
            Admin
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="hover:bg-secondary">
              {isOpen ? <X className="h-5 w-5 text-brand" /> : <Menu className="h-5 w-5 text-brand" />}
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px] border-l border-border">
            <nav className="flex flex-col gap-2 pt-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className="rounded-md px-4 py-3 text-sm font-semibold text-foreground/70 transition-all hover:bg-secondary hover:text-brand"
                  activeProps={{
                    className: 'bg-secondary text-brand font-bold',
                  }}
                >
                  {item.name}
                </Link>
              ))}
              <Button
                variant="default"
                size="sm"
                className="mt-4 bg-club-gradient text-white font-bold shadow-brand"
                onClick={() => {
                  setIsOpen(false);
                  navigate({ to: '/admin' });
                }}
              >
                Admin Dashboard
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
