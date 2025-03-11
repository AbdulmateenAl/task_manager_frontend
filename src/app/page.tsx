"use client";

import {
	Chart as ChartJS,
	ArcElement,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Doughnut } from "react-chartjs-2";

import { BsFillCalendarCheckFill } from "react-icons/bs";
import { FaCalendarDay } from "react-icons/fa";

import { TaskProgressBar } from "./components/TaskProgressBar";

//Register component
ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);
ChartJS.register(ArcElement, Tooltip, Legend);

export default function Home() {
	const user: string = "Abdul's";

	const tasks = [
		{
			title: "FIrst",
			data: 50,
		},
		{
			title: "Second",
			data: 20,
		},
		{
			title: "Third",
			data: 10,
		},
		{
			title: "Forth",
			data: 28,
		},
	];

	const circle = [
		{
			title: "yellow",
			data: 16,
			backgroundColor: "yellow",
		},
		{
			title: "red",
			data: 25,
			backgroundColor: "red",
		},
		{
			title: "blue",
			data: 9,
			backgroundColor: "blue",
		},
		{
			title: "pink",
			data: 30,
			backgroundColor: "pink",
		},
	];

	return (
		<div className="">
			<div className="bg-gray-700 rounded-lg w-auto h-[95vh] md:h-[97vh] m-2 overflow-y-auto p-2">
				<div className="flex flex-row items-center justify-between mt-0">
					<div className="flex flex-row items-center gap-2 justify-center">
						<BsFillCalendarCheckFill className="text-2xl" />
						<h1 className="font-bold text-2xl">{user} Daily Planner</h1>
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
				<div className="h-[200px]">
					<Line
						data={{
							labels: tasks.map((task) => task.title),
							datasets: [
								{
									label: "My First Dataset",
									data: tasks.map((task) => task.data),
									fill: false,
									borderColor: "rgb(75, 192, 192)",
									tension: 0.1,
								},
							],
						}}
					/>
					<Doughnut
						className="h-[400px]"
						data={{
							labels: circle.map((circle) => circle.title),
							datasets: [
								{
									label: "# of Votes",
									data: circle.map((circle) => circle.data),
									backgroundColor: circle.map(
										(circle) => circle.backgroundColor
									),
									borderColor: [
										"rgba(255, 99, 132, 1)",
										"rgba(54, 162, 235, 1)",
										"rgba(255, 206, 86, 1)",
										"rgba(75, 192, 192, 1)",
									],
									borderWidth: 1,
								},
							],
						}}
					/>
				</div>
			</div>
		</div>
	);
}
