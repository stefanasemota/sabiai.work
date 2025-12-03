import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SABI AI - Knowledge at Work',
  description:
    'Niche Productivity & AI Solutions.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
      </head>
      <body className="antialiased flex flex-col justify-between items-center py-16 px-4">
        {children}
      </body>
    </html>
  );
}
