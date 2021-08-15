//Fields OF DOM;
let FORM_DIV = document.getElementsByClassName('ib2')[0];
let FIRST_NAME = document.getElementById('first-name');
let LAST_NAME = document.getElementById('last-name');
let USER_NAME = document.getElementById('username');
let EMAIL_EL = document.getElementById('email');
let PASSWORD = document.getElementById('password');
let CONFIRM_PASSWORD = document.getElementById('confirm-password');
let HEADING1 = document.getElementsByTagName('h1')[0];
let LOGIN = document.getElementById('logIn');
let SIGNUP_REF = document.getElementById('sigup-ref');
let signUpLINK = document.getElementById('Siguplink').addEventListener('focus',()=>{Sign_UP_REF();});
let signUpButton = document.getElementById('SignupSection').addEventListener("click",()=>{Sign_UP_REF();});

let logInButton = document.getElementById('LoginSection').addEventListener("click",()=>{
    HEADING1.innerText = "Login";
    FORM_DIV.classList.replace('signuptop','ib2');
    FIRST_NAME.style.display = "none";
    LAST_NAME.style.display = "none";
    USER_NAME.style.display = "none";
    CONFIRM_PASSWORD.style.display = "none";
    LOGIN.classList.remove('mb-5');
    SIGNUP_REF.style.display = "block";
    LOGIN.innerText = "Login";
});
LOGIN.addEventListener("click",function(){
    if(LOGIN.innerHTML=='Login'){
     IsEmptyFUNCTION()  
    }
    else if(arguments){}
});
function IsEmptyFUNCTION(){
    if(LOGIN.value=="" || PASSWORD.value=="")
       return true;
    
    else   {}
}
function Sign_UP_REF(){
    HEADING1.innerText = "Signup";
    FORM_DIV.classList.replace('ib2','signuptop');
    FIRST_NAME.style.display = "block";
    LAST_NAME.style.display = "block";
    USER_NAME.style.display = "block";
    CONFIRM_PASSWORD.style.display = "block";
    SIGNUP_REF.style.display = "none";
    LOGIN.classList.add('mb-5');
    LOGIN.innerText = "Signup";
}