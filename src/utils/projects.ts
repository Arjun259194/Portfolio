import { Project } from "./types";

export const projects: Project[] = [
  {
    image: "/img/AJ.png",
    link: "https://github.com/Arjun259194/Author-Junction",
    subTitle: "A web based platform for small authors to share there work",
    about:
      "This is a SSR website created with nextjs and tailwind for my final year project. This website uses user authentication and authorization with json-web-token to validate and verify user. It uses MongoDB and the database for storing user data and post data created by user",
    title: "Author-Junction",
  },
  {
    image: "/img/news.png",
    link: "https://github.com/Arjun259194/Class-A-news",
    subTitle: "A news website that fetches latest global news from all around the world",
    about:
      "This is a simple single page project that shows you news and let's you search news for a specific country or with a keyword. if uses newsAPI (third party API) to fetch global news. it is created to pure HTML, javascript and SCSS",
    title: "ClassANews",
  },
  {
    image: "/img/RD.png",
    link: "https://github.com/Arjun259194/Responsive-Admin-Dashboard-Using-HTML-CSS-JavaScript-with-Light-Dark-Mode",
    subTitle: "A admin dashboard design",
    about:
      "This is just a simple design page. I created this to display my CSS/SCSS skills. This is a admin dashboard With light and dark mode toggle option. The design is responsive for device with small screen size",
    title: "Admin dashboard",
  },
];
