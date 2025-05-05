"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = require("./config/db");
const auth_routes_1 = __importDefault(require("./routes/auth.routes"));
const cors_1 = __importDefault(require("cors"));
const dividend_routes_1 = __importDefault(require("./routes/dividend.routes"));
const delisting_routes_1 = __importDefault(require("./routes/delisting.routes"));
const stock_split_routes_1 = __importDefault(require("./routes/stock-split.routes"));
const consolidation_routes_1 = __importDefault(require("./routes/consolidation.routes"));
const menu_routes_1 = __importDefault(require("./routes/menu.routes"));
const stockFile_routes_1 = __importDefault(require("./routes/stockFile.routes"));
const fundFile_routes_1 = __importDefault(require("./routes/fundFile.routes"));
dotenv_1.default.config();
(0, db_1.connectDB)();
const app = (0, express_1.default)();
const corsOptions = {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
};
app.use((0, cors_1.default)(corsOptions));
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send('API is running!');
});
app.use('/api/auth', auth_routes_1.default);
app.use('/api/dividends', dividend_routes_1.default);
app.use('/api/delistings', delisting_routes_1.default);
app.use('/api/stock-splits', stock_split_routes_1.default);
app.use('/api/consolidations', consolidation_routes_1.default);
app.use('/api/menu-items', menu_routes_1.default);
app.use('/api/stock-files', stockFile_routes_1.default);
app.use('/api/fund-files', fundFile_routes_1.default);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
