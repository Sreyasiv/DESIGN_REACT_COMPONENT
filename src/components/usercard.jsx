import React from 'react';

const Usercard = () => {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-2xl shadow-lg text-center">
      <img
        src="https://img.freepik.com/premium-photo/flat-no-picture-avatar-profile-picture_941097-35021.jpg?semt=ais_hybrid"
        alt="Profile Photo"
        className="w-24 h-24 rounded-full mx-auto mb-4"
      />
      <h2 className="text-xl font-bold mb-2">John Doe</h2>
      <p className="text-sm mb-1">john.doe@example.com</p>
      <p className="text-sm mb-1">+1234567890</p>
      <p className="text-sm">123 Main Street, Cityville</p>
    </div>
  );
};

export default Usercard;