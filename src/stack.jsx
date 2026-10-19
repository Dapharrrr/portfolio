import {
  FaReact,
  FaNodeJs
} from 'react-icons/fa';
import { TbBrandReactNative } from 'react-icons/tb';
import {
  SiNextdotjs,
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiGraphql,
  SiNestjs,
  SiDocker,
  SiGithubactions,
  SiTailwindcss
} from 'react-icons/si';

/* Les couches sont ordonnées de l'interface vers l'infrastructure : l'empilement
 * lui-même raconte la façon de concevoir, là où une liste à plat ne dit que
 * l'outillage. */
export const LAYERS = [
  {
    layer: 'Interface',
    caption: 'Ce que voit l’utilisateur',
    skills: [
      { name: 'React', icon: <FaReact size={18} /> },
      { name: 'React Native', icon: <TbBrandReactNative size={18} /> },
      { name: 'Next.js', icon: <SiNextdotjs size={18} /> },
      { name: 'TypeScript', icon: <SiTypescript size={18} /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss size={18} /> },
    ],
  },
  {
    layer: 'Services & API',
    caption: 'La logique métier',
    skills: [
      { name: 'Node.js', icon: <FaNodeJs size={18} /> },
      { name: 'Nest.js', icon: <SiNestjs size={18} /> },
      { name: 'GraphQL', icon: <SiGraphql size={18} /> },
    ],
  },
  {
    layer: 'Données',
    caption: 'Modélisation',
    skills: [
      { name: 'PostgreSQL', icon: <SiPostgresql size={18} /> },
      { name: 'MongoDB', icon: <SiMongodb size={18} /> },
    ],
  },
  {
    layer: 'Infrastructure',
    caption: 'Pratiqué en contexte de formation',
    skills: [
      { name: 'Docker', icon: <SiDocker size={18} /> },
      { name: 'GitHub Actions', icon: <SiGithubactions size={18} /> },
    ],
  },
];
