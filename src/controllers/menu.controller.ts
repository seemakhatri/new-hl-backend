import { Request, Response } from 'express';
import { MenuItem } from '../models/menuItem.model';

export const getMenuItems = async (req: Request, res: Response) => {
  try {
    const items = await MenuItem.find();
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json({ message: 'Server error', err });
  }
};

export const createMenuItem = async (req: Request, res: Response) => {
  try {
    const item = new MenuItem(req.body);
    await item.save();
    res.status(201).json({ message: 'Menu item created', item });
  } catch (err) {
    res.status(500).json({ message: 'Server error', err });
  }
};

export const updateMenuItem = async (req: Request, res: Response) => {
  try {
    const item = await MenuItem.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json({ message: 'Menu item updated', item });
  } catch (err) {
    res.status(500).json({ message: 'Server error', err });
  }
};

export const deleteMenuItem = async (req: Request, res: Response) => {
  try {
    await MenuItem.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Menu item deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', err });
  }
};
