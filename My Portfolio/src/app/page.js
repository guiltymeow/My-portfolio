 'use client'
import React, { useEffect, useState } from "react";
import Image from 'next/image';
import { Orbitron } from 'next/font/google';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import RenderModel from "@/components/RenderModel";
import AboutDetails from "@/components/about";
import Form from "@/components/contact/Form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

const ParticlesBackground = dynamic(() => import("../components/ParticlesBackground"), { ssr: false });
const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '700'],
});
const Roboface = dynamic(() => import("@/components/models/Roboface"), {
  ssr: false,
});

export default function Home() {
  const [typedText, setTypedText] = useState('');
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState('typing');
  const [displayText, setDisplayText] = useState("マイコ");

  const [showFooter, setShowFooter] = useState(false);
  const [showLoadingVideo, setShowLoadingVideo] = useState(true);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const textToType1 = "マイコ";
  const textToType2 = "MAIKHO ";

  useEffect(() => {
    const videoPlayed = localStorage.getItem("videoPlayed");
    if (videoPlayed === "true") {
      setShowLoadingVideo(false); // Hide video if it has been played already
    }
  }, []);

  const handleVideoEnd = () => {
    localStorage.setItem("videoPlayed", "true");
    setShowLoadingVideo(false); // Hide video after it finishes
  };

  useEffect(() => {
    let interval;

    if (phase === 'typing') {
      interval = setInterval(() => {
        const textToType = displayText === textToType1 ? textToType1 : textToType2;

        if (index < textToType.length) {
          setTypedText((prev) => prev + textToType.charAt(index));
          setIndex(index + 1);
        } else {
          clearInterval(interval);
          setTimeout(() => {
            setPhase('erasing');
          }, 1000);
        }
      }, 150);
    }

    if (phase === 'erasing') {
      interval = setInterval(() => {
        if (index > 0) {
          setTypedText((prev) => prev.slice(0, index - 1));
          setIndex(index - 1);
        } else {
          clearInterval(interval);
          setTimeout(() => {
            setPhase('typing');
            setIndex(0);
            setDisplayText(displayText === textToType1 ? textToType2 : textToType1);
          }, 1000);
        }
      }, 100);
    }

    return () => clearInterval(interval);
  }, [phase, index, displayText]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsNavbarVisible(false);
      } else {
        setIsNavbarVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  useEffect(() => {
    const handleScroll = () => {
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 1;
      setShowFooter(isAtBottom);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main className={`flex min-h-screen flex-col items-start justify-between relative ${orbitron.className}`}>
      {/* Show the loading video only once */}
      {showLoadingVideo && (
        <div className="video-container fixed inset-0 z-30 bg-black flex items-center justify-center">
          <video
            src="/video/Loading Bar.mp4"
            autoPlay
            muted
            onEnded={handleVideoEnd}  // Handle video end to hide video
            className="object-cover w-full h-full"
          />
        </div>
      )}

      {/* Show main content after the video */}
      {!showLoadingVideo && (
        <>
          <ParticlesBackground />
          
          {/* Navbar and other sections */}
          <header
            className={`w-full h-14 flex items-center justify-between fixed top-0 left-0 z-20 px-4 transition-transform duration-300 ease-in-out ${isNavbarVisible ? 'transform translate-y-0' : 'transform -translate-y-full'}`}
            style={{ backgroundColor: 'black', paddingTop: '25px' }}
          >
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

            <nav className="flex space-x-6 text-white" style={{ paddingRight: '125px', color: 'white', fontStyle: 'bold' }}>
              <Link href="/projects" className="hover:text-red-500">Projects</Link>
            </nav>
          </header>

          {/* Main Content */}
          <section className="flex flex-col items-start justify-start text-left text-white mt-36 pl-[75px]" style={{ marginTop: '200px' }}>
            <h1 className="text-6xl md:text-3xl font-regular mb-6">Hello, I&apos;m</h1>
            <h2 className="text-7.5xl md:text-9xl font-extrabold mb-7">
              <span className="typing-effect">{typedText}</span>
            </h2>
            <p className="text-1.5xl md:text-1.5xl" style={{ color: 'red' }}>
              CREATIVE BACK-END DEVELOPER FOR MOBILE AND WEB DEVELOPMENT
            </p>
          </section>

          {/* Other Sections */}
          <div className="w-full h-3/5 xs:h-3/4 sm:h-screen absolute top-1/2 -translate-y-1/2 left-0 z-10" style={{ marginTop: '-800px' }}>
            <RenderModel>
              <Roboface />
            </RenderModel>
          </div>

          {/* Footer */}
          <div className="flex flex-col items-center justify-center text-center mt-[700px] w-full">
            <h1 className={`font-bold text-6xl xs:text-7xl sm:text-8xl lg:text-9xl text-accent ${orbitron.className}`} style={{ color: 'red' }}>
              GuiltyMeow
            </h1>
            <p className="font-light text-foreground text-lg mt-4" style={{ color: "white", marginTop: '100px' }}>
              Meet the Innovator
            </p>
            <div className="flex justify-center mt-4">
              <Link href="/aboutme">
                <button className="px-6 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg" style={{ marginTop: '100px' }}>
                  Learn more about me
                </button>
              </Link>
            </div>
          </div>

          <AboutDetails />

          <div className="flex flex-col items-center justify-center space-y-6 w-full max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
            <h1 className={`text-accent font-semibold text-center text-4xl sm:text-5xl md:text-6xl capitalize ${orbitron.className}`} style={{ color: "red" }}>
              Want to Hire me?
            </h1>
            <p className="text-center font-light text-sm sm:text-base md:text-lg" style={{ color: "white" }}>
              As a junior developer, I bring fresh creativity, strong problem-solving skills, and a passion for learning.
              I&apos;m eager to contribute to your team by tackling challenges and delivering efficient, results-driven solutions.
              With a focus on growing my skills and adding value to your projects, I&apos;m ready to help elevate your team&apos;s performance and support your goals.
            </p>
          </div>

          {showFooter && (
            <footer className="w-full h-8 flex items-center justify-center fixed bottom-0 left-0 z-20" style={{ backgroundColor: 'black' }}>
              <p className="text-white text-xs">© 2024 GuitlyMeow</p>
            </footer>
          )}

          <Form />
        </>
      )}

      <style jsx>{`
        .typing-effect {
          display: inline-block;
          white-space: nowrap;
          border-right: 3px solid red;
          padding-right: 4px;
          animation: blink 0.7s infinite;
        }

        @keyframes blink {
          50% {
            border-color: transparent;
          }
        }

        .video-container {
          z-index: 9999;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </main>
  );
}
