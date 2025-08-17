import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Newspaper, Landmark } from 'lucide-react';

const newsItems = [
  {
    id: 1,
    title: 'MAN Holds Annual General Meeting',
    date: 'October 26, 2023',
    excerpt: 'The association discussed key issues and elected new executives for the coming year...',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'conference meeting',
  },
  {
    id: 2,
    title: 'New Policy on Artisanal Mining Released',
    date: 'October 15, 2023',
    excerpt: 'The federal government has released new guidelines aimed at formalizing the artisanal mining sector...',
    image: 'https://images.unsplash.com/photo-1618828665011-0abd973f7bb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxuaWdlcmlhfGVufDB8fHx8MTc1NTQyNDQ3N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    dataAiHint: 'mining regulations',
  },
  {
    id: 3,
    title: 'Community Development Project Launched in Jos',
    date: 'September 30, 2023',
    excerpt: 'In partnership with local communities, MAN has launched a new project to improve infrastructure...',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'community development',
  },
];

const partners = [
  { name: 'Partner 1', logo: 'https://placehold.co/150x80.png', dataAiHint: 'corporate logo' },
  { name: 'Partner 2', logo: 'https://placehold.co/150x80.png', dataAiHint: 'corporate logo' },
  { name: 'Partner 3', logo: 'https://placehold.co/150x80.png', dataAiHint: 'corporate logo' },
  { name: 'Partner 4', logo: 'https://placehold.co/150x80.png', dataAiHint: 'corporate logo' },
  { name: 'Partner 5', logo: 'https://placehold.co/150x80.png', dataAiHint: 'corporate logo' },
  { name: 'Partner 6', logo: 'https://placehold.co/150x80.png', dataAiHint: 'corporate logo' },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] w-full flex items-center justify-center text-white">
        <Image
          src="https://placehold.co/1920x1080.png"
          alt="Nigerian mining landscape"
          layout="fill"
          objectFit="cover"
          className="absolute z-0"
          data-ai-hint="mining landscape"
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="relative z-20 text-center p-4">
          <h1 className="font-headline text-4xl md:text-6xl font-bold text-primary">
            Powering Nigeria&apos;s Progress
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-200">
            The Miners Association of Nigeria (MAN) is the premier organization championing the growth and sustainability of the nation&apos;s mining sector.
          </p>
          <Button asChild size="lg" className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/membership">
              Join the Association <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-accent">Welcome to MAN</h2>
            <p className="mt-2 max-w-3xl mx-auto text-muted-foreground">
              Your gateway to the heart of Nigeria&apos;s mining industry.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Landmark className="h-12 w-12 text-primary" />
              <h3 className="font-headline text-2xl font-semibold mt-4">Our History</h3>
              <p className="mt-2 text-muted-foreground">
                Founded to unite and empower miners across Nigeria, MAN has a rich history of advocacy and development.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m9 12 2 2 4-4"/></svg>
              <h3 className="font-headline text-2xl font-semibold mt-4">Our Mission</h3>
              <p className="mt-2 text-muted-foreground">
                To foster a sustainable and prosperous mining sector through collaboration, innovation, and responsible practices.
              </p>
            </div>
            <div className="flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M2.5 8C2.5 7.44772 2.94772 7 3.5 7H20.5C21.0523 7 21.5 7.44772 21.5 8V18C21.5 18.5523 21.0523 19 20.5 19H3.5C2.94772 19 2.5 18.5523 2.5 18V8Z"/><path d="M7 15L9.5 12.5L12.5 15.5L16.5 11.5L21.5 16.5"/><circle cx="8" cy="11" r="1"/></svg>
              <h3 className="font-headline text-2xl font-semibold mt-4">Our Vision</h3>
              <p className="mt-2 text-muted-foreground">
                To position Nigeria as a leading global mining destination, driven by excellence and ethical standards.
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
              <Link href="/about">
                Learn More About Us <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-accent">Latest News &amp; Events</h2>
            <p className="mt-2 max-w-3xl mx-auto text-muted-foreground">
              Stay informed with the latest happenings in the Nigerian mining industry.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item) => (
              <Card key={item.id} className="overflow-hidden flex flex-col">
                <CardHeader className="p-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover"
                    data-ai-hint={item.dataAiHint}
                  />
                </CardHeader>
                <CardContent className="p-6 flex-grow flex flex-col">
                  <p className="text-sm text-muted-foreground mb-2">{item.date}</p>
                  <CardTitle className="font-headline text-xl mb-2 flex-grow">{item.title}</CardTitle>
                  <p className="text-muted-foreground mb-4">{item.excerpt}</p>
                  <Button asChild variant="link" className="p-0 h-auto self-start text-primary">
                    <Link href="/news">
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-headline text-3xl text-center font-bold text-accent mb-8">
            Our Partners &amp; Affiliates
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {partners.map((partner, index) => (
              <Image
                key={index}
                src={partner.logo}
                alt={partner.name}
                width={150}
                height={80}
                className="object-contain"
                data-ai-hint={partner.dataAiHint}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
