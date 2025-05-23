import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [responseMessage, setResponseMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async () => {
    try {
      console.log(email, password);
      const response = await fetch("https://geniusgateway2k25.onrender.com/loginUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email, password: password }),
      });

      const result = await response.json();
      console.log(result);

      if (response.status === 200) {
        console.log("Login Success:", result);
        navigate("/eventwaiting", { state: { email: email } });
      } else {
        setResponseMessage(result.message || "Login failed");
      }
    } catch (error) {
      console.log(error);
      setResponseMessage(`Error: ${error.message}`);
    }
  };

  return (
    <div className="bg-gradient-to-tr from-black via-purple-950 to-blue-950 h-screen flex justify-center items-center md:bg-[url('/Geniusgateway.png')] bg-cover bg-center">
      <div className="h-[70%] w-[400px] flex flex-col justify-center items-center backdrop-blur-sm md:ml-[50%]">
        <div className="h-[20%] mb-4">
          <p className="text-3xl p-3.5 flex justify-center font-bold text-white">Login To Genius Gateway</p>
        </div>
        <div className="flex flex-col p-4 w-80 rounded-lg justify-center items-center h-[50%]">
          <input 
            type="email"
            placeholder="Email"
            className="p-3 border border-gray-600 focus:outline-1 focus:outline-blue-800 m-2 w-full rounded-sm text-gray-200"
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
          <div className="relative w-full m-2">
            <input 
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="p-3 border border-gray-600 focus:outline-1 focus:outline-blue-800 w-full rounded-sm text-gray-200"
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
            <button 
              type="button" 
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-sm text-gray-600"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          <button
            type="submit"
            className="w-3/5 mt-4 rounded-lg text-white flex justify-center p-2 bg-blue-800 hover:bg-blue-600 transition cursor-pointer"
            onClick={handleSubmit}
          >
            Login
          </button>
          <p className="text-red-600 mt-3">{responseMessage}</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
