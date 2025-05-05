import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db';
import authRoutes from './routes/auth.routes'; 
import cors from 'cors';
import dividendRoutes from './routes/dividend.routes';
import delistingRoutes from './routes/delisting.routes';
import stockSplitRoutes from './routes/stock-split.routes';
import consolidationRoutes from './routes/consolidation.routes';
import menuRoutes from './routes/menu.routes';
import stockFileRoutes from './routes/stockFile.routes';
import fundFileRoutes from './routes/fundFile.routes';

dotenv.config();
connectDB();

const app = express();

const corsOptions = {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],  
    allowedHeaders: ['Content-Type', 'Authorization'], 
  }


app.use(cors(corsOptions));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('API is running!');
});
app.use('/api/auth', authRoutes);
app.use('/api/dividends', dividendRoutes);
app.use('/api/delistings', delistingRoutes);
app.use('/api/stock-splits', stockSplitRoutes);
app.use('/api/consolidations', consolidationRoutes);
app.use('/api/menu-items', menuRoutes);
app.use('/api/stock-files', stockFileRoutes);
app.use('/api/fund-files', fundFileRoutes)


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
