import React from 'react';
import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const Eliminated = () => {
  const location = useLocation();
  const [user, setUser] = useState({});
  const { email } = location.state || {};
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch("https://geniusgateway2k25.onrender.com/access", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: email }),
        });

        const result = await response.json();
        console.log(result);
        setUser(result);
      } catch (error) {
        navigate("/login");
        console.error("Error fetching data:", error);
      }
    };

    fetchQuestions();
  }, []);
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-red-100">
      <div className=" w-full bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-6xl font-bold text-red-600 mb-4 text-center">
          Your Team {user.teamName} Have Been Eliminated
        </h1>
        <p className="text-lg text-gray-700 mb-2 text-center">
        Thank you for participating in Genius Gateway. We truly appreciate your valuable time with us!
        </p>
        {/* <div className="flex flex-col gap-3 my-6">
          <div className="flex justify-between">
            <span className="font-semibold">Final Score:</span>
            <span>{score}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Eliminated At:</span>
            <span>{eliminatedAt}</span>
          </div>
        </div> */}
        {/* {message && (
          <p className="text-sm text-gray-500 mb-4 text-center">
            {message}
          </p>
        )} */}

      </div>
      <footer className="mt-8 text-gray-500 text-sm">
        © {new Date().getFullYear()} Genius Gateway. All rights reserved.
      </footer>
    </div>
  );
};

export default Eliminated;
