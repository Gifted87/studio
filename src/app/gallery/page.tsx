
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { PlayCircle } from 'lucide-react';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { adminSDK } from '@/lib/firebase';
import { getStorage } from 'firebase-admin/storage';
import { getApps } from 'firebase-admin/app';

async function getGalleryImages() {
  if (getApps().length === 0) {
    adminSDK.initializeApp();
  }
  const storage = getStorage();
  const bucketName = process.env.GCLOUD_STORAGE_BUCKET || `${process.env.GOOGLE_CLOUD_PROJECT}.appspot.com`;
  
  if (!bucketName) {
      console.error("Firebase Storage bucket name is not configured. Set GCLOUD_STORAGE_BUCKET or GOOGLE_CLOUD_PROJECT environment variables.");
      return [
          { src: 'https://placehold.co/600x400.png', alt: 'Configuration error', dataAiHint: 'error' }
      ];
  }

  const bucket = storage.bucket(bucketName);
  
  try {
    const [files] = await bucket.getFiles({ prefix: 'gallery/' });
    
    // Filter out the directory placeholder itself if it exists
    const imageFiles = files.filter(file => !file.name.endsWith('/'));

    if (imageFiles.length === 0) {
        // Return placeholder if no images are found
        return [
            { src: 'https://placehold.co/600x400.png', alt: 'Placeholder Image', dataAiHint: 'mining gallery' }
        ];
    }
    
    const signedUrls = await Promise.all(
      imageFiles.map(async (file) => {
        const [url] = await file.getSignedUrl({
          action: 'read',
          expires: '03-09-2491', // A long-lived expiry date
        });
        return {
          src: url,
          alt: file.name.split('/').pop()?.split('.')[0] || 'Gallery image',
          dataAiHint: 'mining gallery',
        };
      })
    );
    return signedUrls;
  } catch (error) {
    console.error('Error fetching images from Firebase Storage:', error);
    // Return placeholder on error
    return [
        { src: 'https://placehold.co/600x400.png', alt: 'Error loading image', dataAiHint: 'error' }
    ];
  }
}

async function GalleryPhotos() {
    const photos = await getGalleryImages();
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {photos.map((photo, index) => (
            <div key={photo.src || index} className="overflow-hidden rounded-lg shadow-md group aspect-w-1 aspect-h-1">
                <Image
                src={photo.src}
                alt={photo.alt}
                width={600}
                height={600}
                className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
                data-ai-hint={photo.dataAiHint}
                />
            </div>
            ))}
        </div>
    );
}

function GallerySkeleton() {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, index) => (
                <Skeleton key={index} className="w-full h-[250px] rounded-lg" />
            ))}
        </div>
    )
}

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
          <Suspense fallback={<GallerySkeleton />}>
            <GalleryPhotos />
          </Suspense>
        </div>
      </section>
    </div>
  );
}
