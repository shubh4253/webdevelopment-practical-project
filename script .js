function addExpense() {
  const name = document.getElementById("name").value;
  const amount = document.getElementById("amount").value;
  const category = document.getElementById("category").value;

  const li = document.createElement("li");
  li.textContent = name + " (" + category + ") - $" + amount;
  document.querySelector(".expense-list").appendChild(li);
}
