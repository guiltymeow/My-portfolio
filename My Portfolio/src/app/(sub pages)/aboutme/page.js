"use client";
import Link from 'next/link';
import Image from 'next/image';
import { Orbitron } from 'next/font/google';

const orbitron = Orbitron({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});

export default function AboutmePage() {
  return (
    <div className="min-h-screen bg-transparent">

      <header className={`w-full h-14 flex items-center justify-between fixed top-0 left-0 z-30 px-4 ${orbitron.className} bg-transparent`}>
        <div className="flex items-center pl-[125px]">
          <Link href="/" passHref>
            <Image
              src="/background/Logo.png"
              alt="Logo"
              width={40}
              height={40}
              className="mr-2"
            />
          </Link>
        </div>

        <nav className="flex space-x-6 text-white pr-[125px]">
          <Link href="/" className="hover:text-red-500">Home</Link>
        </nav>
      </header>

      <main className="pt-24 px-6 bg-transparent">
        <div className="flex justify-center mt-10">
          <Image
            src="/images/Profile.png"
            alt="Profile"
            width={150}
            height={150}
            className="rounded-full border-4 border-silver-500 bg-white"
          />
        </div>

        <div className="text-center mt-6">
          <h1 className="text-3xl font-bold text-white" style={{ marginTop: '50px' }}>About Me</h1>
          
          <p className="mt-4 text-lg text-white" style={{ marginTop: '50px' }}>
            Hello, my name is Maikho Amante. I graduated in 2019 with a degree in Business Administration, majoring in Marketing Management.
            I’m originally from Masbate City, Philippines. Growing up, I was passionate about gaming, and that passion still drives me today.
            Gaming has always been a big part of my life and has inspired me to pursue a career to become a developer.
            My dream is to create my own applications or software and, one day, launch it to the world.
          </p>

          <p className="mt-4 text-lg text-white" style={{ marginTop: '50px' }}>
            I am a passionate pet lover with a special affinity for dogs and cats. In addition to my hobbies, I am actively involved in digital farming,
            collaborating with the Department of Agriculture to train farmers on effectively utilizing the internet and mobile applications. 
            My focus is on helping them navigate e-commerce platforms, social media, and online marketing tools.
            By educating farmers on platforms such as Facebook Marketplace, Shopee, Lazada, and even international e-commerce sites, 
            we aim to empower them to expand their reach and boost their sales.
          </p>

          <p className="mt-4 text-lg text-white" style={{ marginTop: '50px' }}>
            I started my career in mobile and web development in 2022. Initially, I was set to apply for a position as a police officer 
            after receiving my eligibility. However, I later discovered that I have spinal stenosis, which causes back pain when lifting heavy objects.
            As a result, I decided to pursue my dream of becoming a developer. I began learning on my own, conducting research and diving into coding.
            For me, coding is not only fun but also a way to think creatively and solve problems. I find excitement in learning new things, especially when 
            faced with challenges that require finding solutions. Resources and tools like Stack Overflow and AI have been invaluable in helping me identify and resolve bugs.
            Additionally, using console logs has helped me identify potential issues and understand where they occur, which has been crucial in improving my skills and becoming a better developer.
          </p>
        </div>
      </main>
    </div>
  );
}
