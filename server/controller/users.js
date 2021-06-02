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

// desc     Register New User
// route    POST api/users/
// access   Public

export const registerUser = async (req, res) => {
    
    const { name, email, password } = req.body

    const userExists = await User.findOne({email})


    if (userExists) {
        res.status(400) //400 means a bad Request
        throw new Error("User Already Exists")
    }

    const newUser = await User.create({
        name,
        email,
        password
    })      //Here, the password is unecrypted. To fix this we create a middleware in the userModel which automatically encrypts password as soon someone registers

    if (newUser) {      //Means new user was created
        res.status(201).json({      //201 means something was created
            _id : newUser._id,
            name : newUser.name,
            email : newUser.email,
            isAdmin : newUser.isAdmin,
            token : generateToken(newUser._id)
        })     //We send these as JSON because we want to login in the user as soon as he registers

    } else {
        res.status(400)
        throw new Error("Invalid User Data")
    }
    
} 