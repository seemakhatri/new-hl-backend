import express from 'express';
import { createDividend, deleteDividend, getAllDividends, getDividendById, updateDividend } from '../controllers/dividend.controller';

const router = express.Router();

router.post('/', createDividend);
router.get('/', getAllDividends);
router.put('/:id', updateDividend);
router.get('/:id', getDividendById); 
router.delete('/:id', deleteDividend);


export default router;