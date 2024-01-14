import React from "react";

const ProgressBar = ({ progress = 40 }: { progress: number }) => {
   return (
      <div className="bg-gray-400 w-full mt-3 h-5 rounded-full text-center relative">
         <div
            className="p-1 bg-primary rounded-full h-5"
            style={{ width: `${progress}%` }}
         ></div>
         <p className="absolute text-sm text-white font-medium top-0 left-1/2 -translate-x-1/2">{`${Number(
            progress
         ).toFixed(0)}%`}</p>
      </div>
   );
};

export default ProgressBar;
