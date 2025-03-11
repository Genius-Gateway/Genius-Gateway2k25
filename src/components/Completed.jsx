import React from 'react';
import { useState,useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const AchieverComponent = () => {
  const [user, setUser] = useState({});
  const location=useLocation();
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-pink-200">
      <div className="bg-white shadow-lg p-6 w-full">
        <div className="flex flex-col items-center">
          <h1 className="text-7xl text-green-600 font-bold mt-4">Great Job, {user.teamName} !</h1>
          <p className="text-gray-700 mt-2 text-center">
            You have successfully passed all the levels of the <span className="font-semibold">Genius Gateway Event</span>.
          </p>
        </div>
      </div>
      <footer className="mt-8 text-gray-500 text-sm">
        © {new Date().getFullYear()} Genius Gateway. All rights reserved.
      </footer>
    </div>
  );
};

export default AchieverComponent;
