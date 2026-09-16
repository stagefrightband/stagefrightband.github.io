import { cookies } from 'next/headers';
import '@/globals.css';
import HamburgerMenu from "@/components/HamburgerMenu";
import Navbar from "@/components/navbar";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const highContrast = cookieStore.get('highcontrast')?.value === 'true';
  const openDyslexic = cookieStore.get('opendyslexic')?.value === 'true';

  const classNames = [
    highContrast ? 'high-contrast' : '',
    openDyslexic ? 'open-dyslexic' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <html lang="en" className={classNames}>
      <body>
        <HamburgerMenu />
        <Navbar />
        <main id="root">
          {children}
        </main>
      </body>
    </html>
  );
}
