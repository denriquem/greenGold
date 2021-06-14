import GreenDate from "./GreenDate";
import "./GreenItem.css";

function GreenItem(props) {
	return (
		<div className="expense-item">
			<GreenDate
				date={props.date}
				amount={props.amount}
				title={props.title}
			/>
			<div className="expense-item__description">
				<h2>{props.title}</h2>
				<div className="expense-item__price">£{props.amount}</div>
			</div>
		</div>
	);
}

export default GreenItem;
