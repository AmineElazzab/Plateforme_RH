// import { useTheme } from "@mui/material/styles";
import Image from "next/image";
import logo from "../../public/assets/logos/logo-harmony.png";

export const Logo = () => {
  // const theme = useTheme();
  // const fillColor = theme.palette.primary.main;

  return <Image src={logo} width={143} height={44} alt="logo" />;
};
