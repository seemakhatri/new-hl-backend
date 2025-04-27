import express from 'express';
import { createStockSplit, deleteStockSplit, getAllStockSplits, getStockSplitById, updateStockSplit } from '../controllers/stock-split.controller';

const router = express.Router();

router.post('/', createStockSplit);
router.get('/', getAllStockSplits);
router.put('/:id', updateStockSplit);
router.get('/:id', getStockSplitById); 
router.delete('/:id', deleteStockSplit);


export default router;