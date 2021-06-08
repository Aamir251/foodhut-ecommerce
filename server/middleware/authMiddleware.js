import jwt from "jsonwebtoken"
import User from "../models/userModel.js";

export const protect = async (req, res, next) => {

    let token;
    // The token will be sent along with the header as a authorization key and it must start with "Bearer"
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        try {
            token = req.headers.authorization.split(" ")[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET)

            // We are setting this user in the req so we can access it in every route.
            // The select method ensures that the password is not returned and set into the req.user
            req.user = await User.findById(decoded.id).select("-password")

            next()
        } catch (error) {
            console.error(error)
            res.status(401)
            throw new Error("Not Authorized. Token Failed")
        }
    }

    if (!token) {
        res.status(401)
        throw new Error("Not Authorized. No Token Found")
    }

}