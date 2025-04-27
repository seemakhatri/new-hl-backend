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
exports.deleteDividend = exports.updateDividend = exports.getAllDividends = exports.createDividend = void 0;
const dividend_model_1 = require("../models/dividend.model");
const createDividend = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { companyName, exDate, paymentDate, notes } = req.body;
        const dividend = new dividend_model_1.Dividend({ companyName, exDate, paymentDate, notes });
        yield dividend.save();
        res.status(201).json({ message: 'Dividend added', dividend });
    }
    catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});
exports.createDividend = createDividend;
const getAllDividends = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dividends = yield dividend_model_1.Dividend.find().sort({ exDate: -1 });
        res.status(200).json(dividends);
    }
    catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});
exports.getAllDividends = getAllDividends;
const updateDividend = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const updated = yield dividend_model_1.Dividend.findByIdAndUpdate(id, req.body, { new: true });
        if (!updated) {
            res.status(404).json({ message: 'Dividend not found' });
            return;
        }
        res.status(200).json({ message: 'Dividend updated', updated });
    }
    catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});
exports.updateDividend = updateDividend;
const deleteDividend = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const deleted = yield dividend_model_1.Dividend.findByIdAndDelete(id);
        if (!deleted) {
            res.status(404).json({ message: 'Dividend not found' });
            return;
        }
        res.status(200).json({ message: 'Dividend deleted' });
    }
    catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});
exports.deleteDividend = deleteDividend;
