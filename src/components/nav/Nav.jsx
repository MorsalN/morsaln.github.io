import React from "react";
import "./nav.css";
import { IoHomeOutline } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlineWorkOutline } from "react-icons/md";
import { RiBook2Line } from "react-icons/ri";
import { BiMessageDetail } from "react-icons/bi";

const Nav = () => {
  return (
    <nav>
      <a href="#" className="active">
        <IoHomeOutline />
      </a>
      <a href="#about">
        <AiOutlineUser />
      </a>
      <a href="#experience">
        <MdOutlineWorkOutline />
      </a>
      <a href="#portfolio">
        <RiBook2Line />
      </a>
      <a href="#contact">
        <BiMessageDetail />
      </a>
    </nav>
  );
};

export default Nav;
