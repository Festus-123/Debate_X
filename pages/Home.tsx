"use client";

import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { getTimeRemaining } from "@/helper/useGetTime";
import Voting from "@/components/Voting";
import EventHistory from "@/components/EventHistory";
import Modal from "@/components/ArgumentModal";

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
  const [loading, setLoading] = useState<boolean>(true)

  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const end = Date.now() + 72 * 60 * 60 * 1000;

    const interval = setInterval(() => {
      setTimeLeft(getTimeRemaining(end));
      if(getTimeRemaining(end).total === 0){
        setLoading(true)
      }
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
          className="opacity-20 absolute w-full h-full inset-0 bg-cover bg-center bg-no-repeat animate- duration-1000 transition"
          />
        {/* NAVBAR */}

        <nav className=" relative flex justify-between py-6">
          <h1 className="text-xl font-bold ">DebateX</h1>

          <button
            disabled={loading}
            onClick={() => setModalOpen(true)}
            className={` ${loading ? "bg-gray-600 text-gray-400" : "bg-purple-700 hover:bg-purple-950 cursor-pointer"} px-4 py-2 rounded-lg  transition`}
          >
            Join Debate
          </button>
        </nav>

        {/* HERO */}
        <div
          ref={heroRef}
          className="relative mt-16 max-w-4xl mx-auto text-cente flex flex-col gap-10 items-center justify-center h-[80vh]"
        >
          <h1 className="text-4xl font-bold mb-6">
            <span className="font-extrabold text-3xl md:text-6xl">
              TECH BATTLE
            </span>
            <span className="bg-yellow-300 text-black p-2 ml-2">In</span>
          </h1>

          <div className="flex justify-center gap-4 text-4xl md:text-8xl mb-6">
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

          <div className="flex flex-col items-center justify-center gap-3">
          <button
            onClick={() => window.open("https://t.me/Debate_X", "_blank")}
            className=" bg-purple-600 px-6 py-3 rounded-lg hover:bg-purple-800 transition"
          >
            Go to Telegram Channel
          </button>
          <button
            onClick={() => window.open("https://t.me/Debate_X", "_blank")}
            className="mt-2 text-gray-300 cursor-pointer"
            >
            Learn More
          </button>
            </div>
        </div>
      </div>

      <div className="p-4 md:p-16 hidden">
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
      <footer 
        style={{
          backgroundImage: "url(/grid-3.png)"
        }}
        className="py-10 text-center text-gray-300 text-sm ">
        © 2026 Debate X — Built for thinkers.
      </footer>

      {/* MODAL */}
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};

export default Home;
