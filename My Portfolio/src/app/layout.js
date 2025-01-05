import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});


export const metadata = {
  title: {
    template: "Maikho Amante Portfolio",
    default: "Maikho Amante Portfolio", 
  },
  description:
    "A unique creative portfolio designed by GuiltyMeow with cutting-edge technologies like Next.js, Tailwind CSS, Three.js, and Framer Motion. Experience the art of modern web development firsthand.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>

        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Maikho Amante Portfolio</title>
      </head>
      <body
        className={clsx(
          inter.variable, 
          "bg-background text-foreground font-inter min-h-screen" 
        )}
      >

        {children}

    
        <div id="my-modal" />
      </body>
    </html>
  );
}
