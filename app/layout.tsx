import type {Metadata} from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'Umaiz Sufiyan — Student Developer · AI Builder',
  description: 'Personal developer portfolio for Umaiz Sufiyan: Student Developer, AI Builder, and Open-Source Builder behind KageOS and AIRIS-CLI.',
  openGraph: {
    title: 'Umaiz Sufiyan — Student Developer · AI Builder',
    description: 'Personal developer portfolio for Umaiz Sufiyan: Student Developer, AI Builder, and Open-Source Builder behind KageOS and AIRIS-CLI.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Umaiz Sufiyan — Student Developer · AI Builder',
    description: 'Personal developer portfolio for Umaiz Sufiyan: Student Developer, AI Builder, and Open-Source Builder behind KageOS and AIRIS-CLI.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" style={{ margin: 0, padding: 0, height: '100%', width: '100%', overflow: 'hidden' }}>
      <body suppressHydrationWarning style={{ margin: 0, padding: 0, height: '100%', width: '100%', overflow: 'hidden', background: '#08090B' }}>
        {children}
      </body>
    </html>
  );
}
