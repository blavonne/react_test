import React from "react";
import PropTypes from "prop-types";

/*
отобразить тот апп, у которого нав айтем актив
 */

function ContentArea(props)
{
	// let [content, setActive] = useState([
	// 	{id: 0, text: "Default content", display: false},
	// 	{id: 1, text: "This is content #1", display: false},
	// 	{id: 2, text: "This is content #2", display: false},
	// 	{id: 3, text: "This is content #3", display: false},
	// ])

	// function showMiracle(id)
	// {
	// 	setActive (
	// 		content.map(elem => {
	// 			if (elem.id === id)
	// 				elem.active = true
	// 			else
	// 				elem.active = false;
	// 			return content;
	// 		})
	// 	);
	// }

	return (
		<div className="ContentArea">
			Default Content
		</div>
	)
}

export default ContentArea;