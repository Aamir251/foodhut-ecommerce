import User from "../models/userModel.js";

// desc     Authenticate User and get Token
// route    POST api/users/login
// access   Public
export const authUser = async (req, res) => {
    try {
        
        const { email, password } = req.body;

        const user = await User.findOne({email})

        if (user && await user.matchPassword(password)) {
            res.json({
                id : user._id,
                name : user.name,
                email : user.email,
                isAdmin : user.isAdmin,
                token : null
            })
        } else {
            res.status(401)
            throw new Error("Invalid email or password")
        }

    } catch (error) {

        res.status(404).json({ message : error.message })
    }
}