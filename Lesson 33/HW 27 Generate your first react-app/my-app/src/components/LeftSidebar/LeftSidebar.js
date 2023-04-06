import React, {Component} from "react";
import "./LeftSidebar.css";

export default class LeftSidebar extends Component {
    render() {
        return (
            <div className="left-sidebar-container">
                <span className="left-sidebar-item">Пункт 1</span>
                <span className="left-sidebar-item">Пункт 2</span>
                <span className="left-sidebar-item">Пункт 3</span>
                <span className="left-sidebar-item">Пункт 4</span>
                <span className="left-sidebar-item">Пункт 5</span>
                <span className="left-sidebar-item">Пункт 6</span>
            </div>
        );
    }
}
