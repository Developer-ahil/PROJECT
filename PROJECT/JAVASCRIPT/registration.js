'use strict'
function registration() {
  var fname = document.getElementById("firstname").value;
  var lname = document.getElementById("lastname").value;
  var date = document.getElementById("dob").value;
  var mail = document.getElementById("email").value;
  var phnum = document.getElementById("mobileNo").value;
  var radio1 = document.getElementById("Male").checked;
  var radio2 = document.getElementById("Female").checked;
  var addrs = document.getElementById("textareaAdd").value;
  var cityval = document.getElementById("city").value;
  
  


  var letters = /^[A-Za-z]+$/;
  var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  
  

  if (fname == '') {
    alert('Please enter your Firstname');
    window.location.reload();
  }
  else if (!letters.test(fname)) {
    alert('Name field required only alphabet characters');
  }
  else if (lname == '') {
    alert('Please enter your Firstname');
  }
  else if (!letters.test(lname)) {
    alert('LastName field required only alphabet characters');
  }
  else if (date == '') {
    alert('Please enter your date of birth');
  }
  else if (mail == '') {
    alert('Please enter your email');
  }
  else if (!filter.test(mail)) {
    alert('Invalid email');
  }
  else if (phnum == '') {
    alert('Please enter your Phone number');
  }
  else if (phnum.length != 10) {
    alert('Enter a valid Phone Number');
  }
  else if (myform.selectfield.selectedIndex == 0) {
    alert('Please select an option');
  }
  else if ((radio1 == '') && (radio2 == '')) {
    alert('Please select your gender');
  }
  else if (addrs == '') {
    alert('Please enter your Address');
  }
  else if (myform.state.selectedIndex == 0) {
    alert('Please select your state');
  }
  else if (cityval == '') {
    alert('Please enter your city');
  }
  else {
    alert('Thank you for Registration');
    window.location='success.html';
  }
}

