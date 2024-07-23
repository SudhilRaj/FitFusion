import { ReactNode } from "react";
import {CiDumbbell} from "react-icons/ci";
import {BsHeartPulse} from "react-icons/bs";
import {BiTimeFive} from "react-icons/bi";
import {AiOutlineArrowRight} from "react-icons/ai";
import client1 from "../assets/client1.jpg";
import client2 from "../assets/client2.jpg";
import client3 from "../assets/client3.jpg";
import client4 from "../assets/client4.jpg";
import client5 from "../assets/client5.jpg";
import team1 from "../assets/team1.jpg";
import team2 from "../assets/team2.jpg";
import team3 from "../assets/team3.jpg";
import blog1 from "../assets/blog1.jpg";
import blog2 from "../assets/blog2.jpg";

type Service = {
   icon: ReactNode;
   label: string;
   desc: string;
   btnDec: string;
   btnIcon: ReactNode;
};

export const navLinks = [
   {label:"Home",href:"#home"},
   {label:"About",href:"#about"},
   {label:"Services",href:"#services"},
   {label:"Team",href:"#team"},
   {label:"Testimonials",href:"#testimonials"},
   {label:"Gallery",href:"#gallery"},
   {label:"Blog",href:"#blog"},
   {label:"Contact",href:"#contact"}
]

export const services: Service[] = [
   {
      icon:<CiDumbbell />,
      label:"QUALITY EQUIPMENT",
      desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      btnDec:"DISCOVER MORE",
      btnIcon:<AiOutlineArrowRight />
   },
   {
      icon:<BsHeartPulse />,
      label:"HEALTH CARING",
      desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      btnDec:"DISCOVER MORE",
      btnIcon:<AiOutlineArrowRight />
   },
   {
      icon:<BiTimeFive />,
      label:"PERSONAL TRAINING",
      desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      btnDec:"DISCOVER MORE",
      btnIcon:<AiOutlineArrowRight />
   }
]

export const client = [
   {
      id:1,
      desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      img:client1,
      clientName:"Lionel Messi "
   },
   {
      id:2,
      desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      img:client2,
      clientName:"Cristiano Ronaldo"
   },
   {
      id:3,
      desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      img:client3,
      clientName:"Andres Iniesta"
   },
   {
      id:4,
      desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      img:client4,
      clientName:"Mesut Ozil"
   },
   {
      id:5,
      desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      img:client5,
      clientName:"Angel Di Maria"
   }
]

export const teamMembers =[
   {
      img:team1,
      role:"Creative director",
      name:"David Beckham"
   },
   {
      img:team2,
      role:"Fitness Trainer",
      name:"Zlatan Ibrahimovic"
   },
   {
      img:team3,
      role:"Personal Trainer",
      name:"Toni Kroos"
   },
]

export const blog = [
   {   
      img:blog1,
      date:"11",
      role:"Creative director",
      desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
   },
   {
      img:blog2,
      date:"21",
      role:"Creative director",
      desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
   }
]

export const footer = [
   {
      title:"COMPANY",
      footerLinks:[  
         {link:"Our Legacy"},
         {link:"Careers"},
         {link:"Testimonials"},
         {link:"Privacy Policy"}
      ]
   },
   {
      title:"OPEN HOUR",
      footerLinks:[
         {link:"Monday 5am-11pm"},
         {link:"Tuesday-Friday 5am-11pm"},
         {link:"Saturday 5am-6pm"},
         {link:"Sunday 5am-6pm"}
      ]
   },
   {
      title:"RESOURCES",
      footerLinks:[
         {link:"Lorem Ipsum"},
         {link:"Lorem Ipsum"},
         {link:"Lorem Ipsum"},
         {link:"Lorem Ipsum"}
      ]
   }
]