import mongoose from 'mongoose'

const connectDB = async () => {
	try {
		//starting A connection
		const conn = await mongoose.connect(process.env.MONGO_URI, {
			useUnifiedTopology: true,
			useNewUrlParser: true,
			useCreateIndex: true,
		}) // New mongo url parser
		console.log(`MongoDB Connected: ${conn.connection.host}`)
	} catch (error) {
		console.error(`Error: ${error.message}`.red.underline.bold)
		// exit with failure
		process.exit(1)
	}
}

export default connectDB
