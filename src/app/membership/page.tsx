import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, Building, User, GraduationCap } from 'lucide-react';
import { MembershipForm } from './MembershipForm';

const benefits = [
  'Advocacy and Representation at Government Levels',
  'Access to Exclusive Industry Reports and Data',
  'Networking Opportunities with Key Stakeholders',
  'Discounts on Conferences, Workshops, and Training',
  'Participation in Policy Formulation',
  'Access to a Platform for Business Linkages',
  'Regular Updates on Industry Trends and Regulations',
  'Support and Guidance on Operational Challenges',
];

const categories = [
  {
    icon: <Building className="h-10 w-10 text-primary" />,
    title: 'Corporate Membership',
    description: 'For mining companies, exploration firms, and related service providers.',
    features: ['Up to 5 representatives', 'Priority event sponsorship', 'Corporate listing in directory'],
  },
  {
    icon: <User className="h-10 w-10 text-primary" />,
    title: 'Individual Membership',
    description: 'For professionals, consultants, and sole proprietors in the mining sector.',
    features: ['Full voting rights', 'Access to all publications', 'Individual directory listing'],
  },
];

export default function MembershipPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="relative h-48 bg-secondary flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-accent">Join Our Community</h1>
          <p className="mt-2 text-lg text-muted-foreground">Become a part of the leading voice in the Nigerian mining industry.</p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl font-bold text-accent">Benefits of Membership</h2>
            <p className="mt-2 max-w-2xl mx-auto text-muted-foreground">
              Unlock a wealth of resources, opportunities, and support by joining MAN.
            </p>
          </div>
          <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-x-8 gap-y-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-green-700 mt-1 shrink-0" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl font-bold text-accent">Membership Categories</h2>
            <p className="mt-2 max-w-2xl mx-auto text-muted-foreground">
              Choose the plan that best fits your needs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {categories.map((category, index) => (
              <Card key={index} className="flex flex-col">
                <CardHeader className="items-center text-center">
                  {category.icon}
                  <CardTitle className="font-headline text-2xl mt-4">{category.title}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {category.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-700" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="font-headline text-3xl text-accent">Register Now</CardTitle>
                <CardDescription>Fill out the form below to begin your application process.</CardDescription>
              </CardHeader>
              <CardContent>
                <MembershipForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
