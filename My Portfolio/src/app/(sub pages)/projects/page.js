"use client";

import { Orbitron } from 'next/font/google';
import ProjectList from "@/components/projects";
import { projectsData } from "../../data";
import RenderModel from "@/components/RenderModel";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from 'next/image';
import React, { useEffect, useState } from "react";

const Waving = dynamic(() => import("@/components/models/Waving"), { ssr: false });

const orbitron = Orbitron({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});

export default function ProjectsPage() {
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollPosition = window.innerHeight + window.scrollY;
      setIsAtBottom(scrollPosition >= scrollHeight - 1);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  return (
    <>
      {/* Header Section */}
      <header className={`w-full h-14 flex items-center justify-between fixed top-0 left-0 z-30 px-4 ${orbitron.className}`} style={{ backgroundColor: 'transparent' }}>
        <div className="flex items-center" style={{ paddingLeft: '125px' }}>
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

        <nav className="flex space-x-6 text-white" style={{ paddingRight: '125px' }}>
          <Link href="/" className="hover:text-red-500">Home</Link>
        </nav>
      </header>

      {/* New Div for Image */}
      <div className="w-full flex justify-center my-8 space-x-4">
        <Image
          src="/images/1.png"
          alt="Image 1"
          width={250}
          height={175}
          className="rounded shadow-md"
        />
        <Image
          src="/images/2.png"
          alt="Image 2"
          width={250}
          height={175}
          className="rounded shadow-md"
        />
        <Image
          src="/images/3.png"
          alt="Image 3"
          width={250}
          height={175}
          className="rounded shadow-md"
        />
        <Image
          src="/images/4.png"
          alt="Image 4"
          width={250}
          height={175}
          className="rounded shadow-md"
        />
      </div>

      <div style={{ margin: "top 100px", color: "red" }}>
        <h1>
          Please click ↓
        </h1>
      </div>


      <div className="w-full max-w-auto xl:max-w-4xl px-4 mx-auto lg:px-16 space-y-6 md:space-y-8 flex flex-col items-center z-0 relative" style={{ marginTop: "20px" }} >
        <ProjectList projects={projectsData} />
      </div>

      <div className="w-full flex justify-center my-8 space-x-4" style={{ marginTop: "100px" }}>
        <Image
          src="/images/6.jpeg"
          alt="Image 6"
          width={250}
          height={175}
          className="rounded shadow-md"
        />
        <Image
          src="/images/7.jpeg"
          alt="Image 7"
          width={250}
          height={175}
          className="rounded shadow-md"
        />
        <Image
          src="/images/8.jpeg"
          alt="Image 8"
          width={250}
          height={175}
          className="rounded shadow-md"
        />
        <Image
          src="/images/5.jpeg"
          alt="Image 5"
          width={250}
          height={175}
          className="rounded shadow-md"
        />
      </div>


      <div style={{ marginTop: "200px" }}>
        <a
          href="https://github.com/guiltymeow"
          target="_blank"
          style={{ fontSize: "2em", color: "red"}}
         
        >
          GuiltyMeow Github
        </a>
      </div>

      <footer
        className={`w-full h-8 flex items-center justify-center fixed bottom-0 left-0 z-20 transition-all duration-300 ${isAtBottom ? 'bottom-0' : 'bottom-[-50px]'}`}
        style={{ backgroundColor: '#282424' }}
      >
        <p className="text-white text-xs">© 2024 GuitlyMeow</p>
      </footer>
    </>
  );
}
