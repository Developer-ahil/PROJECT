
function validate() {
    var userid=document.getElementById("userid").value;
    var password=document.getElementById("passwrd").value;

    if(userid=="A0001" && password=="passwrd@17") {
        window.location="login.html";
        return false;
    } 
    

      else if(userid == '' && password=='') {
            alert('User ID and Pasword cannot be blank');
          
            return false;

    }else {
      
         alert("Enter valid User ID and Password");}
        
    
}