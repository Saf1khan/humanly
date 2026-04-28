import type { Metadata } from 'next';
import './globals.css';
import { Nav } from '@/components/layout/Nav';

export const metadata: Metadata = {
  title: 'Humanly | Smarter health starts from within',
  description: 'The new standard in personal wellness.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {/* Global film grain overlay — pointer-events:none, z-index 9999 */}

        <Nav />
        {children}
      </body>
    </html>
  );
}
