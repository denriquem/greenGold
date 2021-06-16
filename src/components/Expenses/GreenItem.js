import GreenDate from "./GreenDate";
import Card from "../UI/Card";
import "./GreenItem.css";

function GreenItem(props) {
	return (
		<Card className="expense-item">
			<GreenDate
				date={props.date}
				amount={props.amount}
				title={props.title}
			/>
			<div className="expense-item__description">
				<h2>{props.title}</h2>
				<div className="expense-item__price">£{props.amount}</div>
			</div>
		</Card>
	);
}

export default GreenItem;
