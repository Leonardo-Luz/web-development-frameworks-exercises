import { Task } from '@/types/task';
import mongoose from 'mongoose'

const tasksSchema = new mongoose.Schema<Task>({
	tittle: String,
	description: String,
	complete: Boolean,
});

const Tasks = mongoose.models.Tasks || mongoose.model('Tasks', tasksSchema)

export default Tasks
