import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function (req, res) {
  if (req.method === 'POST') {
    const { body } = req;
    const project = await prisma.project.create({ data: JSON.parse(body) });
    res.json(project);
  }
}
