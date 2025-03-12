import React from 'react';
import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const Runner = () => {
  const location = useLocation();
  const {email} = location.state||{};    
    // const email="chmohan1312@gmail.com"
  const [user, setUser] = useState({});
  const [teammate1,setTeamMate1]=useState('')
  const [teammate2,setTeamMate2]=useState('')
  const navigate = useNavigate();
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
        setTeamMate1(result.teammates[0].name)
        setTeamMate2(result.teammates[1].name)

      } catch (error) {
        navigate("/login");
        console.error("Error fetching data:", error);
      }
    };

    fetchQuestions();
  }, []);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-200 to-pink-200">
      <div className="border border-gray-400 bg-white shadow-lg p-6 w-full">
        <div className="flex items-center w-full justify-evenly">
          {/* <img
            src={photoUrl}
            alt="Winner"
            className="w-32 h-32 rounded-full object-cover border-4 border-indigo-600"
          /> */}
          {/* <FaTrophy className="text-yellow-400 text-9xl mt-4" /> */}
          <div className='w-[25%] flex flex-col gap-3 items-center justify-center '>
            <p className='text-4xl'>Participant: 1</p>
            <p className='font-bold text-purple-600 text-5xl text-center'>{teammate1}</p>
          </div>
          <div className='flex flex-col items-center w-[50%]'>
            <img src='/runner.png' className='h-52 ' />
            <h1 className="text-6xl text-center text-yellow-400 font-bold mt-4">Congratulations, {user.teamName} !</h1>
            <p className="text-gray-700 mt-2 text-center">
              You have won the <span className="font-semibold">Second Prize</span> at the{" "}
              <span className="font-semibold">Genius Gateway Event</span>.
            </p>
          </div>
          <div className='w-[25%] flex flex-col gap-3 items-center justify-center '>
            <p className='text-4xl'>Participant: 2</p>
            <p className='font-bold text-blue-600 text-5xl text-center'>{teammate2}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Runner;
