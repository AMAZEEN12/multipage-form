// Retrieve options arrays from BOTH pages  
let page1Options = JSON.parse(sessionStorage.getItem('selectedOptions')) || [];
let page2Options = JSON.parse(sessionStorage.getItem('options')) || [];


// Combine arrays
let allOptions = page1Options.concat(page2Options);  



// Calculate total 
let total = 0;



allOptions.forEach(option => {

  total += option.price;

  // Create elements
  let name = document.createElement('div');
  let price = document.createElement('div');

  // Add content
  name.textContent = option.name;
  price.textContent = '$' + option.price + "/mo";

  // Add classes for styling
  name.classList.add('name');
  price.classList.add('price');

  // Create container
  let container = document.createElement('div');
  container.classList.add('option');


  // Append elements  
  container.appendChild(name);
  container.appendChild(price);

  let isSelected = page1Options.some(selectedOption => selectedOption.name === option.name) //||
  //page2Options.some(selectedOption => selectedOption.name === option.name);
if (isSelected) {
// Add bold-text class to the name element
name.classList.add('bold-text');
}

  let wasSelected = page1Options.some(selectedOption => selectedOption.price === option.price);

  if (wasSelected) {
    price.classList.add("bold-text");
  }

  // Add to page
  document.getElementById('summary').appendChild(container);

});

// Create total elements
let totalLabel = document.createElement('div');
totalLabel.classList.add('name');
totalLabel.textContent = "Total (per month)";
//totalLabel.style.backgroundColor = 'transparent';
//totalLabel.style.color = "hsl(231, 11%, 63%)"

let totalValue = document.createElement('div');
totalValue.classList.add('price');  
totalValue.textContent = '$' + total + '/mo';
totalValue.style.color = "hsl(243, 100%, 62%)";
totalValue.style.fontWeight = '700';
totalValue.style.fontSize = "17px";

// Container
let totalContainer = document.createElement('div');
totalContainer.classList.add('option');
totalContainer.style.backgroundColor = 'transparent';

// Append  
totalContainer.appendChild(totalLabel);
totalContainer.appendChild(totalValue);

document.getElementById('summary1').appendChild(totalContainer);

//allOptions.forEach(option => {

  // Add up price
 // total += option.price;  

  // Display option  
  //let item = document.createElement('div');
 // item.textContent = option.name + ' - $' + option.price;

  //document.getElementById('summary').appendChild(item);

//}) 

// Update total
//document.getElementById('total').textContent = 'Total: ' + '$' + total;