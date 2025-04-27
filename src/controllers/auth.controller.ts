import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import { User } from '../models/user.model';
import { generateToken } from '../utils/generateToken';

export const register = async (req: Request, res: Response): Promise<void> => {
    try {
      const { name, email, password, role } = req.body;
  
      const userExists = await User.findOne({ email });
      if (userExists) {
        res.status(400).json({ message: 'User already exists' });
        return;
      }
  
      const hashedPassword = await bcrypt.hash(password, 10); // 🔐 Hash password
  
      const newUser = new User({
        name,
        email,
        password: hashedPassword,
        role,
      });
  
      await newUser.save();
  
      res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
      console.error('Register Error:', err);
      res.status(500).json({ message: 'Server error' });
    }
  };

  export const login = async (req: Request, res: Response): Promise<void> => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
  
      if (!user || !(await bcrypt.compare(password, user.password))) {
        res.status(400).json({ message: 'Invalid credentials' });
        return;
      }
  
      const token = generateToken(user);
      res.status(200).json({
        token,
        user: {
          id: user._id,
          name: user.name,
          role: user.role,
        },
      });
    } catch (err) {
      res.status(500).json({ message: 'Server error' });
    }
  };
  
