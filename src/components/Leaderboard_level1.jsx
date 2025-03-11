import React, { useEffect, useState } from "react";
import axios from 'axios';
const Leaderboard_level1 = () => {
  const [teams, setTeams] = useState([]);

  // Function to fetch teams from backend
  const fetchTeams = async () => {
    try {
      const response = await axios.get('https://geniusgateway2k25.onrender.com/teams');
      setTeams(response.data); // Update state with sorted teams
    } catch (error) {
      console.error('Error fetching teams:', error);
    }
  };

  // Fetch teams every second
  useEffect(() => {

    fetchTeams(); // Initial fetch
    const interval = setInterval(fetchTeams, 1000); // Fetch every second

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);
  return (
    <div className="bg-gradient-to-tl from-blue-200 to-purple-200 min-h-screen">
      <div className="max-w-5xl mx-auto p-4">
        <h1 className="text-4xl font-bold text-center mb-10 mt-5">Genius Gateway Level 1 Leaderboard</h1>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <table className="min-w-full text-center">
            <thead className="bg-blue-700 text-white">
              <tr>
                <th className="py-3 text-2xl px-4">Rank</th>
                <th className="py-3 text-2xl px-4">Team Name</th>
                <th className="py-3 text-2xl px-4">Points</th>
              </tr>
            </thead>
            <tbody>
              {teams.map((team, index) => (
                <tr
                  key={index}
                  className={`border-b h-16 ${index===0?"bg-yellow-300": (index===1?"bg-gray-300":"bg-white")} hover:bg-gray-100 transition duration-300`}
                >
                  <td className="py-2 text-xl px-4">{index + 1}</td>
                  <td className="py-2 font-bold text-xl px-4">{team.Teamname}</td>
                  <td className="py-2 font-bold text-xl px-4">{team.points}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div> 
    </div>
  );
};

export default Leaderboard_level1;
