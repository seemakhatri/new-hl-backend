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
exports.rejectFundFile = exports.approveFundFile = exports.deleteFundFile = exports.updateFundFile = exports.getFundFileById = exports.getAllFundFiles = exports.createFundFile = void 0;
const fundFile_model_1 = require("../models/fundFile.model");
const createFundFile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('Incoming body:', req.body);
        const { fundName, isin, sedolOrTicker } = req.body;
        const fundFile = new fundFile_model_1.FundFile({ fundName, isin, sedolOrTicker });
        yield fundFile.save();
        res.status(201).json({ message: 'Fund file added', fundFile });
    }
    catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});
exports.createFundFile = createFundFile;
const getAllFundFiles = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const fundFiles = yield fundFile_model_1.FundFile.find().sort({ fundName: 1 });
        res.status(200).json(fundFiles);
    }
    catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});
exports.getAllFundFiles = getAllFundFiles;
const getFundFileById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const fundFile = yield fundFile_model_1.FundFile.findById(id);
        if (!fundFile) {
            res.status(404).json({ message: 'Fund file not found' });
            return;
        }
        res.status(200).json(fundFile);
    }
    catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});
exports.getFundFileById = getFundFileById;
const updateFundFile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const updated = yield fundFile_model_1.FundFile.findByIdAndUpdate(id, req.body, { new: true });
        if (!updated) {
            res.status(404).json({ message: 'Fund file not found' });
            return;
        }
        res.status(200).json({ message: 'Fund file updated', updated });
    }
    catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});
exports.updateFundFile = updateFundFile;
const deleteFundFile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const deleted = yield fundFile_model_1.FundFile.findByIdAndDelete(id);
        if (!deleted) {
            res.status(404).json({ message: 'Fund file not found' });
            return;
        }
        res.status(200).json({ message: 'Fund file deleted' });
    }
    catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});
exports.deleteFundFile = deleteFundFile;
// Approve handler for FundFile
const approveFundFile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const updated = yield fundFile_model_1.FundFile.findByIdAndUpdate(id, { status: 'approved', rejectionReason: null }, { new: true });
        if (!updated) {
            res.status(404).json({ message: 'Fund file not found' });
            return;
        }
        res.status(200).json({ message: 'Fund file approved', updated });
    }
    catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});
exports.approveFundFile = approveFundFile;
// Reject handler for FundFile
const rejectFundFile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { reason } = req.body;
        const updated = yield fundFile_model_1.FundFile.findByIdAndUpdate(id, { status: 'rejected', rejectionReason: reason }, { new: true });
        if (!updated) {
            res.status(404).json({ message: 'Fund file not found' });
            return;
        }
        res.status(200).json({ message: 'Fund file rejected', updated });
    }
    catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});
exports.rejectFundFile = rejectFundFile;
