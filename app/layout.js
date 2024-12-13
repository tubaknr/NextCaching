import "./globals.css";
import Header from "@/components/header";

export const metadata = {
  title: 'Next.js Caching',
  description: 'Learn how Next.js caching works',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        
        <Header />
        <main>
          {children}
        </main>
        </body>
    </html>
  );
}
