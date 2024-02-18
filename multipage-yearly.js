function toggleSubscription(type) {
    var subscriptionToggle = document.getElementById("subscription-toggle");
    var toggle1 = document.getElementById("toggle1");
    var toggle2 = document.getElementById("toggle2");

    if (type === 'monthly') {
        subscriptionToggle.checked = false;
        toggle1.style.color = "hsl(213, 96%, 18%)";
        toggle2.style.color = "";
        window.location.href = "multipage2.html";
    } else if (type === 'yearly' && subscriptionToggle.checked) {
        toggle2.style.color = "hsl(213, 96%, 18%)";
        toggle1.style.color = "";
        window.location.href = "multipage-yearly.html";
    }
}

// Track selected options 
let selectedOptions = [];

// Handle option select
function selectOption(name, price) {

  selectedOptions = [];
  // Add option to array
  selectedOptions.push({
    name: name,
    price: price
  });

}

// Save and redirect to next page
function saveAndRedirect() {

  if (selectedOptions.length === 0) {
    alert("Please select an option.");
    return;
  }

  // Store options in sessionStorage
  sessionStorage.setItem("selectedOptions", JSON.stringify(selectedOptions));
  
  // Redirect to next page
  window.location.href = "multipage3-yearly.html"; 

}

// Attach handlers to options 
const option1 = document.getElementById("option1");
option1.onclick = () => {
  selectOption("Arcade (Monthly)", 90); 
  option1.style.backgroundColor = "hsl(206, 94%, 87%)"
}

const option2 = document.getElementById("option2");
option2.onclick = () => {
  selectOption("Advanced (Monthly)", 120);
};

const option3 = document.getElementById("option3");
option3.onclick = () => {
  selectOption("Pro (Monthly)", 150);
};

// Attach handler to next button
const nextBtn = document.getElementById("next");
nextBtn.onclick = saveAndRedirect;
