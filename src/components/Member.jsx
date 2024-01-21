// Member.js

import React from 'react';
import Card from './Card';
import Om from "../assets/GDSC_2022_2023/Om_Gawande.jpg";
import NikhilShinde from "../assets/GDSC_2022_2023/Nikhil_Shinde.jpg";
import DipaliPatil from "../assets/GDSC_2022_2023/Yash_Pame.jpg";
import AshutoshShimpi from "../assets/GDSC_2022_2023/Ashutosh_Shimpi.jpg";
import AbhishekSuryavanshi from "../assets/GDSC_2022_2023/Abhishek_Suryavanshi.jpeg";
import Saurabh from "../assets/GDSC_2022_2023/Saurabh_Barde.jpg";

const peopleData = [
  { name: 'Om Gawande', image: Om, role: 'Full Stack Developer' },
  { name: 'Nikhil Shinde', image: NikhilShinde, role: 'Cloud Lead' },
  { name: 'Yash Pame', image: DipaliPatil, role: 'Faculty Co-ordinator' },
  { name: 'Ashutosh Shimpi', image: AshutoshShimpi, role: 'Management Lead' },
  { name: 'Abhishek Suryavanshi', image: AbhishekSuryavanshi, role: 'Management Lead' },
  { name: 'Saurabh Barde', image: Saurabh, role: 'Frontend Lead' },
];

const Member = () => {
  return (
    <div className="pic-bg h-screen flex flex-col items-center justify-start text-white overflow-auto">
      <h1 className="text-2xl font-bold p-6 tracking-[1rem]">A BUNCH OF GEEKS WHO LOVE CODING..!</h1>
      <div className="flex items-center mb-4">
        <div className="flex-grow h-[3px] bg-white"></div>
        <div className="mx-4">
          <h1 className="rog text-6xl font-bold">TECHNICAL TEAM</h1>
        </div>
        <div className="flex-grow h-[3px] bg-white"></div>
      </div>
      <div className="wrapper grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[5rem] ml-24 pt-10">
        {peopleData.map((person, index) => (
          <Card key={index} people={[person]} />
        ))}
      </div>
    </div>
  );
};

export default Member;
