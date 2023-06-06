import {HiOutlineUserGroup} from 'react-icons/hi'
import {TbHome2, TbBriefcase, TbChecklist, TbGraph, TbSettings} from 'react-icons/tb';
export const SINGLE_NAVIGATIONS = [
  {
    name: 'Dashboard',
    href: 'dashboard',
    icon: TbHome2,
    show: true,
  },
  {
    name: 'Projets',
    href: 'projects',
    icon: TbBriefcase,
    show: true,
  },
  {
    name: 'Tâches',
    href: 'tasks',
    icon: TbChecklist,
    show: true,
  },
];

export const MAIN_NAVIGATIONS = [
  {
    name: 'Rapports',
    href: 'reports',
    icon: TbGraph,
    show: true,

    // children: [

    // ],
  },
  {
    name: 'Collaborateurs',
    href: 'collaborators',
    icon: HiOutlineUserGroup,
    show: true,

    // children: [
      
    // ],
  },
 
];

export const UTILITY_NAVIGATIONS = [

  {
    name: 'Paramètres',
    href: 'settings',
    icon: TbSettings,
    show: true,
  },


];

export const navigation = [
  {
    name: 'Dashboard',
    href: 'dashboard',
    icon: TbHome2,
    show: true,
  },
  {
    name: 'Projets',
    href: 'projects',
    icon: TbBriefcase,
    show: true,
  },
  {
    name: 'Tâches',
    href: 'tasks',
    icon: TbChecklist,
    show: true,
  },

  {
    name: 'Rapports',
    href: 'reports',
    icon: TbGraph,
    show: true,

    children: [

    ],
  },
  {
    name: 'Collaborateurs',
    href: 'collaborators',
    icon: HiOutlineUserGroup,
    show: true,

    children: [
      
    ],
  },

  {
    name: 'Paramètres',
    href: 'settings',
    icon: TbSettings,
    show: true,
  },


];