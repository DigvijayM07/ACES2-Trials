import React from 'react';

const Pic = () => {
  const backColor = {
    backgroundColor: 'rgba(21, 20, 20, 1)',
    // Add any other styles you need
  };

  const fontColor = {
    color: 'rgba(254, 254, 255, 1)',
  };

  return (
    <div className="h-screen flex align-top justify-center p-8" style={backColor}>
      <p className=" rog text-4xl font-extrabold" style={fontColor}>
        ACES
      </p>
    </div>
  );
}

export default Pic;
