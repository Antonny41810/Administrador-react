import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Img/logo.png";
import Buttom from "../Buttoms";

const Navbar = ({ links }) => {
  return (
    <div>
      <nav className="flex justify-evenly bg-slate-900">
        <div className="">
          <img src={logo} className="h-15 w-20 m-1" />
        </div>
        <div className="flex justify-center">
          {links.map(([title, url]) => (
            <Link
              to={url}
              className="rounded-lg px-3 py-2 text-slate-50 font-medium hover:bg-slate-100 hover:text-slate-900 font-bold m-3"
            >
              {title}
            </Link>
          ))}
        </div>
          <Buttom />
      </nav>
    </div>
  );
};

export default Navbar;
