"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { poppins } from "@/pages/Home";

type PROPS = {
  onClose: () => void;
};

const VotingModal = ({ onClose }: PROPS) => {
  const modalContainerRef = useRef<HTMLDivElement | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);

  // 🧠 NEW: track vote
  const [vote, setVote] = useState<"support" | "oppose" | null>(null);

  useEffect(() => {
    gsap.fromTo(
      modalContainerRef.current,
      { x: "-100%", opacity: 0, scale: 0.95 },
      { x: 0, opacity: 1, scale: 1, duration: 0.8, ease: "power3.out" }
    );

    gsap.fromTo(
      modalRef.current,
      { x: "-100%", opacity: 0, scale: 0.95 },
      { x: 0, opacity: 1, scale: 1, duration: 1.2, ease: "power3.out" }
    );
  }, []);

  // 🧠 Handlers
  const handleSupport = () => {
    if (vote !== "support") {
      setVote("support");
    }
  };

  const handleOppose = () => {
    if (vote !== "oppose") {
      setVote("oppose");
    }
  };

  return (
    <div
      ref={modalContainerRef}
      className={`fixed inset-0 bg-black/90 flex md:items-start items-center z-50 ${poppins.className}`}
    >
      <div className="rounded-xl bg-purple-950/40 max-w-2xl w-full h-full">
        <div
          ref={modalRef}
          className="h-full flex flex-col items-center justify-center gap-10 p-4 md:p-8 text-white"
        >
          <h2 className="text-3xl md:text-5xl ">Place Your Vote</h2>

          <section className="flex flex-col items-center">
            <div className="flex md:flex-row flex-col items-center justify-between gap-10">

              {/* SUPPORT */}
              <div
                onClick={handleSupport}
                className={`relative text-center p-16 rounded-xl transition
                  ${vote === "support"
                    ? "bg-yellow-400 opacity-60 cursor-not-allowed"
                    : "bg-yellow-300 cursor-pointer hover:scale-105"}
                `}
              >
                Support
                <span className="absolute -top-5 -right-5 p-4 rounded-full bg-black/90">
                  70
                </span>
              </div>

              {/* OPPOSE */}
              <div
                onClick={handleOppose}
                className={`relative text-center p-16 rounded-xl transition
                  ${vote === "oppose"
                    ? "bg-red-600 opacity-60 cursor-not-allowed"
                    : "bg-red-500 cursor-pointer hover:scale-105"}
                `}
              >
                Oppose
                <span className="absolute -top-5 -right-5 p-4 rounded-full bg-black/90">
                  30
                </span>
              </div>

            </div>

            <div className="flex flex-col gap-4 text-lg font-extralight p-4 md:p-8 text-center text-white/80">
              <h3 className="text-2xl font-extralight">
                Click to Place Your Vote
              </h3>
              <p>
                <b>Note:</b> Your vote is retractable
              </p>
            </div>

            <button className="bg-purple-700 p-4 w-max rounded-lg cursor-pointer hover:scale-105 transition">
              Join Telegram Channel for Rebutal
            </button>
          </section>

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