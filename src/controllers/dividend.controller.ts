import { Request, Response } from 'express';
import { Dividend } from '../models/dividend.model';

export const createDividend = async (req: Request, res: Response): Promise<void>  => {
  try {
    console.log('Incoming body:', req.body);
    const { companyName, exDate, paymentDate, notes, withholdingTax, dividendAmount } = req.body;
    const dividend = new Dividend({ companyName, exDate, paymentDate, notes, withholdingTax, dividendAmount });
    await dividend.save();
    res.status(201).json({ message: 'Dividend added', dividend });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

export const getAllDividends = async (req: Request, res: Response): Promise<void>  => {
  try {
    const dividends = await Dividend.find().sort({ exDate: -1 });
    res.status(200).json(dividends);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

export const updateDividend = async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params;
      const updated = await Dividend.findByIdAndUpdate(id, req.body, { new: true });
      if (!updated) {
        res.status(404).json({ message: 'Dividend not found' });
        return;
      }
      res.status(200).json({ message: 'Dividend updated', updated });
    } catch (error) {
      res.status(500).json({ message: 'Server error', error });
    }
  };

  export const getDividendById = async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params;
      const dividend = await Dividend.findById(id);
  
      if (!dividend) {
        res.status(404).json({ message: 'Dividend not found' });
        return;
      }
  
      res.status(200).json(dividend);
    } catch (error) {
      res.status(500).json({ message: 'Server error', error });
    }
  };

  export const deleteDividend = async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params;
      const deleted = await Dividend.findByIdAndDelete(id);
      if (!deleted) {
        res.status(404).json({ message: 'Dividend not found' });
        return;
      }
      res.status(200).json({ message: 'Dividend deleted' });
    } catch (error) {
      res.status(500).json({ message: 'Server error', error });
    }
  };