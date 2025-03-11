import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


const Level1Waiting = ({ EVENT_START_TIME, LEVEL_TIME_LIMITS }) => {
  //   const [timeLeft, setTimeLeft] = useState(3600); // Example: 1 hour countdown

  //   useEffect(() => {
  //     const timer = setInterval(() => {
  //       setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
  //     }, 1000);
  //     return () => clearInterval(timer);
  //   }, []);

  //   const formatTime = (seconds) => {
  //     const hours = Math.floor(seconds / 3600);
  //     const minutes = Math.floor((seconds % 3600) / 60);
  //     const secs = seconds % 60;
  //     return `${hours.toString().padStart(2, "0")}:${minutes
  //       .toString()
  //       .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  //   };
  const location = useLocation();
  const [user, setUser] = useState({});
  const { email } = location.state || {};

  useEffect(() => {
    const fetchUser = async () => {

      try {
        // console.log(email,password)
        const response = await fetch("https://geniusgateway2k25.onrender.com/access", { // Ensure "http://" is included
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          }, // Convert state to JSON string
          body: JSON.stringify({ email: email })
        });

        const result = await response.json();
        console.log(result);
        setUser(result);
        // setForceRender((prev) => prev + 1);


        // if (response.status === 200) {
        //   // navigate("/level1");

        // } else {
        //   setResponseMessage(result.message || "Login failed");
        // }
      } catch (error) {
        console.log(error);
        setResponseMessage(`Error: ${error.message}`);
        navigate("/login");
      }
    };
    if (!email) {
      navigate("/login");
    }
    fetchUser();
  }, []);

  const navigate = useNavigate();
  // const { email } = location.state || {};

  // const email="prem@gmail.com";


  const getAllocatedTime = (userStartTime) => {
    // Time passed from the event start to user's start (in ms)
    const delay = userStartTime.getTime() - EVENT_START_TIME.getTime();
    const allocated = LEVEL_TIME_LIMITS[0] - delay;
    // console.log(allocated,delay);
    return Math.max(allocated, 0);
  };
  const userStartTime = new Date();
  const [remainingTime, setRemainingTime] = useState(getAllocatedTime(userStartTime));
  useEffect(() => {
    if (remainingTime <= 0) {
      // When time runs out, automatically navigate to the next level.
      // You might also call onComplete(false) if you want to mark it as incomplete.
      navigate("/level2", { state: { email: email } });

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
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-pink-200 to-cyan-200 text-white text-center p-6">
      <div className="bg-blue-600 p-8 h-[400px]  shadow-lg w-full flex flex-col justify-center items-center">
        <h1 className="text-7xl font-bold mb-4">Congratulations, {user.teamName}...!</h1>
        <p className="text-xl font-bold mb-6">You have qualified for the first level in Genius Gateway.</p>
        <p className="text-yellow-400 font-bold text-3xl">Your key for the second level is: {user.UniqueNumber}</p>
        <div className=" p-4 rounded-xl text-xl font-semibold">
          Next level opens in:
          <div className="text-7xl font-bold mt-2 text-green-400">
            {Math.floor(remainingTime / 60000)}:{((remainingTime % 60000) / 1000).toFixed(0).padStart(2, '0')}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Level1Waiting;
