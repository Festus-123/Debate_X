"use client";

import { useRef, useEffect, useState, MouseEventHandler } from "react";
import { poppins } from "@/pages/Home";
import gsap from "gsap";
import Image from "next/image";

type PROPS = {
  isOpen: boolean;
  onClose: MouseEventHandler;
};

const ArgumentModal = ({ isOpen, onClose }: PROPS) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const [position, setPosition] = useState<
    "support" | "oppose" | "neutral" | null
  >(null);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        modalRef.current,
        { y: -60, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 0.5, ease: "power3.out" },
      );
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSend = () => {
    const text = `
Name: ${name}
Position: ${position}
Message: ${message}
    `;

    const encoded = encodeURIComponent(text);

    // Telegram deep link (opens chat with prefilled message)
    window.open(`https://t.me/Othodo_X?text=${encoded}`, "_blank");
  };

  return (
    <div className={`fixed inset-0 bg-black/90 flex items-center justify-center z-50 px-4 ${poppins.className}`}>
      <div className="hidden md:flex items-center p-2 rounded-xl bg-linear-to-br from-purple-950 to-purple-950">
        <div className="relative rounded-xl">
          <Image 
            src="/image2.png"
            alt="image"
            width={600}
            height={800}
            className="object-left object-cover h-125 rounded-xl"/>
            <div className="absolute bg-black/40 w-full h-full inset-0"/>
            <h1 className="absolute text-7xl font-extrabold text-white/80 bottom-1/4 left-1/4">
              DebateX
            </h1>
        </div>
      <div
        ref={modalRef}
        className=" p-6 rounded-xl w-full h-full max-w-lg"
      >
        <h2 className="text-xl font-bold mb-4 text-white">
          Join Debate / Ask Question
        </h2>

        {/* NAME */}
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
          className="w-full mb-4 p-2 rounded bg-black/40 text-white focus:outline-none"
        />

        {/* POSITION SELECTOR */}
        <div className="mb-4">
          <p className="text-sm text-gray-300 mb-2">Select Your Position:</p>

          <div className="flex gap-3">
            <button
              onClick={() => setPosition("support")}
              className={`flex-1 py-2 rounded-lg transition cursor-pointer ${
                position === "support"
                  ? "bg-yellow-400 text-black shadow-lg scale-105"
                  : "bg-yellow-400/20 text-yellow-300"
              }`}
            >
              Support
            </button>

            <button
              onClick={() => setPosition("oppose")}
              className={`flex-1 py-2 rounded-lg transition cursor-pointer ${
                position === "oppose"
                  ? "bg-red-500 text-white shadow-lg scale-105"
                  : "bg-red-500/20 text-red-300"
              }`}
            >
              Oppose
            </button>

            <button
              onClick={() => setPosition("neutral")}
              className={`flex-1 py-2 rounded-lg transition cursor-pointer ${
                position === "neutral"
                  ? "bg-purple-500 text-white shadow-lg scale-105"
                  : "bg-purple-500/20 text-purple-300"
              }`}
            >
              Question
            </button>
          </div>
        </div>

        {/* TEXTAREA */}
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your argument or question..."
          className="w-full mb-4 p-3 rounded bg-black/40 text-white  h-40 resize-none focus:outline-none"
        />

        {/* SEND */}
        <button
          onClick={handleSend}
          className="bg-purple-600 hover:bg-purple-800 px-4 py-3 rounded text-white w-full transition"
        >
          Send to Telegram
        </button>

        {/* CLOSE */}
        <button
          onClick={onClose}
          className="mt-3 text-sm text-gray-300 w-full hover:text-white transition"
        >
          Close
        </button>
      </div>
      </div>

    </div>
  );
};

export default ArgumentModal;
