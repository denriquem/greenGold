import React, { useState } from "react";

import GreenDate from "./GreenDate";
import Card from "../UI/Card";
import "./GreenItem.css";

const GreenItem = (props) => {
	const [title, setTitle] = useState(props.title);
	console.log("expense item evaluated by react");

	return (
		<Card className="expense-item">
			<GreenDate date={props.date} amount={props.amount} title={title} />
			<div className="expense-item__description">
				<h2>{props.title}</h2>
				<div className="expense-item__price">£{props.amount}</div>
			</div>
		</Card>
	);
};

export default GreenItem;
