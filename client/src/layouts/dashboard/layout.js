import { useCallback, useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import { styled } from "@mui/material/styles";
import { SideNav } from "./side-nav";
import { TopNav } from "./top-nav";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";

const SIDE_NAV_WIDTH = 280;

const LayoutRoot = styled("div")(({ theme }) => ({
  display: "flex",
  flex: "1 1 auto",
  maxWidth: "100%",
  [theme.breakpoints.up("lg")]: {
    paddingLeft: SIDE_NAV_WIDTH,
  },
}));

const LayoutContainer = styled("div")({
  display: "flex",
  flex: "1 1 auto",
  flexDirection: "column",
  width: "100%",
});

export const Layout = (props) => {
  const { children } = props;
  const pathname = usePathname();
  const [openNav, setOpenNav] = useState(false);
  const [checked, setChecked] = useState(false);
  const { data: session, status } = useSession();

  const ignore = useRef(false);
  const router = useRouter();
  console.log("session", session, "status", status);

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (status === "loading") {
      return;
    }

    if (session?.error === "RefreshAccessTokenError") {
      signOut({ callbackUrl: "/authentication/login", redirect: true });
      router.replace("/authentication/login");
      setIsAuthenticated(false);
    } else if (!session?.token) {
      router.replace("/authentication/login");
      setIsAuthenticated(false);
    } else {
      if (router.route === "/authentication/login") {
        router.replace("/");
      }
      setIsAuthenticated(true);
    }

    setChecked(true);
  }, [session]);

  const handlePathnameChange = useCallback(() => {
    if (openNav) {
      setOpenNav(false);
    }
  }, [openNav]);

  useEffect(() => {
    handlePathnameChange();
  }, [pathname]);

  if (!checked) {
    return null;
  }

  if (!isAuthenticated) {
    router.replace("/authentication/login");
    return null;
  }

  return (
    <>
      <TopNav onNavOpen={() => setOpenNav(true)} />
      <SideNav onClose={() => setOpenNav(false)} open={openNav} />
      <LayoutRoot>
        <LayoutContainer>{children}</LayoutContainer>
      </LayoutRoot>
    </>
  );
};
