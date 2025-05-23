import express from 'express';
import {
  createFundFile,
  getAllFundFiles,
  getFundFileById,
  updateFundFile,
  deleteFundFile,
  approveFundFile,
  rejectFundFile
} from '../controllers/fundFile.controller';

const router = express.Router();

router.post('/', createFundFile);
router.get('/', getAllFundFiles);
router.get('/:id', getFundFileById);
router.put('/:id', updateFundFile);
router.delete('/:id', deleteFundFile);
router.put('/approve/:id', approveFundFile);
router.put('/reject/:id', rejectFundFile);

export default router;
