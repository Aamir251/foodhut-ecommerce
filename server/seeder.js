import dotenv from 'dotenv';

import products from "../client/src/sampleData/Foods.js"
import users from '../client/src/sampleData/users.js';

import User from './models/userModel.js' 
import Product from './models/FoodModel.js' 
import connectDB from "./config/db.js";

dotenv.config()

connectDB()

const importData  = async () => {
    try {
        await User.deleteMany()
        await Product.deleteMany();

        const createdUsers = await User.insertMany(users)
        const adminUser = createdUsers[1]._id;

        const foodItems = products.map(product => {
            return {...product, createdBy : adminUser}
        })

        await Product.insertMany(foodItems);
        console.log("Data Imported to Compass");
        process.exit(0);

    } catch (error) {
        console.log(error)
        process.exit(1)
    }

}

const destroyData = async () => {
    try {
        await User.deleteMany()
        await Product.deleteMany();

        console.log("Data Deleted");

        process.exit(0);

    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}

(process.argv[2] === '-d') ? destroyData() : importData();

