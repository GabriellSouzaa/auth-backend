import { Request, Response } from 'express';
import { UserService } from '../services/user.service';

export const register = async (req: Request, res: Response) => {
  const { fullName, email, password } = req.body;

  try {
    const user = await UserService.register(fullName, email, password);
    res.status(201).json(user);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const result = await UserService.login(email, password);
    res.json(result);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const profile = async (req: Request, res: Response) => {
  const userId = (req as any).userId;

  try {
    const user = await UserService.getProfile(userId);
    res.json(user);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};
