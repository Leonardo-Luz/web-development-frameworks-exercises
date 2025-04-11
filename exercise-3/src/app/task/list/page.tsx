'use client'

import TaskCard from "@/components/TaskCard";
import { deleteTask, getTasks, updateTask } from "@/services/tasks.service";
import { Task } from "@/types/task";
import Link from "next/link";
import { useEffect, useState } from "react";

const TaskList = () => {
	const [filter, setFilter] = useState<'all' | 'complete' | 'ongoing'>('all');
	const [tasks, setTasks] = useState<Task[]>();

	const getTasksHandler = async () => {
		const tasks = await getTasks() as unknown as Task[]
		setTasks(prev => {
			prev = tasks
			switch (filter) {
				case 'all':
					return prev;
				case 'complete':
					return prev?.filter(task => task.complete)
				case 'ongoing':
					return prev?.filter(task => !task.complete)
			}
		});
	}

	const deleteHandler = async (id: string) => {
		await deleteTask(id);

		setTasks(prev => prev?.filter(task => task._id! != id))
	}

	const updateHandler = async (id: string, taskBd: Task) => {
		await updateTask(id, taskBd);

		setTasks(prev => prev!.map(task => {
			if (id == task._id!) {
				return taskBd
			} else {
				return task
			}
		}))
	}

	useEffect(() => {
		getTasksHandler();
	}, [filter])

	return (
		<>
			<h1 className="self-center font-bold text-3xl">
				Task List
			</h1>
			<div className="w-[40vw] h-[70vh] flex flex-col self-center border-cyan-950 rounded-2xl border-3">
				<div className="flex flex-row">
					<h1 onClick={() => { setFilter('all') }} className={`${filter == 'all' ? "bg-cyan-950 font-bold " : "hover:bg-cyan-950"} w-[18%] text-center p-2 rounded-tl-md cursor-pointer`}>All</h1>
					<h1 onClick={() => { setFilter('complete') }} className={`${filter == 'complete' ? "bg-cyan-950 font-bold " : "hover:bg-cyan-950"} w-[18%] text-center p-2 cursor-pointer`}>Complete</h1>
					<h1 onClick={() => { setFilter('ongoing') }} className={`${filter == 'ongoing' ? "bg-cyan-950 font-bold " : "hover:bg-cyan-950"} w-[18%] text-center p-2 cursor-pointer`}>Ongoing</h1>
				</div>
				<hr className="border-1 border-cyan-950" />
				<div className="p-2 max-h-[90%] h-[90%] flex flex-col align-middle gap-6 overflow-auto">
					{
						(tasks && tasks.length > 0) ?
							(
								(
									(filter == "all") &&
									tasks.map(task => <TaskCard key={task._id!} task={task} onComplete={updateHandler} onDelete={deleteHandler} />)
								) ||
								(
									(filter == "complete") &&
									tasks.filter(task => task.complete).map(task => <TaskCard key={task._id!} task={task} onComplete={updateHandler} onDelete={deleteHandler} />)
								) ||
								(
									(filter == "ongoing") &&
									tasks.filter(task => !task.complete).map(task => <TaskCard key={task._id!} task={task} onComplete={updateHandler} onDelete={deleteHandler} />)
								)
							) :
							<p className="self-center">Data not found</p>
					}
				</div>
				<hr className="border-1 border-cyan-950" />
				<Link className="w-[100%] self-center rounded-br-md rounded-bl-md text-center bg-cyan-950 hover:inset-shadow-black hover:inset-shadow-sm" href="/task/form">New Task</Link>
			</div>
		</>
	);
}

export default TaskList;
