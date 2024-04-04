import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Engineer Student",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Tiktok influencer",
    company_name: "Tiktok",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2023",
    points: [
      "Got more than 130K followers and 30M views in one year",
      "Logo analysis: Reviewing and critiquing famous logos, dissecting their design elements and symbolism.",
      "Logo evolution: Exploring the history and evolution of iconic logos, highlighting changes in design over time.",
      "Logo design tips and tutorials: Sharing step-by-step guides on how to create effective and visually appealing logos.",
    ],
  },
  {
    title: "Freelancer Developer",
    company_name: "Fiverr",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "API integration: Integrating third-party APIs to enhance functionality and streamline processes.",
      "Custom web development: Designing and building responsive websites tailored to clients' unique specifications.",
      "Mobile app development: Creating native or cross-platform mobile applications for iOS and Android devices.",
      "Web designs with figma",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "This work is meaningful to me, and I appreciate the work from this professional.",
    name: "generaciones",
    designation: "",
    company: "fiverr",
    image:
      "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/aff397e1cfdbe5763425cceabc7242b3-1619041190093/c3f5faca-225f-4558-8102-ea5c6768fbaf.JPG",
  },
  {
    testimonial:
      "Engaging, insightful, and thoroughly enjoyable my experience with this project was nothing short of exceptional",
    name: "Haroun Pentester",
    designation: "Penetration tester",
    company: "Amadeus Nice",
    image:
      "https://media.licdn.com/dms/image/C4E03AQFKXoxhOOw61w/profile-displayphoto-shrink_200_200/0/1660899358577?e=1717632000&v=beta&t=1OweAeAZ2UDXgJYx2KLnvf_V-EB-Ot1MFdbCynX5COc",
  },
];

const projects = [
  {
    name: "The Ai Tool",
    description:
      "Developed a responsive website utilizing the OpenAI API, delivering dynamic content and engaging user experiences across multiple devices. Leveraged advanced natural language processing to create interactive features and personalized interactions.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "API",
        color: "green-text-gradient",
      },
      {
        name: "AI",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/adxdits/AI-Tools",
  },
  {
    name: "Image Processing",
    description:
      "In C++, I've implemented image processing effects using convolution techniques, applying kernels to manipulate pixels and achieve various visual transformations. Leveraging libraries like OpenCV, I've developed efficient algorithms for tasks such as blurring, sharpening, edge detection, and more.",
    tags: [
      {
        name: "C++",
        color: "blue-text-gradient",
      },
      {
        name: "Open Gl",
        color: "green-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/adxdits/C-synthese-image",
  },
  {
    name: "Flask Server game",
    description: "A small game using Flask",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "jinja2",
        color: "green-text-gradient",
      },
      {
        name: "Flask",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link:
      "https://github.com/adxdits/tp-flask/blob/main/doc/server.py",
  },
];

export { services, technologies, experiences, testimonials, projects };
