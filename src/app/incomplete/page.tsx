"use client";

import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";

export default function incomplete() {
    const status:string = "incomplete";
    const statusColor:string = "red";
	return (
		<>
            <div className="bg-white rounded-lg w-auto h-[95vh] md:h-[97vh] m-2 overflow-y-auto">
                <div className="flex flex-wrap items-center justify-center md:justify-normal gap-x-10 w-full gap-y-10 p-3">
			        <div className="flex flex-col justify-between bg-blue-200 rounded-md w-48 h-40 px-2 py-1">
			        	<div>
			        		<h1 className="text-2xl">End Life</h1>
			        		<p>Life is about to end...</p>
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
			        <div className="flex flex-col justify-between bg-blue-200 rounded-md w-48 h-40 px-2 py-1">
			        	<div>
			        		<h1 className="text-2xl">End Life</h1>
			        		<p>Life is about to end...</p>
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
			        <div className="flex flex-col justify-between bg-blue-200 rounded-md w-48 h-40 px-2 py-1">
			        	<div>
			        		<h1 className="text-2xl">End Life</h1>
			        		<p>Life is about to end...</p>
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
			        <div className="flex flex-col justify-between bg-blue-200 rounded-md w-48 h-40 px-2 py-1">
			        	<div>
			        		<h1 className="text-2xl">End Life</h1>
			        		<p>Life is about to end...</p>
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
			        <div className="flex flex-col justify-between bg-blue-200 rounded-md w-48 h-40 px-2 py-1">
			        	<div>
			        		<h1 className="text-2xl">End Life</h1>
			        		<p>Life is about to end...</p>
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
				</div>
            </div>
		</>
	);
}
