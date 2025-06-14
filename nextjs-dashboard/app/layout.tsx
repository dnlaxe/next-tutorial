import '@/app/ui/global.css';
import { lato } from '@/app/ui/fonts'; // ✅ Make sure this line exists

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${lato.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
