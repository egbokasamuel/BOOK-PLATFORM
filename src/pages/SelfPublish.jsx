import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SelfPublish = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [manuscript, setManuscript] = useState(null); // State for manuscript file
  const [cover, setCover] = useState(null); // State for book cover file

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("subtitle", subtitle);
    formData.append("author", author);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("price", price);
    if (manuscript) formData.append("manuscript", manuscript);
    if (cover) formData.append("cover", cover);

    // API request to publish book
    const response = await fetch("/api/self-publish", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      console.log("Book published successfully!");
      navigate("/dashboard");
    } else {
      console.error("Failed to publish book");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6">
          Self-Publish Your Book
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Title Input */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-lg font-bold mb-2"
              htmlFor="title"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter book title"
              required
            />
          </div>

          {/* Subtitle Input */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-lg font-bold mb-2"
              htmlFor="subtitle"
            >
              Subtitle
            </label>
            <input
              type="text"
              id="subtitle"
              value={subtitle}
              onChange={(event) => setSubtitle(event.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter book subtitle"
            />
          </div>

          {/* Author Input */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-lg font-bold mb-2"
              htmlFor="author"
            >
              Author
            </label>
            <input
              type="text"
              id="author"
              value={author}
              onChange={(event) => setAuthor(event.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter author name"
              required
            />
          </div>

          {/* Description Input */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-lg font-bold mb-2"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter book description"
              rows="4"
              required
            ></textarea>
          </div>

          {/* Category Select */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-lg font-bold mb-2"
              htmlFor="category"
            >
              Category
            </label>
            <select
              id="category"
              value={category}
              onChange={(event) => setCategory(event.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select category</option>
              <option value="Fiction">Fiction</option>
              <option value="Non-Fiction">Non-Fiction</option>
              <option value="Mystery">Mystery</option>
              <option value="Fantasy">Fantasy</option>
              <option value="Science Fiction">Science Fiction</option>
              <option value="Biography">Biography</option>
              <option value="Self-Help">Self-Help</option>
              <option value="History">History</option>
              <option value="Cooking">Cooking</option>
              {/* Add more categories as needed */}
            </select>
          </div>

          {/* Manuscript Upload */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-lg font-bold mb-2"
              htmlFor="manuscript"
            >
              Upload Manuscript
            </label>
            <input
              type="file"
              id="manuscript"
              onChange={(event) => setManuscript(event.target.files[0])}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              accept=".pdf, .doc, .docx"
              required
            />
          </div>

          {/* Book Cover Upload */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-lg font-bold mb-2"
              htmlFor="cover"
            >
              Upload Book Cover (PDF)
            </label>
            <input
              type="file"
              id="cover"
              onChange={(event) => setCover(event.target.files[0])}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              accept=".pdf" // Changed to accept only PDF
              required
            />
          </div>

          {/* Price Input */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-lg font-bold mb-2"
              htmlFor="price"
            >
              Price
            </label>
            <input
              type="number"
              id="price"
              value={price}
              onChange={(event) => setPrice(event.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter book price"
              required
            />
          </div>

          {/* Publish Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg w-full"
            >
              Publish Book
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SelfPublish;
