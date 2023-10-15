import "./globals.css";
import { IBM_Plex_Mono, Montserrat } from "next/font/google";
import { Header, Navbar } from "@/components";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["400", "500", "700"],
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-ibm-plex-mono",
  weight: ["400", "700"],
});

export const metadata = {
  title: "Marin Badrov - Software Developer",
  description: "Marin is a Full Stack Software Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${ibmPlexMono.variable}`}
    >
      <head>
        <link rel="icon" sizes="any" href="/favicon.ico" />
      </head>
      <body className="bg-background text-text font-sans">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
