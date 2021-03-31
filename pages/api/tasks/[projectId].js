import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function (req, res) {
      const tasks = await prisma.task.findMany({
        where: {
        projectId: {
            equals: Number(req.query.projectId)
          }
        },
      });
      res.status(200).json(tasks);
  }