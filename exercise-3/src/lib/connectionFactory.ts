'use server'

import mongoose from 'mongoose';

const connectionOptions = {
	bufferCommands: false,
};

declare global {
	var mongoose: any;
}

let cached = global.mongoose;

if (!cached) {
	cached = global.mongoose = { conn: null, promise: null };
}

export async function dbConnect() {
	if (cached.conn) {
		return cached.conn;
	}

	if (!process.env.DATABASE_URL) {
		throw new Error("DATABASE_URL environment variable not set");
	}

	const dbUri = process.env.DATABASE_URL;

	try {
		cached.promise = mongoose.connect(dbUri, connectionOptions);
		cached.conn = await cached.promise;

		return cached.conn;
	} catch (error: any) {
		cached.promise = null;
		throw new Error(`Error connecting to database: ${error.message}`);
	}
}

export default dbConnect;
