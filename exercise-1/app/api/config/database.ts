import mongoose from 'mongoose'

const DATABASE_URL = process.env.DATABASE_URL || ''

if (!DATABASE_URL) {
	throw new Error(
		'Please define the MONGODB_URI environment variable inside .env.local'
	);
}

//@ts-ignore
var cached = global.mongoose

if (!cached) {
	//@ts-ignore
	cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB() {
	if (cached.conn) {
		return cached.conn
	}

	if (!cached.promise) {
		const opts = {
			bufferCommands: false,
		};

		cached.promise = mongoose.connect(DATABASE_URL, opts).then((mongoose: any) => {
			return mongoose
		});
	}

	cached.conn = await cached.promise;
	return cached.conn;
}

export default connectDB
