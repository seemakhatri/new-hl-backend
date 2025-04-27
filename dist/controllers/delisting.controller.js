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
exports.deleteDelisting = exports.updateDelisting = exports.getDelistingById = exports.getAllDelistings = exports.createDelisting = void 0;
const delisting_model_1 = require("../models/delisting.model");
const createDelisting = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { companyName, exDate, paymentDate, notes } = req.body;
        const delisting = new delisting_model_1.Delisting({ companyName, exDate, paymentDate, notes });
        yield delisting.save();
        res.status(201).json({ message: 'Delisting added', delisting });
    }
    catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});
exports.createDelisting = createDelisting;
const getAllDelistings = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const delistings = yield delisting_model_1.Delisting.find().sort({ exDate: -1 });
        res.status(200).json(delistings);
    }
    catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});
exports.getAllDelistings = getAllDelistings;
const getDelistingById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const delisting = yield delisting_model_1.Delisting.findById(id);
        if (!delisting) {
            res.status(404).json({ message: 'Delisting not found' });
            return;
        }
        res.status(200).json(delisting);
    }
    catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});
exports.getDelistingById = getDelistingById;
const updateDelisting = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const updated = yield delisting_model_1.Delisting.findByIdAndUpdate(id, req.body, { new: true });
        if (!updated) {
            res.status(404).json({ message: 'Delisting not found' });
            return;
        }
        res.status(200).json({ message: 'Delisting updated', updated });
    }
    catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});
exports.updateDelisting = updateDelisting;
const deleteDelisting = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const deleted = yield delisting_model_1.Delisting.findByIdAndDelete(id);
        if (!deleted) {
            res.status(404).json({ message: 'Delisting not found' });
            return;
        }
        res.status(200).json({ message: 'Delisting deleted' });
    }
    catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});
exports.deleteDelisting = deleteDelisting;
