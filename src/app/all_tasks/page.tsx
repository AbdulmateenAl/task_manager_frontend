"use client";

import { useState } from "react";

import Modal from "../components/Modal";

import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";

export default function Alltasks() {
	const [showModal, setShowModal] = useState(false);

	const status: string = "complete";
	const statusColor: string = "green";
	return (
		<div>
			<div className="bg-gray-700 rounded-lg w-auto h-[95vh] md:h-[97vh] m-2 overflow-y-auto">
				<div className="flex flex-wrap items-center justify-center md:justify-normal gap-x-10 w-full gap-y-10 p-3">
					<div className="task-cards">
						<div>
							<h1 className="text-2xl">End Life</h1>
							<p>Life is about to end...</p>
						</div>
						<div>
							<p className="text-sm">04/10/2024</p>
							<div className="flex flex-row items-center justify-between">
								<div className="flex items-center">
									<div
										style={{ background: "red" }}
										className="w-2 h-2 rounded-full"
									></div>
									<p className="text-sm rounded-xl px-1">{"incomplete"}</p>
								</div>
								<div className="flex">
									<FiEdit />
									<MdDelete />
								</div>
							</div>
						</div>
					</div>
					<div className="task-cards">
						<div>
							<h1 className="text-2xl">Hello World</h1>
							<p>Hello world here...</p>
						</div>
						<div>
							<p className="text-sm">04/10/2024</p>
							<div className="flex flex-row items-center justify-between">
								<div className="flex items-center">
									<div
										style={{ background: statusColor }}
										className="w-2 h-2 rounded-full"
									></div>
									<p className="text-sm rounded-xl px-1">{status}</p>
								</div>
								<div className="flex">
									<FiEdit />
									<MdDelete />
								</div>
							</div>
						</div>
					</div>
					<div className="task-cards">
						<div>
							<h1 className="text-2xl">End Life</h1>
							<p>Life is about to end...</p>
						</div>
						<div>
							<p className="text-sm">04/10/2024</p>
							<div className="flex flex-row items-center justify-between">
								<div className="flex items-center">
									<div
										style={{ background: "red" }}
										className="w-2 h-2 rounded-full"
									></div>
									<p className="text-sm rounded-xl px-1">{"incomplete"}</p>
								</div>
								<div className="flex">
									<FiEdit />
									<MdDelete />
								</div>
							</div>
						</div>
					</div>
					<div className="task-cards">
						<div>
							<h1 className="text-2xl">Hello World</h1>
							<p>Hello world here...</p>
						</div>
						<div>
							<p className="text-sm">04/10/2024</p>
							<div className="flex flex-row items-center justify-between">
								<div className="flex items-center">
									<div
										style={{ background: statusColor }}
										className="w-2 h-2 rounded-full"
									></div>
									<p className="text-sm rounded-xl px-1">{status}</p>
								</div>
								<div className="flex">
									<FiEdit />
									<MdDelete />
								</div>
							</div>
						</div>
					</div>
					<div className="task-cards">
						<div>
							<h1 className="text-2xl">End Life</h1>
							<p>Life is about to end...</p>
						</div>
						<div>
							<p className="text-sm">04/10/2024</p>
							<div className="flex flex-row items-center justify-between">
								<div className="flex items-center">
									<div
										style={{ background: "red" }}
										className="w-2 h-2 rounded-full"
									></div>
									<p className="text-sm rounded-xl px-1">{"incomplete"}</p>
								</div>
								<div className="flex">
									<FiEdit />
									<MdDelete />
								</div>
							</div>
						</div>
					</div>
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
				<div>Hello</div>
				<button className="btn-primary bg-blue-600 hover:bg-blue-500 px-3 py-2">
					Add Task
				</button>
			</Modal>
		</div>
	);
}
