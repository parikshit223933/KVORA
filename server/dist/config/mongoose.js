import mongoose from 'mongoose';
await mongoose.connect("mongodb://localhost/kvora_dev", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
});
const db = mongoose.connection;
// tslint:disable-next-line:no-console
db.on('error', console.error.bind(console, 'Error in connecting to the database!'));
db.once('open', () => {
    // tslint:disable-next-line:no-console
    console.log('Connected to the database!');
});
export default db;
//# sourceMappingURL=mongoose.js.map