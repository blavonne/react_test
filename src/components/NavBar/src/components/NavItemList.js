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
					showContent={props.showContent}
				/>
			})}
		</div>
	);
}

NavItemList.propTypes = {
	apps: PropTypes.arrayOf(PropTypes.object).isRequired,
	showContent: PropTypes.func.isRequired
}

export default NavItemList;