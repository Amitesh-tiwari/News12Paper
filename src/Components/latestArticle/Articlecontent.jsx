import React from "react";
import "../../styles.css";
import Details from "./latestcontent";

function Entry(props) {
    return (
        <div className="card">
            <img src={props.img} className="latest-img" alt="image"/>
            <p className="card-content">{props.heading}</p>
            <p className="card-date">{props.date}</p>
        </div>
    );
}


function createEntry(content) {
    return (
        <Entry 
            key={content.id}
            img={content.img}
            heading={content.heading}
            date={content.date}
        />
    );
}


function Articlecontent() {
    return (
        <div className="article-container">
            {Details.map(createEntry)}
        </div>
    );
}

export default Articlecontent;