import { Heart } from 'lucide-react';
import { SiFacebook, SiInstagram, SiX } from 'react-icons/si';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = typeof window !== 'undefined' ? window.location.hostname : 'volik-iiser';

  return (
    <footer className="border-t border-border bg-card">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* About Section */}
          <div>
            <h3 className="mb-4 text-lg font-extrabold text-brand">VOLIK</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The official volleyball club of IISER Kolkata, promoting sportsmanship, teamwork, and athletic excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-foreground">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="/about" className="transition-all hover:text-brand hover:translate-x-1 inline-block font-medium">
                  About Us
                </a>
              </li>
              <li>
                <a href="/events" className="transition-all hover:text-brand hover:translate-x-1 inline-block font-medium">
                  Events
                </a>
              </li>
              <li>
                <a href="/people" className="transition-all hover:text-brand hover:translate-x-1 inline-block font-medium">
                  Our Team
                </a>
              </li>
              <li>
                <a href="/contact" className="transition-all hover:text-brand hover:translate-x-1 inline-block font-medium">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-foreground">Connect With Us</h3>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-md bg-secondary text-brand transition-all hover:scale-110 hover:bg-club-gradient hover:text-white hover:shadow-brand"
              >
                <SiFacebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-md bg-secondary text-brand transition-all hover:scale-110 hover:bg-club-gradient hover:text-white hover:shadow-brand"
              >
                <SiInstagram className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-md bg-secondary text-brand transition-all hover:scale-110 hover:bg-club-gradient hover:text-white hover:shadow-brand"
              >
                <SiX className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p className="font-medium">
            © {currentYear} VOLIK - IISER Kolkata Volleyball Club. All rights reserved.
          </p>
          <p className="mt-2 flex items-center justify-center gap-1">
            Built with <Heart className="h-4 w-4 fill-brand text-brand" /> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(appIdentifier)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-brand hover:text-brand-accent transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
