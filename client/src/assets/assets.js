import logo from "./logo.svg";
import profileIcon from "./profile_icon.png";
import creditStar from "./credit_star.svg";
import star_icon from "./star_icon.svg";
import star_group from "./star_group.png";
import generated_image_1 from "./generated_image_1.jpg";
import generated_image_2 from "./generated_image_2.jpg";
import generated_image_3 from "./generated_image_3.jpg";
import generated_image_4 from "./generated_image_4.jpg";
import generated_image_5 from "./generated_image_5.jpg";
import generated_image_6 from "./generated_image_6.jpg";
import step_icon_1 from "./step_icon_1.svg";
import step_icon_2 from "./step_icon_2.svg";
import step_icon_3 from "./step_icon_3.svg";
import intro_sec_img_1 from "./intro_sec_img_1.jpg";
import intro_sec_img_2 from "./intro_sec_img_2.jpg";
import profile_img_1 from "./profile_img_1.png";
import profile_img_2 from "./profile_img_2.png";
import rating_star from "./rating_star.svg";
import facebook_icon from "./facebook_icon.svg";
import twitter_icon from "./twitter_icon.svg";
import instagram_icon from "./instagram_icon.svg";

export const assets = {
  logo,
  profileIcon,
  creditStar,
  star_icon,
  star_group,
  generatedImages: [
    generated_image_1,
    generated_image_2,
    generated_image_3,
    generated_image_4,
    generated_image_5,
    generated_image_6,
  ],
  step_icon_1,
  step_icon_2,
  step_icon_3,
  intro_sec_img_1,
  intro_sec_img_2,
  profile_img_1,
  profile_img_2,
  rating_star,
  facebook_icon,
  twitter_icon,
  instagram_icon,
};

export const HowItWorksData = [
  {
    image: step_icon_1,
    title: "Describe Your Vision",
    description:
      "Type a phrese, sentence or paragraph that describes the image you want to generate",
  },
  {
    image: step_icon_2,
    title: "Watch the Magic",
    description:
      "Our AI will generate an image based on your description. You can also choose from a list of generated images",
  },
  {
    image: step_icon_3,
    title: "Download & Share",
    description: "Download the image and share it with your friends and family",
  },
];

export const testimonials = [
  {
    image: profile_img_1,
    name: "John Doe",
    role: "CEO",
    star: 3,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor, justo eget ultrices ultrices, sem turpis blandit turpis, in lacinia ex est nec justo. In hac habitasse platea dictumst. ",
  },
  {
    image: profile_img_2,
    name: "Jane Doe",
    role: "CTO",
    star: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor, justo eget ultrices ultrices, sem turpis blandit turpis, in lacinia ex est nec justo. In hac habitasse platea dictumst. ",
  },
  {
    image: profile_img_2,
    name: "John Smith",
    role: "CFO",
    star: 5,
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
