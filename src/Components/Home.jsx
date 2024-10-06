import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-800 flex items-center justify-center">
      <div className="w-full md:w-1/2 lg:w-1/3 p-8 bg-white rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">
          Publish with Ease
        </h1>
        <h3 className="text-lg mb-4 text-gray-600">
          Reach millions of readers worldwide
        </h3>
        <div className="flex justify-center">
          <img
            className="w-full max-w-xs rounded-lg shadow-md"
            src="https://images.pexels.com/photos/5474294/pexels-photo-5474294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Fast typing"
          />
        </div>
        <Link to="/sign-up">
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-6"
            type="button"
          >
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
