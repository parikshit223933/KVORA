const express = require('express');
const app = express();
const port = 8000;
const cors = require('cors');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const db = require('./config/mongoose');
const sessionSecret='foo';

app.use(
	session({
		secret: sessionSecret,
		name: 'Kvora',
		resave: false,
		cookie: { maxAge: 1000 * 60 * 1000 },
		store: new MongoStore({ mongooseConnection: db, autoRemove: 'disabled' }, function (error) {
			console.log(error || 'Connect Mongo Setup is working fine!');
		}),
		saveUninitialized: false,
	})
);
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(require('./Routes'));

app.listen(port, (error) => {
	if (error) {
		console.log('There was an error in Starting the server at the port', port);
		return;
	}
	console.log(`Server is running on the port ${port}`);
});
