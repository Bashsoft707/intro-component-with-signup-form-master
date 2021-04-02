function validateForm() {
    var input = document.getElementByTagName("input");
    var x = document.forms["myForm"]["fname"].value;
    var y = document.forms["myForm"]["lname"].value;
    var z = document.forms["myForm"]["password"].value;
    if (x == "" || y == "" || z == "") {
        var em = document.createElement("em");
        em.setAttribute("class", "error-msg");
        em.textContent = "Name must be filled out";
        input.append(em);
        console.log(input);
        alert("Name must be filled out");
    }
  }

  
// function ValidateEmail(inputText) { 
//     var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
//     if(inputText.value.match(mailformat)) {
//         alert("Valid email address!");
//         document.form1.text1.focus();
//         return true;
//     }
//     else { 
//         alert("You have entered an invalid email address!");
//         document.form1.text1.focus();
//         return false;
//     }
// }