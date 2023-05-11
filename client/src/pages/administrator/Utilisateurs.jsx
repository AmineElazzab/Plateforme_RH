import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Avatar, AvatarGroup } from "@mui/material";
// import user from "../../assets/img/user.png";
import Date from "../../assets/icons/Date.svg";

function Utilisateurs() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <div className=" sm:ml-64 overflow-x-hidden">
        <div className="pl-4 pt-4 pb-4 rounded-tl-3xl bg-[#F0F2F8] h-screen">
          <div className=" relative ml-[38px] mt-[146px]">
            <p className="text-[#0B2585] font-sans font-bold text-4xl leading-[48px]">
              Projects
            </p>
          </div>
          <div className="flex flex-row flex-wrap gap-[31px]">
       
            <div className="relative h-[207px] w-[351px] left-[38px] top-[173px] bg-[#FFFFFF] shadow-md rounded-[10px] ">
              <h6 className="absolute left-[26px] top-[26px] right-[145px] bottom-[158px] font-sans text-[18px] leading-[24px] font-bold text-[#2D2B26]">
                Design SAM website
              </h6>
              <div className="absolute pt-[33px] pr-[347px] pb-[33px] ">
                <svg
                  width="4"
                  height="141"
                  viewBox="0 0 4 141"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg%22%3E">
                  <rect width="4" height="141" fill="#0B2585" />
                </svg>
              </div>
              <div className="absolute pl-[26px] pt-[97px] pr-[287px] pb-[72px] ">
                <Avatar alt="Remy Sharp" src="" />
              </div>
              <div className="relative pl-[329px] pt-[15px] pr-[17px] pb-[173px] ">
                <MoreVertIcon />
              </div>

              <div className="">
                <div className="flex absolute h-[16px] pl-[26px] pr-[138px] bottom-[24px] top-[166px]  ">
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

            <div className="relative h-[207px] w-[351px] left-[38px] top-[173px] bg-[#FFFFFF] shadow-md rounded-[10px] ">
              <h6 className="absolute left-[26px] top-[26px] right-[145px] bottom-[158px] font-sans text-[18px] leading-[24px] font-bold text-[#2D2B26]">
                UI UX (SAM Mobile App)
              </h6>
              <div className="absolute pt-[33px] pr-[347px] pb-[33px] ">
                <svg
                  width="4"
                  height="141"
                  viewBox="0 0 4 141"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg%22%3E">
                  <rect width="4" height="141" fill="#0B2585" />
                </svg>
              </div>
              <div className="absolute pl-[26px] pt-[97px] pr-[287px] pb-[72px] ">
                <Avatar alt="Remy Sharp" src="" />
              </div>
              <div className="relative pl-[329px] pt-[15px] pr-[17px] pb-[173px] ">
                <MoreVertIcon />
              </div>

              <div className="">
                <div className="flex absolute h-[16px] pl-[26px] pr-[138px] bottom-[24px] top-[166px]  ">
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

            <div className="relative h-[207px] w-[351px] left-[38px] top-[173px] bg-[#FFFFFF] shadow-md rounded-[10px] ">
              <h6 className="absolute left-[26px] top-[26px] right-[145px] bottom-[158px] font-sans text-[18px] leading-[24px] font-bold text-[#2D2B26]">
                Development de website SAM project
              </h6>
              <div className="absolute pt-[33px] pr-[347px] pb-[33px] ">
                <svg
                  width="4"
                  height="141"
                  viewBox="0 0 4 141"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg%22%3E">
                  <rect width="4" height="141" fill="#0B2585" />
                </svg>
              </div>
              <div className="absolute pl-[26px] pt-[97px] pr-[287px] pb-[72px] ">
                <Avatar alt="Remy Sharp" src="" />
              </div>
              <div className="relative pl-[329px] pt-[15px] pr-[17px] pb-[173px] ">
                <MoreVertIcon />
              </div>

              <div className="">
                <div className="flex absolute h-[16px] pl-[26px] pr-[138px] bottom-[24px] top-[166px]  ">
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

            <div className="relative h-[207px] w-[351px] left-[38px] top-[173px] bg-[#FFFFFF] shadow-md rounded-[10px] ">
              <h6 className="absolute left-[26px] top-[26px] right-[145px] bottom-[158px] font-sans text-[18px] leading-[24px] font-bold text-[#2D2B26]">
                Design SAM website
              </h6>
              <div className="absolute pt-[33px] pr-[347px] pb-[33px] ">
                <svg
                  width="4"
                  height="141"
                  viewBox="0 0 4 141"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg%22%3E">
                  <rect width="4" height="141" fill="#0B2585" />
                </svg>
              </div>
              <div className="absolute pl-[26px] pt-[97px] pr-[287px] pb-[72px] ">
                <Avatar alt="Remy Sharp" src="" />
              </div>
              <div className="relative pl-[329px] pt-[15px] pr-[17px] pb-[173px] ">
                <MoreVertIcon />
              </div>

              <div className="">
                <div className="flex absolute h-[16px] pl-[26px] pr-[138px] bottom-[24px] top-[166px]  ">
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

            <div className="relative h-[207px] w-[351px] left-[38px] top-[173px] bg-[#FFFFFF] shadow-md rounded-[10px] ">
              <h6 className="absolute left-[26px] top-[26px] right-[145px] bottom-[158px] font-sans text-[18px] leading-[24px] font-bold text-[#2D2B26]">
                UI UX (SAM Mobile App)
              </h6>
              <div className="absolute pt-[33px] pr-[347px] pb-[33px] ">
                <svg
                  width="4"
                  height="141"
                  viewBox="0 0 4 141"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg%22%3E">
                  <rect width="4" height="141" fill="#0B2585" />
                </svg>
              </div>
              <div className="absolute pl-[26px] pt-[97px] pr-[287px] pb-[72px] ">
                <AvatarGroup max={4}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                  <Avatar
                    alt="Travis Howard"
                    src="/static/images/avatar/2.jpg"
                  />
                  <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                  <Avatar
                    alt="Agnes Walker"
                    src="/static/images/avatar/4.jpg"
                  />
                  <Avatar
                    alt="Trevor Henderson"
                    src="/static/images/avatar/5.jpg"
                  />
                </AvatarGroup>
              </div>
              <div className="relative pl-[329px] pt-[15px] pr-[17px] pb-[173px] ">
                <MoreVertIcon />
              </div>

              <div className="">
                <div className="flex absolute h-[16px] pl-[26px] pr-[138px] bottom-[24px] top-[166px]  ">
                  <img src={Date} alt="date" />
                  <h6 className="relative font-sans leading-[16px] text-[12px] left-[13px] w-[159px] font-semibold text-[#2D2B26]">
                    12 Sept 2023 | 23 Sept 2023
                  </h6>
                </div>
                <div className="flex justify-center items-center absolute left-[295px] right-[10px] bottom-[13px] top-[170px] w-[46px] h-[24px] bg-[#F8A300] rounded-[4px]">
                  <h6 className="text-[#FFFFFF] leading-[12px] font-bold text-[10px] font-[]">
                    50%
                  </h6>
                </div>
              </div>
            </div>

            <div className="relative h-[207px] w-[351px] left-[38px] top-[173px] bg-[#FFFFFF] shadow-md rounded-[10px] ">
              <h6 className="absolute left-[26px] top-[26px] right-[145px] bottom-[158px] font-sans text-[18px] leading-[24px] font-bold text-[#2D2B26]">
                Design SAM website
              </h6>
              <div className="absolute pt-[33px] pr-[347px] pb-[33px] ">
                <svg
                  width="4"
                  height="141"
                  viewBox="0 0 4 141"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg%22%3E">
                  <rect width="4" height="141" fill="#0B2585" />
                </svg>
              </div>
              <div className="absolute pl-[26px] pt-[97px] pr-[287px] pb-[72px] ">
                <Avatar alt="Remy Sharp" src="" />
              </div>
              <div className="relative pl-[329px] pt-[15px] pr-[17px] pb-[173px] ">
                <MoreVertIcon />
              </div>

              <div className="">
                <div className="flex absolute h-[16px] pl-[26px] pr-[138px] bottom-[24px] top-[166px]  ">
                  <img src={Date} alt="date" />
                  <h6 className="relative font-sans leading-[16px] text-[12px] left-[13px] w-[159px] font-semibold text-[#2D2B26]">
                    12 Sept 2023 | 23 Sept 2023
                  </h6>
                </div>
                <div className="flex justify-center items-center absolute left-[295px] right-[10px] bottom-[13px] top-[170px] w-[46px] h-[24px] bg-[#02A730] rounded-[4px]">
                  <h6 className="text-[#FFFFFF] leading-[12px] font-bold text-[10px] font-[]">
                    98%
                  </h6>
                </div>
              </div>
            </div>

            <div className="relative h-[207px] w-[351px] left-[38px] top-[173px] bg-[#FFFFFF] shadow-md rounded-[10px] ">
              <h6 className="absolute left-[26px] top-[26px] right-[145px] bottom-[158px] font-sans text-[18px] leading-[24px] font-bold text-[#2D2B26]">
                Design SAM website
              </h6>
              <div className="absolute pt-[33px] pr-[347px] pb-[33px] ">
                <svg
                  width="4"
                  height="141"
                  viewBox="0 0 4 141"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg%22%3E">
                  <rect width="4" height="141" fill="#0B2585" />
                </svg>
              </div>
              <div className="absolute pl-[26px] pt-[97px] pr-[287px] pb-[72px] ">
                <AvatarGroup max={2}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                  <Avatar
                    alt="Travis Howard"
                    src="/static/images/avatar/2.jpg"
                  />
                  <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                  <Avatar
                    alt="Agnes Walker"
                    src="/static/images/avatar/4.jpg"
                  />
                  <Avatar
                    alt="Trevor Henderson"
                    src="/static/images/avatar/5.jpg"
                  />
                </AvatarGroup>{" "}
              </div>
              <div className="relative pl-[329px] pt-[15px] pr-[17px] pb-[173px] ">
                <MoreVertIcon />
              </div>

              <div className="">
                <div className="flex absolute h-[16px] pl-[26px] pr-[138px] bottom-[24px] top-[166px]  ">
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

            <div className="relative h-[207px] w-[351px] left-[38px] top-[173px] bg-[#FFFFFF] shadow-md rounded-[10px] ">
              <h6 className="absolute left-[26px] top-[26px] right-[145px] bottom-[158px] font-sans text-[18px] leading-[24px] font-bold text-[#2D2B26]">
                Development de website SAM project
              </h6>
              <div className="absolute pt-[33px] pr-[347px] pb-[33px] ">
                <svg
                  width="4"
                  height="141"
                  viewBox="0 0 4 141"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg%22%3E">
                  <rect width="4" height="141" fill="#0B2585" />
                </svg>
              </div>
              <div className="absolute pl-[26px] pt-[97px] pr-[287px] pb-[72px] ">
                <AvatarGroup max={5}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                  <Avatar
                    alt="Travis Howard"
                    src="/static/images/avatar/2.jpg"
                  />
                  <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                  <Avatar
                    alt="Agnes Walker"
                    src="/static/images/avatar/4.jpg"
                  />
                  <Avatar
                    alt="Trevor Henderson"
                    src="/static/images/avatar/5.jpg"
                  />
                </AvatarGroup>{" "}
              </div>
              <div className="relative pl-[329px] pt-[15px] pr-[17px] pb-[173px] ">
                <MoreVertIcon />
              </div>

              <div className="">
                <div className="flex absolute h-[16px] pl-[26px] pr-[138px] bottom-[24px] top-[166px]  ">
                  <img src={Date} alt="date" />
                  <h6 className="relative font-sans leading-[16px] text-[12px] left-[13px] w-[159px] font-semibold text-[#2D2B26]">
                    12 Sept 2023 | 23 Sept 2023
                  </h6>
                </div>
                <div className="flex justify-center items-center absolute left-[295px] right-[10px] bottom-[13px] top-[170px] w-[46px] h-[24px] bg-[#02A730] rounded-[4px]">
                  <h6 className="text-[#FFFFFF] leading-[12px] font-bold text-[10px] font-[]">
                    100%
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Utilisateurs;
