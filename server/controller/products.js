import Food from "../models/FoodModel.js"

// To get all the products
// desc     Fetch all products
// route    GET /menu
// access Public
export const getProducts = async (req, res) => {
    try {
        const allProducts = await Food.find()

        res.status(200).json(allProducts);

    } catch (error) {
        res.status(404).json({ message : error.message })
    }
}

// To get a particular product
// desc     Fetch Single products
// route    GET /menu/:id
// access   Public
export const getProduct = async (req, res) => {
    try {
        const product = await Food.findById(req.params.id)

        if (product) {
            res.status(200).json(product);
        } else {
            res.status(404).json({ message : 'Product not Found'})
        }

    } catch (error) {
        console.log(error);
    }
}