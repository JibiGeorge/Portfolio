// Sticky Navbar
let header = document.querySelector('header');
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});

menu.onclick = () => {
    navbar.classList.toggle('active');
}
window.onscroll = () => {
    navbar.classList.remove('active');
}

// Dark Mode
let darkmode = document.querySelector('#darkmode');

darkmode.onclick = () => {
    if (darkmode.classList.contains('bx-moon')) {
        darkmode.classList.replace('bx-moon', 'bx-sun');
        document.body.classList.add('active');
    } else {
        darkmode.classList.replace('bx-sun', 'bx-moon');
        document.body.classList.remove('active');
    }
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbxmZxFaHV7gZRjV4hgf2yymqp0TsqoQ3KlUh1yjF3XK-QBmbT5gy7k7IU4xzxSq12Tx/exec'
const form = document.forms['contactform']

form.addEventListener('submit', e => {
    e.preventDefault();
    validate();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => alert("Thank you! your form is submitted successfully."))
        .then(() => { window.location.reload(); })
        .catch(error => console.error('Error!', error.message))
});

//Form Validation
function validate() {
    var name = document.forms.contactform.Name.value;
    var email = document.forms.contactform.Email.value;
    var message = document.forms.contactform.Message.value;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    //Name Validation
    if (name == "") {
        window.alert("Name is Required");
        name.focus();
        return false;
    } else if (name.length < 8) {
        window.alert("Minimum 8 Charatcer");
        name.focus();
        return false;
    }
    //Email Validation
    if (email == "") {
        window.alert("Email is Required");
        email.focus();
        return false;
    } 
    // else if (email.match(mailformat)) {
    //     window.alert("Valid email address!");
    //     email.focus();
    //     return false;
    // }
    //Message box validation
    if (message == "") {
        window.alert("Message is Required to Sumbit form!...");
        message.focus();
        return false;
    }else if(message.length < 10){
        window.alert("Length is too Short! Atleast 10!....")
        message.focus();
        return false;
    }

    return true;

}

// const setError = (element, message) => {
//     const inputControl = element.parentElement;
//     const errorDisplay = inputControl.querySelector('.error');

//     errorDisplay.innerText = message;
//     inputControl.classList.add('error');
//     inputControl.classList.remove('success')
// }

// const setSuccess = element => {
//     const inputControl = element.parentElement;
//     const errorDisplay = inputControl.querySelector('.error');

//     errorDisplay.innerText = '';
//     inputControl.classList.add('success');
//     inputControl.classList.remove('error');
// };

// const isValidEmail = email => {
//     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
// }

// const validateInput = () =>{
//     const nameValue = yourName.value.trim();
//     const emailValue = email.value.trim();
//     const messageValue = message.value.trim();

//     if(nameValue === '') {
//         setError(yourName, 'Username is required');
//     } else {
//         setSuccess(yourName);
//     }
// }






