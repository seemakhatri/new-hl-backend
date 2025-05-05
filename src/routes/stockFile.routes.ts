import express from 'express';
import { 
  createStockFile, 
  getAllStockFiles, 
  getStockFileById, 
  updateStockFile, 
  deleteStockFile, 
  approveStockFile,
  rejectStockFile
} from '../controllers/stockFile.controller';

const router = express.Router();

router.post('/', createStockFile);
router.get('/', getAllStockFiles);
router.get('/:id', getStockFileById);
router.put('/:id', updateStockFile);
router.delete('/:id', deleteStockFile);
router.put('/approve/:id', approveStockFile);
router.put('/reject/:id', rejectStockFile);

export default router;
