import React from 'react';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-4">
          MemoryAid Caregiver Dashboard
        </h1>
        <p className="text-gray-600 text-center mb-6">
          Welcome to your caregiver dashboard. This application helps you monitor and support your loved ones.
        </p>
        <div className="space-y-4">
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h3 className="font-semibold text-blue-800 mb-2">Patient Monitoring</h3>
            <p className="text-blue-600 text-sm">Track daily activities and health metrics</p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg border border-green-200">
            <h3 className="font-semibold text-green-800 mb-2">Medication Reminders</h3>
            <p className="text-green-600 text-sm">Ensure medications are taken on schedule</p>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
            <h3 className="font-semibold text-purple-800 mb-2">Emergency Alerts</h3>
            <p className="text-purple-600 text-sm">Receive immediate notifications when needed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;