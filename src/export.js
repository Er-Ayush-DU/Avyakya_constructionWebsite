import building from "./assets/building.svg";
import construction from "./assets/construction.svg";
import design from "./assets/design.svg";
import document from "./assets/document.svg";
import paint from "./assets/paint.svg";


import { IoDocumentTextSharp } from "react-icons/io5";
import { MdOutlineDesignServices } from "react-icons/md";
import { FaRegBuilding } from "react-icons/fa";
import { FaSitemap } from "react-icons/fa";

import client1 from "./assets/testimonials/akash-mishra.jpeg";
import client2 from "./assets/testimonials/shiva-singh.jpeg";
import client3 from "./assets/testimonials/ramchandra-singh.jpeg";
import client4 from "./assets/testimonials/soumya.jpeg";
import coldStorage from "./assets/coldStorage.png";


export const allservices = [
  {
    icon: building,
    title: "Building Renovation",
    about:
      "Expert renovation services to upgrade and modernize existing structures, enhancing functionality and aesthetic appeal.",
  },
  {
    icon: construction,
    title: "Construction Services",
    about:
      "Comprehensive construction solutions, from project planning to execution, ensuring high-quality and timely completion.",
  },
  {
    icon: design,
    title: "Design & Planning",
    about:
      "Professional design and planning services to create efficient and innovative spaces tailored to client needs.",
  },
  {
    icon: document,
    title: "Documentation",
    about:
      "Detailed documentation for all project stages, providing clear records and ensuring compliance with industry standards.",
  },
  {
    icon: paint,
    title: "Interior Design",
    about:
      "Creative interior design services to craft comfortable and visually stunning spaces that reflect individual style.",
  },
  {
    icon: coldStorage,
    title: "Cold Storage Construction",
    about:
      "Specialized cold storage construction with advanced insulation, temperature control, and energy-efficient systems for safe and reliable product preservation.",
  },
];


export const planning = [
  {
    icon: IoDocumentTextSharp,
    title: "Planning",
    about:
      "Detailed research and strategizing to establish project goals, requirements, and timelines for a successful outcome.",
  },
  {
    icon: MdOutlineDesignServices,
    title: "Design",
    about:
      "Crafting user-centered designs, wireframes, and mockups to create a visually appealing and functional interface.",
  },
  {
    icon: FaRegBuilding,
    title: "Building",
    about:
      "Developing the core functionalities and implementing features with clean, efficient code to bring the design to life.",
  },
  {
    icon: FaSitemap,
    title: "Finish",
    about:
      "Thorough testing, debugging, and deployment to ensure the project meets all specifications and functions seamlessly.",
  },
];


export const clients = [
  {
    image: client1,
    name: "Akash Mishra",
    about:
      "A dedicated Project Manager renowned for expertly coordinating all phases of construction projects—from planning and budgeting to execution—ensuring timely delivery, cost efficiency, and uncompromising quality standards.",
    post: "Project Manager",
  },
  {
    image: client2,
    name: "Shiva Singh",
    about:
      "An accomplished Site Manager with strong on-site leadership, overseeing daily operations, resource allocation, safety compliance, and workforce coordination to deliver high-quality construction projects safely and on schedule.",
    post: "Site Manager",
  },
  {
    image: client3,
    name: "Ramchandra Singh",
    about:
      "A visionary Managing Director providing strategic leadership and operational oversight across the organization, driving project excellence, business growth, profitability, and successful execution of complex construction developments.",
    post: "Managing Director",
  },

  {
    image: client4,
    name: "Soumya Ranjan Nanda",
    about:
      "A strategic Director of Growth & Strategy who spearheads business expansion, identifies new market opportunities, develops long-term growth plans, and aligns innovative initiatives to enhance revenue and competitive positioning in the construction and real estate sector.",
    post: "Director: Growth & Strategy",
  }
];

