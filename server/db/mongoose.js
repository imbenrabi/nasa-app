import mongoose from 'mongoose';

const connectionUrl = 'mongodb://127.0.0.1:27017';
const databaseName = 'nasa-app-db';

mongoose.connect(process.env.MONGODB_URL || `${connectionUrl}/${databaseName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})