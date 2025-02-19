import React from "react";

const MultiLoader = () => {
  return (
    <div className="flex flex-col items-center justify-center  space-y-6">
      {/* Spinner Loader */}
      <div className="w-8 h-8 border-4   border-blue-500 border-t-transparent rounded-full animate-spin delay-150"></div>

      {/* Dots Loader
      <div className="flex space-x-2">
        <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce"></div>
        <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce delay-150"></div>
        <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce delay-300"></div>
      </div>

      {/* Bar Loader 
      <div className="flex space-x-1">
        <div className="w-2 h-8 bg-blue-500 animate-pulse"></div>
        <div className="w-2 h-8 bg-blue-500 animate-pulse delay-150"></div>
        <div className="w-2 h-8 bg-blue-500 animate-pulse delay-300"></div>
      </div> */}
    </div>
  );
};

export default MultiLoader;
