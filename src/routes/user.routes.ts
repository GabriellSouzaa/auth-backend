import { Router } from 'express';
import { register, login, profile } from '../controllers/user.controller';
import { validate } from '../middlewares/validate.middleware';
import { registerSchema, loginSchema } from '../utils/user.schemas';
import { authMiddleware } from '../middlewares/auth.middleware';

export const userRouter = Router();

userRouter.post('/register', validate(registerSchema), register);
userRouter.post('/login', validate(loginSchema), login);
userRouter.get('/profile', authMiddleware, profile);