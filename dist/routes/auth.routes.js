"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_controller_1 = require("../controllers/auth.controller");
const role_middleware_1 = require("../middleware/role.middleware");
const router = express_1.default.Router();
router.post('/register', auth_controller_1.register);
router.post('/login', auth_controller_1.login);
// Protected route examples
router.get('/admin', role_middleware_1.authenticate, (0, role_middleware_1.authorizeRoles)('admin'), (req, res) => {
    res.send('Welcome Admin');
});
router.get('/user', role_middleware_1.authenticate, (0, role_middleware_1.authorizeRoles)('user', 'admin'), (req, res) => {
    res.send('Welcome User');
});
exports.default = router;
