function validtionForm () {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("tel").value;
    var error = document.getElementById("error");
    

    var text = "";
    if ( name === "" || name.length < 3) {
        text = "Name must be at least 3 characters long";
        error.innerHTML= text;
        return false;
        }
    else if (  email === "" || email.indexOf("@")== -1) {
        text = "Please Enter Email";
        error.innerHTML= text;
        return false;
    }
    else if ( isNaN(phone) || phone.length < 11 || phone === "" ) {
        text = "Please Enter Phone Number";
        error.innerHTML= text;
        return false; 
    }
    else {
        alert ("Form Submitted Successfully ");
        return true;
        }
}