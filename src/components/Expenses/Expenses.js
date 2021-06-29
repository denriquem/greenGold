import React, { useState } from "react";
import GreenItem from "./GreenItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import "../Expenses/Expenses.css";

const Expenses = (props) => {
	const [filteredYear, setFilteredYear] = useState("2020");

	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
	};

	const filteredExpenses = props.expensesArr.filter((expense) => {
		return expense.date.getFullYear().toString() === filteredYear;
	});

	return (
		<div>
			<Card className="expenses">
				<ExpenseFilter
					selected={filteredYear}
					onYearSelect={filterChangeHandler}
				/>
				<ExpensesList expensesArr={filteredExpenses} />
			</Card>
		</div>
	);
};

export default Expenses;
