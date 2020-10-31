import express from 'express';
const app = express();
const port = 8000;
import cors from 'cors';
import session from 'express-session';
import ConnectMongo from 'connect-mongo';
const MongoStore = ConnectMongo(session);
import db from './config/mongoose';
const sessionSecret = 'foo';
import Routes from './Routes';

app.use(
	session({
		secret: sessionSecret,
		name: 'Kvora',
		resave: false,
		cookie: { maxAge: 1000 * 60 * 1000 },
		store: new MongoStore({ mongooseConnection: db, autoRemove: 'disabled' }),
		saveUninitialized: false,
	})
);
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(Routes);

app.listen(port, () => {
	// tslint:disable-next-line: no-console
	console.log(`Server is running on the port ${port}`);
});
