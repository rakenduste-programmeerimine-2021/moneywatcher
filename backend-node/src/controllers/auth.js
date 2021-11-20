const User = require("../models/User")

exports.signup = async (req, res) => {

    const { firstName, lastName, email, password } = req.body

        try {
            const user = await User.findOne({ email })

            const newUser = new User({
                firstName,
                lastName,
                email,
                password // bcrypt needed
            })

            const savedUser = await newUser.save()
            if(!savedUser) throw Error("Account sign up unsuccessful")

            res.status(200).json({ message: "User created successfully" })
        } catch (e) {
            res.status(400).json({ error: e.message })
        }

}
