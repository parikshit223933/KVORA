import mongoose from 'mongoose';
await mongoose.connect("mongodb://localhost/kvora_dev", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
});
// tslint:disable-next-line:no-console
mongoose.connection.on('error', console.error.bind(console, 'Error in connecting to the database!'));
mongoose.connection.once('open', () => {
    // tslint:disable-next-line:no-console
    console.log('Connected to the database!');
});
export default await mongoose.connection;
//# sourceMappingURL=mongoose.js.map