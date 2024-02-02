import React from "react";
import { Link } from "react-router-dom";
import { GiRollingDices } from "react-icons/gi";

function Home() {
  return (
    <div className="min-w-full min-h-screen bg-slate-950 text-white font-semibold flex items-center justify-center">
      <GiRollingDices className="text-[14rem] mx-20" />
      <div>
        <h1 className="text-6xl mb-10">DICE GAME</h1>
        <Link to="/game">
          <button className="w-40 h-16 bg-blue-950 text-3xl rounded-md hover:bg-slate-600">
            Play Now
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
