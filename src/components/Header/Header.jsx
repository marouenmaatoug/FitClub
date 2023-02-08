import React, { useState } from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";
import Bars from "../../assets/bars.png";

const Header = () => {
    const mobile = window.innerWidth <= 768 ? true : false;
    const [menuOpened, setMenuOpened] = useState(false);
    return (
        <div className="header">
            <img src={Logo} alt="" className="logo" />
            {menuOpened === false && mobile === true ? (
                <div onClick={() => setMenuOpened(true)}>
                    <img className="bars" src={Bars} alt="" />
                </div>
            ) : (
                <ul className="header-menu">
                    <li onClick={() => setMenuOpened(false)}>Programs</li>
                    <li onClick={() => setMenuOpened(false)}>Why us</li>
                    <li onClick={() => setMenuOpened(false)}>Home</li>
                    <li onClick={() => setMenuOpened(false)}>Plans</li>
                    <li onClick={() => setMenuOpened(false)}>Testimonials</li>
                </ul>
            )}
        </div>
    );
};

export default Header;
