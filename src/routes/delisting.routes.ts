import express from 'express';
import { createDelisting, deleteDelisting, getAllDelistings, getDelistingById, updateDelisting } from "../controllers/delisting.controller";

const router = express.Router();

// POST - Create a new delisting
router.post('/', createDelisting);

// GET - Fetch all delistings
router.get('/', getAllDelistings);

// GET - Get delisting by ID
router.get('/:id', getDelistingById);

// PUT - Update delisting by ID
router.put('/:id', updateDelisting);

// DELETE - Delete delisting by ID
router.delete('/:id', deleteDelisting);

export default router;