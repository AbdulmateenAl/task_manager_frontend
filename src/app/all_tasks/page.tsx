"use client";

import { useState, useRef } from "react";

import Modal from "../components/Modal";

import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";

export default function Alltasks() {
	const [showModal, setShowModal] = useState(false);
	const [error, setError] = useState("");
	interface Task {
		title: string;
		description?: string;
		date: string;
		status: string;
		statusColor: string;
	}

	const [tasks, setTasks] = useState<Task[]>([]);

	const titleRef = useRef<HTMLInputElement>(null);
	const descriptionRef = useRef<HTMLTextAreaElement>(null);
	const dateRef = useRef<HTMLInputElement>(null);

	// const status: string = "complete";
	// const statusColor: string = "green";

	const createTask = (e) => {
		e.preventDefault();

		const title = titleRef.current?.value.trim();
		const description = descriptionRef.current?.value.trim();
		const date = dateRef.current?.value;

		if (!title || !date) {
			setError("This field is required");
			return; // Stop execution if validation fails
		}

		setError(""); // Clear error if valid

		const newTask = {
			title,
			description: description || "No description", // Handle empty description
			date,
			status: "incomplete",
			statusColor: "red",
		};

		setTasks((prevTasks) => [...prevTasks, newTask]); //  Add task
		setShowModal(false);
		console.log(tasks);

		// Clear input fields after adding task
		titleRef.current.value = "";
		descriptionRef.current.value = "";
		dateRef.current.value = "";
	};

	const task_card = [
		{
			title: "End Life",
			description: "Life is about to end...",
			date: "04/10/2024",
			status: "incomplete",
			statusColor: "red",
		},
		{
			title: "Hello World",
			description: "Hello world here...",
			date: "04/10/2024",
			status: "complete",
			statusColor: "green",
		},
		{
			title: "End Life",
			description: "Life is about to end...",
			date: "04/10/2024",
			status: "incomplete",
			statusColor: "red",
		},
		{
			title: "Hello World",
			description: "Hello world here...",
			date: "04/10/2024",
			status: "complete",
			statusColor: "green",
		},
		{
			title: "End Life",
			description: "Life is about to end...",
			date: "04/10/2024",
			status: "incomplete",
			statusColor: "red",
		},
		{
			title: "Hello World",
			description: "Hello world here...",
			date: "04/10/2024",
			status: "complete",
			statusColor: "green",
		},
	];
	return (
		<div>
			<div className="bg-gray-700 rounded-lg w-auto h-[95vh] md:h-[97vh] m-2 overflow-y-auto">
				<div className="flex flex-wrap items-center justify-center md:justify-normal gap-x-10 w-full gap-y-10 p-3">
					{task_card.map((task, index) => (
						<div key={index} className="task-cards">
							<div className="justify-between w-full">
								<h1>{task.title}</h1>
								<p>{task.description}</p>
							</div>
							<div>
								<p className="text-sm">{task.date}</p>
								<div className="flex flex-row justify-between w-full items-center">
									<div
										className={`flex items-center rounded-lg p-1 justify-center text-center w-20 mt-1 ${
											task.status === "complete" ? "bg-green-500" : "bg-red-500"
										}`}
									>
										<p>
											{task.status === "complete" ? "completed" : "incomplete"}
										</p>
									</div>
									<div className="flex flex-row items-center gap-2">
										<FiEdit className="text-blue-500" />
										<MdDelete className="text-red-500" />
									</div>
								</div>
							</div>
						</div>
					))}
					<div
						onClick={() => setShowModal(true)}
						className="border-2 border-dashed border-gray-300 rounded-lg w-48 h-40 flex items-center justify-center cursor-pointer bg-gray-800 bg-opacity-90 text-white shadow-lg p-3 transition hover:scale-105 hover:shadow-xl"
					>
						<h2>+ Create new task</h2>
					</div>
				</div>
			</div>
			{/* Modal COmponent */}
			<Modal show={showModal} onClose={setShowModal}>
				<div>
					<h1 className="text-2xl font-bold">Create New Task</h1>
					<div className="flex flex-col gap-4 mt-4">
						<div className="flex flex-col gap-2">
							<p>Title</p>
							<input
								type="text"
								ref={titleRef}
								placeholder="e.g Play soccer"
								className="border-2 border-gray-300 rounded-lg p-2 text-black"
							/>
							{error && <p className="text-red-500">{error}</p>}
						</div>
						<div className="flex flex-col gap-2">
							<p>Description</p>
							<textarea
								ref={descriptionRef}
								placeholder="e.g Remember to call friends and take your boot"
								className="border-2 border-gray-300 rounded-lg p-2 text-black"
							/>
						</div>
						<div className="flex flex-col gap-2">
							<p>Due date</p>
							<input
								type="date"
								ref={dateRef}
								placeholder="Task Date"
								className="border-2 border-gray-300 rounded-lg p-2 text-black"
							/>
						</div>
					</div>
				</div>
				<button
					className="btn-primary bg-blue-600 hover:bg-blue-500 px-3 py-2 right-3 bottom-3 absolute"
					onClick={createTask}
				>
					+ Create Task
				</button>
			</Modal>
		</div>
	);
}
