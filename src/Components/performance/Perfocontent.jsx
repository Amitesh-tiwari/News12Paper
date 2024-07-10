import React from "react";
import "../../styles.css";
import Details from "./perfoDetails";

function Entry(props) {
    return (
        <div>

            <div className="container">
                <img src={props.img} className="perfo-img" alt="image"/>
                <div className="img-text">
                    <p className="img-heading">{props.heading}</p>
                    <p className="author">{props.author}</p>
                    <p className="date">{props.date}</p>
                    <p className="img-details">{props.text}</p>
                </div>
            </div>

        </div>
    );
};

function createEntry(content) {
    return (
            <Entry 
                key={content.id}
                img={content.img}
                heading={content.heading}
                author={content.author}
                date={content.date}
                text={content.text}
            />
    );
}

function Perfocontent() {
    return (
        <div>
            <dl>{Details.map(createEntry)}</dl>
        </div>
    )
}


export default Perfocontent;