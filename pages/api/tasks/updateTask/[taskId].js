import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function (req, res) {
  if (req.method === "POST") {
    const { body } = req;
    let data = JSON.parse(body);
    const task = await prisma.task.update({
      where: {
        id: Number(req.query.taskId),
      },
      data
    });
    res.json(task);
  }
}
