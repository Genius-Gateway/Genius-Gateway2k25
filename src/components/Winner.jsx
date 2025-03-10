import React from 'react';
import { FaTrophy } from 'react-icons/fa';

const WinnerComponent = ({
  winnerName = "Jane Doe",
  photoUrl = "https://via.placeholder.com/150",
}) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-indigo-600 p-4">
      <div className="bg-white rounded-xl shadow-lg p-6 max-w-sm w-full">
        <div className="flex flex-col items-center">
          <img
            src={photoUrl}
            alt="Winner"
            className="w-32 h-32 rounded-full object-cover border-4 border-indigo-600"
          />
          <FaTrophy className="text-yellow-400 text-6xl mt-4" />
          <h1 className="text-2xl font-bold mt-4">Congratulations, {winnerName}!</h1>
          <p className="text-gray-700 mt-2 text-center">
            You have won the <span className="font-semibold">First Prize</span> at the{" "}
            <span className="font-semibold">Genius Gateway Event</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WinnerComponent;
