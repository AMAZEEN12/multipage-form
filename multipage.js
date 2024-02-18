
var buttonElement = document.getElementById("button");
buttonElement.addEventListener("click", formValidity)
function formValidity(event) {
    event.preventDefault();

    var isValid = true;

    var nameElement = document.getElementById("name").value;
var mailElement = document.getElementById("email").value;
var phoneElement = document.getElementById("phone").value;

var span1 = document.getElementById("required");
var span2 = document.getElementById("required1");
var span3 = document.getElementById("required2");



nameElement = nameElement.toLowerCase();
    

    if (nameElement === '') {
        span1.textContent = "This field is required";
        document.getElementById("name").style.border = "2px solid hsl(354, 84%, 57%)"
        isValid = false;
        setTimeout(()=>{
            span1.textContent = '';
            document.getElementById("name").style.border = "2px solid hsl(231, 11%, 63%)";
        }, 2000);
    }
    if (!mailElement.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) || mailElement === "") {
        span2.textContent = "Valid mail required";
        document.getElementById("email").style.border = "2px solid hsl(354, 84%, 57%)"
        isValid = false;
        setTimeout(()=>{
            span2.textContent = '';
            document.getElementById("email").style.border = "2px solid hsl(231, 11%, 63%)";
        }, 2000);
    }
    if (phoneElement === "") {
        span3.textContent = "This field is required";
        document.getElementById("phone").style.border = "2px solid hsl(354, 84%, 57%)"
        isValid = false;
        setTimeout(()=>{
            span3.textContent = '';
            document.getElementById("phone").style.border = "2px solid hsl(231, 11%, 63%)";
        }, 2000);
    }
    if (!isValid) {
        return;
    }

    if (isValid) {
        window.location.href = "multipage2.html"
    }
}