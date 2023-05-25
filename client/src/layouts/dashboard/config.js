import ChartBarIcon from "@heroicons/react/24/outline/ChartBarIcon";
import ShoppingBagIcon from "@heroicons/react/24/outline/ShoppingBagIcon";
import UserIcon from "@heroicons/react/24/solid/UserIcon";
import UsersIcon from "@heroicons/react/24/outline/UsersIcon";
import SettingsIcon from "@heroicons/react/24/outline/Cog6ToothIcon";
import { PresentationChartLineIcon } from "@heroicons/react/24/outline";

import { SvgIcon } from "@mui/material";

export const items = [
  {
    title: "Dashboard",
    path: "/",
    icon: (
      <SvgIcon fontSize="small">
        <ChartBarIcon />
      </SvgIcon>
    ),
  },
  {
    title: "Projets",
    path: "/customers",
    icon: (
      <SvgIcon fontSize="small">
        <UsersIcon />
      </SvgIcon>
    ),
  },
  {
    title: "Taches",
    path: "/companies",
    icon: (
      <SvgIcon fontSize="small">
        <ShoppingBagIcon />
      </SvgIcon>
    ),
  },
  {
    title: "Rapports",
    path: "/account",
    icon: (
      <SvgIcon fontSize="small">
        <PresentationChartLineIcon />
      </SvgIcon>
    ),
  },
  {
    title: "Collaborateurs",
    path: "/settings",
    icon: (
      <SvgIcon fontSize="small">
        <UsersIcon />
      </SvgIcon>
    ),
  },
  {
    title: "Parametres",
    path: "/auth/login",
    icon: (
      <SvgIcon fontSize="small">
        <SettingsIcon />
      </SvgIcon>
    ),
  },
];
