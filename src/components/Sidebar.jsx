import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ isOpen }) => {

  return (
    <div className={`h-auto w-64 bg-gray-800 text-white fixed top-16 right-0 transition-transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>


      <div className="p-4">
        
        <ul className="mt-4">
          <li className="mb-2">
            <Link to="/HomePage" className="hover:text-gray-400">Home</Link>
          </li>
          <li className="mb-2">
            <Link to="/Progress" className="hover:text-gray-400">Progress</Link>
          </li>
          
          <li className="mb-2">
            <Link to="/TaskManager" className="hover:text-gray-400">Tasks</Link>
          </li>
          <li className="mb-2">
            <Link to="/Teams" className="hover:text-gray-400">Teams</Link>
          </li>
          
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
