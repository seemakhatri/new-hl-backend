import { Request, Response } from 'express';
import { StockFile } from '../models/stockFile.model';

export const createStockFile = async (req: Request, res: Response): Promise<void> => {
  try {
    console.log('Incoming body:', req.body);
    const { stockName, isin, sedolOrTicker } = req.body;
    const stockFile = new StockFile({ stockName, isin, sedolOrTicker });
    await stockFile.save();
    res.status(201).json({ message: 'Stock file added', stockFile });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

export const getAllStockFiles = async (req: Request, res: Response): Promise<void> => {
  try {
    const stockFiles = await StockFile.find().sort({ stockName: 1 });
    res.status(200).json(stockFiles);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

export const getStockFileById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const stockFile = await StockFile.findById(id);
    if (!stockFile) {
      res.status(404).json({ message: 'Stock file not found' });
      return;
    }
    res.status(200).json(stockFile);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

export const updateStockFile = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const updated = await StockFile.findByIdAndUpdate(id, req.body, { new: true });
    if (!updated) {
      res.status(404).json({ message: 'Stock file not found' });
      return;
    }
    res.status(200).json({ message: 'Stock file updated', updated });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

export const deleteStockFile = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const deleted = await StockFile.findByIdAndDelete(id);
    if (!deleted) {
      res.status(404).json({ message: 'Stock file not found' });
      return;
    }
    res.status(200).json({ message: 'Stock file deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Approve handler
export const approveStockFile = async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params;
      const updated = await StockFile.findByIdAndUpdate(
        id,
        { status: 'approved', rejectionReason: null },
        { new: true }
      );
      if (!updated) {
        res.status(404).json({ message: 'Stock file not found' });
        return;
      }
      res.status(200).json({ message: 'Stock file approved', updated });
    } catch (error) {
      res.status(500).json({ message: 'Server error', error });
    }
  };
  
// Reject handler
export const rejectStockFile = async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params;
      const { reason } = req.body;
      const updated = await StockFile.findByIdAndUpdate(
        id,
        { status: 'rejected', rejectionReason: reason },
        { new: true }
      );
      if (!updated) {
        res.status(404).json({ message: 'Stock file not found' });
        return;
      }
      res.status(200).json({ message: 'Stock file rejected', updated });
    } catch (error) {
      res.status(500).json({ message: 'Server error', error });
    }
  };
  