// Member.js

import React from 'react';
import Card from './Card';
import { peopleData } from './imagesData';


const Cultural = () => {
  return (
    <div className="pic-bg h-screen flex flex-col items-center justify-start text-white overflow-auto">
      <h1 className="text-2xl font-bold p-6 tracking-[1rem]"
      data-aos="zoom-in-down"
      data-aos-delay="100">CULTIVATE UNITY, CELEBRATE DIVERSITY</h1>
      <div className="flex items-center mb-4">
        <div className="flex-grow h-[3px] bg-white"></div>
        <div className="mx-4">
          <h1 className="rog text-6xl font-bold"
          data-aos="zoom-in-down"
          data-aos-delay="400">Cultural TEAM</h1>
        </div>
        <div className="flex-grow h-[3px] bg-white"></div>
      </div>
      <div className="wrapper grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[5rem] ml-24 pt-10"
      data-aos="zoom-out"
      data-aos-delay="400">
        {peopleData.map((person, index) => (
          <Card key={index} people={[person]} />
        ))}
      </div>
    </div>
  );
};

export default Cultural;
