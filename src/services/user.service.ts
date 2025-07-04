import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { UserRepository } from '../repositories/user.repository';

export class UserService {
  static async register(fullName: string, email: string, password: string) {
    const existing = await UserRepository.findByEmail(email);
    if (existing) throw new Error('E-mail já cadastrado');

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await UserRepository.create(fullName, email, hashedPassword);
    return { id: user.id, email: user.email };
  }

  static async login(email: string, password: string) {
    const user = await UserRepository.findByEmail(email);
    if (!user) throw new Error('Credenciais inválidas');

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) throw new Error('Credenciais inválidas');

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET!, {
      expiresIn: process.env.JWT_EXPIRES_IN || '1h',
    });

    return { token };
  }

  static async getProfile(userId: number) {
    const user = await UserRepository.findById(userId);
    if (!user) throw new Error('Usuário não encontrado');
    return { id: user.id, fullName: user.fullName, email: user.email, createdAt: user.createdAt };
  }
}
