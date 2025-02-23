import React, { useState } from "react";
import { Trash2, Save } from "lucide-react";

const ProjectCard = ({ project, onDelete, onUpdate }) => {
  const [title, setTitle] = useState(project.title || "");
  const [description, setDescription] = useState(project.description || "");
  const [image, setImage] = useState(project.image || null);
  const [showUrlInput, setShowUrlInput] = useState(false);
  const [imageUrl, setImageUrl] = useState("");


  

  // Handle image upload
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
        onUpdate(project.id, { ...project, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  // Validate and set image from URL
  const isValidImageUrl = (url) => /\.(jpeg|jpg|gif|png|webp|svg)$/i.test(url);
  const handleAddImageFromUrl = () => {
    if (!imageUrl.trim() || !isValidImageUrl(imageUrl)) {
      alert("Please enter a valid image URL.");
      return;
    }
    setImage(imageUrl);
    onUpdate(project.id, { ...project, image: imageUrl });
    setShowUrlInput(false);
    setImageUrl("");
  };

  // Remove image
  const handleImageRemove = () => {
    setImage(null);
    onUpdate(project.id, { ...project, image: null });
  };

  // Save title & description
  const handleSave = () => {
    onUpdate(project.id, { ...project, title, description });
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 m-2 max-w-sm">
      {/* Display Image */}
      {image ? (
        <img src={image} alt="Project" className="w-full h-32 object-cover rounded" />
      ) : (
        <div className="w-full h-32 flex items-center justify-center bg-gray-200 rounded">
          <span className="text-gray-500">No Image</span>
        </div>
      )}

      {/* Image Upload & URL Input */}
      <div className="flex gap-2 mt-2">
        <input type="file" onChange={handleImageUpload} className="hidden" id={`file-input-${project.id}`} accept="image/*" />
        <label htmlFor={`file-input-${project.id}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded cursor-pointer">
          Upload Image
        </label>
        <button onClick={() => setShowUrlInput(!showUrlInput)} className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded">
          Add Image via URL
        </button>
        {image && (
          <button onClick={handleImageRemove} className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">
            Remove Image
          </button>
        )}
      </div>

      {/* URL Input Field */}
      {showUrlInput && (
        <div className="mt-2 flex gap-2">
          <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} className="border p-1 rounded w-full" placeholder="Enter image URL" />
          <button onClick={handleAddImageFromUrl} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
            Add
          </button>
        </div>
      )}

      {/* Title Input */}
      <textarea
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="text-gray-600 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 mt-2 w-full"
        placeholder="Title"
      />

      {/* Description Input */}
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="text-gray-600 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 mt-2 w-full"
        placeholder="Project Description"
      />

      {/* Save & Delete Buttons - Placed Right After Description */}
      <div className="flex justify-end space-x-3 mt-3">
        {/* Save Button with Save Icon */}
        <button
          onClick={handleSave}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded-full flex items-center justify-center"
        >
          <Save size={15} />
        </button>

        {/* Delete Button with Trash Icon */}
        <button
          onClick={() => onDelete(project.id)}
          className="bg-red-500 hover:bg-red-700 text-white font-bold p-2 rounded-full flex items-center justify-center"
        >
          <Trash2 size={15} />
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;







