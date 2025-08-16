import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Landmark } from 'lucide-react';

const leadershipTeam = [
  {
    name: 'Dr. Amina Garba',
    title: 'President',
    bio: 'A seasoned geologist with over 20 years of experience in mineral exploration and policy development. Dr. Garba is passionate about sustainable mining practices.',
    image: 'https://placehold.co/100x100.png',
    initials: 'AG',
    dataAiHint: 'professional headshot',
  },
  {
    name: 'Engr. Tunde Bello',
    title: 'Vice President',
    bio: 'A mining engineer with expertise in large-scale operations and technological innovation. Engr. Bello focuses on modernizing the Nigerian mining sector.',
    image: 'https://placehold.co/100x100.png',
    initials: 'TB',
    dataAiHint: 'professional headshot',
  },
  {
    name: 'Hajiya Fatima Sani',
    title: 'Secretary General',
    bio: 'An expert in regulatory affairs and community relations, Hajiya Sani ensures smooth administrative operations and stakeholder engagement.',
    image: 'https://placehold.co/100x100.png',
    initials: 'FS',
    dataAiHint: 'professional headshot woman',
  },
  {
    name: 'Mr. Chidi Okoro',
    title: 'Treasurer',
    bio: 'A financial analyst with a focus on project financing and investment in the mining industry. Mr. Okoro oversees the financial health of the association.',
    image: 'https://placehold.co/100x100.png',
    initials: 'CO',
    dataAiHint: 'professional headshot man',
  },
];

export default function AboutPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="relative h-48 bg-secondary flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-accent">About Us</h1>
          <p className="mt-2 text-lg text-muted-foreground">Learn about our journey, our purpose, and our people.</p>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-headline text-3xl font-bold text-accent mb-4">Our History</h2>
              <p className="text-muted-foreground mb-4">
                The Miners Association of Nigeria (MAN) was established in 1994 as a response to the growing need for a unified voice for all stakeholders in the country&apos;s solid minerals sector. From a small group of passionate miners, we have grown into a formidable national body, representing the interests of individual miners, corporate entities, and service providers.
              </p>
              <p className="text-muted-foreground">
                Over the decades, MAN has been instrumental in shaping government policy, promoting investment, and advocating for safe and environmentally responsible mining practices. Our journey is a testament to the resilience and potential of the Nigerian mining industry.
              </p>
            </div>
            <div>
              <Image
                src="https://placehold.co/600x400.png"
                alt="Historic mining photo"
                width={600}
                height={400}
                className="rounded-lg shadow-md"
                data-ai-hint="historic mining"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-2xl text-accent flex items-center justify-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m9 12 2 2 4-4"/></svg>
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">To promote and protect the interests of the mining industry in Nigeria, fostering a safe, sustainable, and prosperous sector for all stakeholders.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-2xl text-accent flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 8C2.5 7.44772 2.94772 7 3.5 7H20.5C21.0523 7 21.5 7.44772 21.5 8V18C21.5 18.5523 21.0523 19 20.5 19H3.5C2.94772 19 2.5 18.5523 2.5 18V8Z"/><path d="M7 15L9.5 12.5L12.5 15.5L16.5 11.5L21.5 16.5"/><circle cx="8" cy="11" r="1"/></svg>
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">To be the leading catalyst for Nigeria&apos;s emergence as a top-tier global mining destination, recognized for its rich resources and commitment to best practices.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-2xl text-accent flex items-center justify-center gap-2">
                  <Landmark className="w-7 h-7" />
                  Our Values
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Integrity, Sustainability, Collaboration, Innovation, and Excellence guide every action we take and decision we make.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-accent">Our Leadership</h2>
            <p className="mt-2 max-w-2xl mx-auto text-muted-foreground">
              Meet the dedicated team steering the Miners Association of Nigeria towards a brighter future.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadershipTeam.map((member) => (
              <Card key={member.name} className="text-center">
                <CardContent className="pt-6">
                  <Avatar className="h-24 w-24 mx-auto mb-4">
                    <AvatarImage src={member.image} alt={member.name} data-ai-hint={member.dataAiHint} />
                    <AvatarFallback className="text-3xl bg-primary text-primary-foreground">{member.initials}</AvatarFallback>
                  </Avatar>
                  <h3 className="font-headline text-xl font-semibold">{member.name}</h3>
                  <p className="text-primary font-medium">{member.title}</p>
                  <p className="text-sm text-muted-foreground mt-2">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
