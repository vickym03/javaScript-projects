const submitElement = document.getElementById('submit')
submitElement.addEventListener('click', function () {

    
    const nameVal = document.getElementById('name').value
    const ageVal = document.getElementById('age').value
    const emailVal = document.getElementById('email').value
    const passwordVal = document.getElementById('password').value
    //    const agreeVal=document.getElementById('agree')
    const isNameValid = validateName(nameVal)
    const isAgeValid = validateAge(ageVal)
    const isEmailValid = validateEmail(emailVal)
    const isPasswordValid = validatePassword(passwordVal)

//     const radioButton1 = document.getElementById("inlineRadio1").value;
//     console.log(radioButton1)
// const radioButton2 = document.getElementById("inlineRadio2").value;
// const radioButton3 = document.getElementById("inlineRadio3").value;
    // const isGenderValid=validateGender();
    // validateGender()

    if (isNameValid && isAgeValid && isEmailValid && isPasswordValid ) {
        //&& (radioButton1.checked || radioButton2.checked || radioButton3.checked)
        alert('data valid');
        document.location.reload()
       // addRow();
       addData()
    }
    else {
        alert('invalid data')
    }
    // localStorage.setItem('formData',JSON.stringify(submitElement))

})

function validateName(name) {

    let char = /^[a-zA-Z]+$/;
    let num= /[0-9]/g;
    if (name && name.match(char)) {
        console.log(name);
        showNameError(false);
        return true
    }
    else {
        showNameError(true)
        return false;
    }
}

function showNameError(isNameError) {
    const ele = document.getElementById('nameerror')
    if (isNameError) {
        ele.style.display = 'block'
        document.getElementById("name").style.borderColor="red";
    } else {
        ele.innerText = ''
        ele.style.display = 'none'
        document.getElementById("name").style.borderColor="green";
    }
}

function validateAge(age) {
    if (age > 18 && age < 150) {
        console.log(age);
        showAgeError(false);
        return true
    }
    else {
        showAgeError(true)
        return false
    }
}

function showAgeError(isAgeError) {
    const ele = document.getElementById('ageerror')
    if (isAgeError) {
        ele.style.display = 'block'
        document.getElementById("age").style.borderColor="red";
    } else {
        ele.innerText = ''
        ele.style.display = 'none'
        document.getElementById("age").style.borderColor="green";

    }
}

function validateEmail(email) {
    let atPosition = email.indexOf("@")
    let dotPosition = email.lastIndexOf(".")
    if (atPosition > 1 && dotPosition > atPosition + 2 && dotPosition + 2 <= email.length) {
        console.log(email);
        showEmailError(false)
        return true
    }
    else {
        showEmailError(true)
        return false
    }
}

function showEmailError(isEmailError) {
    const ele = document.getElementById('emailerror')
    if (isEmailError) {
        ele.style.display = 'block'
        document.getElementById("email").style.borderColor="red";
    } else {
        ele.innerText = ''
        ele.style.display = 'none'
        document.getElementById("email").style.borderColor="green";
    }

}

function validatePassword(password) {
  
    if (password && password.length>6) {
        console.log(password);
        showPasswordError(false)
        return true;
    }
    else {
        showPasswordError(true)
        return false;
    }
}

function showPasswordError(isPassworError) {
    const ele = document.getElementById('passworderror')        

    if (isPassworError) {
        ele.style.display = 'block'
        document.getElementById("password").style.borderColor="red";
    } else {
        ele.innerText = ''
        ele.style.display = 'none'
        document.getElementById("password").style.borderColor="green";
    }

}

// gender -radio



// if (radioButton1.checked||radioButton2.checked||radioButton3.checked) {
//   radioButton(true);
// } else {
//   radioButton(false);
// }

// function radioButton(radioSelect) {
//   const radioButton = document.getElementById("RadioButtonShow");
//   document.getElementById("inlineRadio1").style.borderColor="red";
//   if (radioSelect) {
//     radioButton.style.display = "none";


//   } else {
//     radioButton.style.display = "block";
//   }
// }

// let employeeData = []
// function addRow(){
//     let employee= {

//     }
   
    
//     employee.name = document.getElementById('name').value
//     employee.age = document.getElementById('age').value
//     employee.email= document.getElementById('email').value
//     employee.password= document.getElementById('password').value
//     employeeData.push(employee) 
//     localStorage.setItem('employeeData',JSON.stringify(employeeData))

//     const stringEmployee = localStorage.getItem('employeeData')
//     const localEmployeeData = JSON.parse(stringEmployee)
   
// }


// let x=0;
// let n=1;

// let list1=[];
// let list2=[];
// let list3=[];
// let list4=[];


// function addRow(){
//     let addRow = document.getElementById("show")
//     let newRow = addRow.insertRow(n);
//     list1[x]= document.getElementById('name').value
//     list2[x]= document.getElementById('age').value
//     list3[x]= document.getElementById('email').value
//     list4[x]= document.getElementById('password').value

//     let cel1=newRow.insertCell(0);
//     let cel2=newRow.insertCell(1);
//     let cel3=newRow.insertCell(2);
//     let cel4=newRow.insertCell(3);


//     cel1.innerHTML=list1[x];
//     cel2.innerHTML=list2[x];
//     cel3.innerHTML=list3[x];
//     cel4.innerHTML=list4[x];

//     x++
//     n++

    
// }

let arr = new Array()
function addData(){
  

    arr.push({
        name:document.getElementById('name').value,
        age:document.getElementById('age').value,
        email:document.getElementById('email').value,
        password:document.getElementById('password').value , 
        // inlineRadio1:document.getElementById('inlineRadio1').value,    
        // inlineRadio2:document.getElementById('inlineRadio2').value,    
        // inlineRadio3:document.getElementById('inlineRadio3').value        
    })
    localStorage.setItem('localStorage',JSON.stringify(arr));
    showData();

}
function getData(){
    let str = localStorage.getItem('localStorage')
    if(str !=null)
    arr = JSON.parse(str)
}

function showData(){
    let table = document.getElementById('show').getElementsByTagName('tbody')[0];
    getData()
    let newRow = table.insertRow(table.length)
    let x=table.rows.length; 
    while(--x){
        table.deleteRow(x)
    }
    for(i=0;i<arr.length;i++){
    let newRow = table.insertRow(table.length)
    cell1 = newRow.insertCell(0)
    cell1.innerHTML = arr[i].name;

    cell2 = newRow.insertCell(1)
    cell2.innerHTML = arr[i].age;

    cell3 = newRow.insertCell(2)
    cell3.innerHTML = arr[i].email;

    cell4 = newRow.insertCell(3)
    cell4.innerHTML = arr[i].password;

    // cell5 = newRow.insertCell(3)
    // cell5.innerHTML = arr[i].inlineRadio1;
    }
}
showData();

function deleteLocal(){
    localStorage.clear()
    document.location.reload()
}


