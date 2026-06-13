import {
  Building2,
  ClipboardCheck,
  DraftingCompass,
  HardHat,
  Layers3,
  Wrench,
} from "lucide-react";
import { v4 as uuidv4 } from "uuid";

export const services = [
  {
    id: uuidv4(),
    icon: DraftingCompass,
    title: "Architectural Design",
    summary:
      "Concept-driven architectural solutions shaped by functionality, context, and long-term value.",
    details:
      "We develop architectural concepts and detailed design packages for residential, commercial, and administrative projects with a clear balance between identity, usability, and technical feasibility.",
  },
  {
    id: uuidv4(),
    icon: Layers3,
    title: "Structural Design",
    summary:
      "Efficient structural systems engineered for safety, durability, and coordinated execution.",
    details:
      "Our structural design approach focuses on technical precision, optimized load paths, cost-awareness, and close alignment with architectural intent and national building regulations throughout every stage of the project.",
  },
  {
    id: uuidv4(),
    icon: Wrench,
    title: "Mechanical & Electrical Systems",
    summary:
      "Integrated MEP design with emphasis on performance, coordination, and energy-conscious solutions.",
    details:
      "We provide coordinated mechanical and electrical system planning that supports operational efficiency, user comfort, maintainability, and compliance with modern building standards.",
  },
  {
    id: uuidv4(),
    icon: ClipboardCheck,
    title: "Construction Supervision",
    summary:
      "On-site and technical supervision to ensure execution quality, compliance, and design integrity.",
    details:
      "We monitor implementation against approved drawings, technical specifications, and regulatory requirements to reduce risk, prevent deviation, and maintain project quality throughout execution.",
  },
  {
    id: uuidv4(),
    icon: Building2,
    title: "Project Management & Coordination",
    summary:
      "Technical coordination across disciplines for smoother decision-making and controlled delivery.",
    details:
      "From consultant alignment to execution follow-up, we help structure project workflows, resolve technical interfaces, and support efficient communication between all key stakeholders.",
  },
  {
    id: uuidv4(),
    icon: HardHat,
    title: "Renovation & Performance Optimization",
    summary:
      "Targeted upgrades for existing buildings with attention to function, efficiency, and compliance.",
    details:
      "We provide renovation and upgrade strategies for existing assets, with focus on technical enhancement, better spatial performance, energy-related improvements, and code alignment.",
  },
];

export const processSteps = [
  {
    id: uuidv4(),
    step: "01",
    title: "Project Assessment",
    text: "Understanding project goals, site conditions, limitations, and technical priorities before design decisions begin.",
  },
  {
    id: uuidv4(),
    step: "02",
    title: "Integrated Design",
    text: "Developing coordinated architectural, structural, and systems-based solutions with technical consistency.",
  },
  {
    id: uuidv4(),
    step: "03",
    title: "Compliance & Detailing",
    text: "Refining the proposal through code alignment, technical detailing, and execution-readiness.",
  },
  {
    id: uuidv4(),
    step: "04",
    title: "Supervision & Delivery",
    text: "Supporting implementation through technical supervision, coordination, and quality control.",
  },
];

export const capabilities = [
  "Integrated architectural, structural, and MEP coordination",
  "Technical focus on energy efficiency and building performance",
  "Experience across residential, commercial, and administrative typologies",
  "Design and supervision background covering over 1,000,000 m²",
];
