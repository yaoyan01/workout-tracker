'use client';
import { useState } from 'react';

interface Expense {
  name: string;
  cost: number;
}

export default function Home() {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [newExpense, setNewExpense] = useState<Expense>({
    name: '',
    cost: 0,
  });

  const addExpense = () => {
    setExpenses([...expenses, newExpense]);
    setNewExpense({
      name: '',
      cost: 0,
    });
  };

  return (
    <>
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Cost</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense, index) => (
              <tr key={index}>
                <td>{expense.name}</td>
                <td>{expense.cost}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <input
        type='text'
        value={newExpense.name}
        placeholder='Enter a Name'
        onChange={(e) => setNewExpense({ ...newExpense, name: e.target.value })}
      ></input>
      <input
        type='number'
        value={newExpense.cost}
        placeholder='Enter a Cost'
        onChange={(e) => setNewExpense({ ...newExpense, cost: Number(e.target.value )})}
      ></input>
      <button onClick={addExpense}>Add Expense</button>
    </>
  );
}
