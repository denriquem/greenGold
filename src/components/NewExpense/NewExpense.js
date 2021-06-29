import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
	const [editingState, setEditingState] = useState(false);

	const saveExpenseDataHander = (enteredExpenseData) => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString(),
		};
		props.onAddExpense(expenseData);
		setEditingState(false);
	};

	const startEditingHandler = () => {
		setEditingState(true);
	};

	const stopEditingHandler = () => {
		setEditingState(false);
	};

	return (
		<div className="new-expense">
			{!editingState && (
				<button onClick={startEditingHandler}>Add new Expense</button>
			)}
			{editingState && (
				<ExpenseForm
					onSaveExpenseData={saveExpenseDataHander}
					onCancel={stopEditingHandler}
				/>
			)}
		</div>
	);
};

export default NewExpense;
