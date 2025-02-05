import logo from "./logo.svg";
import profileIcon from "./profile_icon.png";
import creditStar from "./credit_star.svg";

export const assets = {
  logo,
    profileIcon,
    creditStar,
};

export const stepData = [
  {
    title: "Step 1",
    description: "Choose the amount of credit you want to buy",
    icon: "step_icon_1",
  },
  {
    title: "Step 2",
    description: "Enter your payment details",
    icon: "step_icon_2",
  },
  {
    title: "Step 3",
    description: "Get your credit and enjoy shopping",
    icon: "step_icon_3",
  },
];

export const testimonials = [
  {
    image: "profile_image_1",
    name: "John Doe",
    role: "CEO",
    star: "5",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor, justo eget ultrices ultrices, sem turpis blandit turpis, in lacinia ex est nec justo. In hac habitasse platea dictumst. ",
  },
  {
    image: "profile_image_2",
    name: "Jane Doe",
    role: "CTO",
    star: "5",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor, justo eget ultrices ultrices, sem turpis blandit turpis, in lacinia ex est nec justo. In hac habitasse platea dictumst. ",
  },
  {
    image: "profile_image_3",
    name: "John Smith",
    role: "CFO",
    star: "5",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor, justo eget ultrices ultrices, sem turpis blandit turpis, in lacinia ex est nec justo. In hac habitasse platea dictumst. ",
  },
];

export const plans = [
  {
    id: "Basic",
    price: "10",
    credits: "100",
    desc: "Basic plan for small shopping",
  },
  {
    id: "Standard",
    price: "20",
    credits: "200",
    desc: "Standard plan for medium shopping",
  },
  {
    id: "Premium",
    price: "30",
    credits: "300",
    desc: "Premium plan for large shopping",
  },
];
