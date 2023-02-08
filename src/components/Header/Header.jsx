import React, { useState } from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";
import Bars from "../../assets/bars.png";
import { Link } from "react-scroll";

const Header = () => {
    const mobile = window.innerWidth <= 768 ? true : false;
    const [menuOpened, setMenuOpened] = useState(false);
    return (
        <div className="header">
            <img src={Logo} alt="" className="logo" />
            {menuOpened === false && mobile === true ? (
                <div>
                    <img
                        className="bars"
                        src={Bars}
                        alt=""
                        onClick={() => setMenuOpened(true)}
                    />
                </div>
            ) : (
                <ul className="header-menu">
                    <li>
                        {" "}
                        <Link
                            onClick={() => setMenuOpened(false)}
                            to="home"
                            smooth={true}
                            span={true}
                            activeClass="active"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        {" "}
                        <Link
                            onClick={() => setMenuOpened(false)}
                            to="programs"
                            smooth={true}
                            span={true}
                        >
                            Programs
                        </Link>
                    </li>
                    <li>
                        <Link
                            onClick={() => setMenuOpened(false)}
                            to="reasons"
                            smooth={true}
                            span={true}
                        >
                            Why us
                        </Link>
                    </li>
                    <li>
                        {" "}
                        <Link
                            onClick={() => setMenuOpened(false)}
                            to="plans"
                            smooth={true}
                            span={true}
                        >
                            Plans
                        </Link>
                    </li>
                    <li>
                        <Link
                            onClick={() => setMenuOpened(false)}
                            to="testimonials"
                            smooth={true}
                            span={true}
                        >
                            Testimonials
                        </Link>
                    </li>
                </ul>
            )}
        </div>
    );
};

export default Header;
