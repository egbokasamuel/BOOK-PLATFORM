import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [royaltyData, setRoyaltyData] = useState({});
  const [salesByCountry, setSalesByCountry] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [liveBooks, setLiveBooks] = useState([]);

  useEffect(() => {
    // Fetch royalty data
    const fetchRoyalties = async () => {
      const response = await fetch("/api/royalties");
      const data = await response.json();
      setRoyaltyData(data);
    };

    // Fetch sales by country
    const fetchSales = async () => {
      const response = await fetch("/api/sales");
      const data = await response.json();
      setSalesByCountry(data);
    };

    // Fetch reviews
    const fetchReviews = async () => {
      const response = await fetch("/api/reviews");
      const data = await response.json();
      setReviews(data);
    };

    // Fetch live books
    const fetchLiveBooks = async () => {
      const response = await fetch("/api/live-books");
      const data = await response.json();
      setLiveBooks(data);
    };

    fetchRoyalties();
    fetchSales();
    fetchReviews();
    fetchLiveBooks();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row">
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-6 text-center">
            Author Dashboard
          </h1>

          {/* Royalty Earnings Section */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Daily Royalty */}
            <div className="bg-blue-500 text-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold">Daily Royalty</h2>
              <p className="text-4xl font-bold">
                ${royaltyData.daily?.toFixed(2)}
              </p>
              <p className="text-sm">Earnings from today's sales</p>
            </div>

            {/* Monthly Royalty */}
            <div className="bg-green-500 text-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold">Monthly Royalty</h2>
              <p className="text-4xl font-bold">
                ${royaltyData.monthly?.toFixed(2)}
              </p>
              <p className="text-sm">Earnings from this month's sales</p>
            </div>

            {/* Yearly Royalty */}
            <div className="bg-purple-500 text-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold">Yearly Royalty</h2>
              <p className="text-4xl font-bold">
                ${royaltyData.yearly?.toFixed(2)}
              </p>
              <p className="text-sm">Earnings from this year's sales</p>
            </div>
          </section>

          {/* Book Sales by Country */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Book Sales by Country</h2>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <ul>
                {salesByCountry.map((countryData, index) => (
                  <li key={index} className="mb-4">
                    <p className="text-lg font-semibold">
                      {countryData.country}
                    </p>
                    <p className="text-gray-700">Sales: {countryData.sales}</p>
                    <div className="bg-gray-300 h-2 w-full">
                      <div
                        className="bg-blue-500 h-full"
                        style={{ width: `${(countryData.sales / 500) * 100}%` }}
                      ></div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>

        <div className="md:w-1/3 ml-6">
          {/* Review Books Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Reviews</h2>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <ul>
                {reviews.map((review, index) => (
                  <li key={index} className="mb-4">
                    <h3 className="text-lg font-semibold">{review.title}</h3>
                    <p className="text-gray-700">"{review.review}"</p>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Live Books Section */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Live Books</h2>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <ul>
                {liveBooks.map((book, index) => (
                  <li key={index} className="mb-4">
                    <h3 className="text-lg font-semibold">{book.title}</h3>
                    <p className="text-gray-700">Category: {book.category}</p>
                    <p className="text-gray-700">Price: {book.price}</p>
                  </li>
                ))}
              </ul>
            </div>

            <button
              className="bg-blue-500 text-white py-2 px-4 rounded mt-6 hover:bg-blue-600"
              onClick={() => navigate("/self-publishing")}
            >
              Create
            </button>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
