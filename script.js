
//Access each error message using thier ids

let error_1Name = document.getElementById('firstName-Error');
let emailName = document.getElementById('email-Error');
let phoneNumberError = document.getElementById('phoneNumber-Error');
let passWord = document.getElementById('password-Error');
let error_2Name = document.getElementById('secondName-Error');
let submitError = document.getElementById('submit-Error');

          //have used on keydown
           //create functions for each input field and their error messages
function validateFirstName(){
    let userName = document.getElementById('first-Name').value;

    if(userName.length == 0){
          error_1Name.innerHTML = "Name is required";
           error_1Name.style.color = "red";
          return false;
    }
    if(!userName.match(/^[A-Za-z]*$/)){
          error_1Name.innerHTML = "Name cannot contain digits";
           error_1Name.style.color = "red";
          return false;
    }

          error_1Name.innerHTML = "Isvalid proceedon";
          error_1Name.style.color = "darkgreen";
          return  true
}


function validateSecondName(){
    let userSirName = document.getElementById('second-Name').value;

    if(userSirName.length == 0){
          error_2Name.innerHTML = "Sir Name is required";
           error_2Name.style.color = "red";
           error_2Name.innerHTML = ""
          return false;
    }
    if(!userSirName.match(/^[A-Za-z]*$/)){
          error_2Name.innerHTML = "Sir Name cannot contain digits";
           error_2Name.style.color = "red";
          return false;
    }

          error_2Name.innerHTML = "Isvalid proceedon";
          error_2Name.style.color = "darkgreen";
             return  true;
}


function  validatePhoneNumber(){
    const phoneNumber = document.getElementById('phoneNumber').value;

    if(phoneNumber === ""){
       phoneNumberError.innerHTML = "Your phone number is required to sign in";
       phoneNumberError.style.color = "red";
       return false;
    }
    if(!phoneNumber.match(/^[0-9]*$/)){
        phoneNumberError.innerHTML = "Enter digits only please!";
        phoneNumberError.style.color = "red";
        return true;
    }
      phoneNumberError.innerHTML = "Is avalid phone number proceedon";
      phoneNumberError.style.color = "green";
      return true
}


function validateEmail () {
    let userEmail = document.getElementById('email-Name').value;
    if(userEmail == 0){
       emailName.innerHTML = "Your email is required to sign in";
       emailName.style.color = "red";
       return false;
    }
    if(!userEmail.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)){
        emailName.innerHTML = "Enter a valid email Address";
        emailName.style.color = "red";
        return false;
    }

          emailName.innerHTML = "Isvalid proceedon";
          emailName.style.color = "darkgreen";

          return  true;
}


function validatePassword(){
    let userPassword = document.getElementById('password-Name').value;
    if(userPassword == 0){
        passWord.innerHTML = "Enter your password to sign in";
        passWord.style.color = "red";
        return false;
    }
    if(userPassword.length < 6){
        passWord.innerHTML = "Your password is too short";
        passWord.style.color = "red";
        return false;
    }
    if(!userPassword.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{6,8}$/)){
        passWord.innerHTML = "password can be compromised  include atleast a digit , aspecial character,  lowwer and uppercase letters";
        passWord.style.color = "red";
        return false;
    }
        passWord.innerHTML = "Yes your password is strong and secure";
        passWord.style.color = "green";
        return true;
}
   //use on click event on a button
function submitForm() {
    if(!validateFirstName() || validatePassword() || validateEmail () || validatePhoneNumber() || validateSecondName()){
        submitError.innerHTML = "Oops! It looks like you've not filled in some requirements";
        setTimeout(() => {
           submitError.style.display = 'none'  
        }, 4000);
        submitError.style.color = "red";
        return false;
    }
        submitError.innerHTML = "Form submitted Successfully!";
        submitError.style.color = "green";
        return true;
}