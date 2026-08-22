const bcrypt = require('bcrypt');
const User = require('../models/user');
const jwt = require('jsonwebtoken')



const register = async (req, res) => {
    try {


        const { name, email, password, username, role } = req.body;
        const user = await User.findOne({ email });
        if (user) {
            return res.json({
                message: "Email Already exist"
            })
        }

        const hashPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({
            name: name,
            username: username,
            password: hashPassword,
            email: email,
            role: role
        })
        return res.status(201).json({
            message: "Registration successfull"
        })

    }
    catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({
                message: "user not found"
            })
        }
        const matchPassword = await bcrypt.compare(password, user.password);
        if (!matchPassword) {
            return res.status(401).json({
                message: "wrong password"
            })
        }

        const token = jwt.sign({
            id: user._id,
            role: user.role,
        }, process.env.JWT_SECRET, { expiresIn: "3h" })
        res.json({
            message: "Logged in successfully",
            token: token
        })

    }
    catch (error) {

        res.json({
            message: error.message
        })

    }
}
const updateUser = async (req, res) => {
    try {
        const { name, email, username, role } = req.body;
        const id = req.params.id
        const user = await User.findByIdAndUpdate(id, { name, email, username, role }, { new: true, runValidators: true })
        if (!user) {
            return res.status(404).json(({
                message: "user not found"
            }))
        }
        res.json({
            message: "user updated successfully",
            data: user
        })
    }
    catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const updateUserPatch = async (req, res) => {
    try {

        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })

        if (!user) {
            return res.status(404).json(({
                message: "user not found"
            }))
        }
        res.json({
            message: "user updated successfully",
            data: user
        })
    }
    catch {
        res.status(500).json({
            message: error.message
        })
    }
}

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json({
            message: 'Users fetched successfully',
            data: users
        })
    }
    catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}
const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await User.findByIdAndDelete(id);
        if (!user) {
            return res.status(404).json({
                message: "User not found"
            })
        }

        res.json({
            message: "User deleted successfully"
        })
    }
    catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}
module.exports = { register, login, updateUser, updateUserPatch, getAllUsers ,deleteUser}