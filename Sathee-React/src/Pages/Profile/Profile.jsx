import React from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import RightContent from "./Components/Contents/RightContent";

export default function Profile() {
	return (
		/* portal page layout here */
		<div className="prortal-layout">
            <Sidebar/>
            <RightContent/>        
        </div>
	);
}
