import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SelfPublish = () => {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [bookCover, setBookCover] = useState(null);
  const [bookFile, setBookFile] = useState(null);

  const navigate = useNavigate(); // Initialize useNavigate for navigation

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      title,
      subtitle,
      author,
      description,
      category,
      price,
      bookCover,
      bookFile,
    });
    // Navigate to dashboard after publishing
    navigate("/dashboard");
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-screen-lg mx-auto">
        {/* Header Section */}
        <header className="bg-blue-500 text-white p-6 rounded-lg shadow-lg mb-8 text-center">
          <h1 className="text-3xl font-bold">Self-Publish Your Book</h1>
          <p className="mt-2 text-lg">
            Get your book in the hands of readers around the world.
          </p>
        </header>

        {/* Form Section */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow-lg"
        >
          {/* Book Title */}
          <div className="mb-6">
            <label className="block text-xl mb-2" htmlFor="title">
              Book Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="Enter the book title"
            />
          </div>

          {/* Book Subtitle */}
          <div className="mb-6">
            <label className="block text-xl mb-2" htmlFor="subtitle">
              Book Subtitle
            </label>
            <input
              type="text"
              id="subtitle"
              value={subtitle}
              onChange={(e) => setSubtitle(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="Enter the book subtitle"
            />
          </div>

          {/* Author Name */}
          <div className="mb-6">
            <label className="block text-xl mb-2" htmlFor="author">
              Author Name
            </label>
            <input
              type="text"
              id="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="Enter your name"
            />
          </div>

          {/* Book Description */}
          <div className="mb-6">
            <label className="block text-xl mb-2" htmlFor="description">
              Book Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="Enter a brief description of the book"
              rows="4"
            ></textarea>
          </div>

          {/* Category */}
          <div className="mb-6">
            <label className="block text-xl mb-2" htmlFor="category">
              Category
            </label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg"
            >
              <option value="" disabled>
                Select Category
              </option>
              <optgroup label="Fiction">
                <option value="Fantasy">Fantasy</option>
                <option value="Science Fiction">Science Fiction</option>
                <option value="Mystery">Mystery</option>
              </optgroup>
              <optgroup label="Non-Fiction">
                <option value="Biography">Biography</option>
                <option value="Self-Help">Self-Help</option>
                <option value="Health & Fitness">Health & Fitness</option>
              </optgroup>
            </select>
          </div>

          {/* Price */}
          <div className="mb-6">
            <label className="block text-xl mb-2" htmlFor="price">
              Price
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                $
              </span>
              <input
                type="number"
                id="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full p-3 pl-10 border border-gray-300 rounded-lg"
                placeholder="Enter the price"
              />
            </div>
          </div>

          {/* Book Cover Upload */}
          <div className="mb-6">
            <label className="block text-xl mb-2" htmlFor="bookCover">
              Book Cover
            </label>
            <input
              type="file"
              id="bookCover"
              onChange={(e) => setBookCover(e.target.files[0])}
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>

          {/* Book File Upload */}
          <div className="mb-6">
            <label className="block text-xl mb-2" htmlFor="bookFile">
              Upload Book File
            </label>
            <input
              type="file"
              id="bookFile"
              onChange={(e) => setBookFile(e.target.files[0])}
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>

          {/* Submit and Cancel Buttons */}
          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition"
            >
              Publish
            </button>

            <button
              type="button"
              className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition"
              onClick={() => navigate("/dashboard")}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SelfPublish;
