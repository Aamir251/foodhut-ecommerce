import Food from "../models/FoodModel.js"

// To get all the products
// desc     Fetch all products
// route    GET /menu
// access Public
export const getProducts = async (req, res,next) => {
    try {
        const allProducts = await Food.find()

        res.status(200).json(allProducts);

    } catch (error) {
        next(error)
    }
}

// To get a particular product
// desc     Fetch Single products
// route    GET /menu/:id
// access   Public
export const getProduct = async (req, res,next) => {
    try {
        const product = await Food.findById(req.params.id)
        
        if (product) {
            res.status(200).json(product);
        } else {
            res.status(404)
            throw new Error("Product not found")
        }

    } catch (error) {
        next(error)
    }
}