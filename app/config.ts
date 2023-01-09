export interface linktreeItemType {
  head: string;
  data: {
    title: string;
    link: string;
    detail: string;
  }[];
}

export const linktree: {
  head: string;
  data: {
    title: string;
    link: string;
    detail: string;
  }[];
}[] = [
  {
    head: "Websites",
    data: [
      {
        title: "Doc-Share",
        link: "https://book.jinhun.moe/Intro.html",
        detail: "TypeScript supports arrays, similar to JavaScript. There are two ways to declare an array",
      },
      {
        title: "Blog",
        link: "https://mraddict.top/",
        detail: "TypeScript supports arrays, similar to JavaScript. There are two ways to declare an array",
      },
      {
        title: "Notes",
        link: "https://notes.mraddict.top/",
        detail: "TypeScript supports arrays, similar to JavaScript. There are two ways to declare an array",
      },
    ],
  },
  {
    head: "Frameworks",
    data: [
      {
        title: "React.js",
        link: "https://reactjs.org/",
        detail: "TypeScript supports arrays, similar to JavaScript. There are two ways to declare an array",
      },
      {
        title: "Next.js 13",
        link: "https://beta.nextjs.org/docs/",
        detail: "TypeScript supports arrays, similar to JavaScript. There are two ways to declare an array",
      },
      {
        title: "Turbopack",
        link: "https://turbo.build/",
        detail: "TypeScript supports arrays, similar to JavaScript. There are two ways to declare an array",
      },
      {
        title: "NextAuth.js",
        link: "https://next-auth.js.org/",
        detail: "TypeScript supports arrays, similar to JavaScript. There are two ways to declare an array",
      },
      {
        title: "Tailwindcss",
        link: "https://tailwindcss.com/",
        detail: "TypeScript supports arrays, similar to JavaScript. There are two ways to declare an array",
      },
    ],
  },
];
