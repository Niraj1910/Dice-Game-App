import React, { useEffect, useState } from "react";
import { GiPerspectiveDiceSixFacesSix } from "react-icons/gi";
import Button from "./Button";

function Game() {
  const array = [1, 2, 3, 4, 5, 6];
  const [showRules, setShowRules] = useState(false);
  const [score, setScore] = useState(0);
  const [clicked, setClicked] = useState(0);
  const [warning, setWarning] = useState(false);
  const [diceValue, setDiceValue] = useState(0);
  const [limit, setLimit] = useState(3);

  const result = () => {
    if (clicked === 0) {
      setWarning(true);
      return;
    }

    setWarning(false);

    const diceValue = Math.floor(Math.random() * 6) + 1;
    setDiceValue(diceValue);
    console.log(diceValue);
    setScore(diceValue === clicked ? diceValue + clicked : score - 2);
    setLimit(limit - 1);
  };

  return (
    <div className="absolute min-w-full min-h-screen bg-slate-950 text-white font-semibold ">
      <div className="flex bg-pink-800 justify-between py-4 px-6">
        <div className="score flex flex-col justify-center items-center">
          <p className="text-4xl">{score}</p>
          <p className="text-center">Score</p>
        </div>

        <div className="right">
          {warning && (
            <p className="bg-slate-900 text-center rounded-md ">
              You have not selected any number
            </p>
          )}
          <div className="btn">
            {array.map((number) => (
              <Button
                key={number}
                number={number}
                onClick={() => setClicked(number)}
                clicked={clicked}
              />
            ))}
          </div>
          <p>Select Number</p>
        </div>
      </div>

      {limit === 0 ? (
        <div
          className="flex items-center justify-center mx-48 my-20 w-96 min-h-20 bg-teal-700 rounded-md text-4xl
        "
        >
          Your Total Score : {score}
        </div>
      ) : (
        <div className="game-section flex flex-col items-center justify-center my-4">
          <div className="dice bg-purple-950 border-2 min-w-40 h-80 flex flex-col text-xl">
            <GiPerspectiveDiceSixFacesSix
              className="w-72 h-full cursor-pointer"
              onClick={() => {
                result();
              }}
            />
            {diceValue !== 0 && (
              <h1 className="text-center font-extrabold text-4xl">
                {diceValue}
              </h1>
            )}
            <p className="text-center border-">Click on Dice to roll</p>
            <div className="flex flex-col items-center justify-center">
              <button
                className="bg-black w-40 h-10 rounded-md my-2"
                onClick={() => {
                  setScore(0);
                  setLimit(10);
                }}
              >
                Reset Score
              </button>
              <button
                className="bg-white text-black w-40 h-10 rounded-md my-2"
                onClick={() => setShowRules(!showRules)}
              >
                Show Rules
              </button>
            </div>
          </div>

          <p className="text-center my-2">Remaining Moves : {limit}</p>

          {showRules && (
            <div className="rules bg-orange-400 w-2/3 text-sm my-10 mx-0 rounded-md">
              <h1 className="p-2 text-xl text-black font-bold">
                How to play dice game
              </h1>
              <ul>
                <li className="p-2">Select any number.</li>
                <li className="p-2">Click dice image.</li>
                <li className="p-2">
                  After clicking on dice if selected number is equal to the
                  dice. number, the score will increase by dice number.
                </li>
                <li className="p-2">
                  If you get wrong guess then 2 points will be deducted.
                </li>
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Game;
