const mathCheckBox = document.getElementById("math");
const astroCheckBox = document.getElementById("astro");
const submitButton = document.getElementById("submit-button");
const subjectError = document.getElementById("incorrect-subject");
const classError = document.getElementById("incorrect-class");
const emailError = document.getElementById("incorrect-email");
const telError = document.getElementById("incorrect-tel");
const correctSubmit = document.getElementById("correct-submit");

const formObject = document.getElementById("the-form")
const schoolLevelObject = document.getElementById("school-level");
const classLevelObject = document.getElementById("class-level");
const emailInputObject = document.getElementById("email-input");
const telInputObject = document.getElementById("tel-input");

mathCheckBox.addEventListener('change',function(){
    if (mathCheckBox.checked==true){
        astroCheckBox.checked = false;
    }
});
astroCheckBox.addEventListener('change',function(){
    if (astroCheckBox.checked==true){
        mathCheckBox.checked = false;
    }
})
function proceed(){
    let OK = true;
    subjectError.style.display="none";
    classError.style.display="none";
    emailError.style.display = "none";
    telError.style.display = "none";
    correctSubmit.style.display = "none";

    if (!(mathCheckBox.checked || astroCheckBox.checked)){
        subjectError.style.display = "block";
        OK = false;
    }

    let chosenSchoolLevel = schoolLevelObject.value;
    let chosenClassLevel = Number(classLevelObject.value);
    if (chosenSchoolLevel=="secondary-school" && chosenClassLevel>4){
        classError.style.display = "block";
        OK = false;
    }

    let email = emailInputObject.value;
    if (!(validateEmail(email))){
        emailError.style.display = "block";
        OK = false;
    }

    let tel = telInputObject.value;
    if (!(validateTel(tel)) && !(tel.replaceAll(" ","")=="")){
        telError.style.display = "block";
        OK = false;
    }

    if (OK==true){
        correctSubmit.style.display = "block";
    }
    
}

function validateTel(tel){
    tel = tel.replaceAll(" ","");
    const telRegex1 = /^[0-9]{9}$/;
    const telRegex2 = /^[+][0-9]{11}$/;
    return (telRegex1.test(tel) || telRegex2.test(tel)); 
}

function validateEmail(email) {
    
    const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
  
    
    return emailRegex.test(email);
  }
formObject.addEventListener('submit',function(e){
    e.preventDefault();
    proceed();
})
