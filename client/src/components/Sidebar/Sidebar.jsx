import React from "react";
import Accueil from "../../assets/icons/Accueil.svg";
import Projects from "../../assets/icons/Projects.svg";
import Tasks from "../../assets/icons/Tasks.svg";
import Repports from "../../assets/icons/Repports.svg";
import Utilisateurs from "../../assets/icons/Utilisateurs.svg";
import Parametres from "../../assets/icons/Parametres.svg";

function Sidebar() {
  return (
    <div>
      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-full transition-transform -translate-x-full bg-white  sm:translate-x-0 "
        aria-label="Sidebar">
        <div className=" h-screen px-3 pb-4 overflow-y-auto bg-white mt-[160px]">
          <ul className="space-y-2 font-medium">
            <li>
              <a
                href="#"
                className="flex items-center p-2 not-italic rounded-lg font-semibold text-sm leading-5 mt-[39px] ml-[30px] hover:rounded-lg hover:bg-blue-700 hover:duration-300 hover:text-white">
                <img
                  className="w-[24px] h-[24px] ml-4"
                  src={Accueil}
                  alt="Accueil"
                />
                <span className="ml-[25px]">Accueil</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 not-italic  rounded-lg font-semibold text-sm leading-5 mt-[39px] ml-[30px] hover:rounded-lg hover:bg-blue-700 hover:duration-300 hover:text-white">
                <img
                  className="w-[24px] h-[24px] ml-4  "
                  src={Projects}
                  alt="Projects"
                />
                <span className="ml-[25px]">Projects</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 not-italic rounded-lg font-semibold text-sm leading-5 mt-[39px] ml-[30px] hover:rounded-lg hover:bg-blue-700 hover:duration-300 hover:text-white ">
                <img
                  className="w-[24px] h-[24px] ml-4"
                  src={Tasks}
                  alt="Tasks"
                />
                <span className="ml-[25px]">Tasks</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 not-italic rounded-lg font-semibold text-sm leading-5 mt-[39px] ml-[30px] hover:rounded-lg hover:bg-blue-700 hover:duration-300 hover:text-white">
                <img
                  className="w-[24px] h-[24px] ml-4"
                  src={Repports}
                  alt="Repports"
                />
                <span className="ml-[25px]">Repports</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 not-italic rounded-lg font-semibold text-sm leading-5 mt-[39px] ml-[30px] hover:rounded-lg hover:bg-blue-700 hover:duration-300 hover:text-white">
                <img
                  className="w-[24px] h-[24px] ml-4"
                  src={Utilisateurs}
                  alt="Utilisateurs"
                />
                <span className="ml-[25px]">Utilisateurs</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 not-italic rounded-lg font-semibold text-sm leading-5 mt-[39px] ml-[30px] hover:rounded-lg hover:bg-blue-700 hover:duration-300 hover:text-white">
                <img
                  className="w-[24px] h-[24px] ml-4 "
                  src={Parametres}
                  alt="Parametres"
                />
                <span className="ml-[25px]">Paramètres </span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}

export default Sidebar;
