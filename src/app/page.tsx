import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Landmark } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

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
          src="https://images.unsplash.com/photo-1618828665011-0abd973f7bb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxuaWdlcmlhfGVufDB8fHx8MTc1NTQyNDQ3N3ww&ixlib=rb-4.1.0&q=80&w=1080"
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
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-accent">Welcome to The Miners Association of Nigeria (MAN)</h2>
            <p className="mt-2 max-w-3xl mx-auto text-muted-foreground">
              Your gateway to the heart of Nigeria&apos;s mining industry. We are a national organization representing individuals and companies involved in mineral resource exploration and exploitation in Nigeria.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Landmark className="h-12 w-12 text-primary" />
              <h3 className="font-headline text-2xl font-semibold mt-4">Our Members</h3>
              <p className="mt-2 text-muted-foreground">
                MAN&apos;s membership includes exploration, quarry, and mining companies, as well as service and consultancy firms related to the mining sector.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m9 12 2 2 4-4"/></svg>
              <h3 className="font-headline text-2xl font-semibold mt-4">Our Mission</h3>
              <p className="mt-2 text-muted-foreground">
                To empower operators to mine with ease, fostering wealth creation and employment opportunities.
              </p>
            </div>
            <div className="flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M2.5 8C2.5 7.44772 2.94772 7 3.5 7H20.5C21.0523 7 21.5 7.44772 21.5 8V18C21.5 18.5523 21.0523 19 20.5 19H3.5C2.94772 19 2.5 18.5523 2.5 18V8Z"/><path d="M7 15L9.5 12.5L12.5 15.5L16.5 11.5L21.5 16.5"/><circle cx="8" cy="11" r="1"/></svg>
              <h3 className="font-headline text-2xl font-semibold mt-4">Our Vision</h3>
              <p className="mt-2 text-muted-foreground">
                To create a conducive environment for mining activities through positive engagement with the government.
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
      
      {/* How to Join Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="font-headline text-3xl text-accent">How to Join MAN</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground mb-6">
                Ready to join us? To become a member, you&apos;ll need to have a connection to the mining industry. The process is straightforward: fill out our application form, provide the necessary information and documents, and pay the required fees to get started.
                </p>
                <div className="text-center">
                   <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                      <Link href="/membership">
                        Start Your Application <ArrowRight className="ml-2" />
                      </Link>
                    </Button>
                </div>
              </CardContent>
            </Card>
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
