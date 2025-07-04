import { prisma } from '../utils/prisma';

export const UserRepository = {
  async findByEmail(email: string) {
    return prisma.user.findUnique({ where: { email } });
  },

  async create(fullName: string, email: string, hashedPassword: string) {
    return prisma.user.create({
      data: { fullName, email, password: hashedPassword },
    });
  },

  async findById(id: number) {
    return prisma.user.findUnique({ where: { id } });
  },
};
