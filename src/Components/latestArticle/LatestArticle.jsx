import React from "react";
import "../../styles.css";
import Subnavbar from "../Subnavbar";
import Articlecontent from "./Articlecontent"

function LatestArticle() {
    
    return (
        <div>

            <Subnavbar 
                name="LATEST ARTICLE"
            /> 

            <Articlecontent />

        </div>
    );
  }

  export default LatestArticle;