"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { poppins } from "@/pages/Home";

type PROPS = {
  onClose: () => void;
};

const LearnModal = ({ onClose }: PROPS) => {
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
      className={`fixed inset-0 w-full bg-black/80 flex items-center justify-center z-50 px-4 ${poppins.className}`}
    >
      <div
        ref={modalRef}
        className="flex flex-col items-center p-4 rounded-xl bg-purple-950 max-w-2xl w-full "
      >
        {/* Video / Iframe at the top */}
        <div className="w-full mb-6">
          <video
            className="w-full h-64 rounded-lg border border-purple-300"
            src="https://www.youtube.com/embed/VIDEO_ID" // replace with actual video explaining voting
            title="Voting Process Explanation"
          ></video>
        </div>

        {/* Detailed explanation */}
        <h2 className="text-2xl font-bold text-white mb-4">How Voting Works</h2>
        <p className="text-gray-200 text-lg leading-relaxed mb-4">
          Voting is the process by which citizens participate in choosing their
          leaders and shaping government policies. The steps usually include:
        </p>
        <ul className="list-disc list-inside text-gray-300 text-lg space-y-2 mb-6">
          <li>Registering as a voter with the electoral commission.</li>
          <li>Collecting your voter’s card and confirming your polling unit.</li>
          <li>On election day, presenting your card and being verified.</li>
          <li>Receiving ballot papers and casting your vote in secret.</li>
          <li>Depositing your ballot in the box and leaving the polling station.</li>
          <li>Votes are counted and results announced by the electoral body.</li>
        </ul>

        {/* Close button */}
        <button
          onClick={onClose}
          className="bg-purple-600 hover:bg-purple-800 px-6 py-3 rounded text-white w-full transition"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default LearnModal;