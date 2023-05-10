import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Avatar } from "@mui/material";
// import user from "../../assets/img/user.png";
// import Date from "../../assets/icons/date.svg";

function Utilisateurs() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <div className=" sm:ml-64 ">
        <div className="pl-4 pt-4 pb-4 rounded-tl-3xl mt-[106px] bg-[#F0F2F8]">
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="left-[38px] top-[200px] h-[48px] w-[142px]">
              <p className=" text-[#0B2585] font-sans font-bold text-4xl leading-[48px]">
                Projects
              </p>
            </div>
            <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
            </div>
            <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="relative h-[207px] w-[351px] left-[38px] top-[173px] bg-[#FFFFFF] shadow-md rounded-[10px] ">
              <h6 className="absolute left-[26px] top-[26px] right-[145px] bottom-[158px] font-sans text-[18px] leading-[24px] font-bold text-[#2D2B26]">
                Design SAM website
              </h6>
              <div className="absolute top-[33px] right-[347px] bottom-[33px] ">
                <svg
                  width="4"
                  height="141"
                  viewBox="0 0 4 141"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg%22%3E"
                >
                  <rect width="4" height="141" fill="#0B2585" />
                </svg>
              </div>
              <div className="absolute left-[26px] top-[97px] right-[287px] bottom-[72px] ">
                <Avatar alt="Remy Sharp" src="" />
              </div>
              <div className="relative left-[329px] top-[15px] right-[17px] bottom-[173px] ">
                <MoreVertIcon />
              </div>

              <div className="">
                <div className="flex  absolute h-[16px] left-[26px] right-[138px] bottom-[24px] top-[166px]  ">
                  <img src={Date} alt="date" />
                  <h6 className="relative font-sans leading-[16px] text-[12px] left-[13px] w-[159px] font-semibold text-[#2D2B26]">
                    12 Sept 2023 | 23 Sept 2023
                  </h6>
                </div>
                <div className="flex justify-center items-center absolute left-[295px] right-[10px] bottom-[13px] top-[170px] w-[46px] h-[24px] bg-[#FF0000] rounded-[4px]">
                  <h6 className="text-[#FFFFFF] leading-[12px] font-bold text-[10px] font-[]">
                    21%
                  </h6>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
            </div>
            <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Utilisateurs;
