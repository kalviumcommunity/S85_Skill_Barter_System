import React from "react";

const UserEntity = ({ name, skillOffered, skillRequested, description }) => {
  return (
    <div className="p-4 border rounded-lg shadow-md bg-white">
      <h2 className="text-xl font-bold">{name}</h2>
      <p className="text-gray-600">{description}</p>
      <div className="mt-2">
        <span className="px-2 py-1 mr-2 text-white bg-green-500 rounded">
          Offers: {skillOffered}
        </span>
        <span className="px-2 py-1 text-white bg-blue-500 rounded">
          Needs: {skillRequested}
        </span>
      </div>
    </div>
  );
};

export default UserEntity;
