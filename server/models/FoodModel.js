import mongoose from 'mongoose';


const foodSchema = mongoose.Schema({
    createdBy : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref : 'User'
    },

    name : {
        type : String,
        required : true,
    },
    shortDesc : {
        type : String,
        required : true
    },
    category : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    countInStock : {
        type : Number,
        required : true
    },
    price : {
        type : Number,
        required : true
    },
    image : {
        type : String,
        required : true
    }
}, {timeStamps : true})

const Product = mongoose.model('Product', foodSchema);

export default Product;