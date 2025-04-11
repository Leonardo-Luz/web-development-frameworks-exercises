'use server'

import dbConnect from '@/lib/connectionFactory'
import Tasks from '@/models/tasks.model'
import { Task } from '@/types/task'

async function connDB() {
	await dbConnect()
		.then(() => {
			console.log('Database connection established')
		})
		.catch(err => {
			console.log(err)
		})
}

export async function getTasks() {
	await connDB()

	const tasks = await Tasks.find({}).lean()

	const parsedTasks = tasks.map(task => { return { ...task, _id: String(task._id) } })

	return parsedTasks
}

export async function getTask(id: string) {
	await connDB()
	return await Tasks.findById(id)
}

export async function createTask(task: Task) {
	await connDB()
	const newTask = new Tasks(task)
	await newTask.save()
}

export async function updateTask(id: string, task: Task) {
	await connDB()

	await Tasks.findByIdAndUpdate(id, task, {
		new: true,
		runValidators: true
	});
}

export async function deleteTask(id: string) {
	await connDB()
	await Tasks.findByIdAndDelete(id)
}
