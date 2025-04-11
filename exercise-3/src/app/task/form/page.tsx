'use client'

import { createTask } from "@/services/tasks.service";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useRef } from "react";

const TaskForm = () => {
	const tittle = useRef<HTMLInputElement>(null);
	const description = useRef<HTMLTextAreaElement>(null);

	const createHandler = async () => {
		await createTask({
			tittle: tittle.current!.value,
			description: description.current!.value,
			complete: false,
		})

		redirect('/task/list')
	}

	return (
		<>
			<h1 className="self-center font-bold text-3xl">Task Form</h1>
			<div className="w-[40vw] h-[70vh] flex flex-col self-center border-cyan-950 rounded-2xl border-3">
				<div className="flex flex-row self-center">
					<p className="p-2">New Task</p>
				</div>
				<hr className="border-1 border-cyan-950" />
				<div className="h-[90%] flex flex-col align-middle justify-center self-center gap-6">
					<label className="flex flex-row gap-3 align-middle justify-between">Tittle: <input className="bg-cyan-950 p-2 inset-shadow-sm inset-shadow-black w-[70%]" ref={tittle} type="text" placeholder="tittle" /></label>
					<label className="flex flex-row gap-3 align-middle justify-between">Description: <textarea className="bg-cyan-950 p-2 inset-shadow-sm inset-shadow-black w-[70%]" ref={description} rows={5} cols={30} placeholder="Task description..." /></label>
				</div>
				<hr className="border-1 border-cyan-950" />
				<div className="w-[100%] flex flex-row">
					<Link className="w-[50%] self-center rounded-bl-md text-center bg-cyan-950 hover:inset-shadow-black hover:inset-shadow-sm" href="/task/list">Cancel</Link>
					<button onClick={() => { createHandler() }} className="cursor-pointer w-[50%] self-center rounded-br-md text-center bg-cyan-950 hover:inset-shadow-black hover:inset-shadow-sm">Create</button>
				</div>
			</div>
		</>
	);
}

export default TaskForm;
