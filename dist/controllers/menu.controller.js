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
exports.deleteMenuItem = exports.updateMenuItem = exports.createMenuItem = exports.getMenuItems = void 0;
const menuItem_model_1 = require("../models/menuItem.model");
const getMenuItems = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const items = yield menuItem_model_1.MenuItem.find();
        res.status(200).json(items);
    }
    catch (err) {
        res.status(500).json({ message: 'Server error', err });
    }
});
exports.getMenuItems = getMenuItems;
const createMenuItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const item = new menuItem_model_1.MenuItem(req.body);
        yield item.save();
        res.status(201).json({ message: 'Menu item created', item });
    }
    catch (err) {
        res.status(500).json({ message: 'Server error', err });
    }
});
exports.createMenuItem = createMenuItem;
const updateMenuItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const item = yield menuItem_model_1.MenuItem.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json({ message: 'Menu item updated', item });
    }
    catch (err) {
        res.status(500).json({ message: 'Server error', err });
    }
});
exports.updateMenuItem = updateMenuItem;
const deleteMenuItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield menuItem_model_1.MenuItem.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Menu item deleted' });
    }
    catch (err) {
        res.status(500).json({ message: 'Server error', err });
    }
});
exports.deleteMenuItem = deleteMenuItem;
