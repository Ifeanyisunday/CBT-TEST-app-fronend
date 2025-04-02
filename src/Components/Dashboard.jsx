import React from 'react'
import { useState } from 'react';

export const Dashboard = () => {

    const [userData, setUserData] = useState(null);
    const [recentActivity, setRecentActivity] = useState([]);
    const [test, setTest] = useState(false)

    const handleTest = () => {
        setTest(true)
    }

    return (
        <div className="flex h-screen bg-gray-100">
          {/* Sidebar */}
          <div className="w-64 bg-gray-800 text-white p-6">
            <div className="text-2xl font-bold text-center mb-12">{name}</div>
            <ul className="space-y-6">
              <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">Home</li>
              <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">Profile</li>
              <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">Settings</li>
              <li onClick={handleTest} className="hover:bg-gray-700 p-2 rounded cursor-pointer">Take test</li>
              <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">Logout</li>
            </ul>
          </div>
    
          {/* Content */}
          <div className="flex-1 p-6">
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center">
                <img
                  src={userData?.avatarUrl}
                  alt="user avatar"
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h2 className="text-2xl font-semibold">{userData?.name}</h2>
                  <p className="text-gray-500">{userData?.email}</p>
                </div>
              </div>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-400">
                Edit Profile
              </button>
            </div>
    
            {/* Stats Section */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <h4 className="text-xl font-medium text-gray-700">Points</h4>
                <p className="text-3xl font-bold text-blue-600">120</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <h4 className="text-xl font-medium text-gray-700">Remark</h4>
                <p className="text-3xl font-bold text-blue-600">950</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <h4 className="text-xl font-medium text-gray-700">Following</h4>
                <p className="text-3xl font-bold text-blue-600">180</p>
              </div>
            </div>
    
            {/* Recent Activity Section */}

            { test ? 
              
              <div className="flex justify-center items-center bg-gray-100">
              <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96">
                <form>
                  <div className='mb-4'>
                    <input className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" 
                    type="text" placeholder='Subject' />
                    <input className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" 
                    type="number" placeholder='Amount' />
                    <button type="submit"
              className="w-full mt-2 py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
                Start Exam</button>
                </div>
                </form>
                </div>
                </div>
              
              :
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-700 mb-4">Recent Activity</h3>
              <ul>
                {recentActivity.map((activity) => (
                  <li key={activity.id} className="text-lg text-gray-600 mb-3">
                    {activity.description}
                  </li>
                ))}
              </ul>
            </div>
            }
          </div>
        </div>
      );
    };

    export default Dashboard
