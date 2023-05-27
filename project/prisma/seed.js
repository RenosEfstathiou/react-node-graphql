import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function feedDatabase() {
  const res = await prisma.company.createMany({
    data: [
      {
        id: "FjcJCHJALA4i",
        name: "Facegle",
        description:
          "We are a startup on a mission to disrupt social search engines. Think Facebook meet Google.",
      },
      {
        id: "Gu7QW9LcnF5d",
        name: "Goobook",
        description:
          "We are a startup on a mission to disrupt search social media. Think Google meet Facebook.",
      },
    ],
  });
  const resJobs = await prisma.job.createMany({
    data: [
      {
        id: "f3YzmnBZpK0o",
        companyId: "FjcJCHJALA4i",
        title: "Frontend Developer",
        description:
          "We are looking for a Frontend Developer familiar with React.",
        createdAt: "2023-01-26T11:00:00.000Z",
      },
      {
        id: "XYZNJMXFax6n",
        companyId: "FjcJCHJALA4i",
        title: "Backend Developer",
        description:
          "We are looking for a Backend Developer familiar with Node.js and Express.",
        createdAt: "2023-01-27T11:00:00.000Z",
      },
      {
        id: "6mA05AZxvS1R",
        companyId: "Gu7QW9LcnF5d",
        title: "Full-Stack Developer",
        description:
          "We are looking for a Full-Stack Developer familiar with Node.js, Express, and React.",
        createdAt: "2023-01-30T11:00:00.000Z",
      },
    ],
  });

  const usersRes = await prisma.user.createMany({
    data: [
      {
        id: "AcMJpL7b413Z",
        companyId: "FjcJCHJALA4i",
        email: "test@mail.com",
        password: "testPass",
      },
      {
        id: "BvBNW636Z89L",
        companyId: "Gu7QW9LcnF5d",
        email: "test1@mail.com",
        password: "testPass",
      },
    ],
  });
}

feedDatabase().catch((error) => {
  console.error(error);
  process.exit(1);
});
