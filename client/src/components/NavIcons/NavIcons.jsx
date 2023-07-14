import React from "react";
import "../NavIcons/NavIcons.css";


import Home from "../../img/home.png";
import Noti from "../../img/noti.png";
import Comment from "../../img/comment.png";
import { UilSetting } from "@iconscout/react-unicons";
import { Link } from "react-router-dom";
import { Center } from "@mantine/core";

const NavIcons = () => {
  return (
    <div className="navIcons">
      <h2 class="namepage"><b>Socialize</b></h2>
      <Link to="../home">
        <img class="responsive"src={Home} alt="" />
      </Link>
      
    </div>
    
  );
};

export default NavIcons;
