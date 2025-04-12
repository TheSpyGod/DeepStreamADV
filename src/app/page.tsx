import Image from "next/image";
import "./styles/globals.css";
export default function Home() {
  return (
    <main className="min-h-auto min-w-auto">
      <div className="header p-3 rounded-full top-0 sticky wx-full container bg-white mx-auto flex flex-row justify-between border-box border-border place-items-center content-center items-center w-full">
        {/* Services should be the main selling point, HIGHLIGHT IT! */}
        
        <div className="text-black px-2 font-bold">
          <Image 
            src="/diver.svg"
            alt="ABM Logo"
            width={60} 
            height={0}
            layout="intrinsic" />
        </div>

        <div className="flex gap-6">
          <button className="flex items-center justify-center bg-[var(--accent1)] h-auto w-auto text-center text-white font-bold p-2 rounded-full px-5 transition-transform duration-3000 hover:bg-[var(--accent-activatedlight)]">Explore<b>.</b></button>
          <button className="flex items-center justify-center bg-[var(--accent2)] h-auto w-auto text-white font-normal p-2 rounded-full px-5 transition-transform duration-3000 hover:bg-[var(--accent-activateddark)]">About<b>.</b></button>
          <button className="flex items-center justify-center bg-[var(--accent2)] h-auto w-auto text-white font-normal p-2 rounded-full px-5 transition-transform duration-3000 hover:bg-[var(--accent-activateddark)]">Contact<b>.</b></button>
        </div>


        <div className="text-black px-5">
        </div>

      </div>


      <div className="titlescreen flex flex-col gap-4 h-[100vh] w-full items-center justify-center text-center relative">
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

  <button className="rounded bg-[var(--accent1)] mx-auto px-5 p-2 text-2xl text-white font-bold transition-transform duration-3000 hover:bg-[var(--accent-activatedlight)]">
    Call Now!
  </button>
</div>

      <div className="flex flex-col bg-[var(--background)] h-[300vh] p-0 px-0 w-full items-center text-center">
        
        {/* Slide in services, aka. Images with examples and sliding text with images */}
     
      <div className="text-black font-bold w-full">
        <div className="imagehighlight flex flex-col p-5 text-black text-7xl bg-gradient-to-r from-black to-black h-[100vh] items-center justify-center text-center">

        <Image 
            src="/oxygentank.png"
            alt="ABM Logo"
            width={60} 
            height={0}
            layout="intrinsic" />
            <h1 className="text-xl font-normal">Oxygen Tank Customization<br/><b className="font-bold text-[var(--accent-activateddark)]">COMING SOON.</b></h1>
        </div>
      <div className="imagebg flex flex-col bg-[url('/view.jpg')] h-[100vh] bg-cover w-full bg-center items-center justify-center text-center relative">

        <p className="text-5xl text-[var(--accent2)]">Competent <span className="text-[var(--accent1)]"> Dive Master, <br/> Full Training </span> and <span className="text-[var(--accent1)]">Overview</span></p>
        <p className="text-[var(--accent2)]">this covers: </p>
        <br/><br/>
        <ol className="list-disc marker:text-[var(--accent1)] text-white"> 
          <li>Example</li>
          <li>Example</li>
          <li>Example</li>
        </ol>
      </div>

          <div className=" imagebg flex flex-col bg-[url('/plato.jpg')] h-[100vh] bg-cover w-full bg-center items-center justify-center text-center">
            <p className="text-white text-5xl ">Outside <span className="text-[var(--accent1)]">preperation </span><br/>and <span className="text-[var(--accent1)]">full training</span></p>
          </div>

            <Image 
            src="/ABM_logo.png"
            alt="ABM Logo"
            width={800} 
            height={0}
            layout="intrinsic" />
            <Image 
            src="/ABM_logo.png"
            alt="ABM Logo"
            width={800} 
            height={0}
            layout="intrinsic" />
            <span className=""></span>
        </div>
      </div>
    </main>
  );
}
