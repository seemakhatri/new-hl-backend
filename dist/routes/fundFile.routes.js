"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fundFile_controller_1 = require("../controllers/fundFile.controller");
const router = express_1.default.Router();
router.post('/', fundFile_controller_1.createFundFile);
router.get('/', fundFile_controller_1.getAllFundFiles);
router.get('/:id', fundFile_controller_1.getFundFileById);
router.put('/:id', fundFile_controller_1.updateFundFile);
router.delete('/:id', fundFile_controller_1.deleteFundFile);
router.put('/approve/:id', fundFile_controller_1.approveFundFile);
router.put('/reject/:id', fundFile_controller_1.rejectFundFile);
exports.default = router;
