const projects = [
  {
    id: 1,
    title: "React Chess",
    shortDescription: "A chess game made with React.",
    longDescription:
      "This project was created to learn and practice React. It's simple chess game, that implements the basic rules of chess.",
    coverImage: "https://github.com/gm1357/react-chess/raw/master/demo.png",
    link: "https://react-chess.vercel.app/",
  },
  {
    id: 2,
    title: "Payment Splitter API",
    shortDescription:
      " A NestJS-based REST API for splitting expenses among group members.",
    longDescription: `
A NestJS-based REST API for splitting expenses among group members. Users can create groups, add members, record expenses, and track balances.

Tech Stack

- Framework: NestJS
- Database: PostgreSQL
- ORM: Prisma
- Authentication: JWT + Passport
- Cloud Services: AWS S3 + SQS (LocalStack for local dev)
- Testing: Jest + Pactum
`,
    coverImage: "src/public/images/payment-splitter.png",
    link: "https://payment-splitter-api.vercel.app/api-json",
  },
];

export default projects;
