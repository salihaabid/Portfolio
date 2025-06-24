import {
  BsEmojiSmile,
  BsHeadset,
  BsJournalRichtext,
  BsClockHistory,
  BsBarChart,
  BsBinoculars,
  BsBriefcase,
  BsBrightnessHigh,
  BsCalendar4Week,
  BsCardChecklist,
  BsLayoutTextWindow,
  BsCodeSlash,
  BsDatabase,
  BsDiagram3,
  BsRobot,
  BsGraphUp,
} from 'react-icons/bs';

export const infoData = [
  {
    title: 'Birthday',
    text: '19 Sep 2007',
  },
  {
    title: 'Age',
    text: '17',
  },
  {
    title: 'Phone',
    text: '+92 301 5849768',
  },
  {
    title: 'City',
    text: 'Lahore, Pakistan',
  },

  {
    title: 'Degree',
    text: 'Inter',
  },
  {
    title: 'Email',
    text: 'salihabid349@gmail.com',
  },
  {
    title: 'Freelance',
    text: 'Available',
  },
  {
    title: 'Experience',
    text: '1.5 + years',
  },
];

export const counterData = [
  {
    icon: <BsEmojiSmile />,
    title: 'Happy Clients',
    text: 'Successfully delivered projects with client satisfaction',
    end: 14,
  },
  {
    icon: <BsJournalRichtext />,
    title: 'Projects',
    text: 'Completed diverse web development projects',
    end: 18,
  },
  {
    icon: <BsHeadset />,
    title: 'Hours Of Support ',
    text: 'Provided continuous technical support and assistance',
    end: 330,
  },
  {
    icon: <BsClockHistory />,
    title: 'Experience Years',
    text: 'Hands-on development experience in the tech industry',
    end: 1.5,
  },
];

export const skillsData = [
  {
    title: 'html',
    level: 100,
  },
  {
    title: 'scss',
    level: 100,
  },
  {
    title: 'javascript',
    level: 85,
  },
  {
    title: 'react',
    level: 90,
  },
  {
    title: 'node js',
    level: 70,
  },
  {
    title: 'express',
    level: 60,
  },
  {
    title: 'python (scrapping & automation)',
    level: 95,
  },
  {
    title: 'postgresql',
    level: 90,
  },
];

export const resumeData1 = [
  {
    section: 'Summary',
    name: 'Saliha Abid',
    description: `As a passionate Full Stack Developer with a strong command of JavaScript, its modern frameworks (React, Express, Node, Mongodb), and Python tools like Django and Selenium, I specialize in building robust, scalable, and user-centric web applications. I bring hands-on experience in frontend and backend development, database management with PostgreSQL, automating and scrapping tasks to improve efficiency. Detail-obsessed and committed to high performance, and continuous learning`,
    points: ['Lahore, Pakistan', '+92 301 5849768', 'salihabid349@gmail.com'],
  },
  {
    section: 'Education',
    entries: [
      {
        title: 'Intermediate Student',
        date: '2023 - 2025',
        institution:
          'Aabru Welfare College (Academy-based learning), Lahore, Pakistan',
        description:
          'Currently pursuing my intermediate education at Aabru Welfare College, where I am engaged in academy-based learning. This program is equipping me with a solid academic foundation and the skills necessary for my future career in web development.',
      },
    ],
  },
];

export const resumeData2 = [
  {
    section: 'Professional Experience',
    entries: [
      {
        title: 'Full Stack Web Development Intern – PITB',
        date: 'Jun 2024 – Sep 2024',
        company: 'Arfa IT Tower , Lahore, Pakistan',
        points: [
          'Built responsive, interactive web applications using core JavaScript and modern JS frameworks.',
          'Delivered real-world features across the stack including APIs, dynamic routing, and UI components.',
        ],
      },

      {
        title: 'Python & DB Intern – PITB',
        date: 'Oct 2024 – March 2025',
        company: 'Arfa IT Tower , Lahore, Pakistan',
        points: [
          'Developed powerful scraping scripts using Python & Selenium to extract structured data from complex websites.',
          'Designed, stored, and maintained data using PostgreSQL with a focus on performance and integrity.',
        ],
      },
    ],
  },

  {
    section: 'My Skills',
    entries: [
      {
        title: 'Following are the skills I pursue and continue to develop:',
        points: [
          'MERN STACK: Creating structured, responsive, interactive, dynamic and visually appealing web pages.',
          'Python: Building dynamic web content, automation scripts, and web scraping tools.',
          'PostgreSQL: Managing and querying relational databases efficiently for structured data workflows.',
        ],
      },
    ],
  },
];

export const portData = [
  {
    id: 1,
    name: 'WORLDWISE',
    description: 'A travelling web project where you can add travel notes.',
    src: 'worldwise.png', // Optional thumbnail
    liveLink: 'https://worldwise-nu.vercel.app/',
    githubLink: 'https://github.com/salihaabid/Worldwise',
    category: 'MERN',
  },
  {
    id: 2,
    name: 'PZZA CO.',
    description: 'My personal responsive portfolio built with React.',
    src: 'pizza.png',
    liveLink: 'https://react-pizza-co-jet.vercel.app/',
    githubLink: 'https://github.com/salihaabid/react-pizza-co',
    category: 'React',
  },
  {
    id: 3,
    name: 'CARA',
    description: 'An aesthetic attire store with a modern design. ',
    src: 'attire.png',
    liveLink: 'https://attire-ecommerce-five.vercel.app/',
    githubLink: 'https://github.com/salihaabid/attire-ecommerce',
    category: 'Vanilla',
  },
  {
    id: 4,
    name: 'MINIFLIX',
    description: 'A movie streaming platform with a sleek UI.',
    src: 'miniflix.png',
    liveLink: 'miniflixx.vercel.app',
    githubLink: 'https://github.com/salihaabid/Miniflixx',
    category: 'React',
  },
];

export const serviceData = [
  {
    heading: 'Front-End Development',
    text: 'Creating responsive and visually engaging websites using HTML, CSS, and JavaScript.',
    icon: <BsLayoutTextWindow />, // Represents front-end interface/devices
  },
  {
    heading: 'React & UI Engineering',
    text: 'Building interactive and efficient user interfaces with React, focusing on performance and design.',
    icon: <BsCodeSlash />, // Code-focused for React dev
  },
  {
    heading: 'Full-Stack (MERN) Development',
    text: 'Developing scalable and feature-rich applications using the MERN stack — MongoDB, Express.js, React, and Node.js.',
    icon: <BsDiagram3 />, // Represents full architecture
  },
  {
    heading: 'Data Handling with SQL & PostgreSQL',
    text: 'Managing and querying relational databases efficiently using SQL and PostgreSQL for structured data workflows.',
    icon: <BsDatabase />, // Database-specific icon
  },
  {
    heading: 'Automation & Web Scraping',
    text: 'Implementing smart automation scripts, scraping web data, and managing structured data workflows using PYTHON.',
    icon: <BsRobot />, // Automation and bot-like tasks
  },
  {
    heading: 'Continuous Learning & Innovation',
    text: 'Adapting to the latest technologies and trends to consistently deliver modern, effective solutions.',
    icon: <BsGraphUp />, // Represents progress and learning
  },
];
