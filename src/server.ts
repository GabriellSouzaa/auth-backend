import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import { userRouter } from './routes/user.routes';

dotenv.config();

const app = express();

app.use(cors({ origin: 'http://localhost:3001', credentials: true }));
app.use(express.json());
app.use(cookieParser());


app.use('/api', userRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
