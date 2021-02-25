import React from "react";
import PropTypes from "prop-types";

/*
почему первичный индекс равен 0? я же взяла его из воздуха
 */

function NavItem({app, index, onToggle}) {
	console.log('app', app)
	return (
		<div className="NavItem">
			<input className="NavButton"
				   type="button"
				   value={"This is NavItem index = " + (index + 1) + " name = " + app.name}
				   onClick={() => onToggle(app.id)}
			/>
		</div>
	);
}

NavItem.propTypes = {
	app: PropTypes.object.isRequired,
	index: PropTypes.number,
	onToggle: PropTypes.func.isRequired
}

export default NavItem;