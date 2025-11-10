const prisma = require("../client/prismaClient")
const bcrypt = require('bcrypt');


const userCreation = async (req, res) => {
    try {

        const { name, email, contactNumber, password } = req.body;

        const existingUser = await prisma.user.findFirst({ where: { OR: [{ email }, { contactNumber }] } })

        if (existingUser) {
            if (existingUser.email) {
                return res.status(400).json({ message: "this email already exists " })
            }
            if (existingUser.contactNumber) {
                return res.status(400).json({ message: "contactNumber Already Exists" })
            }
        };
        const hashPassword = await bcrypt.hash(password, 10);

        const newUser = await prisma.user.create({
            data: {
                name, email, contactNumber, password: hashPassword
            }

        })

        return res.status(200).json({ message: "User Created SuccessFully", newUser })
    } catch (error) {
        console.error("error User Creation", error);
        return res.status(500).json({ message: "Internal Server Error", error: error.message })
    }
}


module.exports = { userCreation }