"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const delisting_controller_1 = require("../controllers/delisting.controller");
const router = express_1.default.Router();
router.post('/', delisting_controller_1.createDelisting);
router.get('/', delisting_controller_1.getAllDelistings);
router.get('/:id', delisting_controller_1.getDelistingById);
router.put('/:id', delisting_controller_1.updateDelisting);
router.delete('/:id', delisting_controller_1.deleteDelisting);
exports.default = router;
