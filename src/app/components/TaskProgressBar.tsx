export const TaskProgressBar = ({ completed, total }) => {
	const progress = (completed / total) * 100;

	return (
		<div className="w-full bg-gray-300 rounded-lg p-3">
			<div className="flex justify-between mb-2">
				<p className="text-sm font-medium text-gray-700">
					Completed Tasks
				</p>
				<p className="text-sm font-medium text-gray-700">
					{completed} / {total}
				</p>
			</div>
			<div className="w-full bg-gray-200 h-4 rounded-lg overflow-hidden">
				<div
					className="bg-green-500 h-full rounded-lg"
					style={{ width: `${progress}%` }}
				></div>
			</div>
		</div>
	);
};
