import React from 'react';
import PropTypes from "prop-types";
import NavItemList from "./NavItemList";
import ContentArea from "../../../ContentArea/src/components/ContentArea"

function NavBar() {
	const apps = [
		{id: 1, name: "Application1"},
		{id: 2, name: "Application2"},
		{id: 3, name: "Application3"},
	]

	function showContent(id) {
		alert("showContent id = " + id)
		return (
			ContentArea(id)
		)
	}

	return (
		<div className="NavBar">
			This is nav bar
			<NavItemList apps={apps} showContent={showContent}/>
		</div>
	);
}

export default NavBar;
