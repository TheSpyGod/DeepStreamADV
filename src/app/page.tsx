"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import "./styles/globals.css";

export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollProgress = scrollY / documentHeight;
    setScrollPosition(scrollProgress);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getOpacity = (pageIndex: number) => {
    const thresholds = [
      { start: 0, end: 0.25 },
      { start: 0.25, end: 0.5 },
      { start: 0.5, end: 0.75 },
      { start: 0.75, end: 1 },
    ];

    const { start, end } = thresholds[pageIndex];
    return scrollPosition >= start && scrollPosition < end ? 1 : 0;
  };

  return (
    <main className="min-h-auto min-w-auto relative">

      {/* Titlescreen Section */}
      <div className="fixed top-0 left-0 w-full h-full" style={{ opacity: getOpacity(0), zIndex: 10 }}>
  <div className="titlescreen flex flex-col gap-4 h-[100vh] w-full items-center justify-center text-center">
    {/* Video Background */}
    <video className="absolute top-0 left-0 w-full h-full object-cover" autoPlay loop muted>
      <source src="water.MP4" type="video/mp4" />
    </video>

    {/* Text Overlay */}
    <div className="font-bold text-5xl sm:text-6xl relative flex z-10">
      <span className="text-white px-4">Looking for </span>
      <span className="relative inline-block h-[1.2em] min-w-[12ch] align-middle overflow-hidden">
        <span className="rotating-text block">adventure?</span>
        <span className="rotating-text block">exploration?</span>
        <span className="rotating-text block">the thrill?</span>
      </span>
    </div>

    <button className="relative z-10 rounded bg-[var(--accent1)] mx-auto px-5 p-2 text-2xl text-white font-bold transition-transform duration-3000 hover:bg-[var(--accent-activatedlight)]">
      Call Now!
    </button>
  </div>
</div>

      {/* Other sections */}
      <div className="relative flex flex-col bg-[var(--background)] h-[300vh] w-full items-center text-center">
        {/* Image highlight section */}
        <div
          className="imagehighlight fixed flex flex-col p-5 text-black text-7xl bg-gradient-to-r from-black to-black h-[100vh] items-center justify-center text-center top-0 left-0 w-full z-10 transition-opacity duration-1000 will-change-opacity"
          style={{ opacity: getOpacity(1) }}
        >

            <video className="absolute top-0 left-0 w-full h-full object-cover" autoPlay loop muted>
            <source src="try1.mp4" type="video/mp4" />
            </video>
        </div>

        {/* Background section 1 */}
        <div
          className="imagebg fixed flex flex-col bg-[url('/view.jpg')] h-[100vh] bg-cover w-full bg-center items-center justify-center text-center absolute top-0 left-0 w-full z-0 transition-opacity duration-1000 will-change-opacity"
          style={{ opacity: getOpacity(2) }}
        >
          <p className="text-5xl text-[var(--accent2)]">
            Competent <span className="text-[var(--accent1)]"> Dive Master, <br /> Full Training </span> and{" "}
            <span className="text-[var(--accent1)]">Overview</span>
          </p>
          <p className="text-white">this covers: </p>
          <br />
          <br />
          <ol className="list-disc marker:text-[var(--accent1)] text-white">
            <li>Example</li>
            <li>Example</li>
            <li>Example</li>
          </ol>
        </div>

        {/* Background section 2 */}
        <div
          className="imagebg fixed flex flex-col bg-[url('/fish1.jpg')] h-[100vh] bg-cover w-full bg-center items-center justify-center text-center absolute top-0 left-0 w-full z-0 transition-opacity duration-1000 will-change-opacity"
          style={{ opacity: getOpacity(3) }}
        >
          <p className="text-white text-5xl">
            Outside <span className="text-[var(--accent1)]">preparation </span>
            <br />
            and <span className="text-[var(--accent1)]">full training</span>
          </p>
        </div>

        {/* Background section 3 */}
        <div
          className="imagebg fixed flex flex-col bg-[url('/plato.jpg')] h-[100vh] bg-cover w-full bg-center items-center justify-center text-center absolute top-0 left-0 w-full z-0 transition-opacity duration-1000 will-change-opacity"
          style={{ opacity: getOpacity(3) }}
        >
          <p className="text-white text-5xl">
            Outside <span className="text-[var(--accent1)]">preparation </span>
            <br />
            and <span className="text-[var(--accent1)]">full training</span>
          </p>
        </div>
      </div>
    </main>
  );
}
