import { BsFillCalendarCheckFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { FaMedal } from "react-icons/fa6";

import Link from "next/link";

export default function Navbar() {
    return (
        <div className="h-screen w-[70px]">
            <nav className="flex flex-col w-full h-screen justify-between bg-white rounded-sm text-gray-800 p-2">
                <div className="flex flex-col items-start space-y-4 w-full h-full">
                    <Link href="/">
                        <h1 className="text-sm md:text-2xl font-bold">Task Manager</h1>
                    </Link>
                    <ul className="text-sm">
                        <Link href="/dailyplanner" className="flex flex-row items-center gap-3 text-left hover:bg-gray-200 py-2 pl-2 pr-14 rounded-md cursor-pointer group hover:text-blue-500">
                            <BsFillCalendarCheckFill className="text-gray-800 group-hover:text-blue-500" />
                            <p className="group-hover:text-blue-500 font-medium hidden md:block">Daily Planner</p>
                        </Link>
                        <Link href="/goals" className="flex flex-row items-center gap-3 text-left hover:bg-gray-200 py-2 pl-2 pr-14 rounded-md cursor-pointer group hover:text-blue-500">
                            <FaMedal className="text-gray-800 group-hover:text-blue-500" />
                            <p className="group-hover:text-blue-500 font-medium hidden md:block">Goals</p>
                        </Link>
                    </ul>
                </div>
                <div className="flex items-start">
                    <ul className="text-sm">
                        <Link href="/account" className="flex flex-row items-center gap-2 hover:bg-gray-200 py-2 pl-2 pr-20 rounded-md group hover:text-blue-500 cursor-pointer">
                            <CgProfile className="text-2xl group-hover:text-blue-500"/>
                            <p className="group-hover:text-blue-500 font-medium hidden md:block">Account</p>
                        </Link>
                    </ul>
                </div>
            </nav>
        </div>
    );
}