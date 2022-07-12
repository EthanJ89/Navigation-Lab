import React from "react";
import "../App.css;"
import {SidebarData} from "./SidebarData";


function Sidebar(){
    return(
        <div className="Sidebar">
           <ul classname="SidebarList" 
            {SidebarData.map(val,key)=>  {
            return{
              <li key={key}
              classname="row"
              onClick={()=> {window, location.pathname = val.link}}>
              {" "}
              <div id="icon">{val.icon}</div>{" "}
              <div id= "title">
                {val.title}
                </div>
                </li>
              }
        
        </div>
    )


}
}
export default Sidebar