import { v4 as uuidv4 } from "uuid";

export const projectsItems = [
  {
    id: uuidv4(),
    title: "Gheytariyeh Residence",
    type: "Residential",
    location: "Tehran",
    year: "2023",
    image: "/images/projects/gheytariyeh.png",
    desc: "Modern facade design focusing on stone textures and natural light integration.",
  },
  {
    id: uuidv4(),
    title: "Amid Commercial Complex",
    type: "Commercial",
    location: "Tehran",
    year: "2022",
    image: "/images/projects/amid.png",
    desc: "Integration of geometric patterns into a contemporary glass and stone envelope.",
  },
  {
    id: uuidv4,
    title: "Mehradad Building",
    type: "Technical / Facade",
    location: "Tehran",
    year: "2024",
    image: "/images/projects/mehradad.png",
    desc: "Advanced structural coordination and precision architectural detailing.",
  },
  {
    id: uuidv4,
    title: "Donse Villa",
    type: "Residential / Villa",
    location: "Chalus",
    year: "2023",
    image: "/images/projects/donse.png",
    desc: "Organic architecture harmonizing with the northern landscape.",
  },
];
