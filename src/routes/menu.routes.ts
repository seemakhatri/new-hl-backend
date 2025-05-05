import express from 'express';
import {
  getMenuItems,
  createMenuItem,
  updateMenuItem,
  deleteMenuItem
} from '../controllers/menu.controller';

const router = express.Router();

router.get('/', getMenuItems);
router.post('/', createMenuItem); 
router.put('/:id', updateMenuItem); 
router.delete('/:id', deleteMenuItem); 

export default router;