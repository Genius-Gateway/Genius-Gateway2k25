import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const EventWaiting = ({EVENT_START_TIME,LEVEL_TIME_LIMITS}) => {
    // Function to calculate the remaining time
    const location = useLocation();
    const navigate = useNavigate();
    const { email } = location.state || {};
    // const email = "prem@gmail.com";

    const getAllocatedTime = (userStartTime) => {
        // Time passed from the event start to user's start (in ms)
        const delay = userStartTime.getTime() - EVENT_START_TIME.getTime();
        const allocated = delay;
        // console.log(allocated,delay);
        return Math.max(-allocated, 0);
    };
    const userStartTime = new Date();
    const [remainingTime, setRemainingTime] = useState(getAllocatedTime(userStartTime));
    useEffect(() => {
        if (remainingTime <= 0) {
            // When time runs out, automatically navigate to the next level.
            // You might also call onComplete(false) if you want to mark it as incomplete.
            navigate("/level1", { state: { email: email } });
        }

        const interval = setInterval(() => {
            setRemainingTime(prev => {
                const updated = prev - 1000;
                if (updated >= 0) {
                    return updated;
                } else {
                    return 0;
                }

            });
        }, 1000);

        return () => clearInterval(interval);
    }, [remainingTime]);


    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-bl from-blue-200 border">
            <div className="bg-white p-8 shadow-lg text-center w-full">
                <h1 className="text-6xl font-bold mb-4 text-red-500">Genius Gateway Starts In</h1>
                <div className="text-4xl font-thin text-gray-800">
                {Math.floor(remainingTime / 60000)}:{((remainingTime % 60000) / 1000).toFixed(0).padStart(2, '0')}
                </div>
            </div>
        </div>
    );
};

export default EventWaiting;
