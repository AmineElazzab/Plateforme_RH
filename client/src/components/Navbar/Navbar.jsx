import React from "react";
import Logo from "../../assets/img/logo.svg";
import Notification from "../../assets/icons/notification.svg";
import Agenda from "../../assets/icons/Aganda.svg";
import Message from "../../assets/icons/message.svg";
import Searchbar from "../Search/Search";
function Navbar() {
  return (
    <div>
      <nav className="fixed top-0 left-0 right-0 bottom-0 z-50 w-screen h-[106px] items-center">
        <div className="px-3 lg:px-5 lg:pl-3 bg-white">
          <div className="flex items-center justify-between">
            <a href="#">
              <div className=" ml-[74px] mt-[15px] md:block">
                <img className="w-[98px] h-[97px] " src={Logo} alt="logo" />
              </div>
            </a>
            <div className="flex items-center">
              <div className="flex items-center ml-3">
                <div className="flex items-center justify-center ml-5 ">
                  <a>
                    <img
                      className="w-[20px] h-[22px] ml-4"
                      src={Agenda}
                      alt="Agenda"
                    />
                  </a>
                </div>
                <div className="flex items-center justify-center ml-5 ">
                  <a>
                    <img
                      className="w-[20px] h-[22px] ml-[15px]"
                      src={Message}
                      alt="Message"
                    />
                  </a>
                </div>
                <div className="flex items-center justify-center ml-5 ">
                  <a>
                    <img
                      className="w-[20px] h-[22px] ml-[15px] mr-[47px]"
                      src={Notification}
                      alt="Notification"
                    />
                  </a>
                </div>
                <div className="flex h-[102px] items-center">
                  <img
                    className="w-[43px] h-[43px] rounded-full"
                    src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                    alt="user photo"
                  />
                </div>
              </div>
              <div className="w-auto h-auto not-italic font-bold text-sm leading-5 text-gray-900 mr-[40px] ml-[26px]">
                <p className="text-sm font-bold leading-5 tracking-normal text-center ml-3">
                  Mohammed Amine
                </p>
                <p className="font-light leading-3 tracking-normal text-center">
                  <span className="text-green-500">●</span>
                  Disponible
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
