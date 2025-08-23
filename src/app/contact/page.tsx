import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, MapPin, Phone } from 'lucide-react';
import { ContactForm } from './ContactForm';

export default function ContactPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="relative h-48 bg-secondary flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-accent">Contact Us</h1>
          <p className="mt-2 text-lg text-muted-foreground">We&apos;d love to hear from you. Get in touch with us.</p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info & Map */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="font-headline text-2xl font-semibold text-accent mb-4">Our Office</h2>
                <div className="space-y-4 text-muted-foreground">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-primary mt-1 shrink-0" />
                    <p>NEXIM House (1st Floor) Plot 975 Cadastral Zone AO, Central Business District, Abuja, Nigeria</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="h-6 w-6 text-primary shrink-0" />
                    <p>+234 800 123 4567</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail className="h-6 w-6 text-primary shrink-0" />
                    <p>info@man.org.ng</p>
                  </div>
                </div>
              </div>
              <div>
                 <h2 className="font-headline text-2xl font-semibold text-accent mb-4">Location</h2>
                 <div className="aspect-video w-full rounded-lg overflow-hidden shadow-md">
                   <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.485655761895!2d7.48701617415277!3d9.060146889212053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0a5d24b69329%3A0x1b44a47514781a7a!2sNEXIM%20House!5e0!3m2!1sen!2sng!4v1755500000000!5m2!1sen!2sng"
                      width="600"
                      height="450"
                      style={{ border: 0 }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full h-full"
                    ></iframe>
                 </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <Card>
                <CardHeader>
                  <CardTitle className="font-headline text-2xl text-accent">Send us a Message</CardTitle>
                  <CardDescription>
                    For inquiries, support, or feedback, please fill out the form below.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ContactForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
