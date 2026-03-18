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
      "A NestJS-based REST API for splitting expenses among group members.",
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
  {
    id: 3,
    title: "Angular Kanban",
    shortDescription:
      "Angular application for projects management with boards and tasks, like Trello.",
    longDescription: `
Angular application for projects management with boards and tasks, similar to Trello and Jira. It's possible to create many boards, each can contain as many tracks and tasks as it seems necessary. Tracks and task can be dragged and dropped and tasks accept markdown and emojis. Everything is saved at the local storage.

This project was generated with Angular CLI version 8.0.4.
`,
    coverImage: "https://github.com/gm1357/Angular-Kanban/raw/master/demo.png",
    link: "https://angular-kanban.gmachado1.vercel.app/",
  },
  {
    id: 4,
    title: "Bidding System",
    shortDescription:
      "A full-stack bidding platform where users can browse item collections, place bids, and have bids accepted or rejected.",
    longDescription: `
A full-stack bidding platform where users can browse item collections, place bids, and have bids accepted or rejected. When a bid is accepted, all other pending bids on the same collection are automatically rejected.

Product overview

Collections represent items available for bidding. Each collection has a name, description, stock quantity, and a starting price (stored in cents). Any user can place a PENDING bid on a collection. A collection owner can accept one bid — which atomically rejects all remaining pending bids — or reject bids individually.

Tech stack

Next.js 16 (App Router) + TypeScript + React 19
Tailwind CSS v4 for styling
PostgreSQL (via Docker Compose) + Prisma ORM with @prisma/adapter-pg
`,
    link: "https://bidding-system-tau.vercel.app/",
  },
  {
    id: 5,
    title: "Dynamic Impact Map",
    shortDescription:
      "The Dynamic Impact Map is an interactive visualization tool that showcases a Pastor's cumulative engagement across the United States.",
    longDescription: `
The Dynamic Impact Map is an interactive visualization tool that showcases a Pastor's cumulative engagement across the United States. It displays the flow of engagement from the Pastor's headquarters to various states, providing a representation of their impact and reach.
`,
    coverImage:
      "https://github.com/gm1357/dynamic-impact-map-frontend/raw/main/screen-example.png",
  },
  {
    id: 6,
    title: "Stock Operations Tax Calculator CLI",
    shortDescription:
      "A simple CLI tool to calculate taxes on stock operations based on specific tax rules.",
    longDescription: `
This tool calculates taxes for stock operations based on the following rules:

- No tax is applied on "buy" operations.
- No tax is applied on "sell" operations if the total amount is less than or equal to $20,000.
- If the total amount of a "sell" operation exceeds $20,000, a tax of 20% is applied on the profit.
- If there is a loss in any operation, it is used to offset profits in subsequent operations.
`,
  },
];

export default projects;
