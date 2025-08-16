import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { PlayCircle } from 'lucide-react';

const photos = [
  { src: 'https://placehold.co/600x400.png', alt: 'Mining site operations', dataAiHint: 'mining site' },
  { src: 'https://placehold.co/400x600.png', alt: 'Miners with equipment', dataAiHint: 'miner portrait' },
  { src: 'https://placehold.co/600x400.png', alt: 'Community engagement event', dataAiHint: 'community meeting' },
  { src: 'https://placehold.co/600x400.png', alt: 'Annual General Meeting', dataAiHint: 'conference hall' },
  { src: 'https://placehold.co/600x400.png', alt: 'Mineral processing plant', dataAiHint: 'industrial machinery' },
  { src: 'https://placehold.co/400x600.png', alt: 'Geological survey', dataAiHint: 'geologist field' },
  { src: 'https://placehold.co/600x400.png', alt: 'Safety training session', dataAiHint: 'safety training' },
  { src: 'https://placehold.co/600x400.png', alt: 'Unprocessed gold ore', dataAiHint: 'gold ore' },
];

const videos = [
  {
    title: 'A Day at a Nigerian Mine',
    thumbnail: 'https://placehold.co/600x400.png',
    dataAiHint: 'mining documentary'
  },
  {
    title: 'MAN President\'s 2023 Address',
    thumbnail: 'https://placehold.co/600x400.png',
    dataAiHint: 'public speaking'
  },
  {
    title: 'Investing in Nigeria\'s Future',
    thumbnail: 'https://placehold.co/600x400.png',
    dataAiHint: 'investment seminar'
  },
];

export default function GalleryPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="relative h-48 bg-secondary flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-accent">Gallery</h1>
          <p className="mt-2 text-lg text-muted-foreground">A visual journey through Nigeria&apos;s mining landscape.</p>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-headline text-3xl font-bold text-accent mb-8">Photos</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {photos.map((photo, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-md group">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={600}
                  height={index % 3 === 1 ? 600 : 400}
                  className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
                  data-ai-hint={photo.dataAiHint}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Gallery Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="font-headline text-3xl font-bold text-accent mb-8">Videos</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <Card key={index} className="overflow-hidden group">
                <CardContent className="p-0 relative">
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                    data-ai-hint={video.dataAiHint}
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-100 opacity-0">
                    <PlayCircle className="h-16 w-16 text-white" />
                  </div>
                  <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <h3 className="font-headline text-lg text-white font-semibold">{video.title}</h3>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
