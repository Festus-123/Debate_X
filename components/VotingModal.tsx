"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { poppins } from "@/pages/Home";

type PROPS = {
  onClose: () => void;
};

const VotingModal = ({ onClose }: PROPS) => {
  const modalContainerRef = useRef<HTMLDivElement | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Animate container background fade
    gsap.fromTo(
      modalContainerRef.current,
      { x: "-100%", opacity: 0, scale: 0.95 },
      { x: 0, opacity: 1, scale: 1, duration: 0.8, ease: "power3.out" }
    );

    // Animate modal content sliding in
    gsap.fromTo(
      modalRef.current,
      { x: "-100%", opacity: 0, scale: 0.95 },
      { x: 0, opacity: 1, scale: 1, duration: 1.2, ease: "power3.out" }
    );
  }, []);

  return (
    <div
      ref={modalContainerRef}
      className={`fixed inset-0 bg-black/90 flex md:items-start items-center z-50 ${poppins.className}`}
    >
      <div
        className="rounded-xl bg-purple-950/40 max-w-2xl w-full h-full">
      <div
        ref={modalRef}
        className="h-full flex flex-col items-center justify-center gap-10 p-4 md:p-8 text-white"
      >
        {/* Video / Iframe at the top */}
        {/* <iframe className="w-full mb-6">
          <video
            className="w-full h-64 rounded-lg border border-purple-300"
            src="https://www.youtube.com/embed/VIDEO_ID" // replace with actual video explaining voting
            title="Voting Process Explanation"
          ></video>
        </iframe> */}

        {/* Detailed explanation */}
        <h2 className="text-xl md:text-3xl ">Place Your Vote</h2>

        {/* Voting section */}
        <section className="flex flex-col items-center">
          <div className="flex md:flex-row flex-col items-center justify-between gap-10">
            {/* support */}
            <div className="relative bg-yellow-300 text-center p-16 cursor-pointer rounded-xl hover:scale-105">
              Support
              <span className="absolute -top-5 -right-5 p-4 rounded-full bg-black/90">70</span>
            </div>
            {/* oppose */}
            <div className="relative bg-red-500 text-center p-16 cursor-pointer rounded-xl hover:scale-105">
              Oppose
              <span className="absolute -top-5 -right-5 p-4 rounded-full bg-black/90">30</span>
            </div>
          </div>
          <div className="flex flex-col gap-4 text-lg font-extralight p-4 md:p-8 text-center text-white/80">
            <h3 className="text-2xl font-extralight">Click to Place Your Vote</h3>
            <p> <b>Note:</b> Your vote is retractable </p>
          </div>
          <button className="bg-purple-700 p-4 w-max rounded-lg cursor-pointer hover:scale-105 transition">
            Join Telegram Channel for Rebutal
          </button>
        </section>

        {/* Close button */}
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-400 cursor-pointer transition"
        >
          Close
        </button>
      </div>
      </div>

    </div>
  );
};

export default VotingModal;