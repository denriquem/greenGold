import GreenItem from "./GreenItem";
import Card from "./Card";
import "./Expenses.css";

function Expenses(props) {
	return (
		<Card className="expenses">
			<GreenItem
				title={props.expensesArr[0].title}
				amount={props.expensesArr[0].amount}
				date={props.expensesArr[0].date}
			></GreenItem>
			<GreenItem
				title={props.expensesArr[1].title}
				amount={props.expensesArr[1].amount}
				date={props.expensesArr[1].date}
			></GreenItem>
			<GreenItem
				title={props.expensesArr[2].title}
				amount={props.expensesArr[2].amount}
				date={props.expensesArr[2].date}
			></GreenItem>
		</Card>
	);
}

export default Expenses;
