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
exports.deleteStockSplit = exports.updateStockSplit = exports.getStockSplitById = exports.getAllStockSplits = exports.createStockSplit = void 0;
const stock_split_model_1 = require("../models/stock-split.model");
const createStockSplit = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { companyName, recordDate, effectiveDate, notes } = req.body;
        const stockSplit = new stock_split_model_1.StockSplit({ companyName, recordDate, effectiveDate, notes });
        yield stockSplit.save();
        res.status(201).json({ message: 'Stock Split added', stockSplit });
    }
    catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});
exports.createStockSplit = createStockSplit;
const getAllStockSplits = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const stockSplits = yield stock_split_model_1.StockSplit.find().sort({ recordDate: -1 });
        res.status(200).json(stockSplits);
    }
    catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});
exports.getAllStockSplits = getAllStockSplits;
const getStockSplitById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const stockSplit = yield stock_split_model_1.StockSplit.findById(id);
        if (!stockSplit) {
            res.status(404).json({ message: 'Stock Split not found' });
            return;
        }
        res.status(200).json(stockSplit);
    }
    catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});
exports.getStockSplitById = getStockSplitById;
const updateStockSplit = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const updated = yield stock_split_model_1.StockSplit.findByIdAndUpdate(id, req.body, { new: true });
        if (!updated) {
            res.status(404).json({ message: 'Stock Split not found' });
            return;
        }
        res.status(200).json({ message: 'Stock Split updated', updated });
    }
    catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});
exports.updateStockSplit = updateStockSplit;
const deleteStockSplit = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const deleted = yield stock_split_model_1.StockSplit.findByIdAndDelete(id);
        if (!deleted) {
            res.status(404).json({ message: 'Stock Split not found' });
            return;
        }
        res.status(200).json({ message: 'Stock Split deleted' });
    }
    catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});
exports.deleteStockSplit = deleteStockSplit;
