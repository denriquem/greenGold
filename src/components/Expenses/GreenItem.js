import React from "react";

import GreenDate from "./GreenDate";
import Card from "../UI/Card";
import "./GreenItem.css";

const GreenItem = (props) => {
	return (
		<Card className="expense-item">
			<GreenDate date={props.date} />
			<div className="expense-item__description">
				<h2>{props.title}</h2>
				<div className="expense-item__price">${props.amount}</div>
			</div>
		</Card>
	);
};

export default GreenItem;
