import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="bg-gray-800 py-4 px-8">
      <ul className="flex flex-col">
        <li className="mb-4">
          <Link to="/dashboard" className="text-white hover:text-gray-300">
            Dashboard
          </Link>
        </li>
        <li className="mb-4">
          <Link to="/self-publish" className="text-white hover:text-gray-300">
            Self Publish
          </Link>
        </li>
        <li className="mb-4">
          <Link to="/help-centre" className="text-white hover:text-gray-300">
            Help Centre
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
