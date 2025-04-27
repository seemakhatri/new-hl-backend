import express from 'express';
import {
  createConsolidation,
  getAllConsolidations,
  getConsolidationById,
  updateConsolidation,
  deleteConsolidation,
} from '../controllers/consolidation.controller';

const router = express.Router();


router.post('/', createConsolidation);
router.get('/', getAllConsolidations);
router.get('/:id', getConsolidationById);
router.put('/:id', updateConsolidation);
router.delete('/:id', deleteConsolidation);

export default router;
