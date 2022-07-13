import React from "react";
import "../App.css";
import {SidebarData} from "./SidebarData";

function Sidebar(){
    return(
        <div className="Sidebar">
          <ul classname="SidebarList">
            {SidebarData.map((val,key)=>  {
              return(
                <div className="Hover">
              <li key={key}
              classname="row"
              onClick={()=> {window.location.pathname = val.link}}>
              {" "}
              <div>
              <div className="Icon" Id="Icon">{val.icon}</div>{" "}
              <div className="Text" id= "title">
                {val.title}
                </div>
                </div>
                </li>
                </div>
            )
        
        })}
          </ul>
          </div>
    )
}
export default Sidebar