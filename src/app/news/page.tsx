import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Calendar, MapPin } from 'lucide-react';

const newsItems = [
  {
    id: 1,
    title: 'MAN Holds Annual General Meeting in Abuja',
    date: 'October 26, 2023',
    excerpt: 'The association discussed key issues and elected new executives for the coming year. The event was attended by key stakeholders from across the country.',
    image: 'https://placehold.co/800x600.png',
    dataAiHint: 'conference meeting',
  },
  {
    id: 2,
    title: 'New Federal Policy on Artisanal Mining Released',
    date: 'October 15, 2023',
    excerpt: 'The federal government has released new guidelines aimed at formalizing the artisanal mining sector, a move welcomed by MAN for its potential to improve safety and economic output.',
    image: 'https://placehold.co/800x600.png',
    dataAiHint: 'government building',
  },
  {
    id: 3,
    title: 'Community Development Project Launched in Jos, Plateau State',
    date: 'September 30, 2023',
    excerpt: 'In partnership with local communities, MAN has launched a new project to improve infrastructure and provide educational resources for families in mining areas.',
    image: 'https://placehold.co/800x600.png',
    dataAiHint: 'community project',
  },
  {
    id: 4,
    title: 'MAN Partners with International Body on Safety Standards',
    date: 'September 1, 2023',
    excerpt: 'A new partnership aims to bring global best practices in mine safety to Nigeria, with a series of workshops planned for the new year.',
    image: 'https://placehold.co/800x600.png',
    dataAiHint: 'safety equipment',
  },
];

const events = [
  {
    id: 1,
    title: 'Nigeria Mining Week',
    date: 'November 12-14, 2023',
    location: 'International Conference Center, Abuja',
    description: 'The premier annual event for all mining stakeholders in Nigeria, featuring exhibitions, panel discussions, and networking sessions.',
  },
  {
    id: 2,
    title: 'Workshop on Sustainable Mining Practices',
    date: 'December 5, 2023',
    location: 'Enugu, Nigeria',
    description: 'A hands-on workshop for mine operators on implementing environmentally friendly and sustainable mining techniques.',
  },
  {
    id: 3,
    title: 'Investment in Mining Forum',
    date: 'January 20, 2024',
    location: 'Lagos, Nigeria',
    description: 'Connecting local miners with international investors to explore financing opportunities for mining projects.',
  },
];

export default function NewsPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="relative h-48 bg-secondary flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-accent">News &amp; Events</h1>
          <p className="mt-2 text-lg text-muted-foreground">Stay current with the latest developments and opportunities.</p>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-headline text-3xl font-bold text-accent mb-8">Latest News</h2>
          <div className="grid md:grid-cols-1 gap-8">
            {newsItems.map((item) => (
              <Card key={item.id} className="overflow-hidden grid md:grid-cols-3">
                <div className="md:col-span-1">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover"
                    data-ai-hint={item.dataAiHint}
                  />
                </div>
                <div className="md:col-span-2">
                    <CardHeader>
                        <p className="text-sm text-muted-foreground">{item.date}</p>
                        <CardTitle className="font-headline text-2xl">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground mb-4">{item.excerpt}</p>
                        <Button asChild variant="link" className="p-0 h-auto self-start text-primary">
                            <Link href="#">
                            Read More <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="font-headline text-3xl font-bold text-accent mb-8">Upcoming Events</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <Card key={event.id} className="flex flex-col">
                <CardHeader>
                  <CardTitle className="font-headline text-xl">{event.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                    <div className="space-y-3 text-muted-foreground flex-grow">
                        <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            <span>{event.date}</span>
                        </div>
                        <div className="flex items-start gap-2">
                            <MapPin className="h-4 w-4 mt-1 shrink-0" />
                            <span>{event.location}</span>
                        </div>
                        <p className="text-sm pt-2">{event.description}</p>
                    </div>
                    <Button variant="outline" className="mt-6 w-full border-primary text-primary hover:bg-primary/10">Learn More</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
