"use client"

import { useState } from "react";

const Voting = () => {
  const [support, setSupport] = useState(0);
  const [oppose, setOppose] = useState(0);

  return (
    <div className="w-full mt-10">
      <h3 className="text-xl text-white mb-4">Vote Your Position</h3>

      <div className="flex justify-evenly gap-10">
        <button
          onClick={() => setSupport(support + 1)}
          className="w-full h-50 bg-yellow-300 text-black rounded-lg hover:scale-105 transitio drop-shadow-md cursor-pointer"
        >
          Support ({support})
        </button>

        <button
          onClick={() => setOppose(oppose + 1)}
          className="w-full h-50 bg-red-500 text-white py-3 rounded-lg hover:scale-105 transition drop-shadow-md cursor-pointer"
        >
          Oppose ({oppose})
        </button>
      </div>
    </div>
  );
};

export default Voting