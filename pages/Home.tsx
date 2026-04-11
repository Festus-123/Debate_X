"use client";

import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { getTimeRemaining } from "@/helper/useGetTime";
import Voting from "@/components/Voting";
import EventHistory from "@/components/EventHistory";
import Modal from "@/components/Modal";

type TIMELEFTTYPE = {
  total?: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const Home = () => {
  const [timeLeft, setTimeLeft] = useState<TIMELEFTTYPE>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [modalOpen, setModalOpen] = useState(false);

  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const end = Date.now() + 72 * 60 * 60 * 1000;

    const interval = setInterval(() => {
      setTimeLeft(getTimeRemaining(end));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    gsap.fromTo(
      heroRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1 },
    );
  }, []);

  return (
    <div className="">
      <div className="relative min-h-screen bg-linear-to-br bg-fixed from-purple-950 via-black to-purple-900 text-white font-sans px-6">
        <div 
          style={{
            backgroundImage: "url(/grid-3.png)"
          }}
          className="opacity-50 absolute w-full h-full inset-0 bg-cover bg-center bg-no-repeat animate- duration-1000 transition"
          />
        {/* NAVBAR */}

        <nav className=" relative flex justify-between py-6">
          <h1 className="text-xl font-bold ">DebateX</h1>

          <button
            onClick={() => setModalOpen(true)}
            className="bg-purple-700 px-4 py-2 rounded-lg hover:bg-purple-900 transition"
          >
            Join Debate
          </button>
        </nav>

        {/* HERO */}
        <div
          ref={heroRef}
          className="relative mt-16 max-w-4xl mx-auto text-cente flex flex-col gap-10 items-center"
        >
          <h1 className="text-4xl font-bold mb-6">
            <span className="font-extrabold text-3xl md:text-6xl">
              TECH BATTLE
            </span>
            <span className="bg-yellow-300 text-black p-2 ml-2">In</span>
          </h1>

          <div className="flex justify-center gap-4 text-4 md:text-8xl mb-6">
            <span>{timeLeft.days}d :</span>
            <span>{timeLeft.hours}h :</span>
            <span>{timeLeft.minutes}m :</span>
            <span>{timeLeft.seconds}s</span>
          </div>

          <h2 className="text-2xl text-purple-300 mb-4 text-center">
            “Artificial Intelligence does more harm than good to humanity”
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-center">
            Join an intense 4-hour live debate hosted on Telegram where
            arguments are made in real-time and the audience decides the winner.
          </p>

          <button
            onClick={() => window.open("https://t.me/Debate_X", "_blank")}
            className="mt-6 bg-purple-600 px-6 py-3 rounded-lg hover:bg-purple-800 transition"
          >
            Go to Telegram Channel
          </button>
        </div>
      </div>

      <div className="p-2 md:p-16">
        {/* DETAILS */}

        <div className=" flex flex-col gap-5">
          <h2 className="text-xl md:text-3xl font-bold mb-4">Event Details</h2>

          <ul className="flex flex-wrap items-center gap-4">
            <li className="border rounded-xl p-2 bg-gray-200">
              ⏱ Duration: 4 Hours
            </li>
            <li className="border rounded-xl p-2 bg-gray-200">
              📍 Platform: Telegram
            </li>
            <li className="border rounded-xl p-2 bg-gray-200">
              🗳 Voting: Live Poll + Website Voting
            </li>
            <li className="border rounded-xl p-2 bg-gray-200">
              👥 Everyone is a judge
            </li>
          </ul>
        </div>

        {/* VOTING */}
        <Voting />

      </div>

      {/* FOOTER */}
      <footer className="mt-20 py-10 text-center text-gray-500 text-sm bg-linear-to-br from-purple-950 to-purple-900">
        © 2026 Debate X — Built for thinkers.
      </footer>

      {/* MODAL */}
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};

export default Home;
