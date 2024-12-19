import React from 'react';

const About: React.FC = () => {
  return (
    <div className="p-8 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">About Point Grey Pictures</h1>
      <p className="mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>

      <a href="mailto:info@pointgreypictures.com">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
          Contact Us
        </button>
      </a>
    </div>
  );
};

export default About;