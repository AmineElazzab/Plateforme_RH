import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Avatar, AvatarGroup } from "@mui/material";
// import user from "../../assets/img/user.png";
import Date from "../../assets/icons/Date.svg";
import Copie from "../../assets/icons/Copie.svg";
import Pagination from "@mui/material/Pagination";
import BasicModal from "../../components/Modal/AddUserModal";
import Filter from "../../components/Modal/Filter";

function Utilisateurs() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className="sm:ml-64 overflow-x-hidden overflow-y-auto fixed pl-4 py-4 mr-auto rounded-tl-3xl bg-[#F0F2F8] h-screen top-[112px] max-h-[calc(100vh-112px)] lg:overflow-y-scroll">
        <div className="relative ml-[38px] mx-[25px] -mb-[89px] mt-[40px] ">
          <div className="sticky top-0 ">
            <div className="flex items-center justify-between py-4">
              <p className="text-[#0B2585] font-sans font-bold text-4xl">
                Users
              </p>
              <div className="flex gap-[5px]">
                  
                <BasicModal />
                <Filter />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-evenly flex-wrap gap-[31px]">
          <div className="relative h-[225px] w-[341px]  top-[173px] bg-[#FFFFFF] shadow-md rounded-[10px] ">
            <h6 className="absolute pl-[100px] pt-[27px] pr-[13px] pb-[171px] font-sans not-italic font-semibold text-xl leading-7 text-[#2D2B26] w-auto">
              Mohamed Reda
            </h6>
            <h6 className="absolute pl-[100px] pt-[56px] pr-[13px] pb-[150px] font-sans not-italic font-thin text-sm leading-5 text-gray-700 ">
              UI UX Designer
            </h6>
            <div className="absolute pl-[18px] pt-[16px] pr-[255px] pb-[141px] ">
              <Avatar alt="Remy Sharp" src="" sx={{ width: 68, height: 68 }} />
            </div>
            <div className="relative pl-[312px] pt-[36px] pr-[25px] pb-[169px] ">
              <MoreVertIcon />
            </div>
            <h6 className="absolute left-[18px] top-[108px] right-[100] bottom-[98px] font-sans not-italic font-thin text-sm leading-5 text-gray-700">
              Skills
            </h6>
            <h6 className="absolute left-[18px] top-[127px] right-[13px] bottom-[76px] font-sans not-italic font-semibold text-base leading-7 text-[#2D2B26] w-auto">
              Figma | PS | Ulistrator | XD
            </h6>
            <div className="">
              <div className="flex absolute h-[16px] pl-[16px] pr-[13px] bottom-[41px] top-[165px]  ">
                <h6 className="relative font-sans leading-[16px] text-[12px] w-[159px] font-semibold text-[#2D2B26]">
                  m.reda@harmony.ma
                </h6>
              </div>
              <div className="flex justify-center items-center absolute left-[309px] right-[16px] bottom-[38px] top-[160px]">
                <img src={Copie} alt="" className="w-[16px] h-[19px]" />
              </div>
              <h6 className="absolute left-[16px] top-[190px] bottom-[16px] font-sans not-italic font-thin text-sm leading-5 text-gray-700">
                06 69 58 54 21
              </h6>
            </div>
          </div>

          <div className="relative h-[225px] w-[341px]  top-[173px] bg-[#FFFFFF] shadow-md rounded-[10px] ">
            <h6 className="absolute pl-[100px] pt-[27px] pr-[13px] pb-[171px] font-sans not-italic font-semibold text-xl leading-7 text-[#2D2B26] w-auto">
              Mohamed Reda
            </h6>
            <h6 className="absolute pl-[100px] pt-[56px] pr-[13px] pb-[150px] font-sans not-italic font-thin text-sm leading-5 text-gray-700 ">
              UI UX Designer
            </h6>
            <div className="absolute pl-[18px] pt-[16px] pr-[255px] pb-[141px] ">
              <Avatar alt="Remy Sharp" src="" sx={{ width: 68, height: 68 }} />
            </div>
            <div className="relative pl-[312px] pt-[36px] pr-[25px] pb-[169px] ">
              <MoreVertIcon />
            </div>
            <h6 className="absolute left-[18px] top-[108px] right-[100] bottom-[98px] font-sans not-italic font-thin text-sm leading-5 text-gray-700">
              Skills
            </h6>
            <h6 className="absolute left-[18px] top-[127px] right-[13px] bottom-[76px] font-sans not-italic font-semibold text-base leading-7 text-[#2D2B26] w-auto">
              Figma | PS | Ulistrator | XD
            </h6>
            <div className="">
              <div className="flex absolute h-[16px] pl-[16px] pr-[13px] bottom-[41px] top-[165px]  ">
                <h6 className="relative font-sans leading-[16px] text-[12px] w-[159px] font-semibold text-[#2D2B26]">
                  m.reda@harmony.ma
                </h6>
              </div>
              <div className="flex justify-center items-center absolute left-[309px] right-[16px] bottom-[38px] top-[160px]">
                <img src={Copie} alt="" className="w-[16px] h-[19px]" />
              </div>
              <h6 className="absolute left-[16px] top-[190px] bottom-[16px] font-sans not-italic font-thin text-sm leading-5 text-gray-700">
                06 69 58 54 21
              </h6>
            </div>
          </div>

          <div className="relative h-[225px] w-[341px]  top-[173px] bg-[#FFFFFF] shadow-md rounded-[10px] ">
            <h6 className="absolute pl-[100px] pt-[27px] pr-[13px] pb-[171px] font-sans not-italic font-semibold text-xl leading-7 text-[#2D2B26] w-auto">
              Mohamed Reda
            </h6>
            <h6 className="absolute pl-[100px] pt-[56px] pr-[13px] pb-[150px] font-sans not-italic font-thin text-sm leading-5 text-gray-700 ">
              UI UX Designer
            </h6>
            <div className="absolute pl-[18px] pt-[16px] pr-[255px] pb-[141px] ">
              <Avatar alt="Remy Sharp" src="" sx={{ width: 68, height: 68 }} />
            </div>
            <div className="relative pl-[312px] pt-[36px] pr-[25px] pb-[169px] ">
              <MoreVertIcon />
            </div>
            <h6 className="absolute left-[18px] top-[108px] right-[100] bottom-[98px] font-sans not-italic font-thin text-sm leading-5 text-gray-700">
              Skills
            </h6>
            <h6 className="absolute left-[18px] top-[127px] right-[13px] bottom-[76px] font-sans not-italic font-semibold text-base leading-7 text-[#2D2B26] w-auto">
              Figma | PS | Ulistrator | XD
            </h6>
            <div className="">
              <div className="flex absolute h-[16px] pl-[16px] pr-[13px] bottom-[41px] top-[165px]  ">
                <h6 className="relative font-sans leading-[16px] text-[12px] w-[159px] font-semibold text-[#2D2B26]">
                  m.reda@harmony.ma
                </h6>
              </div>
              <div className="flex justify-center items-center absolute left-[309px] right-[16px] bottom-[38px] top-[160px]">
                <img src={Copie} alt="" className="w-[16px] h-[19px]" />
              </div>
              <h6 className="absolute left-[16px] top-[190px] bottom-[16px] font-sans not-italic font-thin text-sm leading-5 text-gray-700">
                06 69 58 54 21
              </h6>
            </div>
          </div>

          <div className="relative h-[225px] w-[341px]  top-[173px] bg-[#FFFFFF] shadow-md rounded-[10px] ">
            <h6 className="absolute pl-[100px] pt-[27px] pr-[13px] pb-[171px] font-sans not-italic font-semibold text-xl leading-7 text-[#2D2B26] w-auto">
              Mohamed Reda
            </h6>
            <h6 className="absolute pl-[100px] pt-[56px] pr-[13px] pb-[150px] font-sans not-italic font-thin text-sm leading-5 text-gray-700 ">
              UI UX Designer
            </h6>
            <div className="absolute pl-[18px] pt-[16px] pr-[255px] pb-[141px] ">
              <Avatar alt="Remy Sharp" src="" sx={{ width: 68, height: 68 }} />
            </div>
            <div className="relative pl-[312px] pt-[36px] pr-[25px] pb-[169px] ">
              <MoreVertIcon />
            </div>
            <h6 className="absolute left-[18px] top-[108px] right-[100] bottom-[98px] font-sans not-italic font-thin text-sm leading-5 text-gray-700">
              Skills
            </h6>
            <h6 className="absolute left-[18px] top-[127px] right-[13px] bottom-[76px] font-sans not-italic font-semibold text-base leading-7 text-[#2D2B26] w-auto">
              Figma | PS | Ulistrator | XD
            </h6>
            <div className="">
              <div className="flex absolute h-[16px] pl-[16px] pr-[13px] bottom-[41px] top-[165px]  ">
                <h6 className="relative font-sans leading-[16px] text-[12px] w-[159px] font-semibold text-[#2D2B26]">
                  m.reda@harmony.ma
                </h6>
              </div>
              <div className="flex justify-center items-center absolute left-[309px] right-[16px] bottom-[38px] top-[160px]">
                <img src={Copie} alt="" className="w-[16px] h-[19px]" />
              </div>
              <h6 className="absolute left-[16px] top-[190px] bottom-[16px] font-sans not-italic font-thin text-sm leading-5 text-gray-700">
                06 69 58 54 21
              </h6>
            </div>
          </div>

          <div className="relative h-[225px] w-[341px]  top-[173px] bg-[#FFFFFF] shadow-md rounded-[10px] ">
            <h6 className="absolute pl-[100px] pt-[27px] pr-[13px] pb-[171px] font-sans not-italic font-semibold text-xl leading-7 text-[#2D2B26] w-auto">
              Mohamed Reda
            </h6>
            <h6 className="absolute pl-[100px] pt-[56px] pr-[13px] pb-[150px] font-sans not-italic font-thin text-sm leading-5 text-gray-700 ">
              UI UX Designer
            </h6>
            <div className="absolute pl-[18px] pt-[16px] pr-[255px] pb-[141px] ">
              <Avatar alt="Remy Sharp" src="" sx={{ width: 68, height: 68 }} />
            </div>
            <div className="relative pl-[312px] pt-[36px] pr-[25px] pb-[169px] ">
              <MoreVertIcon />
            </div>
            <h6 className="absolute left-[18px] top-[108px] right-[100] bottom-[98px] font-sans not-italic font-thin text-sm leading-5 text-gray-700">
              Skills
            </h6>
            <h6 className="absolute left-[18px] top-[127px] right-[13px] bottom-[76px] font-sans not-italic font-semibold text-base leading-7 text-[#2D2B26] w-auto">
              Figma | PS | Ulistrator | XD
            </h6>
            <div className="">
              <div className="flex absolute h-[16px] pl-[16px] pr-[13px] bottom-[41px] top-[165px]  ">
                <h6 className="relative font-sans leading-[16px] text-[12px] w-[159px] font-semibold text-[#2D2B26]">
                  m.reda@harmony.ma
                </h6>
              </div>
              <div className="flex justify-center items-center absolute left-[309px] right-[16px] bottom-[38px] top-[160px]">
                <img src={Copie} alt="" className="w-[16px] h-[19px]" />
              </div>
              <h6 className="absolute left-[16px] top-[190px] bottom-[16px] font-sans not-italic font-thin text-sm leading-5 text-gray-700">
                06 69 58 54 21
              </h6>
            </div>
          </div>

          <div className="relative h-[225px] w-[341px]  top-[173px] bg-[#FFFFFF] shadow-md rounded-[10px] ">
            <h6 className="absolute pl-[100px] pt-[27px] pr-[13px] pb-[171px] font-sans not-italic font-semibold text-xl leading-7 text-[#2D2B26] w-auto">
              Mohamed Reda
            </h6>
            <h6 className="absolute pl-[100px] pt-[56px] pr-[13px] pb-[150px] font-sans not-italic font-thin text-sm leading-5 text-gray-700 ">
              UI UX Designer
            </h6>
            <div className="absolute pl-[18px] pt-[16px] pr-[255px] pb-[141px] ">
              <Avatar alt="Remy Sharp" src="" sx={{ width: 68, height: 68 }} />
            </div>
            <div className="relative pl-[312px] pt-[36px] pr-[25px] pb-[169px] ">
              <MoreVertIcon />
            </div>
            <h6 className="absolute left-[18px] top-[108px] right-[100] bottom-[98px] font-sans not-italic font-thin text-sm leading-5 text-gray-700">
              Skills
            </h6>
            <h6 className="absolute left-[18px] top-[127px] right-[13px] bottom-[76px] font-sans not-italic font-semibold text-base leading-7 text-[#2D2B26] w-auto">
              Figma | PS | Ulistrator | XD
            </h6>
            <div className="">
              <div className="flex absolute h-[16px] pl-[16px] pr-[13px] bottom-[41px] top-[165px]  ">
                <h6 className="relative font-sans leading-[16px] text-[12px] w-[159px] font-semibold text-[#2D2B26]">
                  m.reda@harmony.ma
                </h6>
              </div>
              <div className="flex justify-center items-center absolute left-[309px] right-[16px] bottom-[38px] top-[160px]">
                <img src={Copie} alt="" className="w-[16px] h-[19px]" />
              </div>
              <h6 className="absolute left-[16px] top-[190px] bottom-[16px] font-sans not-italic font-thin text-sm leading-5 text-gray-700">
                06 69 58 54 21
              </h6>
            </div>
          </div>

          <div className="relative h-[225px] w-[341px]  top-[173px] bg-[#FFFFFF] shadow-md rounded-[10px] ">
            <h6 className="absolute pl-[100px] pt-[27px] pr-[13px] pb-[171px] font-sans not-italic font-semibold text-xl leading-7 text-[#2D2B26] w-auto">
              Mohamed Reda
            </h6>
            <h6 className="absolute pl-[100px] pt-[56px] pr-[13px] pb-[150px] font-sans not-italic font-thin text-sm leading-5 text-gray-700 ">
              UI UX Designer
            </h6>
            <div className="absolute pl-[18px] pt-[16px] pr-[255px] pb-[141px] ">
              <Avatar alt="Remy Sharp" src="" sx={{ width: 68, height: 68 }} />
            </div>
            <div className="relative pl-[312px] pt-[36px] pr-[25px] pb-[169px] ">
              <MoreVertIcon />
            </div>
            <h6 className="absolute left-[18px] top-[108px] right-[100] bottom-[98px] font-sans not-italic font-thin text-sm leading-5 text-gray-700">
              Skills
            </h6>
            <h6 className="absolute left-[18px] top-[127px] right-[13px] bottom-[76px] font-sans not-italic font-semibold text-base leading-7 text-[#2D2B26] w-auto">
              Figma | PS | Ulistrator | XD
            </h6>
            <div className="">
              <div className="flex absolute h-[16px] pl-[16px] pr-[13px] bottom-[41px] top-[165px]  ">
                <h6 className="relative font-sans leading-[16px] text-[12px] w-[159px] font-semibold text-[#2D2B26]">
                  m.reda@harmony.ma
                </h6>
              </div>
              <div className="flex justify-center items-center absolute left-[309px] right-[16px] bottom-[38px] top-[160px]">
                <img src={Copie} alt="" className="w-[16px] h-[19px]" />
              </div>
              <h6 className="absolute left-[16px] top-[190px] bottom-[16px] font-sans not-italic font-thin text-sm leading-5 text-gray-700">
                06 69 58 54 21
              </h6>
            </div>
          </div>

          <div className="relative h-[225px] w-[341px]  top-[173px] bg-[#FFFFFF] shadow-md rounded-[10px] ">
            <h6 className="absolute pl-[100px] pt-[27px] pr-[13px] pb-[171px] font-sans not-italic font-semibold text-xl leading-7 text-[#2D2B26] w-auto">
              Mohamed Reda
            </h6>
            <h6 className="absolute pl-[100px] pt-[56px] pr-[13px] pb-[150px] font-sans not-italic font-thin text-sm leading-5 text-gray-700 ">
              UI UX Designer
            </h6>
            <div className="absolute pl-[18px] pt-[16px] pr-[255px] pb-[141px] ">
              <Avatar alt="Remy Sharp" src="" sx={{ width: 68, height: 68 }} />
            </div>
            <div className="relative pl-[312px] pt-[36px] pr-[25px] pb-[169px] ">
              <MoreVertIcon />
            </div>
            <h6 className="absolute left-[18px] top-[108px] right-[100] bottom-[98px] font-sans not-italic font-thin text-sm leading-5 text-gray-700">
              Skills
            </h6>
            <h6 className="absolute left-[18px] top-[127px] right-[13px] bottom-[76px] font-sans not-italic font-semibold text-base leading-7 text-[#2D2B26] w-auto">
              Figma | PS | Ulistrator | XD
            </h6>
            <div className="">
              <div className="flex absolute h-[16px] pl-[16px] pr-[13px] bottom-[41px] top-[165px]  ">
                <h6 className="relative font-sans leading-[16px] text-[12px] w-[159px] font-semibold text-[#2D2B26]">
                  m.reda@harmony.ma
                </h6>
              </div>
              <div className="flex justify-center items-center absolute left-[309px] right-[16px] bottom-[38px] top-[160px]">
                <img src={Copie} alt="" className="w-[16px] h-[19px]" />
              </div>
              <h6 className="absolute left-[16px] top-[190px] bottom-[16px] font-sans not-italic font-thin text-sm leading-5 text-gray-700">
                06 69 58 54 21
              </h6>
            </div>
          </div>
        </div>
      </div>
      {/* <Pagination count={10} variant="outlined" shape="rounded" /> */}
    </div>
  );
}

export default Utilisateurs;
