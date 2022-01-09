const element = document.getElementById("submit-button");
element.addEventListener("click", (event) => {
  event.preventDefault();

  const name = document.getElementById("username").value;

//   username

if (name) {
    showUserNameError(false);
  } else {
    showUserNameError(true);
    
  }

  function showUserNameError(isShowError) {
    const ele = document.getElementById("username-error");
    if (isShowError ) {
      //  ele.innerText = "Username cannot be empty";
      ele.style.display = "block";
      document.getElementById("username").style.borderColor="red";
    } 
    else {
      ele.innerText = "";
      ele.style.display = "none";
      document.getElementById("username").style.borderColor="green";
    }
  
  }


   //age 

   const age = document.getElementById("age").value;

   if (age) {
    showAgeError(false, age);
  } else {
    showAgeError(true, age);
  }


  function showAgeError(isShowError, val) {
    const ele = document.getElementById("age-error");
    if (isShowError) {
      ele.innerHTML = "<i>Age cannot be empty</i>";
      ele.style.display = "block";
      document.getElementById("age").style.borderColor="red";
    } else {
      if (val > 0 && val<150) {
        ele.innerText = "";
        ele.style.display = "none";
        document.getElementById("age").style.borderColor="green";
      } 
      else {
        ele.innerHTML = "<i>Age cannot be less then 0 or greater than 150 </i>"  ;
        ele.style.display = "block";
        ele.style.color = "red";
        document.getElementById("age").style.borderColor="red";
      }
    }
  }

//password
  const password = document.getElementById("userPassword").value;

  if (password.length >= 8) {
    showPasswordError(true);
  } else {
    showPasswordError(false);
  }

  function showPasswordError(pError) {
    const password = document.getElementById("password-error");
    if (pError) {
      password.style.display = "none";
      document.getElementById("userPassword").style.borderColor="green";

    } else {
      password.style.display = "block";
      document.getElementById("userPassword").style.borderColor="red";
    }
  }


  //subject studied ---check box

  const checkBox1 = document.getElementById("inlineCheckbox1");
  const checkBox2 = document.getElementById("inlineCheckbox2");
  const checkBox3 = document.getElementById("inlineCheckbox3");
  const checkBox4 = document.getElementById("inlineCheckbox4");

  if (checkBox1.checked || checkBox2.checked || checkBox3.checked ||  checkBox4.checked) {
    checkBoxError(true);
  } else {
    checkBoxError(false);
  }
  function checkBoxError(isChecked) {
    const checkBox = document.getElementById("checkBoxError");
  
    if (isChecked) {
      checkBox.style.display = "none";
      document.getElementById("inlineCheckbox2").style.borderColor="red";

    } else {
      checkBox.style.display = "block";
    }
  }

// gender -radio

  const radioButton1 = document.getElementById("inlineRadio1");
  const radioButton2 = document.getElementById("inlineRadio2");
  const radioButton3 = document.getElementById("inlineRadio3");

  if (radioButton1.checked || radioButton2.checked || radioButton3.checked) {
    radioButton(true);
  } else {
    radioButton(false);
  }

  function radioButton(radioSelect) {
    const radioButton = document.getElementById("RadioButtonShow");
    document.getElementById("inlineRadio1").style.borderColor="red";
    if (radioSelect) {
      radioButton.style.display = "none";
  

    } else {
      radioButton.style.display = "block";
    }
  }


  //state

  var cityname = document.getElementById("city").value;
  if(cityname==""){
    document.getElementById("city").style.borderColor="red";
    document.getElementById("cityError").innerHTML="<i>Choose any city</i>";
  }else{
    document.getElementById("city").style.borderColor="green";
    document.getElementById("cityError").innerText="";
  }


//email

const mail = document.getElementById("exampleFormControlInput1").value;

if(mail.length>10){
  enterValidMail(true)

}else{
  enterValidMail(false)
}

function enterValidMail(mail){
  const Gmail = document.getElementById("Email")
  if(mail){
      Gmail.style.display="none"
      document.getElementById("exampleFormControlInput1").style.borderColor="green";
  }else{
      Gmail.style.display="block"
      document.getElementById("exampleFormControlInput1").style.borderColor="red";

  }
}


//terms and condition

const terms = document.getElementById("terms");

if(terms.checked){
  termsandcondition(true)
}else{
termsandcondition(false)

}

function termsandcondition(condition){
  const terms = document.getElementById("TandC")
  if(condition){
      terms.style.display="none"
  }else {
      terms.style.display = "block";
    }
}

if(name && age && password && (checkBox1.checked || checkBox2.checked || checkBox3.checked ||  checkBox4.checked) && (radioButton1.checked || radioButton2.checked || radioButton3.checked)
&& cityname &&  mail &&  terms) {
  alert(" Entered Data is Valid !")
} else{
  alert("Error in Entered Data")
}

  
});


 


/// --------------------------------------------------------------table-------------------------------------------------