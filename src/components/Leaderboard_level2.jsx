import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
// const teams = [
//   { id: 1, name: 'Cyber Wolves', points: 2450, questionsAnswered: 32, checkpoints: [5, 7, 9] },
//   { id: 2, name: 'Data Dragons', points: 2200, questionsAnswered: 29, checkpoints: [5, 7] },
//   { id: 3, name: 'Code Crushers', points: 2150, questionsAnswered: 28, checkpoints: [5] },
//   { id: 4, name: 'Byte Battlers', points: 1950, questionsAnswered: 27, checkpoints: [3, 5] },
//   { id: 5, name: 'Pixel Warriors', points: 1800, questionsAnswered: 25, checkpoints: [2] },
// ];


const Leaderboard = () => {
    const [teams, setTeams] = useState([]);

    // Function to fetch teams from backend
    const fetchTeams = async () => {
        try {
            const response = await axios.get('http://localhost:5000/l2leaderboard');
            console.log(response.data);
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
        <div className="max-w-5xl mx-auto p-6">
            <h1 className="text-3xl text-center font-bold text-gray-800 mb-6">Genius Gateway Leaderboard</h1>

            <div className="rounded-lg shadow-lg overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rank</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Team Name</th>
                                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Points</th>
                                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Lvl-2 Questions Answered</th>
                                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Lvl-2 Checkpoints</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {teams.map((team, index) => (
                                <tr key={team._id} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`px-3 py-1 rounded-full text-sm font-semibold 
                      ${index === 0 ? 'bg-yellow-100 text-yellow-800' :
                                                index === 1 ? 'bg-blue-100 text-blue-800' :
                                                    index === 2 ? 'bg-purple-100 text-purple-800' :
                                                        'bg-gray-100 text-gray-800'}`}>
                                            #{index + 1}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{team.Teamname}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 text-right">{team.points}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 text-right">{team.questions}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">
                                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-md">
                                            CP-{team.checkpoints}
                                        </span>

                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Leaderboard;