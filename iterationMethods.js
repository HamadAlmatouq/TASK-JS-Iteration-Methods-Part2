const transactions = [
  ["income", 1000],
  ["income", 1500],
  ["expense", 500],
  ["expense", 300],
  ["income", 700],
];

// 1) Write a `filterIncomeTransactions` function that returns a new array containing only the income transactions.
function filterIncomeTransactions(transactions) {
  // write your code here...

  return transactions.filter((transactions) => transactions[0] === "income");
}

// 2) Write a `filterExpenseTransactions` function that return a new array containing only the expense transactions.
function filterExpenseTransactions(transactions) {
  // write your code here...

  return transactions.filter((transactions) => transactions[0] === "expense");
}

// 3) Write a `calculateTotalIncome` function that calculates the total income and returns it.
function calculateTotalIncome(transactions) {
  // write your code here...
  // return transactions.reduce(function (total, transaction) {
  //   if (transaction[0] === "income") {
  //     return total + transaction[1];
  //   }
  //   return total;
  // }, 0);

  const incomeTransactions = filterIncomeTransactions(transactions);
  return (
    incomeTransactions.reduce((total, transaction) => total + transaction[1]), 0
  );
}

// 4) Write a `calculateTotalExpenses` function that calculates the total expense and returns it.
function calculateTotalExpenses(transactions) {
  // write your code here...
  const expenseTransactions = filterExpenseTransactions(transactions);

  return (
    expenseTransactions.reduce((total, transaction) => total + transaction[1]),
    0
  );
}

// 5) Write a `calculateNetTotal` function that calculates the net total (total income - total expenses) and returns it.
function calculateNetTotal(transactions) {
  // write your code here...

  //Incomes
  const totalIncome = transactions
    .filter(function (transaction) {
      return transaction[0] === "income";
    })
    .reduce(function (total, transaction) {
      return total + transaction[1];
    }, 0);

  //Expenses
  const totalExpense = transactions
    .filter(function (transaction) {
      return transaction[0] === "expense";
    })
    .reduce(function (total, transactions) {
      return total + transactions[1];
    }, 0);

  return totalIncome - totalExpense;
}

// 6) Write a `filterSignificantTransactions` function that identifies and creates a new array with transactions (both incomes and expenses) above or equal to $500.
function filterSignificantTransactions(transactions, threshold = 500) {
  // write your code here...
  //threshold = 500
  return transactions.filter(function (transaction) {
    return transaction[1] >= threshold;
  });
}

module.exports = {
  filterIncomeTransactions,
  filterExpenseTransactions,
  calculateTotalIncome,
  calculateTotalExpenses,
  calculateNetTotal,
  filterSignificantTransactions,
};
