import React, { useState } from "react";
import GreenItem from "./GreenItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import "../Expenses/Expenses.css";

const Expenses = (props) => {
	const [filteredYear, setFilteredYear] = useState("2020");

	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
	};

	return (
		<div>
			<Card className="expenses">
				<ExpenseFilter
					selected={filteredYear}
					onYearSelect={filterChangeHandler}
				/>
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
		</div>
	);
};

export default Expenses;
