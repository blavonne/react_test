import React from "react";
import PropTypes from "prop-types";
import NavItem from "./NavItem";

function NavItemList(props)
{
	return (
		<div className="NavItemList">
			This is NavItemList
			{props.apps.map((app, index) => {
				return <NavItem
					app={app}
					key={app.id}
					index={index}
					onToggle={props.onToggle}
				/>
			})}
		</div>
	);
}

NavItemList.propTypes = {
	apps: PropTypes.arrayOf(PropTypes.object).isRequired,
	onToggle: PropTypes.func.isRequired
}

export default NavItemList;