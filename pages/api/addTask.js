import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function (req, res) {
  if (req.method === 'POST') {
    const { body } = req;
    const task = await prisma.task.create({ data: JSON.parse(body) });
    res.json(task);
  }
}
