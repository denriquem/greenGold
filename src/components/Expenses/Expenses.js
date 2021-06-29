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
				{props.expensesArr.map((expense) => (
					<GreenItem
						key={expense.id}
						title={expense.title}
						amount={expense.amount}
						date={expense.date}
					/>
				))}
			</Card>
		</div>
	);
};

export default Expenses;
