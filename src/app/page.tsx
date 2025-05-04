"use client";

import { BsFillCalendarCheckFill } from "react-icons/bs";
import { FaCalendarDay } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

import { TaskProgressBar } from "./components/TaskProgressBar";

interface TaskItem {
	title: string;
	icon: JSX.Element;
}

export default function Home() {
	const user_name: string = "Abdul's";
	const user_task: TaskItem[] = [
		{ title: "Mon", icon: <CgProfile /> },
		{ title: "Mon", icon: <CgProfile /> },
		{ title: "Mon", icon: <CgProfile /> },
		{ title: "Mon", icon: <CgProfile /> },
		{ title: "Mon", icon: <CgProfile /> },
		{ title: "Mon", icon: <CgProfile /> },
		{ title: "Mon", icon: <CgProfile /> },
		{ title: "Mon", icon: <CgProfile /> },
		{ title: "Mon", icon: <CgProfile /> },
		{ title: "Mon", icon: <CgProfile /> },
	];

	return (
		<div className="">
			<div className="flex flex-col justify-between bg-[#6C757D] rounded-lg w-auto h-[97vh] m-2 overflow-y-auto p-2">
				<div>
					<div className="flex flex-row items-center justify-between mt-0">
						<div className="flex flex-row items-center gap-2 justify-center">
							<BsFillCalendarCheckFill className="text-2xl" />
							<h1 className="font-bold text-2xl">{user_name} Daily Planner</h1>
						</div>
						<div className="flex flex-row items-center gap-2 justify-center p-2 text-blue-500 bg-white rounded-lg ">
							<FaCalendarDay />
							<p className="text-sm">04/10/2024</p>
						</div>
					</div>
					<h1 className="flex text-3xl font-bold items-center justify-center">
						Welcome to the Task Manager
					</h1>
					<div className="p-8 space-y-4">
						<h1 className="text-2xl font-bold">Task Progress</h1>
						<TaskProgressBar completed={8} total={10} />
					</div>
				</div>
				<div className="mb-0">
					<h3>Previous Tasks</h3>
					<div className="h-[200px] overflow-y-auto space-y-3 px-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
						{user_task.map((task, index) => (
							<div
								key={index}
								className="flex items-center justify-between gap-4 p-4 bg-gradient-to-r from-[#6C757D] to-[#5a6268] text-white rounded-xl shadow-md transition hover:scale-[1.02] hover:shadow-lg"
							>
								{/* Icon + Title */}
								<div className="flex items-center gap-3">
									<div className="text-2xl">{task.icon}</div>
									<p className="text-lg font-semibold">{task.title}</p>
								</div>

								{/* Progress bar */}
								<div className="w-1/2">
									<TaskProgressBar
										completed={8}
										total={10}
									/>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
