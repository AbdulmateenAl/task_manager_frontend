import { CgProfile } from "react-icons/cg";
import { CiHome } from "react-icons/ci";
import { FaTasks } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { FaExclamationCircle } from "react-icons/fa";
import { VscSignOut } from "react-icons/vsc";

import Link from "next/link";

export default function Navbar() {
    return (
        <div className="h-[85vh] md:h-[97vh] w-[50px] sm:w-48 m-2 box-border">
            <nav className="flex flex-col w-full h-full justify-between bg-white rounded-md text-gray-800 p-2">
                <div className="flex flex-col items-start space-y-4 w-full h-full">
                    <Link className="flex flex-row gap-1 items-center" href="/">
                        <CgProfile className="text-2xl group-hover:text-blue-500"/>
                        <h1 className="text-sm md:text-2xl font-bold hidden md:block">Abdul</h1>
                    </Link>
                    <ul className="text-sm">
                        <Link href="/" className="flex flex-row items-center gap-3 text-left hover:bg-gray-200 p-1 md:py-2 md:pl-2 md:pr-14 rounded-md cursor-pointer group hover:text-blue-500">
                            <CiHome className="text-gray-800 group-hover:text-blue-500 text-xl" />
                            <p className="group-hover:text-blue-500 font-medium hidden md:block">Dashboard</p>
                        </Link>
                        <Link href="/all_tasks" className="flex flex-row items-center gap-3 text-left hover:bg-gray-200 py-2 pl-2 pr-14 rounded-md cursor-pointer group hover:text-blue-500">
                            <FaTasks className="text-gray-800 group-hover:text-blue-500" />
                            <p className="group-hover:text-blue-500 font-medium hidden md:block">All Tasks</p>
                        </Link>
                        <Link href="/complete" className="flex flex-row items-center gap-3 text-left hover:bg-gray-200 py-2 pl-2 pr-14 rounded-md cursor-pointer group hover:text-blue-500">
                            <TiTick className="text-gray-800 group-hover:text-blue-500" />
                            <p className="group-hover:text-blue-500 font-medium hidden md:block">Complete</p>
                        </Link>
                        <Link href="/incomplete" className="flex flex-row items-center gap-3 text-left hover:bg-gray-200 py-2 pl-2 pr-14 rounded-md cursor-pointer group hover:text-blue-500">
                            <FaExclamationCircle className="text-gray-800 group-hover:text-blue-500" />
                            <p className="group-hover:text-blue-500 font-medium hidden md:block">Incomplete</p>
                        </Link>
                    </ul>
                </div>
                <div className="flex items-start">
                    <ul className="text-sm">
                        <Link href="/signout" className="flex flex-row items-center gap-2 hover:bg-gray-200 py-2 pl-2 pr-20 rounded-md group hover:text-blue-500 cursor-pointer">
                            <VscSignOut />
                            <p className="group-hover:text-blue-500 font-medium hidden md:block">Sign Out</p>
                        </Link>
                    </ul>
                </div>
            </nav>
        </div>
    );
}