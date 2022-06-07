const User = require("../models/User");

exports.register = async (req, res) => {
    try {

        const { name, email, password } = req.body;

        let user = await User.findOne({email});
        if(user) {
            return res
                .status(400)
                .json({ success: false, message: " User already exists " });
        }
            user  = await User.create({ name, email, password });

        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    }