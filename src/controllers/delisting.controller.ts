import { Request, Response } from 'express';
import { Delisting } from '../models/delisting.model';

export const createDelisting = async (req: Request, res: Response): Promise<void> => {
  try {
    const { companyName, exDate, paymentDate, notes } = req.body;
    const delisting = new Delisting({ companyName, exDate, paymentDate, notes });
    await delisting.save();
    res.status(201).json({ message: 'Delisting added', delisting });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

export const getAllDelistings = async (req: Request, res: Response): Promise<void> => {
  try {
    const delistings = await Delisting.find().sort({ exDate: -1 });
    res.status(200).json(delistings);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

export const getDelistingById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const delisting = await Delisting.findById(id);
    if (!delisting) {
      res.status(404).json({ message: 'Delisting not found' });
      return;
    }
    res.status(200).json(delisting);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

export const updateDelisting = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const updated = await Delisting.findByIdAndUpdate(id, req.body, { new: true });
    if (!updated) {
      res.status(404).json({ message: 'Delisting not found' });
      return;
    }
    res.status(200).json({ message: 'Delisting updated', updated });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

export const deleteDelisting = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const deleted = await Delisting.findByIdAndDelete(id);
    if (!deleted) {
      res.status(404).json({ message: 'Delisting not found' });
      return;
    }
    res.status(200).json({ message: 'Delisting deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};
