import React from 'react';
import { Link } from 'react-router-dom';
import AddProjects from '../Addprojects';

const HomePage = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto text-center">
      <h1 className="text-3xl font-bold mb-4">Home Page</h1>
      <p className="text-gray-700 mb-6">Effortlessly manage your projects and track progress in real-time.</p>
      
      <div className="flex justify-center gap-4">
        <Link to="/projects" className="bg-gray-100 text-white px-4 py-2 rounded-lg">View Projects</Link>
        <Link to="/add-project" className="bg-gray-100 text-white px-4 py-2 rounded-lg">Add Project</Link>
      </div>
    </div>
  );
};

export default HomePage;

