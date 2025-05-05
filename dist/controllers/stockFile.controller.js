"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rejectStockFile = exports.approveStockFile = exports.deleteStockFile = exports.updateStockFile = exports.getStockFileById = exports.getAllStockFiles = exports.createStockFile = void 0;
const stockFile_model_1 = require("../models/stockFile.model");
const createStockFile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('Incoming body:', req.body);
        const { stockName, isin, sedolOrTicker } = req.body;
        const stockFile = new stockFile_model_1.StockFile({ stockName, isin, sedolOrTicker });
        yield stockFile.save();
        res.status(201).json({ message: 'Stock file added', stockFile });
    }
    catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});
exports.createStockFile = createStockFile;
const getAllStockFiles = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const stockFiles = yield stockFile_model_1.StockFile.find().sort({ stockName: 1 });
        res.status(200).json(stockFiles);
    }
    catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});
exports.getAllStockFiles = getAllStockFiles;
const getStockFileById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const stockFile = yield stockFile_model_1.StockFile.findById(id);
        if (!stockFile) {
            res.status(404).json({ message: 'Stock file not found' });
            return;
        }
        res.status(200).json(stockFile);
    }
    catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});
exports.getStockFileById = getStockFileById;
const updateStockFile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const updated = yield stockFile_model_1.StockFile.findByIdAndUpdate(id, req.body, { new: true });
        if (!updated) {
            res.status(404).json({ message: 'Stock file not found' });
            return;
        }
        res.status(200).json({ message: 'Stock file updated', updated });
    }
    catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});
exports.updateStockFile = updateStockFile;
const deleteStockFile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const deleted = yield stockFile_model_1.StockFile.findByIdAndDelete(id);
        if (!deleted) {
            res.status(404).json({ message: 'Stock file not found' });
            return;
        }
        res.status(200).json({ message: 'Stock file deleted' });
    }
    catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});
exports.deleteStockFile = deleteStockFile;
// Approve handler
const approveStockFile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const updated = yield stockFile_model_1.StockFile.findByIdAndUpdate(id, { status: 'approved', rejectionReason: null }, { new: true });
        if (!updated) {
            res.status(404).json({ message: 'Stock file not found' });
            return;
        }
        res.status(200).json({ message: 'Stock file approved', updated });
    }
    catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});
exports.approveStockFile = approveStockFile;
// Reject handler
const rejectStockFile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { reason } = req.body;
        const updated = yield stockFile_model_1.StockFile.findByIdAndUpdate(id, { status: 'rejected', rejectionReason: reason }, { new: true });
        if (!updated) {
            res.status(404).json({ message: 'Stock file not found' });
            return;
        }
        res.status(200).json({ message: 'Stock file rejected', updated });
    }
    catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});
exports.rejectStockFile = rejectStockFile;
