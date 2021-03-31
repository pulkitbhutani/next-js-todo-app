import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function (req, res) {
  if (req.method === 'POST') {
    const { body } = req;
    console.log(body);
    const task = await prisma.task.create({ data: JSON.parse(body) });
    res.json(task);
  }
}
