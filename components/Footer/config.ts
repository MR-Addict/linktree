export interface linkItemType {
  title: string;
  link: string;
  isLocal: boolean;
}

export const links: {
  head: string;
  data: linkItemType[];
}[] = [
  {
    head: "Frameworks",
    data: [
      {
        title: "Next.js 13",
        link: "https://beta.nextjs.org/docs/",
        isLocal: false,
      },
      {
        title: "Typescript",
        link: "https://www.typescriptlang.org/",
        isLocal: false,
      },
      {
        title: "Tailwindcss",
        link: "https://tailwindcss.com/",
        isLocal: false,
      },
      {
        title: "NextAuth.js",
        link: "https://next-auth.js.org/",
        isLocal: false,
      },
    ],
  },
  {
    head: "Resources",
    data: [
      {
        title: "Vercel",
        link: "https://vercel.com/",
        isLocal: false,
      },
      {
        title: "Turbopack",
        link: "https://turbo.build/",
        isLocal: false,
      },
      {
        title: "Mongodb Atlas",
        link: "https://www.mongodb.com/atlas/database",
        isLocal: false,
      },
      {
        title: "Github Repository",
        link: "https://github.com/MR-Addict/linktree",
        isLocal: false,
      },
    ],
  },
  {
    head: "Contacts",
    data: [
      {
        title: "Github",
        link: "https://github.com/MR-Addict/",
        isLocal: false,
      },
    ],
  },
];
