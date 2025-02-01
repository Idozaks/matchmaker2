import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Dashboard = () => {
  // Initial DIU data
  const [diuData, setDiuData] = useState({
    interests: ["Technology", "Music", "Travel"],
    aiInsights: "Your AI has detected interesting patterns in your activity.",
    recentInteractions: [
      { id: 1, message: "Liked content on AI personalization" },
      { id: 2, message: "Commented on Travel recommendations" },
      { id: 3, message: "Shared an article on Technology trends" }
    ]
  });

  // Initial AI Activity logs
  const [aiLogs, setAiLogs] = useState([
    "Initializing AI learning...",
    "Analyzing user engagement...",
    "Updated preferences based on recent interactions."
  ]);

  // Simulate dynamic updates for AI insights and logs every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setDiuData(prev => ({
        ...prev,
        aiInsights: "Updated insights at " + new Date().toLocaleTimeString()
      }));
      setAiLogs(prev => [...prev, "AI update at " + new Date().toLocaleTimeString()]);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-purple-600 mb-6">Mycelium Matchmaker Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* DIU Insights Card */}
        <motion.div
          className="bg-white p-4 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl font-semibold mb-4">Your DIU Profile</h2>
          <div>
            <h3 className="font-bold">Top Interests:</h3>
            <ul className="list-disc ml-6">
              {diuData.interests.map((interest, index) => (
                <li key={index}>{interest}</li>
              ))}
            </ul>
          </div>
          <div className="mt-4">
            <h3 className="font-bold">AI Insights:</h3>
            <p>{diuData.aiInsights}</p>
          </div>
        </motion.div>

        {/* Quick Actions Panel */}
        <motion.div
          className="bg-white p-4 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
          <div className="flex flex-col space-y-3">
            <button className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700">
              Edit DIU
            </button>
            <button className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700">
              Manage Privacy Settings
            </button>
            <button className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700">
              View Recommended Content
            </button>
          </div>
        </motion.div>
      </div>

      {/* AI Activity Logs */}
      <motion.div
        className="mt-6 bg-white p-4 rounded-lg shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-xl font-semibold mb-4">AI Activity Logs</h2>
        <ul className="list-disc ml-6 space-y-1">
          {aiLogs.slice(-5).reverse().map((log, index) => (
            <li key={index} className="text-gray-600">{log}</li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default Dashboard; 