import React from "react";
import GreenItem from "./GreenItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
	if (props.expensesArr.length === 0) {
		return <h2 className="expenses-list__fallback ">Found No Expenses</h2>;
	}

	return (
		<ul className="expenses-list">
			{props.expensesArr.map((expense) => (
				<GreenItem
					key={expense.id}
					title={expense.title}
					amount={expense.amount}
					date={expense.date}
				/>
			))}
		</ul>
	);
};

export default ExpensesList;
