import User from "../models/userModel.js"
import generateToken from '../utils/generateToken.js'

// desc     Authenticate User and get Token
// route    POST api/users/login
// access   Public
export const authUser = async (req, res) => {
    try {
        
        const { email, password } = req.body;

        const user = await User.findOne({email})

        if (user && await user.matchPassword(password)) {
            res.json({
                _id : user._id,
                name : user.name,
                email : user.email,
                isAdmin : user.isAdmin,
                token : generateToken(user._id)
            })
        } else {
            res.status(401)
            throw new Error("Invalid email or password")
        }

    } catch (error) {

        res.status(404).json({ message : error.message })
    }
}

// desc     Get User Profile
// route    POST api/users/login
// access   Public

export const getUserProfile = async (req, res) => {
    
        const user = await User.findById(req.user._id)

        if (user) {
            res.json({
                _id : user._id,
                name : user.name,
                email : user.email,
                isAdmin : user.isAdmin,
            }) 
        } else {
            res.status(404)

            throw new Error("User Not Found")

        }
        

} 