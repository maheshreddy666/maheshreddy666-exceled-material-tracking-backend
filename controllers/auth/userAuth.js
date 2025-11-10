const User = require("../../model/User")
const bcrypt = require('bcrypt');


const userCreation = async (req, res) => {
    try {

        const { username, email, contactNumber, password } = req.body;
        console.log("req.body", req.body);

        const existingUser = await User.findOne({ $or: [{ email }, { contactNumber }] })


        if (existingUser) {

            if (existingUser.email) {
                return res.status(400).json({ message: "this email already exists " })
            }
            if (existingUser.contactNumber) {
                return res.status(400).json({ message: "contactNumber Already Exists" })
            }
        };
        console.log("existingUser", existingUser);

        const hashPassword = await bcrypt.hash(password, 10);

        const newUser = new User({

            username, email, contactNumber, password: hashPassword, role: "SuperAdmin",

        })

        await newUser.save();
        console.log("newUser", newUser);


        return res.status(200).json({ message: "User Created SuccessFully", newUser })
    } catch (error) {
        console.error("error User Creation", error);
        return res.status(500).json({ message: "Internal Server Error", error: error.message })
    }
}


module.exports = { userCreation }