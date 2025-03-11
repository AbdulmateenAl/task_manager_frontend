"use client";
import Link from "next/link";
import { memo, useMemo } from "react";
import { usePathname } from "next/navigation";

import { CgProfile } from "react-icons/cg";
import { CiHome } from "react-icons/ci";
import { FaTasks, FaExclamationCircle } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { VscSignOut } from "react-icons/vsc";

const Navbar = () => {
	const pathname = usePathname();

	const menuItems = useMemo(
		() => [
			{ href: "/", label: "Dashboard", icon: <CiHome className="text-xl" /> },
			{ href: "/all_tasks", label: "All Tasks", icon: <FaTasks /> },
			{ href: "/complete", label: "Complete", icon: <TiTick /> },
			{
				href: "/incomplete",
				label: "Incomplete",
				icon: <FaExclamationCircle />,
			},
		],
		[]
	);

	return (
        <div className="h-[85vh] md:h-[97vh] w-[50px] sm:w-48 m-2 box-border">
            {/* Navigation bar */}
			<nav className="flex flex-col w-full h-full justify-between bg-gray-700 rounded-md p-2">
				<div className="flex flex-col items-start space-y-4 w-full h-full">
					<Link className="flex flex-row gap-1 items-center" href="/">
						<CgProfile className="text-2xl text-white" />
						<h1 className="text-sm md:text-2xl font-bold hidden md:block text-white">
							Abdul
						</h1>
					</Link>

					{/* Use map for menu items */}
					<ul className="text-sm">
						{menuItems.map(({ href, label, icon }) => {
							const isActive = pathname === href;
							return (
								<li key={href}>
									<Link
										href={href}
										className={`flex flex-row items-center gap-3 text-left hover:bg-gray-600 p-1 md:py-2 md:pl-2 md:pr-14 rounded-md cursor-pointer group hover:text-white ${isActive ? "bg-gray-600 text-white border-r-4 border-blue-500" : "hover:bg-gray-400 hover:text-white"}`}
									>
										<span className="text-gray-800 group-hover:text-white">
											{icon}
										</span>
										<p className="group-hover:text-white font-medium hidden md:block">
											{label}
										</p>
									</Link>
								</li>
							);
						})}
					</ul>
				</div>

				<div className="flex items-start">
					<ul className="text-sm">
						<li>
							<Link
								href="/signout"
								className="flex flex-row items-center gap-2 hover:bg-gray-600 py-2 pl-2 pr-20 rounded-md group hover:text-white cursor-pointer"
							>
								<VscSignOut />
								<p className="group-hover:text-white font-medium hidden md:block">
									Sign Out
								</p>
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
};

export default memo(Navbar);
