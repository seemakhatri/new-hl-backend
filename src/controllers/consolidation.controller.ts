import { Request, Response } from 'express';
import { Consolidation } from '../models/consolidation.model';

export const createConsolidation = async (req: Request, res: Response): Promise<void> => {
  try {
    const { companyName, recordDate, effectiveDate, notes } = req.body;
    const consolidation = new Consolidation({ companyName, recordDate, effectiveDate, notes });
    await consolidation.save();
    res.status(201).json({ message: 'Consolidation added', consolidation });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

export const getAllConsolidations = async (req: Request, res: Response): Promise<void> => {
  try {
    const consolidations = await Consolidation.find().sort({ recordDate: -1 });
    res.status(200).json(consolidations);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

export const getConsolidationById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const consolidation = await Consolidation.findById(id);
    if (!consolidation) {
      res.status(404).json({ message: 'Consolidation not found' });
      return;
    }
    res.status(200).json(consolidation);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

export const updateConsolidation = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const updated = await Consolidation.findByIdAndUpdate(id, req.body, { new: true });
    if (!updated) {
      res.status(404).json({ message: 'Consolidation not found' });
      return;
    }
    res.status(200).json({ message: 'Consolidation updated', updated });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

export const deleteConsolidation = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const deleted = await Consolidation.findByIdAndDelete(id);
    if (!deleted) {
      res.status(404).json({ message: 'Consolidation not found' });
      return;
    }
    res.status(200).json({ message: 'Consolidation deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};
