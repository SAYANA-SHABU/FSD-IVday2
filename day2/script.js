document.getElementById('myForm').addEventListener('submit',
function(event){
    event.preventDefault();
    let emailError  ='';
    let phoneError ='';
    let passwordError ='';

//email validation
    const  email=document.getElementById('email').value;
    const emailPattern =/^([A-Za-z0-9\.-]+)@([a-z0-9\.-]+).([a-z{2,3}])(.[a-z]{2,3})?$/;

if(!emailPattern.test(email)){
    emailError='Please enter a valid Email address';
}
//phone validation
const phone = document.getElementById('phone').value;
const phonePattern = /^\d{10}$/;
if(!phonePattern.test(phone)){
    phoneError = "Please Enter a 10 digit phone number";

}
//password validation
const password = document.getElementById('password').value;
if(password.length<6){
    passwordError = "password should be atleast 6 characters long";

}
//password Error message
document.getElementById('emailError').textContent = emailError;
document.getElementById('phoneError').textContent =phoneError;
document.getElementById('passwordError').textContent = passwordError;
//submit form if no errors

if(!emailError && !passwordError && !passwordError){
    alert('form submitted successfully')
}
});
