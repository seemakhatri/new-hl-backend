"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const stock_split_controller_1 = require("../controllers/stock-split.controller");
const router = express_1.default.Router();
router.post('/', stock_split_controller_1.createStockSplit);
router.get('/', stock_split_controller_1.getAllStockSplits);
router.put('/:id', stock_split_controller_1.updateStockSplit);
router.get('/:id', stock_split_controller_1.getStockSplitById);
router.delete('/:id', stock_split_controller_1.deleteStockSplit);
exports.default = router;
