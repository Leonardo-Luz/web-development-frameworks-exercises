'use client'

import { Task } from "@/types/task";
import { useState } from "react";

type taskCardProps = {
	task: Task;
	onDelete: (id: string) => Promise<void>;
	onComplete: (id: string, taskBd: Task) => Promise<void>;
};

const TaskCard = ({ task, onDelete, onComplete }: taskCardProps) => {
	const [details, toggleDetails] = useState(false);
	const [complete, toggleComplete] = useState(task.complete);

	const deleteHandler = async () => {
		await onDelete(task._id!);
	}

	const completeHandler = async () => {
		await onComplete(task._id!, {
			...task,
			complete: !complete
		})

		toggleComplete(prev => !prev)
	}

	return (
		<div className="self-center border-2 border-cyan-950 rounded-md w-[90%]">
			<div className="flex flex-row justify-between">
				<h1 className="p-3">{task.tittle}</h1>
				<div>
					<button className="cursor-pointer hover:bg-cyan-950 p-3" onClick={() => { toggleDetails(prev => !prev) }}>{details ? "Close Details" : "Details"}</button>
					<button className={`${complete ? "bg-green-600" : "bg-red-600"} text-gray-900 hover:text-white cursor-pointer hover:bg-cyan-950 p-3`} onClick={() => { completeHandler() }}>{complete ? "Complete" : "Ongoing"}</button>
				</div>
			</div>
			{
				details &&
				<div>
					<p className="border-t-2 border-t-cyan-950 p-3">Description: {task.description ? task.description : "Details not provided"}</p>
					<div className="border-t-2 border-t-cyan-950">
						<button className="w-[50%] cursor-pointer hover:bg-cyan-950 p-3" onClick={() => { completeHandler() }}>{complete ? "Reopen Task" : "Complete Task"}</button>
						<button className="w-[50%] cursor-pointer hover:bg-cyan-950 p-3" onClick={() => { deleteHandler() }}>Remove Task</button>
					</div>
				</div>
			}
		</div>
	);
}

export default TaskCard;
