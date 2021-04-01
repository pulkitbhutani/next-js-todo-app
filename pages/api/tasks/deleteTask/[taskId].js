import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function (req, res) {
    const task = await prisma.task.delete({
      where: {
        id: Number(req.query.taskId),
      }
    });
    res.json(task);
}
