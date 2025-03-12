import React from 'react';
import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const FinalLeaderboard = () => {
    const location = useLocation();
    //   const {email} = location.state
    const [user, setUser] = useState({});
    //   const [teammate1,setTeamMate1]=useState('')
    //   const [teammate2,setTeamMate2]=useState('')
    const [ggwinner, setWinner] = useState({});
    const [ggrunner, setRunner] = useState({});
    const navigate = useNavigate();
    const accessfinalists = async () => {
        try {
            const response = await fetch("https://geniusgateway2k25.onrender.com/winner", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            const { winner, runner } = await response.json();
            // console.log(result);
            setWinner(winner);
            setRunner(runner);
            // setUser(result);

        } catch (error) {
            navigate("/login");
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {

        accessfinalists(); // Initial fetch
        const interval = setInterval(accessfinalists, 2000); // Fetch every second

        return () => clearInterval(interval); // Clear interval on component unmount
    }, []);

    return (
        <div className="flex flex-col items-center justify-center gap-5 min-h-screen bg-gradient-to-br from-blue-200 to-pink-200">
            <p className='text-5xl font-bold text-red-700'>The Genius Gateway Finalists</p>
            <div className="border border-gray-400 bg-white shadow-lg p-6 w-full h-[500px]">
                <div className="flex items-center w-full h-full justify-evenly">
                    {/* <img
            src={photoUrl}
            alt="Winner"
            className="w-32 h-32 rounded-full object-cover border-4 border-indigo-600"
          /> */}
                    {/* <FaTrophy className="text-yellow-400 text-9xl mt-4" /> */}
                    {/* <div className='w-[25%] flex flex-col gap-3 items-center justify-center '>
            <p className='text-4xl'>Participant: 1</p>
            <p className='font-bold text-purple-600 text-5xl text-center'></p>
          </div> */}
                    {ggwinner ? (<div className='flex flex-col items-center w-[50%]'>
                        <img src='/winner.png' className='h-52 w-52' />
                        <h1 className="text-4xl text-center text-yellow-400 font-bold mt-4">Congratulations, {ggwinner.Teamname} !</h1>
                        <p className="text-gray-700 mt-2 text-center">
                            You have won the <span className="font-semibold">First Prize</span> at the{" "}
                            <span className="font-semibold">Genius Gateway Event</span>.
                        </p>
                    </div>) : (<div className='flex flex-col justify-center gap-5 items-center w-[50%] h-full '>
                        <img src='/winner.png' className=' h-52 w-52' />
                        <p className='font-bold text-yellow-500 text-2xl '>Waiting for the winner of Genius Gateway......</p></div>)}
                    {ggrunner ? (<div className='flex flex-col items-center w-[50%]'>
                        <div className='h-52 w-52 flex justify-center items-center'>
                            <img src='/runner.png' className='h-32 w-28' /></div>
                        <h1 className="text-4xl text-center text-yellow-400 font-bold mt-4">Congratulations, {ggrunner.Teamname} !</h1>
                        <p className="text-gray-700 mt-2 text-center">
                            You have won the <span className="font-semibold">Second Prize</span> at the{" "}
                            <span className="font-semibold">Genius Gateway Event</span>.
                        </p>
                    </div>) : (<div className='flex flex-col justify-center gap-5 items-center w-[50%] h-full '>
                        <div className='h-52 w-52 flex justify-center items-center'>
                            <img src='/runner.png' className='h-32 w-32' /></div>
                        <p className='font-bold text-yellow-500 text-2xl '>Waiting for the runner of Genius Gateway......</p></div>)}

                    {/* <div className='w-[25%] flex flex-col gap-3 items-center justify-center '>
            <p className='text-4xl'>Participant: 2</p>
            <p className='font-bold text-blue-600 text-5xl text-center'></p>
          </div> */}
                </div>
            </div>
        </div>
    );
};

export default FinalLeaderboard;
