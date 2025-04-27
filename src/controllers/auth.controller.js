"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.register = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const user_model_1 = require("../models/user.model");
const generateToken_1 = require("../utils/generateToken");
const register = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;
        const userExists = await user_model_1.User.findOne({ email });
        if (userExists) {
            res.status(400).json({ message: 'User already exists' });
            return;
        }
        const hashedPassword = await bcryptjs_1.default.hash(password, 10);
        await user_model_1.User.create({ name, email, password: hashedPassword, role });
        res.status(201).json({ message: 'User registered successfully' });
    }
    catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};
exports.register = register;
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await user_model_1.User.findOne({ email });
        if (!user || !(await bcryptjs_1.default.compare(password, user.password))) {
            res.status(400).json({ message: 'Invalid credentials' });
            return;
        }
        const token = (0, generateToken_1.generateToken)(user);
        res.status(200).json({
            token,
            user: {
                id: user._id,
                name: user.name,
                role: user.role,
            },
        });
    }
    catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};
exports.login = login;
