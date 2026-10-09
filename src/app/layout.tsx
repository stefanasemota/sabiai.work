import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  metadataBase: new URL('https://sabiai.work'),
  title: {
    default: 'SABI AI - Knowledge at Work | Ecosystem Launchpad',
    template: '%s | SABI AI',
  },
  description:
    'Sabi AI Launchpad: Curated ecosystem of niche productivity, cultural intelligence, and community wellness applications including NaijaSpeak, Mile 2 Radio, Our Mumu Don Do, Refine, and Aqualog.',
  keywords: [
    'Sabi AI',
    'Sabi Ecosystem',
    'NaijaSpeak',
    'Mile 2 Radio',
    'Our Mumu Don Do',
    'Nigerian Pidgin English',
    'Afrobeat radio streaming',
    'Nigerian heritage education',
    'Refine AI prompt engineering',
    'Agile Facilitator',
    'Aqualog coldwater swimming',
    'African AI solutions',
    'Cultural intelligence tools',
  ],
  applicationName: 'SABI AI Ecosystem',
  authors: [{ name: 'Sabi AI', url: 'https://sabiai.work' }],
  creator: 'Sabi AI',
  publisher: 'Sabi AI',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'SABI AI - Knowledge at Work | Ecosystem Launchpad',
    description:
      'Curated launchpad for projects that blend niche productivity, cultural context, and community wellness.',
    url: 'https://sabiai.work',
    siteName: 'SABI AI',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/web-app-manifest-512x512.png',
        width: 512,
        height: 512,
        alt: 'SABI AI Ecosystem Launchpad',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SABI AI - Knowledge at Work',
    description:
      'Curated launchpad for projects that blend niche productivity, cultural context, and community wellness.',
    images: ['/web-app-manifest-512x512.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any', type: 'image/x-icon' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://sabiai.work/#organization',
      name: 'SABI AI',
      url: 'https://sabiai.work',
      logo: 'https://sabiai.work/web-app-manifest-512x512.png',
      description: 'Niche productivity, cultural context, and community AI solutions.',
      sameAs: [
        'https://naijaspeak.sabiai.work',
        'https://m2r.sabiai.work',
        'https://our-mumu-don-do.sabiai.work',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://sabiai.work/#website',
      url: 'https://sabiai.work',
      name: 'SABI AI Launchpad',
      publisher: {
        '@id': 'https://sabiai.work/#organization',
      },
    },
    {
      '@type': 'ItemList',
      name: 'Sabi Ecosystem Applications',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          item: {
            '@type': 'WebApplication',
            name: 'NaijaSpeak',
            url: 'https://naijaspeak.sabiai.work',
            description: 'AI-driven Nigerian Pidgin English translation, dictionary, and cultural knowledge platform.',
            applicationCategory: 'EducationalApplication',
          },
        },
        {
          '@type': 'ListItem',
          position: 2,
          item: {
            '@type': 'WebApplication',
            name: 'Mile 2 Radio',
            url: 'https://m2r.sabiai.work/dashboard',
            description: 'Live Afrobeat listener station with real-time synchronized streaming and interactive lyrics.',
            applicationCategory: 'MultimediaApplication',
          },
        },
        {
          '@type': 'ListItem',
          position: 3,
          item: {
            '@type': 'WebApplication',
            name: 'Our Mumu don Do',
            url: 'https://our-mumu-don-do.sabiai.work',
            description: 'Educational storytelling and critical thinking platform for Nigerian youth.',
            applicationCategory: 'EducationalApplication',
          },
        },
        {
          '@type': 'ListItem',
          position: 4,
          item: {
            '@type': 'WebApplication',
            name: 'Aqualog',
            url: 'https://aqualog.asemota.ch',
            description: 'Intelligent tracking and wellness platform for coldwater swimmers.',
            applicationCategory: 'HealthApplication',
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={cn('antialiased font-body')}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
