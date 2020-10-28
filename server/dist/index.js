"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = 8000;
const cors_1 = __importDefault(require("cors"));
const express_session_1 = __importDefault(require("express-session"));
const connect_mongo_1 = __importDefault(require("connect-mongo"));
const MongoStore = connect_mongo_1.default(express_session_1.default);
const mongoose_1 = __importDefault(require("./config/mongoose"));
const sessionSecret = 'foo';
const Routes_1 = __importDefault(require("./Routes"));
app.use(express_session_1.default({
    secret: sessionSecret,
    name: 'Kvora',
    resave: false,
    cookie: { maxAge: 1000 * 60 * 1000 },
    store: new MongoStore({ mongooseConnection: mongoose_1.default, autoRemove: 'disabled' }),
    saveUninitialized: false,
}));
app.use(express_1.default.urlencoded({ extended: true }));
app.use(cors_1.default());
app.use(Routes_1.default);
app.listen(port, (error) => {
    if (error) {
        // tslint:disable-next-line: no-console
        console.log('There was an error in Starting the server at the port', port);
        return;
    }
    // tslint:disable-next-line: no-console
    console.log(`Server is running on the port ${port}`);
});
//# sourceMappingURL=index.js.map