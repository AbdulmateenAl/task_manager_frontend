import { BsFillCalendarCheckFill } from "react-icons/bs";
import { FaCalendarDay } from "react-icons/fa";

export default function dailyplanner() {
    const user: string = "Abdul's"
    return (
        <div className="flex flex-col gap-3">
            <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row items-center gap-2 justify-center">
                    <BsFillCalendarCheckFill className="text-2xl"/>
                    <h1 className="font-bold text-2xl">{user} Daily Planner</h1>
                </div>
                <div className="flex flex-row items-center gap-2 justify-center p-2 text-blue-500 bg-white rounded-lg ">
                    <FaCalendarDay className="text-sm"/>
                    <p className="text-sm">04/10/2024</p>
                </div>
            </div>
            <div className="bg-white rounded-lg">
                <div className="bg-blue-950 px-2 py-1 font-medium text-white rounded-t-lg">My Morning Ritual</div>
                <div className="flex items-center space-x-2 text-white overflow-x-auto">
                    <div className="flex items-center gap-3 bg-blue-600 w-72 h-20 m-3 rounded-lg">
                        <input
                            className="ml-3 w-4 h-4 border-2 border-white rounded-sm"
                            type="checkbox"
                            name="read"
                                />

                        <label htmlFor="read">Read</label>
                    </div>
                    <div className="flex items-center gap-3 bg-blue-600 w-72 h-20 m-3 rounded-lg">
                        <input className="ml-3 w-4 h-4 border-2 border-white rounded-sm" type="checkbox" name="play"/>
                        <label htmlFor="play">Play</label>
                    </div>
                    <div className="flex items-center gap-3 bg-blue-600 w-72 h-20 m-3 rounded-lg">
                        <input className="ml-3 w-4 h-4 border-2 border-white rounded-sm" type="checkbox" name="dance"/>
                        <label htmlFor="dance">Dance</label>
                    </div>
                    <div className="flex items-center gap-3 bg-blue-600 w-72 h-20 m-3 rounded-lg">
                        <input className="ml-3 w-4 h-4 border-2 border-white rounded-sm" type="checkbox" name="sleep"/>
                        <label htmlFor="sleep">Sleep</label>
                    </div>
                </div>
            </div>
        </div>
    );
}