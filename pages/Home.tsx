"use client";

import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { FaRegBell, FaRegBellSlash } from "react-icons/fa";
import { getTimeRemaining } from "@/helper/useGetTime";
import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

export const poppins = Poppins({
  weight: "400",
  variable: "--font-unica-one",
  subsets: ["latin"],
});

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
  const [loading, setLoading] = useState<boolean>(true);

  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const end = Date.now() + 72 * 60 * 60 * 1000;

    const interval = setInterval(() => {
      setTimeLeft(getTimeRemaining());
      if (getTimeRemaining().total <= 0) {
        setLoading(false);
        clearInterval(interval);
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
    <div
      className={`relative bg-linear-to-br bg-fixed from-purple-950 via-black to-purple-900 ${poppins.className}`}
    >
      <div
        style={{
          backgroundImage: "url(/image3.png)",
        }}
        className="opacity-10 absolute w-full h-full inset-0 bg-fixed bg-cover bg-center bg-no-repeat animate- duration-1000 transition"
      />
      <div className="relative  text-white font-sans px-2 md:px-0">
        {/* NAVBAR */}

        <nav className=" sticky top-0 z-10 flex justify-between py-6 px-4">
          <h1 className="text-xl font-bold ">DebateX</h1>

        <div className="flex flex-row gap-2 md:gap-4 items-center">
          <div className="cursor-pointer">
            <FaRegBellSlash />
          </div>
          <Link
            href={"/argument-modal"}
            // disabled={loading}
            className={` ${!loading ? "bg-gray-600 text-gray-400" : "bg-purple-700 hover:bg-purple-950 cursor-pointer"} px-4 py-2 rounded-lg  transition`}
            >
            Join Debate
          </Link>
            </div>
        </nav>

        {/* HERO */}
        <div
          ref={heroRef}
          className={`relative w-full md:max-w-3xl h-full mx-auto text-center flex flex-col gap-10 items-center justify-center bg-purple-950 rounded-xl p-2 pb-8`}
        >
          <Image
            src="/image2.png"
            alt="Debate image"
            width={630}
            height={300}
            className="bg-center bg-cover rounded-xl w-full  h-70 md:h-90 border border-purple-200"
          />

          <h1 className="text-4xl font-bold mb-6 bg-yellow-300 p-2 ">
            <span className="text-black font-extrabold text-xl md:text-4xl">
              TECH BATTLE
            </span>
            <span className="ml-2 text-m">In</span>
          </h1>

          <div className="flex justify-center gap-4 text-2xl md:text-5xl mb-6 font-mono p-2">
            <span>{timeLeft.days}d :</span>
            <span>{timeLeft.hours}h :</span>
            <span>{timeLeft.minutes}m :</span>
            <span>{timeLeft.seconds}s</span>
          </div>

          <h2 className="text-2xl md:text-3xl font-light text-purple-200 mb-4 text-center p-2">
            “Artificial Intelligence does more harm than good to humanity”
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-center p-2">
            Join an intense 4-hour live debate hosted on Telegram where
            arguments are made in real-time and the audience decides the winner.
          </p>

        <div className="w-full flex flex-col gap-4 text-white/80 p-4 md:p-8 mb-4 ">
          <h2 className="text-lg md:text-xl font-light mb-4">Event Details</h2>

          <ul className="flex flex-col gap-4 w-full text-left text-sm md:text-lg font-light">
            <li className="">
              <b>
              ⏱ Duration:
              </b>
               {' '}  2 hours on Telegram where time begins once countdown ends 
              </li>
            <li className="">
              <b>
              🧩 Sections:
              </b>
               {' '}  2 Opening Arguments - Rebutal Sections (intense) - Questions and answers
              </li>
            <li className="">
              <b>
              📍 Platform: 
              </b>
              {' '} Telegram - DebateX visit https://t.me/DebateX
            </li>
            <li className="">
              <b>
              🗳 Voting: 
              </b>
               {' '} Live Poll, No biased voting all one on telegram poll and winner is seen by all
            </li>
            <li className="">
              <b>
              👥 Everyone is a judge
              </b>
            </li>
          </ul>
        </div>

          <div className="flex flex-col items-center justify-center gap-3">
            <button
              onClick={() => window.open("https://t.me/Debate_X", "_blank")}
              className=" bg-purple-600 px-6 py-3 rounded-lg hover:bg-purple-800 transition"
            >
              Go to Telegram Channel
            </button>
            <Link
              href="/voting-modal"
              className="mt-2 text-gray-300 cursor-pointer"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="py-10 text-center text-gray-300 text-sm ">
        © 2026 Debate X — Built for thinkers.
      </footer>
    </div>
  );
};

export default Home;
