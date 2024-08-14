const myForm = document.getElementById('myForm');
const fName = document.getElementById('firstName');
const lName = document.getElementById('lastName');
const email = document.getElementById('email');
const generalOption = document.querySelector('.generalOption');
const supportOption = document.querySelector('.supportOption');
const message = document.getElementById('message');
const consent = document.getElementById('consent');
const errorMessage = document.querySelector('.errorMessage');
const lastErrorMsg =document.querySelector('.lastErrorMsg');
const emailErrorMsg = document.querySelector('.emailErrorMsg');
const emailErrorMsg2 = document.querySelector('.emailErrorMsg2');
const queryErrorMsg = document.querySelector('.queryErrorMsg');
const msgErrorMsg = document.querySelector('.msgErrorMsg');
const consentErrorMsg = document.querySelector('.consentErrorMsg');
const generalQuery = document.querySelector('.generalQuery');
const supportQuery =  document.querySelector('.supportQuery');
const mainPage = document.getElementById('container');
const successMessage = document.getElementById('successContainer');

myForm.addEventListener('submit', (e) => {
    e.preventDefault();

//CHECK FIRST NAME
    if (fName.value === '') {
        fName.classList.add('error');
        errorMessage.style.display = 'block';
    } else {
        fName.classList.remove('error');
        errorMessage.style.display = 'none'
    };


//CHECK LAST NAME
    if (lName.value === '') {
        lName.classList.add('error');
        lastErrorMsg.style.display = 'block';
    } else {
        lName.classList.remove('error');
        lastErrorMsg.style.display = 'none';
    };


//CHECK EMAIL
    if (!email.value.match(/^(?!\s*$)([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/)) {
        email.classList.add('error');
        emailErrorMsg.style.display = 'block';
        emailErrorMsg2.style.display = 'none';
    } else {
        email.classList.remove('error');
        emailErrorMsg.style.display = 'none';
    };

    if (email.value === '') {
        email.classList.add('error');
        emailErrorMsg2.style.display = 'block';
        emailErrorMsg2.textContent = 'This field is required';
        emailErrorMsg.style.display = 'none';
    } else {
        email.classList.remove('error');
        emailErrorMsg2.style.display = 'none';
    };


// CHECK QUERY TYPES
    if (!generalOption.checked && !supportOption.checked) {
        queryErrorMsg.style.display = 'block';
    } else {
        queryErrorMsg.style.display = 'none';
    };


// CHECK MESSAGE
    if (message.value === '') {
        message.classList.add('errors');
        msgErrorMsg.style.display = 'block';
    } else {
        message.classList.remove('errors');
        msgErrorMsg.style.display = 'none';
    };

// CHECK CONSENT
    if (!consent.checked) {
        consentErrorMsg.style.display = 'block';
    } else {
        consentErrorMsg.style.display = 'none';
    };

// SHOW SUCCESS PAGE OR VALIDATE FORM
    if (fName.value !== '' && lName.value !== '' && email.value.match(/^(?!\s*$)([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/) && email.value !== '' && (supportOption.checked || generalOption.checked) && message.value !== '' && consent.checked ) {
        successMessage.style.display = 'block';
        generalQuery.classList.remove('active-focus');
        supportQuery.classList.remove('active-focus')
        myForm.reset();
        successMessage.classList.add('show');
    } else {
        successMessage.style.display = 'none';
    }
});


// QUERY FOCUS AND ACTIVE STATES
    generalOption.addEventListener('click', function() {
       if (generalOption.checked) {
            generalQuery.classList.add('active-focus');
            supportQuery.classList.remove('active-focus')
       } else {
            generalQuery.classList.remove('active-focus');
            supportQuery.classList.add('active-focus');
       }
    });

    supportOption.addEventListener('click', function() {
        if (supportOption.checked) {
            supportQuery.classList.add('active-focus');
            generalQuery.classList.remove('active-focus');
        } else {
            supportQuery.classList.remove('active-focus')
            generalQuery.classList.add('active-focus');
        }
    });


// REMOVE SUCCESS MESSAGE
    successMessage.addEventListener('click', (e) => {
        if (successMessage) {
            successMessage.style.display = 'none';
            location.reload();
        }
    })


/* myForm.addEventListener('submit', function(e) {
    e.preventDefault();

    let success = true
    if (fName.value === '') {
        fName.classList.add('error');
        errorMsg.style.display = 'block';
        success = false;
    } else {
        fName.classList.remove('error');
        errorMsg.style.display = 'none';
    }

    if (lName.value === '') {
        lName.classList.add('error');
        lastErrorMsg.style.display = 'block';
        success = false;
    } else {
        lName.classList.remove('error');
        lastErrorMsg.style.display = 'none';
    }

    if (!email.value.match(/^(?!\s*$)([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/)) {
        email.classList.add('error');
        emailErrorMsg.style.display = 'block';
        emailErrorMsg.textContent = 'Please enter a valid email address';
        success = false;
    }   else {
        email.classList.remove('error');
        emailErrorMsg.style.display = 'none';
    } ;

    if (email.value === '') {
            email.classList.add('error');
            emailErrorMsg.style.display = 'block';
            emailErrorMsg.textContent = 'This field is required';

            success = false;
    }   else  {
        email.classList.remove('error');
        emailErrorMsg.style.display = 'none';
    };

    if (!generalOption.checked && !supportOption.checked) {
        queryErrorMsg.style.display = 'block';
        success = false;
    };
    
    if (message.value === '') {
        message.classList.add('error');
        msgErrorMsg.style.display = 'block';
        success = false;
    }
    else {
        message.classList.remove('error');
        msgErrorMsg.style.display = 'none';
    }

   if (!consent.checked) {
        consentErrorMsg.style.display = 'block';
        success = false;
   } else {
        consentErrorMsg.style.display = 'none';
   }

    if (success) {
        successMessage.style.display = "block"
        generalQuery.classList.remove('active-focus');
        supportQuery.classList.remove('active-focus');
        myForm.reset();
    } else {
        successMessage.style.display = 'none'; 
    }
});*/