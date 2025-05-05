import { Request, Response } from 'express';
import { FundFile } from '../models/fundFile.model';

export const createFundFile = async (req: Request, res: Response): Promise<void> => {
  try {
    console.log('Incoming body:', req.body);
    const { fundName, isin, sedolOrTicker } = req.body;
    const fundFile = new FundFile({ fundName, isin, sedolOrTicker });
    await fundFile.save();
    res.status(201).json({ message: 'Fund file added', fundFile });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

export const getAllFundFiles = async (req: Request, res: Response): Promise<void> => {
  try {
    const fundFiles = await FundFile.find().sort({ fundName: 1 });
    res.status(200).json(fundFiles);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

export const getFundFileById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const fundFile = await FundFile.findById(id);
    if (!fundFile) {
      res.status(404).json({ message: 'Fund file not found' });
      return;
    }
    res.status(200).json(fundFile);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

export const updateFundFile = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const updated = await FundFile.findByIdAndUpdate(id, req.body, { new: true });
    if (!updated) {
      res.status(404).json({ message: 'Fund file not found' });
      return;
    }
    res.status(200).json({ message: 'Fund file updated', updated });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

export const deleteFundFile = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const deleted = await FundFile.findByIdAndDelete(id);
    if (!deleted) {
      res.status(404).json({ message: 'Fund file not found' });
      return;
    }
    res.status(200).json({ message: 'Fund file deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Approve handler for FundFile
export const approveFundFile = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const updated = await FundFile.findByIdAndUpdate(
      id,
      { status: 'approved', rejectionReason: null },
      { new: true }
    );

    if (!updated) {
      res.status(404).json({ message: 'Fund file not found' });
      return;
    }

    res.status(200).json({ message: 'Fund file approved', updated });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Reject handler for FundFile
export const rejectFundFile = async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params;
      const { reason } = req.body;
  
      const updated = await FundFile.findByIdAndUpdate(
        id,
        { status: 'rejected', rejectionReason: reason },
        { new: true }
      );
  
      if (!updated) {
        res.status(404).json({ message: 'Fund file not found' });
        return;
      }
  
      res.status(200).json({ message: 'Fund file rejected', updated });
    } catch (error) {
      res.status(500).json({ message: 'Server error', error });
    }
  };