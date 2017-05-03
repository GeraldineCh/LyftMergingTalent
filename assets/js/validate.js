var become = document.getElementById("form");
become.addEventListener("submit", function(event) {
  event.preventDefault();
  validateForm();
});

function validateForm(){
  var phone = document.getElementById("phone");
  var name = document.getElementById("name");
  var email = document.getElementById("email");
  var city = document.getElementById("city");

  validatePhone(phone);
  validateName(name);
  validateEmail(email);
  validateCity(city);
  }

function validatePhone(){
  if(phone.value.length==0 || /^\s+|\s+$/.test(phone.value)){
    document.getElementById("errorPhone").style.display="inline-block";
    phone.style.borderBottom="1px solid red";
    return false;
  }
  if(!(/[9]{1}[0-9]{8}/.test(phone.value))){
    document.getElementById("errorPhone").style.display="inline-block";
    phone.style.borderBottom="1px solid red";
    return false;
  }
  else {
      document.getElementById("errorPhone").style.display="none";
      phone.style.borderBottom="1px solid black";
    }
}

function validateName(name){
  /** Validacion para nombre**/
  if(name.value.length==0 || /^\s+|\s+$/.test(name.value)){
    document.getElementById("errorName").style.display="inline-block";
    name.style.borderBottom="1px solid red";
    return false;
  }
  if (/^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/.test(name.value)){
    document.getElementById("errorName").style.display="none";
    name.style.borderBottom="1px solid black";
    }
}

function validateEmail(email){
  /** Validacion para nombre**/
  if(email.value.length==0 || /^\s+|\s+$/.test(email.value)){
    document.getElementById("errorEmail").style.display="inline-block";
    email.style.borderBottom="1px solid red";
    return false;
  }
    else if (!(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+(\w{2,4})+$/.test(email.value))){
    document.getElementById("errorEmail").style.display="inline-block";
    email.style.borderBottom="1px solid red";
    return false;
    }
  else {
    document.getElementById("errorEmail").style.display="none";
    email.style.borderBottom="1px solid black";
  }
}


function validateCity(city){
  /** Validacion para nombre**/
  if(city.value.length==0 || /^\s+|\s+$/.test(city.value)){
    document.getElementById("errorCity").style.display="inline-block";
    city.style.borderBottom="1px solid red";
    return false;
  }
  if (/^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/.test(city.value)){
    document.getElementById("errorCity").style.display="none";
    city.style.borderBottom="1px solid black";
    }
}
