import React from "react";
import "../styles.css";

function Subnavbar(props) {
    return (
        <div>
            <nav className="sub-nav">
                <p className="nav-name">{props.name}</p>
            </nav>
            
        </div>

    );
};

export default Subnavbar;