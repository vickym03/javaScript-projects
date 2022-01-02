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
    // const isGenderValid=validateGender();
    // validateGender()

    if (isNameValid && isAgeValid && isEmailValid && isPasswordValid) {
        alert('data valid');
        addRow();
    }
    else {
        alert('invalid data')
    }

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
        document.getElementById("name").style.borderColor="red";
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
        document.getElementById("email").style.borderColor="red";
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


let x=0;
let n=1;

let list1=[];
let list2=[];
let list3=[];
let list4=[];


function addRow(){
    let addRow = document.getElementById("show")
    let newRow = addRow.insertRow(n);
    list1[x]= document.getElementById('name').value
    list2[x]= document.getElementById('age').value
    list3[x]= document.getElementById('email').value
    list4[x]= document.getElementById('password').value

    let cel1=newRow.insertCell(0);
    let cel2=newRow.insertCell(1);
    let cel3=newRow.insertCell(2);
    let cel4=newRow.insertCell(3);


    cel1.innerHTML=list1[x];
    cel2.innerHTML=list2[x];
    cel3.innerHTML=list3[x];
    cel4.innerHTML=list4[x];

    x++
    n++
}