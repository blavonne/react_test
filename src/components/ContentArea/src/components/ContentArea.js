import React from "react";
import PropTypes from "prop-types";

function ContentArea(id)
{
	const content = [
		{id: 1, text: "This is content #1"},
		{id: 2, text: "This is content #2"},
		{id: 3, text: "This is content #3"},
	]
	alert("ContentArea id = " + id)
	if (id === 1) {
		alert("id is the same")
		return (
			<div className="ContentArea">
				Content id = {content[0].id}, content text: {content[0].text}
			</div>
		)
	}
	return (
		<div className="ContentArea">
			This is empty ContentArea
		</div>
	)
}

export default ContentArea;