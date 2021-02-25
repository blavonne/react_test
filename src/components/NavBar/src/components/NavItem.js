import React from "react";
import PropTypes from "prop-types";

/*
почему первичный индекс равен 0? я же взяла его из воздуха
 */

function NavItem({app, index, showContent}) {
	return (
		<div className="NavItem">
			<input className="NavButton"
				   type="button"
				   value={"This is NavItem index = " + (index + 1) + " name = " + app.name}
				   onClick={() => showContent(app.id)}
			/>
		</div>
	);
}

NavItem.propTypes = {
	app: PropTypes.object.isRequired,
	index: PropTypes.number,
	showContent: PropTypes.func.isRequired
}

export default NavItem;