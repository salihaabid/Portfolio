import {
  BsEmojiSmile,
  BsHeadset,
  BsJournalRichtext,
  BsPeople,
  BsBarChart,
  BsBinoculars,
  BsBriefcase,
  BsBrightnessHigh,
  BsCalendar4Week,
  BsCardChecklist,
} from 'react-icons/bs';

export const infoData = [
  {
    title: 'Birthday',
    text: '19 Sep 2007',
  },
  {
    title: 'Age',
    text: '16',
  },
  {
    title: 'Website',
    text: 'www.example.com',
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
];

export const counterData = [
  {
    icon: <BsEmojiSmile />,
    title: 'Happy Clients',
    text: 'consequuntur quae',
    end: 232,
  },
  {
    icon: <BsJournalRichtext />,
    title: 'Projects',
    text: 'adipisci atque cum quia aut',
    end: 521,
  },
  {
    icon: <BsHeadset />,
    title: 'Hours Of Support ',
    text: 'aut commodi quaerat',
    end: 1453,
  },
  {
    icon: <BsPeople />,
    title: 'Hard Workers',
    text: 'rerum asperiores dolor',
    end: 32,
  },
];
export const skillsData = [
  {
    title: 'html',
    level: 100,
  },
  {
    title: 'css',
    level: 90,
  },
  {
    title: 'javascript',
    level: 70,
  },
  {
    title: 'react',
    level: 85,
  },
  {
    title: 'node js',
    level: 50,
  },
  {
    title: 'express',
    level: 40,
  },
];
export const resumeData1 = [
  {
    section: 'Summary',
    name: 'Saliha Abid',
    description: `I have expertise in HTML, CSS, JavaScript, and the MERN stack. I'm passionate about web development and eager to expand my skills further. Currently, I'm enhancing my abilities in React to create dynamic user interfaces. I am excited to gain real-world experience through an internship, collaborate with experienced developers, and contribute to meaningful projects while continuing to grow as a web developer.`,
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
        title: 'Web Development Intern',
        date: '2024 - Present',
        company: 'Arfa IT Tower , Lahore, Pakistan',
        points: [
          'Collaborating with experienced developers on various projects.',
          'Enhancing skills in web development and gaining real-world experience.',
          'Contributing to the creation of dynamic and responsive web applications.',
        ],
      },
    ],
  },
  {
    section: 'My Skills',
    entries: [
      {
        title: 'The following are the skills I pursue and continue to develop:',
        points: [
          'HTML & CSS: Creating structured, responsive, and visually appealing web pages.',
          'JavaScript: Building dynamic web content.',
          'React (ongoing): Developing dynamic and interactive user interfaces.',
          'MERN Stack: Basic knowledge of MongoDB, Express.js, React, and Node.js.',
        ],
      },
    ],
  },
];

export const portData = [
  { id: 1, src: 'app-1.jpg', category: 'App', name: 'App 1' },
  { id: 4, src: 'product-1.jpg', category: 'Product', name: 'Product 1' },
  { id: 7, src: 'branding-1.jpg', category: 'Branding', name: 'Branding 1' },
  { id: 11, src: 'books-2.jpg', category: 'Books', name: 'Books 2' },
  { id: 5, src: 'product-2.jpg', category: 'Product', name: 'Product 2' },
  { id: 2, src: 'app-2.jpg', category: 'App', name: 'App 2' },
  { id: 6, src: 'product-3.jpg', category: 'Product', name: 'Product 3' },
  { id: 9, src: 'branding-3.jpg', category: 'Branding', name: 'Branding 3' },
  { id: 10, src: 'books-1.jpg', category: 'Books', name: 'Books 1' },
  { id: 3, src: 'app-3.jpg', category: 'App', name: 'App 3' },
  { id: 8, src: 'branding-2.jpg', category: 'Branding', name: 'Branding 2' },
  { id: 12, src: 'books-3.jpg', category: 'Books', name: 'Books 3' },
];

export const serviceData = [
  {
    heading: 'Front-End Development',
    text: 'Crafting modern and responsive websites using HTML, CSS, and JavaScript.',
    icon: <BsBriefcase />,
  },
  {
    heading: 'React Development',
    text: 'Building dynamic and interactive user interfaces with React.',
    icon: <BsCardChecklist />,
  },
  {
    heading: 'Full-Stack Development',
    text: 'Developing complete web applications using the MERN stack (MongoDB, Express.js, React, Node.js).',
    icon: <BsBarChart />,
  },
  {
    heading: 'UI/UX Design',
    text: 'Designing user-friendly and visually appealing interfaces.',
    icon: <BsBinoculars />,
  },
  {
    heading: 'Project Collaboration',
    text: 'Working closely with clients and teams to deliver high-quality web solutions.',
    icon: <BsBrightnessHigh />,
  },
  {
    heading: 'Continuous Learning',
    text: 'Staying updated with the latest web development trends and technologies to provide innovative solutions.',
    icon: <BsCalendar4Week />,
  },
];
