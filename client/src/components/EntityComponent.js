import React from "react";

const EntityComponent = ({ name, description, skill }) => {
  return (
    <div className="p-4 border rounded-lg shadow-md">
      <h2 className="text-xl font-bold">{name}</h2>
      <p className="text-gray-600">{description}</p>
      <span className="px-2 py-1 text-white bg-blue-500 rounded">{skill}</span>
    </div>
  );
};

export default EntityComponent;
