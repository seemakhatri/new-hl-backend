"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const consolidation_controller_1 = require("../controllers/consolidation.controller");
const router = express_1.default.Router();
router.post('/', consolidation_controller_1.createConsolidation);
router.get('/', consolidation_controller_1.getAllConsolidations);
router.get('/:id', consolidation_controller_1.getConsolidationById);
router.put('/:id', consolidation_controller_1.updateConsolidation);
router.delete('/:id', consolidation_controller_1.deleteConsolidation);
exports.default = router;
