"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const stockFile_controller_1 = require("../controllers/stockFile.controller");
const router = express_1.default.Router();
router.post('/', stockFile_controller_1.createStockFile);
router.get('/', stockFile_controller_1.getAllStockFiles);
router.get('/:id', stockFile_controller_1.getStockFileById);
router.put('/:id', stockFile_controller_1.updateStockFile);
router.delete('/:id', stockFile_controller_1.deleteStockFile);
router.put('/approve/:id', stockFile_controller_1.approveStockFile);
router.put('/reject/:id', stockFile_controller_1.rejectStockFile);
exports.default = router;
