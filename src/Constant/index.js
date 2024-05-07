
import ecommerce from "../assets/ecommerce.png"
import smoo from "../assets/smoo.jpeg"
import vpn from "../assets/vpn.jpg"



const projects = [
  {
    name: "Ecommerce",
    description:
      "I have created an ecommerce site in which you can make purchases, save products as favourites and access through a login to purchase and consult orders.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: ecommerce,
    source_code_link: "https://github.com/SofiSit/Ecommerce-React",
  },
   {
    name: "Smoothsick Music App",
    description:
      "This project is based on the page Deezer and mocks the music platform implemented by this page, trying with this to improve my knowledge of react and another related libraries.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Typscript",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
      {
        name: "nodeJs",
        color: "blue-text-gradient",
      }
    ],
    image: smoo,
    source_code_link: "https://github.com/SofiSit/Smoothsick-frontend",
  }, 
  {
    name: "VPN-Management-System",
    description:
      "A VPN system that helps you connect safe and fast on the internet. Test project focused on the development and testing of PHP OOP and MySQL databases for educational purposes.",
    tags: [
      {
        name: "PHP",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "XAMPP",
        color: "pink-text-gradient",
      },
    ],
    image: vpn,
    source_code_link: "https://github.com/SofiSit/VPN-Management-System",
  },
];

  export {  projects };