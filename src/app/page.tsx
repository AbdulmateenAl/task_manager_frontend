"use client";
import { useState } from "react";
import AddMorningRitual from "./Modals/AddMorningRitual";

import { BsFillCalendarCheckFill } from "react-icons/bs";
import { FaCalendarDay } from "react-icons/fa";

export default function Home() {
  const user:string = "Abdul's";

  const [showMorningRitual, setShowMorningRitual] = useState(false);
  return (
    <div className="">
      <AddMorningRitual show={showMorningRitual} onClose={setShowMorningRitual}></AddMorningRitual>
      <div className="flex flex-row items-center justify-between mt-0">
        <div className="flex flex-row items-center gap-2 justify-center">
          <BsFillCalendarCheckFill className="text-2xl"/>
          <h1 className="font-bold text-2xl">{user} Daily Planner</h1>
        </div>
        <div className="flex flex-row items-center gap-2 justify-center p-2 text-blue-500 bg-white rounded-lg ">
          <FaCalendarDay/>
          <p className="text-sm">04/10/2024</p>
        </div>
      </div>
      <h1 className="flex text-3xl font-bold items-center justify-center">Welcome to the Task Manager</h1>
      <p className="">This is your dashboard.</p>
    </div>
  );
}
