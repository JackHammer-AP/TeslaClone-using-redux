import React, { useState } from "react";
import { useSelector } from "react-redux";

import "./Header.css";
import { selectCars } from "../features/car/carSlice";

import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

const Header = () => {
  const [menuStatus, setMenuStatus] = useState(false);
  const cars = useSelector(selectCars);

  return (
    <div className="header">
      <a href="/">
        <img className="header__logo" src="/images/tesla.png" alt="logo" />
      </a>

      <div className="header__centerMenu">
        {cars &&
          cars.map((car, index) => (
            <a key={index} href="/">
              {" "}
              {car}
            </a>
          ))}
      </div>

      <div className="header__rightMenu">
        <a href="/">Shop</a>
        <a href="/">Tesla Account</a>

        <MenuIcon
          className={`header__extendMenu ${menuStatus && "header--open"}`}
          onClick={() => setMenuStatus(true)}
        />
      </div>

      <div className={`header__rightNavMenu ${!menuStatus && "header--close"}`}>
        <div className={`header__closeMenu `}>
          <CloseIcon onClick={() => setMenuStatus(false)} />
        </div>

        <li>
          <a href="/">Existing Inventory</a>
        </li>
        <li>
          <a href="/">Used Inventory</a>
        </li>
        <li>
          <a href="/">Trade-in</a>
        </li>
        <li>
          <a href="/">Roadster</a>
        </li>
        <li>
          <a href="/">Semi</a>
        </li>
        <li>
          <a href="/">Charging</a>
        </li>
        <li>
          <a href="/">Powerwall</a>
        </li>
        <li>
          <a href="/">Commercial Energy</a>
        </li>
        <li>
          <a href="/">utilities</a>
        </li>
        <li>
          <a href="/">test Drive</a>
        </li>

        <li>
          <a href="/">CyberTruck</a>
        </li>
      </div>
    </div>
  );
};

export default Header;
