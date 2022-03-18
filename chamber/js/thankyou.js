const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const formType = urlParams.get('formType');
const submitDate = urlParams.get('currentDate');

if(formType == 1){
    document.querySelector('#thankyou-message').innerHTML = `Welcome to this great community! We received your application on at <b><i>${submitDate}</i></b> and it's in revision.<br>We will contact you shortly.`;
} else if(formType == 2){
    document.querySelector('#thankyou-message').innerHTML = `We received your message on at <b><i>${submitDate}</i></b>.<br>You will be contacted shortly by a consultant, stay alert.`;
}