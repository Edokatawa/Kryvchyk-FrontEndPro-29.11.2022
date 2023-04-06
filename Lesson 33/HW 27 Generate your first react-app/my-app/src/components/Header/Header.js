import React, {Component} from "react";
import "./Header.css";
import logoWebsite from "../../img/logo-website.png";
import instagram from "../../img/instagram.png";
import facebook from "../../img/facebook.png";
import telegram from "../../img/telegram.png";
import twitter from "../../img/twitter.png";

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="logo-container">
                    <img className="logo" src={logoWebsite} alt="logo website" />
                </div>
                <ul className="nav-menu">
                    <li className="menu-item">Сторінка 1</li>
                    <li className="menu-item">Сторінка 2</li>
                    <li className="menu-item">Сторінка 3</li>
                    <li className="menu-item">Сторінка 4</li>
                    <li className="menu-item">Сторінка 5</li>
                </ul>
                <div className="social-icons">
                    <img className="icon" src={instagram} alt="instagram" />
                    <img className="icon" src={facebook} alt="instagram" />
                    <img className="icon" src={telegram} alt="instagram" />
                    <img className="icon" src={twitter} alt="instagram" />
                </div>
            </div>
        );
    }
}
