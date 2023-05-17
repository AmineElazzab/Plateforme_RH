import React, { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Avatar, AvatarGroup } from "@mui/material";
// import user from "../../assets/img/user.png";
import Date from "../../assets/icons/Date.svg";
import BasicModal from "../../components/Modal/AddProjectModal";
import Filter from "../../components/Modal/Filter";
import { getProjects } from "../../api/projects";
import { useQuery } from "@tanstack/react-query";

function Projects() {
  const getProjectsQuery = useQuery({
    queryKey: ["projects"],
    queryFn: getProjects,
  });

  function stringToColor(string) {
    let hash = 0;
    let i;

    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }

    return color;
  }

  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  }

  return (
    <>
      <Navbar />
      <Sidebar />

      <div
        className={`sm:ml-64 ${
          getProjectsQuery.status === "loading"
            ? "w-full sm:ml-32"
            : "2xl:w-[87%]"
        } overflow-x-hidden overflow-y-auto fixed pl-4 py-4 mr-auto rounded-tl-3xl bg-[#F0F2F8] h-screen top-[112px] max-h-[calc(100vh-112px)] lg:overflow-y-scroll 2xl:w-[87%]`}>
        <div className="relative ml-[38px] mx-[25px] -mb-[89px] mt-[40px] ">
          <div className="sticky top-0 ">
            <div className="flex items-center justify-between py-4">
              <p className="text-[#0B2585] font-sans font-bold text-4xl">
                Projects
              </p>
              <div className="flex gap-[5px]">
                <BasicModal />
                <Filter />
              </div>
            </div>
          </div>
        </div>
        {getProjectsQuery.status === "loading" ? (
          <div className="flex justify-center items-center h-full w-full">
            <div
              className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
              role="status">
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                Loading...
              </span>
            </div>
          </div>
        ) : getProjectsQuery.status === "error" ? (
          <div className="flex justify-center items-center h-full">
            <h1>{JSON.stringify(getProjectsQuery.error)}</h1>
          </div>
        ) : (
          <div className="relative flex flex-row justify-center flex-wrap gap-[31px] top-[173px]">
            {getProjectsQuery.data.map((project) => (
              <div className="relative h-[207px] w-[351px]  bg-[#FFFFFF] shadow-md rounded-[10px]  ">
                <h6 className="w-[300px] absolute ml-[26px] mt-[26px] mr-[145px] mb-[158px] font-sans text-[18px] leading-[24px] font-bold text-[#2D2B26]">
                  {project.name}
                </h6>
                <div className="absolute py-[33px] pr-[347px] ">
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
                    {project?.assignedTo.map((member) => (
                      <Avatar
                        alt={member.name}
                        src=""
                        {...stringAvatar(member.name)}
                        key={member._id}
                      />
                    ))}
                  </AvatarGroup>

                  {/* <Avatar alt="Remy Sharp" src="" /> */}
                </div>
                <div className="relative pl-[329px] pt-[15px] pr-[17px] pb-[173px] ">
                  <MoreVertIcon />
                </div>

                <div className="">
                  <div className="flex absolute h-[16px] pl-[26px] pr-[138px] bottom-[24px] top-[166px]  ">
                    <img src={Date} alt="date" />
                    <h6 className="relative font-sans leading-[16px] text-[12px] left-[13px] w-[159px] font-semibold text-[#2D2B26]">
                      {project.startDate} | {project.endDate}
                    </h6>
                  </div>
                  <div className="flex justify-center items-center absolute left-[295px] right-[10px] bottom-[13px] top-[170px] w-[46px] h-[24px] bg-[#FF0000] rounded-[4px]">
                    <h6 className="text-[#FFFFFF] leading-[12px] font-bold text-[10px] font-[]">
                      {project.progress}
                    </h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Projects;
