import mongoose from 'mongoose';

const connectDB = async () => {
    
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser : true,
            useUnifiedTopology : true,
            useCreateIndex : true
        })
        console.log(`Database Connected on ${conn.connection.host}`);
    } catch (error) {
        console.log(error);
    }
    
}

export default connectDB;