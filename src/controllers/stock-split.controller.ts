import { Request, Response } from 'express';
import { StockSplit } from "../models/stock-split.model";

export const createStockSplit = async (req: Request, res: Response): Promise<void> => {
    try {
      const { companyName, recordDate, effectiveDate, notes } = req.body;
      const stockSplit = new StockSplit({ companyName, recordDate, effectiveDate, notes });
      await stockSplit.save();
      res.status(201).json({ message: 'Stock Split added', stockSplit });
    } catch (error) {
      res.status(500).json({ message: 'Server error', error });
    }
  };
  
  export const getAllStockSplits = async (req: Request, res: Response): Promise<void> => {
    try {
      const stockSplits = await StockSplit.find().sort({ recordDate: -1 });
      res.status(200).json(stockSplits);
    } catch (error) {
      res.status(500).json({ message: 'Server error', error });
    }
  };

  export const getStockSplitById = async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params;
      const stockSplit = await StockSplit.findById(id);
      if (!stockSplit) {
        res.status(404).json({ message: 'Stock Split not found' });
        return;
      }
      res.status(200).json(stockSplit);
    } catch (error) {
      res.status(500).json({ message: 'Server error', error });
    }
  };

  export const updateStockSplit = async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params;
      const updated = await StockSplit.findByIdAndUpdate(id, req.body, { new: true });
      if (!updated) {
        res.status(404).json({ message: 'Stock Split not found' });
        return;
      }
      res.status(200).json({ message: 'Stock Split updated', updated });
    } catch (error) {
      res.status(500).json({ message: 'Server error', error });
    }
  };
  
  export const deleteStockSplit = async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params;
      const deleted = await StockSplit.findByIdAndDelete(id);
      if (!deleted) {
        res.status(404).json({ message: 'Stock Split not found' });
        return;
      }
      res.status(200).json({ message: 'Stock Split deleted' });
    } catch (error) {
      res.status(500).json({ message: 'Server error', error });
    }
  };