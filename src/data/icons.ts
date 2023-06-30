import { IconType } from 'react-icons';
import { AiOutlineHtml5, AiOutlineGithub } from 'react-icons/ai';
import { IoLogoCss3, IoLogoMarkdown } from 'react-icons/io';
import { TbBrandJavascript, TbBrandRedux,TbBrandTypescript, TbBrandReactNative } from 'react-icons/tb';
import { FaReact, FaNodeJs, FaAws, FaPaypal } from 'react-icons/fa';
import { SiNextdotjs, SiAuth0, SiMui, SiExpress, SiFirebase, SiJsonwebtokens, SiMongodb, SiPostgresql, SiPrisma, SiMongoose, SiVercel } from 'react-icons/si';
import { BiLogoTailwindCss, BiLogoDocker, BiLogoSass, BiLogoHeroku } from 'react-icons/bi';
import { BsStripe } from 'react-icons/bs';

interface Technology {
  name: string;
  icon: IconType;
  fillColor: string;
}

interface SkillCategory {
  category: string;
  technologies: Technology[];
}

export const skills: SkillCategory[] = [
  {
    category: 'Frontend',
    technologies: [
      { name: 'HTML', icon: AiOutlineHtml5, fillColor: '#E34C26' },
      { name: 'CSS', icon: IoLogoCss3, fillColor: '#1572b6' },
      { name: 'Javascript', icon: TbBrandJavascript, fillColor: '#f7df1e' },
      { name: 'React', icon: FaReact, fillColor: '#61dafb' },
      { name: 'Next JS', icon: SiNextdotjs, fillColor: '#fff' },
      { name: 'Typescript', icon: TbBrandTypescript, fillColor: '#3178c6' },
      { name: 'Material UI', icon: SiMui , fillColor: '#4150d6' },
      { name: 'Tailwind Css', icon: BiLogoTailwindCss, fillColor: '#5f6acc' },
      { name: 'SCSS', icon: BiLogoSass, fillColor: '#e276d7' },
      { name: 'MDX', icon: IoLogoMarkdown, fillColor: '#edebab' },
      { name: 'REDUX', icon: TbBrandRedux, fillColor: '#5275e8' },
      // Add more frontend technologies
    ],
  },
  {
    category: 'Backend',
    technologies: [
      { name: 'Node.js', icon: FaNodeJs, fillColor: '#2cdd00' },
      { name: 'Express.js', icon: SiExpress , fillColor: '#f2f2f2' },
      { name: 'Firebase', icon: SiFirebase , fillColor: '#fedb27' },
      { name: 'MongoDB', icon: SiMongodb, fillColor: '#9af860' },
      { name: 'Mongoose', icon: SiMongoose , fillColor: '#951c1c' },
      { name: 'Prisma', icon: SiPrisma, fillColor: '#1976d2' },
      { name: 'PostgreeSQL', icon: SiPostgresql, fillColor: '#1976d2' },
      { name: 'Jsonwebtoken', icon: SiJsonwebtokens, fillColor: '#901d1d' },
      { name: 'Auth0', icon: SiAuth0 , fillColor: '#e6e6e6' },
      { name: 'Stripe', icon: BsStripe , fillColor: '#2d96f7' },
      { name: 'Paypal', icon: FaPaypal, fillColor: '#312df2' },
      // Add more backend technologies
    ],
  },
  {
    category: 'DevOps & Others',
    technologies: [
      { name: 'Vercel', icon: SiVercel, fillColor: '#212121' },
      { name: 'Heroku', icon: BiLogoHeroku, fillColor: '#9a19ff' },
      { name: 'Github', icon: AiOutlineGithub, fillColor: '#232323' },
      // Add more DevOps technologies
    ],
  },
  {
    category: "Still Learning",
    technologies: [
      { name: "Docker", icon: BiLogoDocker, fillColor: '#2496ed' },
      { name: "AWS", icon: FaAws, fillColor: '#fdcb4b' },
      { name: "React Native", icon: TbBrandReactNative, fillColor: '#00d1ff' }
    ]
  }
];
