let income = 0;

let expense = 0;

function addIncome(){

let amount = Number(document.getElementById("amount").value);

income += amount;

update();

}

function addExpense(){

let amount = Number(document.getElementById("amount").value);

expense += amount;

update();

}

function update(){

document.getElementById("income").innerHTML =

"KES " + income;

document.getElementById("expense").innerHTML =

"KES " + expense;

document.getElementById("profit").innerHTML =

"KES " + (income-expense);

document.getElementById("capital").innerHTML =

"KES " + (income-expense);

}