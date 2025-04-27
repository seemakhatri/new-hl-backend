"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const delisting_controller_1 = require("../controllers/delisting.controller");
const router = express_1.default.Router();
// POST - Create a new delisting
router.post('/', delisting_controller_1.createDelisting);
// GET - Fetch all delistings
router.get('/', delisting_controller_1.getAllDelistings);
// GET - Get delisting by ID
router.get('/:id', delisting_controller_1.getDelistingById);
// PUT - Update delisting by ID
router.put('/:id', delisting_controller_1.updateDelisting);
// DELETE - Delete delisting by ID
router.delete('/:id', delisting_controller_1.deleteDelisting);
exports.default = router;
