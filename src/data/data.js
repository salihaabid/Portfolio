import {
  BsEmojiSmile,
  BsHeadset,
  BsJournalRichtext,
  BsClockHistory,
  BsLayoutTextWindow,
  BsCodeSlash,
  BsDatabase,
  BsDiagram3,
  BsRobot,
} from 'react-icons/bs';

export const infoData = [
  {
    title: 'Phone',
    text: '+92 320 6468349',
  },
  {
    title: 'City',
    text: 'Lahore, Pakistan',
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
    text: '2 + years',
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
    end: 7,
  },
  {
    icon: <BsHeadset />,
    title: 'Hours Of Support ',
    text: 'Provided continuous technical support and assistance',
    end: 4763,
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
    title: 'JavaScript',
    level: 85,
  },
  {
    title: 'React.js',
    level: 90,
  },
  {
    title: 'Node.js',
    level: 70,
  },
  {
    title: 'Express.js',
    level: 60,
  },
  {
    title: 'MongoDb',
    level: 85,
  },
  {
    title: 'PostgreSQL',
    level: 90,
  },

  {
    title: 'API Integration',
    level: 90,
  },
  {
    title: 'Python (Scraping & Automation)',
    level: 95,
  },

  // {
  //   title: 'web scrapping (selenium, scrapy)',
  //   level: 980,
  // },
];

export const resumeData1 = [
  {
    section: 'Summary',
    // name: 'Saliha Abid',
    description: `As a passionate Full Stack Developer with a strong command of JavaScript, its modern frameworks (React.js, Express.js, Node.js, Mongodb), and Python tools like Scrapy and Selenium, I specialize in building robust, scalable, and user-centric web applications. I bring hands-on experience in frontend and backend development, database management, web automating and scrapping tasks to improve efficiency. Detail-obsessed and committed to high performance, and continuous learning`,
  },
  {
    section: 'Education',
    entries: [
      {
        title: 'Intermediate Student',
        // date: '',
        institution:
          'University of Central Punjab (UCP), Lahore, Pakistan  (2023 - 2025)',
        description:
          'Completed a comprehensive program with a strong emphasis on software engineering fundamentals, application development, and modern technologies. Gained practical experience in designing, developing, and implementing software solutions, with a focus on problem-solving, analytical thinking, and technical excellence.',
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
        // date: '',
        company: 'Arfa IT Tower , Lahore, Pakistan (Jun 2024 – Sep 2024)',
        points: [
          'Developed full-stack web applications using modern JavaScript frameworks, focusing on responsiveness, dynamic routing, and component-based UI design.',
          'Integrated RESTful APIs and supported backend interactions using Node.js and Express.',
        ],
      },

      {
        title: 'Python & DB Intern – PITB',
        // date: '',
        company: 'Arfa IT Tower, Lahore, Pakistan (Oct 2024 – March 2025)',
        points: [
          'Developed powerful scraping scripts using Python & Selenium to extract unstructured data from complex websites.',
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
          {
            heading: 'MERN STACK',
            text: 'Creating structured, responsive, interactive, dynamic, and visually appealing web applications with efficient functionality.',
          },
          {
            heading: 'Python',
            text: 'Building dynamic web content, automation scripts, and powerful web scraping tools for streamlined processes.',
          },
          {
            heading: 'PostgreSQL',
            text: 'Managing and querying relational databases efficiently with optimized data handling and workflow support.',
          },
        ],
      },
    ],
  },
];

export const portData = [
  {
    id: 8,
    name: 'AANGAN CLONE',
    description:
      ' Complete E-commerce platform featuring product management, order tracking, and secure authentication.',
    src: 'aangan.png', // Optional thumbnail
    liveLink: 'https://aangan-frontend.vercel.app/',
    githubLink: 'https://github.com/salihaabid/aangan-final',
    category: 'MERN',
  },

  {
    id: 2,
    name: 'PZZA CO.',
    description: 'My personal responsive portfolio built with React.',
    src: 'pizza.png',
    liveLink: 'https://react-pizza-co-jet.vercel.app/',
    githubLink: 'https://github.com/salihaabid/react-pizza-co',
    category: 'MERN',
  },
  {
    id: 3,
    name: 'CARA',
    description: 'An aesthetic attire store with a modern design. ',
    src: 'attire.png',
    liveLink: 'https://attire-ecommerce-five.vercel.app/',
    githubLink: 'https://github.com/salihaabid/attire-ecommerce',
    category: 'MERN',
  },
  {
    id: 4,
    name: 'MINIFLIX',
    description: 'A movie streaming platform with a sleek UI.',
    src: 'miniflix.png',
    liveLink: 'https://miniflixx.vercel.app/',
    githubLink: 'https://github.com/salihaabid/Miniflixx',
    category: 'MERN',
  },
  {
    id: 5,
    name: 'THE ATOMIC BLOG',
    description: 'A minimal blog to share atomic thoughts.',
    src: 'atomic-blog-2.png',
    liveLink: 'https://react-blog-seven-chi.vercel.app/',
    githubLink: 'https://github.com/salihaabid/react-blog',
    category: 'Vanilla',
  },
  {
    id: 6,
    name: 'FAR AWAY',
    description: 'Travel packing checklist app with progress tracking.',
    src: 'far-away.png',
    liveLink: 'https://far-away-gamma-woad.vercel.app/',
    githubLink: 'https://github.com/salihaabid/far-away',
    category: 'Vanilla',
  },
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
    id: 7,
    name: 'EAT-N-SPLIT',
    description: 'Track and split expenses with friends.',
    src: 'eat-n-split.png',
    liveLink: 'https://eat-n-split-sandy.vercel.app/',
    githubLink: 'https://github.com/salihaabid/eat-n-split',
    category: 'Vanilla',
  },
];

export const serviceData = [
  {
    heading: 'Front-End Development',
    text: 'Building interactive and efficient user interfaces with React.js and MUI, focusing on performance and design.',
    icon: <BsLayoutTextWindow />, // Represents front-end interface/devices
  },
  {
    heading: 'Back-End Development',
    text: 'Creating robust server-side applications using Node.js and Express.js, ensuring seamless data processing and API integration.',
    icon: <BsCodeSlash />, // Code-focused for React dev
  },

  {
    heading: 'Database Management',
    text: 'Managing and querying relational databases efficiently using NoSQL(MongoDb) and SQL(PostgreSQL) for data workflows.',
    icon: <BsDatabase />, // Database-specific icon
  },
  {
    heading: 'Web Automation & Scraping',
    text: 'Implementing smart automation scripts, scraping web data, and managing data workflows using Python.',
    icon: <BsRobot />, // Automation and bot-like tasks
  },
  {
    heading: 'Full-Stack (MERN) Development',
    text: 'Architecting and implementing full-stack applications using MongoDB, Express, React, and Node.js with a focus on performance and scalability.',
    icon: <BsDiagram3 />, // Represents full architecture
  },
];
