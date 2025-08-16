import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, ExternalLink, FileText } from 'lucide-react';
import Link from 'next/link';

const reports = [
  {
    title: 'Annual Nigerian Mining Sector Report 2023',
    description: 'A comprehensive overview of the industry\'s performance, challenges, and opportunities in 2023.',
    fileType: 'PDF',
    fileSize: '5.2 MB',
    link: '#',
  },
  {
    title: 'Guide to Sustainable Mining Practices',
    description: 'Best practice guidelines for environmental management and community relations in mining operations.',
    fileType: 'PDF',
    fileSize: '2.8 MB',
    link: '#',
  },
  {
    title: 'Investment Opportunities in Solid Minerals',
    description: 'An in-depth analysis of high-potential mineral resources for local and foreign investors.',
    fileType: 'PDF',
    fileSize: '8.1 MB',
    link: '#',
  },
  {
    title: 'Artisanal &amp; Small-Scale Mining (ASM) Formalization Framework',
    description: 'A proposed framework for integrating the ASM sector into the formal economy.',
    fileType: 'PDF',
    fileSize: '3.5 MB',
    link: '#',
  },
];

const regulations = [
  {
    title: 'Nigerian Minerals and Mining Act 2007',
    source: 'Ministry of Mines and Steel Development',
    link: '#',
  },
  {
    title: 'National Minerals and Metals Policy (2008)',
    source: 'Federal Government of Nigeria',
    link: '#',
  },
  {
    title: 'Environmental Impact Assessment (EIA) Act',
    source: 'Federal Ministry of Environment',
    link: '#',
  },
  {
    title: 'Community Development Agreement (CDA) Guidelines',
    source: 'Ministry of Mines and Steel Development',
    link: '#',
  },
];

export default function ResourcesPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="relative h-48 bg-secondary flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-accent">Resource Hub</h1>
          <p className="mt-2 text-lg text-muted-foreground">Access key industry documents, reports, and regulations.</p>
        </div>
      </section>

      {/* Reports Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-headline text-3xl font-bold text-accent mb-8">Reports &amp; Publications</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {reports.map((report, index) => (
              <Card key={index} className="flex items-start p-6 gap-4">
                <FileText className="h-8 w-8 text-primary mt-1 shrink-0" />
                <div className="flex-grow">
                  <h3 className="font-headline text-xl font-semibold">{report.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1 mb-3">{report.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground font-mono">{report.fileType} - {report.fileSize}</span>
                    <Button asChild size="sm" variant="outline">
                      <Link href={report.link}>
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Regulations Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="font-headline text-3xl font-bold text-accent mb-8">Government Regulations</h2>
          <Card>
            <CardContent className="p-0">
              <ul className="divide-y">
                {regulations.map((reg, index) => (
                  <li key={index} className="p-6 flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                    <div>
                      <h3 className="font-headline text-lg font-semibold">{reg.title}</h3>
                      <p className="text-sm text-muted-foreground">Source: {reg.source}</p>
                    </div>
                    <Button asChild size="sm" variant="ghost" className="self-start sm:self-center text-primary hover:text-primary">
                      <Link href={reg.link} target="_blank" rel="noopener noreferrer">
                        View Document
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
