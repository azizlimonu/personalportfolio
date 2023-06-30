interface INavItem {
  label: string;
  page: string;
}

interface ISkillItem {
  id: number;
  name: string;
}

interface IProjectItem {
  name: string;
  description: string;
  techStack: string[];
  image: string;
  isImageDark: boolean;
  github: string;
  link: string;
}

interface ISlideUpProps {
  offset?: string;
  children?: ReactNode;
}

interface IExperienceItem {
  role: string;
  organization: string;
  location: string;
  period: string;
  description: string[];
  image: string;
}
