import Link from 'next/link';
import { Gem, Mail, MapPin, Phone, Twitter, Facebook, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Gem className="h-8 w-8 text-primary" />
              <span className="font-headline text-xl font-bold">MAN</span>
            </Link>
            <p className="text-sm text-accent-foreground/80">
              Championing the growth and sustainability of Nigeria&apos;s mining sector through advocacy, collaboration, and innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-headline text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/membership" className="text-sm hover:text-primary transition-colors">Membership</Link></li>
              <li><Link href="/resources" className="text-sm hover:text-primary transition-colors">Resources</Link></li>
              <li><Link href="/contact" className="text-sm hover:text-primary transition-colors">Contact</Link></li>
              <li><Link href="/gallery" className="text-sm hover:text-primary transition-colors">Gallery</Link></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="space-y-4">
            <h3 className="font-headline text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-1 shrink-0" />
                <span>123 Mining Avenue, Central Business District, Abuja, Nigeria</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0" />
                <span>+234 800 123 4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0" />
                <span>info@man.org.ng</span>
              </li>
            </ul>
          </div>
          
          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="font-headline text-lg font-semibold">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="#" aria-label="Twitter" className="hover:text-primary transition-colors">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" aria-label="Facebook" className="hover:text-primary transition-colors">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" aria-label="LinkedIn" className="hover:text-primary transition-colors">
                <Linkedin className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-accent/80 py-4">
        <div className="container mx-auto px-4 text-center text-sm text-accent-foreground/70">
          <p>&copy; {new Date().getFullYear()} Miners Association of Nigeria. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
