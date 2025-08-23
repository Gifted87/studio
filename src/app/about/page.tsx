import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Landmark, User, Users } from 'lucide-react';

const leadershipTeam = [
  {
    name: "Mr 'Dele Ayanleke",
    title: 'National President',
    bio: "Born over six decades ago, he holds a Higher Diploma in Marketing and an MBA. He has been in the mining industry since 1999 and is the Director of Operations of Topmost Minerals and Allied Resources Limited. He was elected National President on 3rd August, 2023.",
    image: 'https://i.ibb.co/D22N9jN/IMG-20250813-WA0007.jpg',
    initials: 'DA',
    dataAiHint: 'professional headshot man',
  },
  {
    name: 'Hon. Ibrahim Mohammed Danyaro',
    title: '1st Vice-President',
    bio: 'Born in 1965, Hon. Danyaro has a background in education and politics, serving as a local government Chairman. An experienced miner of Gypsum, Phosphate, and Limestone, he owns Danyaro Ventures Nig. Ltd. and holds key leadership roles in the association.',
    image: 'https://i.ibb.co/v6vqxHfk/IMG-20250816-WA0001.jpg',
    initials: 'ID',
    dataAiHint: 'professional headshot man',
  },
  {
      name: 'Jimoh Fatai Kolawole',
      title: 'Public Relations Officer',
      bio: 'An experienced Mining Engineer with over 20 years of experience, currently a PhD student. CEO of Hnf Global Resources Ltd and C.O.O of several other companies. He is a registered member of multiple engineering and geoscientist societies.',
      image: 'https://placehold.co/100x100.png',
      initials: 'JK',
      dataAiHint: 'professional headshot man',
  },
  {
    name: 'Tope Adebanjo',
    title: 'Mining Professional',
    bio: 'With over 20 years of experience, Tope is the MD of Borta-Cup Ventures Limited and founder of Laurel School of Mines. He is a champion of opportunity and believes in achieving dreams through investment opportunities in the mining of Nigeria\'s untapped riches.',
    image: 'https://i.ibb.co/pvHh3cpv/images-28.jpg',
    initials: 'TA',
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
              <h2 className="font-headline text-3xl font-bold text-accent mb-4">Our History & Purpose</h2>
              <p className="text-muted-foreground mb-4">
              The Miners Association of Nigeria (MAN) is a national organization representing individuals and companies involved in mineral resource exploration and exploitation in Nigeria. Our aim is to promote the growth and development of the mining sector in Nigeria.
              </p>
              <p className="text-muted-foreground">
                Over the decades, MAN has been instrumental in shaping government policy, promoting investment, and advocating for safe and environmentally responsible mining practices. Our journey is a testament to the resilience and potential of the Nigerian mining industry.
              </p>
            </div>
            <div>
              <Image
                src="https://images.unsplash.com/photo-1523848309072-c199db53f137?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxtaW5pbmd8ZW58MHx8fHwxNzU1NDMxODY3fDA&ixlib=rb-4.1.0&q=80&w=1080"
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
                <p className="text-muted-foreground">To empower operators to mine with ease, fostering wealth creation and employment opportunities.</p>
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
                <p className="text-muted-foreground">To create a conducive environment for mining activities through positive engagement with the government.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-2xl text-accent flex items-center justify-center gap-2">
                  <Users className="w-7 h-7" />
                  Our Members
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Our membership includes exploration, quarry, and mining companies, as well as service and consultancy firms.</p>
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
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
