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
exports.deleteConsolidation = exports.updateConsolidation = exports.getConsolidationById = exports.getAllConsolidations = exports.createConsolidation = void 0;
const consolidation_model_1 = require("../models/consolidation.model");
const createConsolidation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { companyName, recordDate, effectiveDate, notes } = req.body;
        const consolidation = new consolidation_model_1.Consolidation({ companyName, recordDate, effectiveDate, notes });
        yield consolidation.save();
        res.status(201).json({ message: 'Consolidation added', consolidation });
    }
    catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});
exports.createConsolidation = createConsolidation;
const getAllConsolidations = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const consolidations = yield consolidation_model_1.Consolidation.find().sort({ recordDate: -1 });
        res.status(200).json(consolidations);
    }
    catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});
exports.getAllConsolidations = getAllConsolidations;
const getConsolidationById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const consolidation = yield consolidation_model_1.Consolidation.findById(id);
        if (!consolidation) {
            res.status(404).json({ message: 'Consolidation not found' });
            return;
        }
        res.status(200).json(consolidation);
    }
    catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});
exports.getConsolidationById = getConsolidationById;
const updateConsolidation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const updated = yield consolidation_model_1.Consolidation.findByIdAndUpdate(id, req.body, { new: true });
        if (!updated) {
            res.status(404).json({ message: 'Consolidation not found' });
            return;
        }
        res.status(200).json({ message: 'Consolidation updated', updated });
    }
    catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});
exports.updateConsolidation = updateConsolidation;
const deleteConsolidation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const deleted = yield consolidation_model_1.Consolidation.findByIdAndDelete(id);
        if (!deleted) {
            res.status(404).json({ message: 'Consolidation not found' });
            return;
        }
        res.status(200).json({ message: 'Consolidation deleted' });
    }
    catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});
exports.deleteConsolidation = deleteConsolidation;
