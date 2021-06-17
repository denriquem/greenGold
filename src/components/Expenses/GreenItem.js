import React, { useState } from "react";

import GreenDate from "./GreenDate";
import Card from "../UI/Card";
import "./GreenItem.css";

const GreenItem = (props) => {
	const [title, setTitle] = useState(props.title);
	console.log("expense item evaluated by react");

	const clickHandler = () => {
		setTitle("Updated");
		console.log(title);
	};

	return (
		<Card className="expense-item">
			<GreenDate date={props.date} amount={props.amount} title={title} />
			<div className="expense-item__description">
				<h2>{title}</h2>
				<div className="expense-item__price">£{props.amount}</div>
			</div>
			<button onClick={clickHandler}>Change Name</button>
		</Card>
	);
};

export default GreenItem;
