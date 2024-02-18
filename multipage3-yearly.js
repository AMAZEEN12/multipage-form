let checkboxElement2 = document.getElementById("option5");

let checkboxElement = document.getElementById("option4");

let checkboxElement1 = document.getElementById("option6");

function checkBox(){

    var div1 = document.getElementById("form")

    if (checkboxElement.checked) {
       div1.style.backgroundColor = "hsl(206, 94%, 87%)" 
       div1.style.border = "2px solid hsl(213, 96%, 18%)"
    }else{
        div1.style.backgroundColor = "";
        div1.style.border = "";
    }

}

document.getElementById("option4").addEventListener("click", checkBox);

function checkBox1(){

    var div2 = document.getElementById("form1")

    if (checkboxElement2.checked) {
       div2.style.backgroundColor = "hsl(206, 94%, 87%)" 
       div2.style.border = "2px solid hsl(213, 96%, 18%)"
    }else{
        div2.style.backgroundColor = "";
        div2.style.border = "";
    }

}

document.getElementById("option5").addEventListener("click", checkBox1);


function checkBox2(){

    var div3 = document.getElementById("form2");

    if (checkboxElement1.checked) {
       div3.style.backgroundColor = "hsl(206, 94%, 87%)" 
       div3.style.border = "2px solid hsl(213, 96%, 18%)"
    }else{
        div3.style.backgroundColor = "";
        div3.style.border = "";
    }

}

document.getElementById("option6").addEventListener("click", checkBox2);

function nextPage() {

    if (checkboxElement.checked || checkboxElement1.checked || checkboxElement2.checked) {
        document.getElementById("span").textContent = "";
        window.location.href = "multipage4-yearly.html";
    }else {
        document.getElementById("span").style.color = "hsl(0, 100%, 67%)";
        document.getElementById("span").textContent = "Choose an option";

        setTimeout(()=>{
            document.getElementById('span').textContent = '';
        }, 3000);
    }
}
document.getElementById("button").addEventListener("click", nextPage);


// Page 2 code

let selectedOptions = JSON.parse(sessionStorage.getItem('selectedOptions')) || []; 


let options = [];

function selecterOption(name, price) {

  // Add option to array
  options.push({
    name: name,
    price: price
  });

}

function saveOptions() {

    if (options.length === 0) {
        //alert("Please select an option.");
        return;
      }

    
    
  // Stringify array
  let json = JSON.stringify(options); 
  
  // Save to storage
  sessionStorage.setItem('options', json);

  // Check storage to confirm update
  //let options = JSON.parse(sessionStorage.getItem('options')); 
 // console.log(options);

  window.location.href = "multipage4-yearly.html"

}


// Attach handlers to call functions

const option4 = document.getElementById("option4");

option4.onchange = () => {
  selecterOption("Online service", 10); 
};

const option5 = document.getElementById("option5");
option5.onchange = () => {
    selecterOption("Larger storage", 20);
}

const option6 = document.getElementById("option6");
option6.onchange = () => {
    selecterOption("Customizable profile", 20);
}


var saveBtn = document.getElementById("button");
saveBtn.onclick = saveOptions;