import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


export default async function (req, res) {
    console.log('apicall');
      const projects = await prisma.project.findMany();
      res.status(200).json(projects);
  }