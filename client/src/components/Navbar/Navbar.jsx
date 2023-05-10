import React from "react";
import Logo from "../../assets/img/logo.svg";
import Notification from "../../assets/icons/notification.svg";
import Agenda from "../../assets/icons/agenda.svg";
import Message from "../../assets/icons/message.svg";
import Searchbar from "../Search/Search";
function Navbar() {
  return (
    // <div>
    //   <nav className="fixed top-0 z-50 w-full bg-white ">
    //     <div className="px-3 py-3 lg:px-5 lg:pl-3">
    //       <div className="flex items-center justify-between">
    //         <div className="flex items-center justify-start">
    //           <button
    //             data-drawer-target="logo-sidebar"
    //             data-drawer-toggle="logo-sidebar"
    //             aria-controls="logo-sidebar"
    //             type="button"
    //             className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
    //           >
    //             <span className="sr-only">Open sidebar</span>
    //             <svg
    //               className="w-6 h-6"
    //               aria-hidden="true"
    //               fill="currentColor"
    //               viewBox="0 0 20 20"
    //               xmlns="http://www.w3.org/2000/svg"
    //             >
    //               <path
    //                 clipRule="evenodd"
    //                 fillRule="evenodd"
    //                 d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
    //               />
    //             </svg>
    //           </button>
    //           <a href="#">
    //             <div className="flex ml-[74px] mt-[15px]">
    //               <img className="w-[98px] h-[97px] " src={Logo} alt="logo" />
    //             </div>
    //           </a>
    //         </div>
    //         <div className="flex items-center">
    //           <div className="flex items-center ml-3">
    //             <div className="flex items-center justify-center ml-5 ">
    //               <a>
    //                 <img
    //                   className="w-[20px] h-[22px] ml-4"
    //                   src={Agenda}
    //                   alt="Agenda"
    //                   />
    //               </a>
    //             </div>
    //             <div className="flex items-center justify-center ml-5 ">
    //               <a>
    //                 <img
    //                   className="w-[20px] h-[22px] ml-[15px]"
    //                   src={Message}
    //                   alt="Message"
    //                 />
    //               </a>
    //             </div>
    //             <div className="flex items-center justify-center ml-5 ">
    //               <a>
    //                 <img
    //                   className="w-[20px] h-[22px] ml-[15px] mr-[47px]"
    //                   src={Notification}
    //                   alt="Notification"
    //                 />
    //               </a>
    //             </div>
    //             <div>
    //               <img
    //                 className="w-10 h-10 rounded-full"
    //                 src="https://avatars.githubusercontent.com/u/93930084?v=4"
    //                 alt="user photo"
    //               />
    //             </div>
    //             <div className="mb-8">
    //               <div className="w-32 h-5 not-italic font-bold text-sm leading-5 text-gray-900">
    //                 <p className="text-sm font-bold leading-5 tracking-normal text-center ml-3">
    //                   Mohammed Amine
    //                 </p>
    //                 <p className="font-light leading-3 tracking-normal text-center">
    //                     <span className="text-green-500">●</span>
    //                   Disponible
    //                 </p>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   {/* <Searchbar/> */}
    //   </nav>
    // </div>
    <div>
      <nav className="fixed top-0 z-50 w-[83%] h-[106px] bg-white  ml-[255px] items-center">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-end">
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
