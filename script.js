const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);
const prices=document.querySelectorAll(".prices");
let total = 0;
const getSum = () => {
	prices.forEach(priceElement => {
    const price = parseFloat(priceElement.textContent); // Convert price to a number
    total += price; // Add to total
});

const table = document.querySelector('#my-table'); // Replace with your actual table ID or class
const newRow = document.createElement('tr');

const colCount = table.rows[0].cells.length;
for (let i = 0; i < colCount - 1; i++) {
  const emptyCell = document.createElement('td');
  emptyCell.textContent = '';
  newRow.appendChild(emptyCell);
}
const totalCell = document.createElement('td');
totalCell.textContent = `Total: ₹${total.toFixed(2)}`;
totalCell.style.fontWeight = 'bold';
newRow.appendChild(totalCell);

// Step 4: Append the new row to the table
table.appendChild(newRow);

//Add your code here
  
};

getSumBtn.addEventListener("click", getSum);

