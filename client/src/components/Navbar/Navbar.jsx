import React from "react";
import Logo from "../../assets/img/logo.svg";
import Notification from "../../assets/icons/notification.svg";
import Agenda from "../../assets/icons/Aganda.svg";
import Message from "../../assets/icons/message.svg";
import Searchbar from "../Search/Search";
import { Dropdown, Avatar, Navbar } from "flowbite-react";

function Navbars() {
  return (
    <div>
      {/* <nav className="fixed top-0 left-0 right-0 bottom-0 z-50 w-screen h-[106px] items-center">
        <div className="px-3 lg:px-5 lg:pl-3 bg-white">
          <div className="flex items-center justify-between">
            <Navbar.Brand href="">
              <div className=" ml-[74px] mt-[15px] md:block">
                <img src={Logo} className="mr-3 w-[95px] h-[97px]" alt="logo" />
              </div>
            </Navbar.Brand>
            <div className="flex items-center">
              <div className="flex items-center ml-3">
                <div className="flex h-[102px] items-center">
                  <div className="flex md:order-2">
                    <Navbar>
                      <Dropdown
                        arrowIcon={false}
                        inline={true}
                        label={
                          <Avatar
                            alt="User settings"
                            img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                            rounded={true}
                          />
                        }>
                        <Dropdown.Header>
                          <span className="block text-sm">Bonnie Green</span>
                          <span className="block truncate text-sm font-medium">
                            name@flowbite.com
                          </span>
                        </Dropdown.Header>
                        <Dropdown.Item>Dashboard</Dropdown.Item>
                        <Dropdown.Item>Settings</Dropdown.Item>
                        <Dropdown.Item>Earnings</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item>Sign out</Dropdown.Item>
                      </Dropdown>
                      {/* <Navbar.Toggle /> */}

      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand href="https://flowbite.com/">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Flowbite
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline={true}
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded={true}
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">
                name@flowbite.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="/navbars" active={true}>
            Home
          </Navbar.Link>
          <Navbar.Link href="/navbars">About</Navbar.Link>
          <Navbar.Link href="/navbars">Services</Navbar.Link>
          <Navbar.Link href="/navbars">Pricing</Navbar.Link>
          <Navbar.Link href="/navbars">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Navbars;
