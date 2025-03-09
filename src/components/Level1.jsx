import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { IoBulbOutline } from "react-icons/io5";
import { FaHandsClapping } from "react-icons/fa6";
import {crossGrid1,crossGrid2,crossGrid3,crossGrid4,crossGrid5,questions1,questions2,questions3,questions4,questions5} from "./grid.js";
const crossGrids = {
  1: crossGrid1,
  2: crossGrid2,
  3: crossGrid3,
  4: crossGrid4,
  5: crossGrid5,
};

const questionSets = {
  1: questions1,
  2: questions2,
  3: questions3,
  4: questions4,
  5: questions5,
};
const Level1 = ({EVENT_START_TIME,LEVEL_TIME_LIMITS}) => {
  // Questions Array

  // State to track the current question indices
  // console.log(EVENT_START_TIME,LEVEL_TIME_LIMITS);
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [currentIndex, setcurrentIndex] = useState(0);
  const [forceRender, setForceRender] = useState(0);
  const [direction, setDirection] = useState(0);
  const [correct, showCorrectMessage] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [crosswordGrid, setCrosswordGrid] = useState([]);
  const [questions,setQuestions]=useState({}); 
  const location = useLocation();
  const { email } = location.state || {};
  const [completion,setCompletion]=useState(false);
  // State to track the answers entered by the user
  // const [answers, setAnswers] = useState(Array(7).fill("")); // 7 questions, 7 answers
  

  const handleButtonClick = (index) => {
    // if (index === 0) {
    //   setcurrentIndex([0, 1]); // Show both question 1 and question 2 for button 1
    // } else {
    if (questions[index + 1].down) {
      setDirection(0);
    } else if (questions[index + 1].right) {
      setDirection(1);
    }
    setcurrentIndex(index); // Adjust index for other buttons
    // }
  };

  //this use effect accesses the user data from the database
  useEffect(() => {
    const fetchUser = async () => {

      try {
        // console.log(email,password)
        const response = await fetch("https://genius-gateway-jos2.onrender.com/access", { // Ensure "http://" is included
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          }, // Convert state to JSON string
          body: JSON.stringify({ email: email })
        });

        const result = await response.json();
        console.log(result);

        if (result.level3 === true) {
          if (result.winner === true) {
            navigate("/winner", { state: { email: email } });
          } else {
            navigate("/completed", { state: { email: email } });
          }
        }
        if(result.eliminated===true){
          navigate("/eliminated",{ state: { email:email} });
        }
        if (result.gridNum) {
          setCrosswordGrid(crossGrids[result.gridNum]);
          setQuestions(questionSets[result.gridNum]);
        }
        setUser(result);
        if (result.Level1) {
          navigate("/level1waiting",{ state: { email:email} });
        }
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
  }, [forceRender]);

  // const initialUserInput = Array(5).fill("").map(() => Array(5).fill(""));
  // const [userInput, setUserInput] = useState(() => {
  //   const savedInput = localStorage.getItem("userInput");
  //   return savedInput ? JSON.parse(savedInput) : initialUserInput;
  // });
  const [userInput, setUserInput] = useState(Array(5).fill("").map(() => Array(5).fill("")));
  const handleInputChange = (row, col, value) => {
    const newGrid = [...userInput];
    newGrid[row][col] = value.toUpperCase();
    setUserInput(newGrid);
  };

  let i = 0;
  let j = 0;
  let flag = false;

  // useEffect(() => {
  //   localStorage.setItem("userInput", JSON.stringify(userInput));
  // }, [userInput]);

  //this use effect uses the user input to check the wholegrid
  useEffect(() => {
    // const newGrid = [...userInput];


    crosswordGrid.forEach((row, rowIndex) => {
      let i = rowIndex;

      row.forEach((cell, colIndex) => {
        let j = colIndex;
        let flag = false;

        if (cell.num) {
          // console.log(cell.num, cell.direction);
          

          cell.direction.forEach((dir) => {
            if (dir.dir === "right") {
              for (let k = 0; k < dir.len; k++) {
                if (userInput[i][j + k] == dir.answer[k]) {
                  flag = true;
                  // console.log(`flag true ${i} ${j + k}`);
                } else {
                  flag = false;
                  // console.log(`flag false ${i} ${j + k}`);
                  break;
                }
              }
              // console.log(`flag ${i} ${j} ${flag}`);
              if (flag) {
                // console.log(`flag true ${i} ${j}`);
                let complete=false;
                for (let k = 0; k < dir.len; k++) {
                  // console.log(`flag green true ${i} ${j + k}`);
                  if(crosswordGrid[i][j + k].filled===false) complete=true;
                  crosswordGrid[i][j + k].filled = true;

                }
                if(complete){
                  handleCorrect();
                // setForceRender((prev) => prev + 1);
                showCorrectMessage(true);
                setTimeout(() => {
                  showCorrectMessage(false);
              }, 3000);
            }

              }
            }

            if (dir.dir === "down") {
              for (let k = 0; k < dir.len; k++) {
                if (userInput[i + k][j] === dir.answer[k]) {
                  // console.log(`flag true ${i} ${j + k}`);
                  flag = true;
                } else {
                  flag = false;
                  // console.log(`flag false ${i} ${j + k}`);
                  break;
                }
              }
              // console.log(`flag ${i} ${j} ${flag}`);
              if (flag) {
                // console.log(`flag true ${i} ${j}`);
                let complete=false;
                for (let k = 0; k < dir.len; k++) {
                  // console.log(`flag green true ${i} ${j + k}`);
                  if(crosswordGrid[i + k][j].filled===false) complete=true;
                  crosswordGrid[i + k][j].filled = true;
                  // setForceRender((prev) => prev + 1);
                }
                if(complete){
                  handleCorrect();
                  // setForceRender((prev) => prev + 1);
                  showCorrectMessage(true);
                  setTimeout(() => {
                    showCorrectMessage(false);
                }, 3000);
              }
              }
            }
          });
        }
      });
    });

    // setUserInput(newGrid);
  }, [userInput]);

  const handleCorrect=async()=>{
    try {
      // console.log(email,password)
          
          const response = await fetch("https://genius-gateway-jos2.onrender.com/marks", { // Ensure "http://" is included
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            }, // Convert state to JSON string
            body: JSON.stringify({ email: email })
          });
          const result = await response.json();
          console.log(result);
          setForceRender((prev) => prev + 1); 
  }
      // if (response.status === 200) {
      //   // navigate("/level1");

      // } else {
      //   setResponseMessage(result.message || "Login failed");
      // }
     catch (error) {
      console.log(error);
      // setResponseMessage(`Error: ${error.message}`);
      // navigate("/login");
    }
  }

  //this use effect is used for checking if the crossword is completed
  useEffect(() => {
    const level1Completed = async () => {
      try {
        // console.log(email,password)
        const response = await fetch("https://genius-gateway-jos2.onrender.com/completion1", { // Ensure "http://" is included
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          }, // Convert state to JSON string
          body: JSON.stringify({ email: email })
        });

        const result = await response.json();
        console.log(result);
        return true;
        // setUser(result);
        // setForceRender((prev) => prev + 1); 


        // if (response.status === 200) {
        //   // navigate("/level1");

        // } else {
        //   setResponseMessage(result.message || "Login failed");
        // }
      } catch (error) {
        console.log(error);

        // setResponseMessage(`Error: ${error.message}`);
        // navigate("/login");
      }
    };
    let flag = true;
    crosswordGrid.forEach((row, rowIndex) => {
      row.forEach((cell, colIndex) => {
        if (cell.filled === false) {
          flag = false;
        }
      })
    })
    if (crosswordGrid.length>0 && flag) {
      if (level1Completed()) {
        setCompletion(true);
                  setTimeout(() => {
                    setCompletion(false);
                    navigate("/level1waiting",{ state: { email:email} });
                }, 10000);
        
      }
      // navigate("/checkpoints")
    }

  }, [userInput]);
  // const targetTime = "2025-03-04T11:37:00";
  // const calculateTimeLeft = () => {
  //   const now = new Date().getTime(); // Current timestamp
  //   const target = new Date(targetTime).getTime(); // Target timestamp
  //   const difference = Math.max(target - now, 0); // Ensure non-negative time
  //   return Math.floor(difference / 1000); // Convert to seconds
  // };

  const handleElimination = async () => {
    try{
      const response = await fetch("https://genius-gateway-jos2.onrender.com/eliminated", { // Ensure "http://" is included
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        }, // Convert state to JSON string
        body: JSON.stringify({ email: email })
      });
      const result = await response.json();
      console.log(result);
      navigate("/eliminated",{ state: { email:email} });
    } catch (error) {
      console.log(error);
    }
  }
  const getAllocatedTime = (userStartTime) => {
    // Time passed from the event start to user's start (in ms)
    const delay = userStartTime.getTime() - EVENT_START_TIME.getTime();
    const allocated = LEVEL_TIME_LIMITS[0] - delay;
    // console.log(allocated,delay);
    return Math.max(allocated, 0);
  };
  const userStartTime = new Date();
  // const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [remainingTime, setRemainingTime] = useState(getAllocatedTime(userStartTime));
  
  useEffect(() => {
    if (remainingTime <= 0) {
      // When time runs out, automatically navigate to the next level.
      // You might also call onComplete(false) if you want to mark it as incomplete.
      console.log("hello 1");
      if(user && user.Level1===false){
        console.log("hello 2");
        handleElimination();
      }
      return;
    }

    const interval = setInterval(() => {
      setRemainingTime(prev => {
        const updated = prev - 1000;
        if(updated>=0){
          return updated;
      }else{
          return 0;
      }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [remainingTime,user]);
  
  // useEffect(() => {
  //   if (timeLeft <= 0) return;

  //   const timer = setInterval(() => {
  //     setTimeLeft(calculateTimeLeft());
  //   }, 1000);

  //   return () => clearInterval(timer);
  // }, [timeLeft]);


  // // Format time as MM:SS
  // const formatTime = (seconds) => {
  //   const minutes = Math.floor(seconds / 60);
  //   const secs = seconds % 60;
  //   return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  // };

  const handledownHint=async(index)=>{
   
        try {
          // console.log(email,password)
          if (questions[currentIndex + 1].down.hintNum === index) 
            { 
              questions[currentIndex + 1].down.hintNum += 1;
              questions[currentIndex + 1].down.hints[index].used = true; 
              
              const response = await fetch("https://genius-gateway-jos2.onrender.com/decrementMarks", { // Ensure "http://" is included
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                }, // Convert state to JSON string
                body: JSON.stringify({ email: email,hintsUsed:index+1 })
              });
              const result = await response.json();
              console.log(result);
              setForceRender((prev) => prev + 1); 
      }
          
  
  
          // if (response.status === 200) {
          //   // navigate("/level1");
  
          // } else {
          //   setResponseMessage(result.message || "Login failed");
          // }
        } catch (error) {
          console.log(error);
          // setResponseMessage(`Error: ${error.message}`);
          // navigate("/login");
        }

         

  }

  const handlerightHint=async(index)=>{
   
    try {
      // console.log(email,password)
      // console.log(index);
      if (questions[currentIndex + 1].right.hintNum === index) 
        { 
          
          questions[currentIndex + 1].right.hintNum += 1;
          questions[currentIndex + 1].right.hints[index].used = true; 
          
          const response = await fetch("https://genius-gateway-jos2.onrender.com/decrementMarks", { // Ensure "http://" is included
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            }, // Convert state to JSON string
            body: JSON.stringify({ email: email,hintsUsed:index+1 })
          });
          const result = await response.json();
          console.log(result);
          setForceRender((prev) => prev + 1); 
  }
      


      // if (response.status === 200) {
      //   // navigate("/level1");

      // } else {
      //   setResponseMessage(result.message || "Login failed");
      // }
    } catch (error) {
      console.log(error);
      // setResponseMessage(`Error: ${error.message}`);
      // navigate("/login");
    }

     

}

  return (
    <div className=" flex flex-col items-center">
      <div className=" fixed w-screen h-screen top-0 bg-[url('/bglevel1.jpg')] bg-cover bg-center bg-no-repeat  ">
      </div>
      {/* Title */}
      <div className=" min-h-dvh min-w-dvw  flex flex-col items-center backdrop-blur-sm">

        <div className="flex justify-between w-full px-7 items-center">
          <div className=" flex flex-col gap-4 w-1/4">
            <p className="text-lg h-[30px] font-bold text-purple-400">Team Name: {user.teamName || ""}</p>
            <p className=" text-lg h-[30px] font-bold text-purple-400">Points: {user.Points}</p>
          </div>

          <p className=" h-28 backdrop-blur-sm text-transparent bg-clip-text items-center text-5xl font-bold p-3 bg-gradient-to-br from-blue-400 via-green-300 to-purple-600 flex justify-center"> Round-1 : Enigma Of Minds</p>
          <p className="text-4xl font-bold text-green-400 w-1/4 flex justify-end">{Math.floor(remainingTime / 60000)}:{((remainingTime % 60000) / 1000).toFixed(0).padStart(2, '0')}</p>
        </div>
        {/* Flex container for grid and questions */}
        <div className=" space-x-10 backdrop-blur-sm flex w-full h-[600px] justify-evenly ">
          {/* Crossword Grid */}

          <div className=" w-1/2 flex flex-col justify-center items-center">
            {/* <p className="text-white">Team Name: </p> */}
            <div className="h-16">
            {correct && <div className=" mb-5 opacity-0 translate-y-5  bg-green-400 text-white "
              style={{
                animation: "fadeInUp 2s ease-out, fadeOut 3s ease-out",
              }}
            >
              <p className="flex justify-center items-center p-2 gap-3 text-lg"><FaHandsClapping />Wow....! That was correct</p>
              {/* <div className="w-full bg-white h-1 mt-1 relative overflow-hidden">
                <div
                  className="h-full bg-green-300"
                  style={{
                    width: "100%",
                    animation:
                      "progress-bar 3s linear forwards",
                  }}
                ></div>
              </div> */}
              <style>{`
        @keyframes progress-bar {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
            </div>}
            </div>


            <div className=" grid grid-cols-5 p-4 w-[420px] h-[420px] ">

              {crosswordGrid.map((row, rowIndex) =>
                row.map((cell, colIndex) => (
                  <div
                    key={`${rowIndex}-${colIndex}`}
                    style={{
                      backgroundImage: cell.filled ? "url('/logo for website.png')" : "none",
                      backgroundSize: "500% 500%",
                      backgroundPosition: `${(colIndex * 100) / 4}% ${(rowIndex * 100) / 4}%`,
                      transition: "background-image 0.5s ease-in-out, opacity 0.5s ease-in-out",
                    }}
                    className={`relative border-2 w-20 h-20 flex items-center justify-center transition-all duration-500 ease-in-out ${cell.filled
                      ? "bg-slate-800 border-green-500 opacity-100"
                      : "bg-black border-white "
                      }`}
                  >
                    {/* Display Question Number */}
                    {cell.num && (
                      <span className=" absolute top-1 text-white left-1 text-xs font-bold">
                        {cell.num}
                      </span>
                    )}
                    {/* Input Field */}
                    <input
                      type="text"
                      maxLength="1"
                      className="w-16 h-16 text-center text-lg text-white font-bold uppercase  focus:outline-none"
                      value={userInput[rowIndex][colIndex]}
                      onChange={(e) => handleInputChange(rowIndex, colIndex, e.target.value)}
                      disabled={cell.filled}
                    />
                  </div>
                ))
              )}

            </div>
          </div>

          {/* Questions Section */}
          <div className=" text-white px-7  pt-8 w-2/3 backdrop-blur-sm flex flex-col gap-10 items-center mr-3">
            {/* <h2 className="text-3xl text-green-400 font-bold mb-4">Questions</h2> */}
            <div className=" text-2xl text-center">
              {questions[currentIndex + 1] && ( // Check if question exists
                <div key={`question-${currentIndex + 1}`}>
                  <p className="font-bold text-emerald-400">Question {currentIndex + 1}</p>
                  <div className="flex justify-center my-3 ">
                    {questions[currentIndex + 1].down && questions[currentIndex + 1].right && (
                      <div className="flex gap-3 justify-around w-2/3  rounded-xl ">
                        <button 
                        className={` cursor-pointer border-gray-300 border-2 w-1/2 py-3  rounded-xl ${direction === 0 ? "bg-blue-700 " : ""}`} 
                        onClick={() => setDirection(0)}>Direction 1</button>
                        <button 
                        className={`cursor-pointer border-gray-300 border-2 w-1/2 py-3  rounded-xl ${direction === 1 ? "bg-blue-700 " : ""}`} 
                        onClick={() => setDirection(1)}>Direction 2</button>

                      </div>
                    )}
                  </div>
                  <div>
                    {questions[currentIndex + 1].down && (
                      <div className={` mb-4 ${direction === 0 ? "block" : "hidden"}`}>
                        <p
                          key={`${currentIndex + 1}-down`} // Unique key for down
                        >
                          {questions[currentIndex + 1].down.text}
                        </p>
                        <div className=" flex flex-col justify-center items-center mt-4">
                          <div className="flex gap-3 justify-center items-center">
                            <button 
                            className={`p-2  rounded-xl flex  items-center ${questions[currentIndex + 1].down.hintNum == 0 ? "bg-yellow-500 cursor-pointer" : "bg-gray-600"}`} 
                            disabled={questions[currentIndex+1].down.hintNum!==0}
                            onClick={()=>handledownHint(0)}><IoBulbOutline /> Hint 1</button>
                            <button 
                            className={`p-2  rounded-xl flex  items-center ${questions[currentIndex + 1].down.hintNum == 1 ? "bg-yellow-500 cursor-pointer" : "bg-gray-600"}`} 
                            disabled={questions[currentIndex+1].down.hintNum!==1}
                            onClick={()=>handledownHint(1)}><IoBulbOutline /> Hint 2</button>
                            <button 
                            className={`p-2  rounded-xl flex  items-center ${questions[currentIndex + 1].down.hintNum == 2 ? "bg-yellow-500 cursor-pointer" : "bg-gray-600"}`} 
                            disabled={questions[currentIndex+1].down.hintNum!==2}
                            onClick={()=>handledownHint(2)}><IoBulbOutline /> Hint 3</button>
                          </div>
                          <div className="flex flex-col gap-3 w-full pt-3">
                            {questions[currentIndex + 1].down.hints.map((hint, index) =>
                              hint.used ? <p key={index} className="bg-transparent backdrop-blur-md border border-gray-600 rounded-lg py-2">Hint-{index + 1}: {hint.text}</p> : null
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                    {questions[currentIndex + 1].right && (
                      <div className={` mb-4 ${direction === 1 ? "block" : "hidden"}`}>
                        <p
                          key={`${currentIndex + 1}-right`} // Unique key for right
                        >
                          {questions[currentIndex + 1].right.text}
                        </p>
                        <div className="flex flex-col justify-center mt-4">
                          <div className="flex gap-3 justify-center">
                            <button 
                            className={`p-2 rounded-xl flex  items-center ${questions[currentIndex + 1].right.hintNum == 0 ? "bg-yellow-500 cursor-pointer" : "bg-gray-600"}`} 
                            disabled={questions[currentIndex+1].right.hintNum!==0}
                            onClick={()=>handlerightHint(0)}><IoBulbOutline /> Hint 1</button>
                            <button 
                            className={`p-2 rounded-xl flex  items-center ${questions[currentIndex + 1].right.hintNum == 1 ? "bg-yellow-500 cursor-pointer" : "bg-gray-600"}`} 
                            disabled={questions[currentIndex+1].right.hintNum!==1}
                            onClick={()=>handlerightHint(1)}><IoBulbOutline /> Hint 2</button>
                            <button 
                            className={`p-2 rounded-xl flex  items-center ${questions[currentIndex + 1].right.hintNum == 2 ? "bg-yellow-500 cursor-pointer" : "bg-gray-600"}`} 
                            disabled={questions[currentIndex+1].right.hintNum!==2}
                            onClick={()=>handlerightHint(2)}><IoBulbOutline /> Hint 3</button>
                          </div>
                          <div className="flex flex-col gap-3 w-full pt-3">
                            {questions[currentIndex + 1].right.hints.map((hint, index) =>
                              hint.used ? <p key={index} className="bg-transparent backdrop-blur-md border border-gray-600 rounded-lg  py-2">Hint-{index + 1}: {hint.text}</p> : null
                            )}
                          </div>
                        </div>
                      </div>

                    )}
                  </div>
                </div>
              )}
            </div>
            <div className=" grid grid-cols-8 gap-2">
              {Array.from({ length: Object.keys(questions).length }).map((_, index) => (
                <button
                  key={index + 1}
                  className={`w-10 h-10 border rounded-md  ${currentIndex === index ? "bg-blue-500" : "bg-gray-500"
                    } text-white`}
                  onClick={() => handleButtonClick(index)}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>
          {completion &&<div className= "fixed flex justify-center items-center ">
            <div className="h-[500px] w-[550px] rounded-2xl bg-white 00 p-10 flex flex-col justify-evenly items-center shadow-lg">
              <img src="level1message.png" alt="congratulations" className=""/>
               <p className="text-3xl text-green-600 font-bold mb-4 text-center ">You have completed the first level in Genius Gateway</p>
               <p className="text-2xl text-blue-600 font-bold ">Your Current Points: {user.Points}</p>
           </div>
          </div>
}
          {/* Navigation Buttons */}

        </div>
      </div>
    </div>
  );
};
export default Level1;


