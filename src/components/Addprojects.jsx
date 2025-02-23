import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import ProjectCard from './ProjectCard'; // Importing the ProjectCard component

const AddProjects = () => {
  const [projects, setProjects] = useState([]); // State to hold project cards

  const handleAddProject = () => {
    const newProject = {
      id: projects.length + 1,
      title: '',
      description: '',
    };
    setProjects([...projects, newProject]); // Add new project to the state
  };

  const handleDeleteProject = (id) => {
    setProjects(projects.filter(project => project.id !== id)); // Delete project by id
  };

  const handleDragEnd = (result) => {
    if (!result.destination) return;
    const reorderedProjects = Array.from(projects);
    const [movedProject] = reorderedProjects.splice(result.source.index, 1);
    reorderedProjects.splice(result.destination.index, 0, movedProject);
    setProjects(reorderedProjects);
  };

  return (
    <div className="p-4">
      <button 
        onClick={handleAddProject} 
        className="fixed top-30 left-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Add Project +
      </button>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="projects" direction="horizontal">
          {(provided) => (
            <div 
              className="mt-16 flex flex-wrap gap-4"
              {...provided.droppableProps} 
              ref={provided.innerRef}
            >
              {projects.map((project, index) => (
                <Draggable key={project.id} draggableId={project.id.toString()} index={index}>
                  {(provided) => (
                    <div 
                      ref={provided.innerRef} 
                      {...provided.draggableProps} 
                      {...provided.dragHandleProps}
                    >
                      <ProjectCard 
                        project={project} 
                        onDelete={handleDeleteProject} 
                      />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default AddProjects;
