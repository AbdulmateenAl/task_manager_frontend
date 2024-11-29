"use client";
import { MdOutlineAddCircleOutline } from "react-icons/md";

export default function complete() {
    const status:string = "completed";
    return (
        <div>
            <div className="bg-white rounded-lg w-auto h-[85vh] md:h-[97vh] m-2">
                <div className="flex gap-3 w-full h-full p-3">
                    <div className="flex flex-col justify-between bg-blue-200 rounded-md w-48 h-36 px-2 py-1">
                        <div>
                            <h1 className="text-2xl">Hello World</h1>
                            <p>Hello world here...</p>
                        </div>
                        <div>
                            <p className="text-sm">04/10/2024</p>
                            <div className="flex float-row items-center gap-1">
                                <div className="rounded-full bg-green-700 w-2 h-2"></div>
                                <p className="text-sm">{status}</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between bg-blue-200 rounded-md w-48 h-36 px-2 py-1">
                        <div>
                            <h1 className="text-2xl">Hello World</h1>
                            <p>Hello world here...</p>
                        </div>
                        <div>
                            <p className="text-sm">04/10/2024</p>
                            <div className="flex float-row items-center gap-1">
                                <div className="rounded-full bg-green-700 w-2 h-2"></div>
                                <p className="text-sm">{status}</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between bg-blue-200 rounded-md w-48 h-36 px-2 py-1">
                        <div>
                            <h1 className="text-2xl">Hello World</h1>
                            <p>Hello world here...</p>
                        </div>
                        <div>
                            <p className="text-sm">04/10/2024</p>
                            <div className="flex float-row items-center gap-1">
                                <div className="rounded-full bg-green-700 w-2 h-2"></div>
                                <p className="text-sm">{status}</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between bg-blue-200 rounded-md w-48 h-36 px-2 py-1">
                        <div>
                            <h1 className="text-2xl">Hello World</h1>
                            <p>Hello world here...</p>
                        </div>
                        <div>
                            <p className="text-sm">04/10/2024</p>
                            <div className="flex float-row items-center gap-1">
                                <div className="rounded-full bg-green-700 w-2 h-2"></div>
                                <p className="text-sm">{status}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}