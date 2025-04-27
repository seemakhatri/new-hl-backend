"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dividend_controller_1 = require("../controllers/dividend.controller");
const router = express_1.default.Router();
router.post('/', dividend_controller_1.createDividend);
router.get('/', dividend_controller_1.getAllDividends);
router.put('/:id', dividend_controller_1.updateDividend);
router.get('/:id', dividend_controller_1.getDividendById);
router.delete('/:id', dividend_controller_1.deleteDividend);
exports.default = router;
