const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const formType = urlParams.get('formType');
const submitDate = urlParams.get('currentDate');

if(formType == 1){
    /*
    ?formType=1&currentDate=4%2F7%2F2022+4%3A28%3A0&name=Eduardo+Prieto&email=eprieto.borja%40gmail.com&phone=933302697&numRooms=1&checkIn=2022-04-22&checkOut=2022-04-29&additional=dqweasd+qweasd+qweasdqwe+
    */
    const name = urlParams.get('name');
    const email = urlParams.get('email');
    const phone = urlParams.get('phone');
    const numRooms = urlParams.get('numRooms');
    const checkIn = urlParams.get('checkIn');
    const checkOut = urlParams.get('checkOut');
    const additional = urlParams.get('additional');

    document.querySelector('#reservation-date').innerHTML = submitDate;
    document.querySelector('#reservation-name').innerHTML = name;
    document.querySelector('#reservation-email').innerHTML = email;
    document.querySelector('#reservation-phone').innerHTML = phone;
    document.querySelector('#reservation-rooms').innerHTML = numRooms;
    document.querySelector('#reservation-checkin').innerHTML = checkIn;
    document.querySelector('#reservation-checkout').innerHTML = checkOut;
    document.querySelector('#reservation-additional').innerHTML = additional;

    document.querySelector('#reservation').classList.add('active');

} else if(formType == 2){
    /*
    ?formType=2&currentDate=4%2F7%2F2022+4%3A40%3A2&name=Eduardo+ELÍAS+Borja&email=ilumina.test%40mail.com&concern=dqdasd+qweasd+qweasd+qweasdqwe+asdqweasd+qwe+adsqwe+
    */
    const name = urlParams.get('name');
    const email = urlParams.get('email');
    const concern = urlParams.get('concern');

    document.querySelector('#contact-date').innerHTML = submitDate;
    document.querySelector('#contact-name').innerHTML = name;
    document.querySelector('#contact-email').innerHTML = email;
    document.querySelector('#contact-concern').innerHTML = concern;

    document.querySelector('#contact').classList.add('active');
}