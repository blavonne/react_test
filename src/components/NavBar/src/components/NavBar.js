import React from 'react';
import PropTypes from "prop-types";
import NavItemList from "./NavItemList";

function NavBar() {
	let [apps, setActive] = React.useState([
			{id: 1, name: "Application1", active: false},
			{id: 2, name: "Application2", active: false},
			{id: 3, name: "Application3", active: false}
		]
	)

	function toggleContentArea(id) {
		setActive(
			apps.map(elem => {
				if (elem.id === id) {
					elem.active = !elem.active
				}
				return elem
			})
		)
	}

	return (
		<div className="NavBar">
			This is NavBar
			<NavItemList
				apps={apps}
				onToggle={toggleContentArea}
			/>
		</div>
	);
}

export default NavBar;
