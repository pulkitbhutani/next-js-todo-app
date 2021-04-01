import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function (req, res) {
    const task = await prisma.project.delete({
      where: {
        id: Number(req.query.projectId),
      }
    });
    res.json(task);
}
