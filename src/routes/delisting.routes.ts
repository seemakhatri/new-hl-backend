import express from 'express';
import { createDelisting, deleteDelisting, getAllDelistings, getDelistingById, updateDelisting } from "../controllers/delisting.controller";

const router = express.Router();


router.post('/', createDelisting);
router.get('/', getAllDelistings);
router.get('/:id', getDelistingById);
router.put('/:id', updateDelisting);
router.delete('/:id', deleteDelisting);

export default router;