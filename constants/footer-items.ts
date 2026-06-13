import { v4 as uuidv4 } from "uuid";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaLinkedin, FaInstagram, FaXTwitter } from "react-icons/fa6";

export const footerItems = {
  brand: {
    id: uuidv4(),
    name: "Soroush Group Companies",
    description:
      "Engineering and construction company specializing in structural projects and infrastructure.",
    logo: "/images/logo2.png",
  },
  navigation: [
    {
      id: uuidv4(),
      title: "Company",
      links: [
        { id: uuidv4(), label: "About Us", href: "/about-us" },
        { id: uuidv4(), label: "Services", href: "/services" },
        { id: uuidv4(), label: "Projects", href: "/projects" },
        { id: uuidv4(), label: "Certifications", href: "/certifications" },
      ],
    },
    {
      id: uuidv4(),
      title: "Resources",
      links: [
        { id: uuidv4(), label: "Contact", href: "/contact" },
        { id: uuidv4(), label: "Careers", href: "/projects" },
        { id: uuidv4(), label: "Privacy Policy", href: "/about" },
      ],
    },
  ],

  contact: [
    {
      id: uuidv4(),
      icon: MapPin,
      label: "Tehran, Iran",
    },
    {
      id: uuidv4(),
      icon: Phone,
      label: "+98 21 26457196",
    },
    {
      id: uuidv4(),
      icon: Mail,
      label: "info@soroushomran.ir",
    },
  ],

  social: [
    {
      id: uuidv4(),
      icon: FaLinkedin,
      href: "#",
    },
    {
      id: uuidv4(),
      icon: FaInstagram,
      href: "#",
    },
    {
      id: uuidv4(),
      icon: FaXTwitter,
      href: "#",
    },
  ],
};
