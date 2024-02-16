import { PopoverDataType } from "@/typings";
import { FaHome, FaPaperPlane, FaPlayCircle, FaPhoneAlt } from "react-icons/fa";
import { IoChatbubbleEllipses } from "react-icons/io5";

export const PopoverData: PopoverDataType[] = [
  {
    name: "Book a Stay",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: FaHome,
  },
  {
    name: "Book a Flight",
    description: "Speak directly to your customers",
    href: "#",
    icon: FaPaperPlane,
  },
  {
    name: "Contact our Support Team",
    description: "Your customers’ data will be safe and secure",
    href: "#",
    icon: IoChatbubbleEllipses,
  },
];

export const CallsToAction = [
  { name: "See Demo Booking", href: "#", icon: FaPlayCircle },
  { name: "Contact Support", href: "#", icon: FaPhoneAlt },
];
