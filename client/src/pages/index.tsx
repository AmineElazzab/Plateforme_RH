import { HiOfficeBuilding } from "react-icons/hi";
import { BiDesktop } from "react-icons/bi";
import type { NextPage } from "next";
import NavBar from "~layouts/NavBar";
import { useState } from "react";
import { Tab } from "@headlessui/react";
import { cn, toCapitalized } from "~utils/utils";
import { getCurrentsUsers } from "~hooks/query-hooks/useCurrentUser";
import { dehydrate, QueryClient } from "@tanstack/react-query";

const Home: NextPage = () => {
  return (
    <>
      <NavBar
        title={"Dashboard"}
        navRight={() => <div className="flex items-center gap-4"></div>}
      />
    </>
  );
};

export default Home;

