import mongoose from 'mongoose';

export default async (): Promise<mongoose.Connection> => {
	await mongoose.connect(`mongodb://localhost/kvora_dev`, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
	});

	// tslint:disable-next-line:no-console
	mongoose.connection.on(
		'error',
		// tslint:disable-next-line: no-console
		console.error.bind(console, 'Error in connecting to the database')
	);
	mongoose.connection.once('open', () => {
		// tslint:disable-next-line:no-console
		console.log('Connected to the database!');
	});

	return mongoose.connection;
};
