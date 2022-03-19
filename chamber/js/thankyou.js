const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const formType = urlParams.get('formType');
const submitDate = urlParams.get('currentDate');

let root = document.querySelector('#thankyou-container');

if(formType == 1){
    document.querySelector('#thankyou-message').innerHTML = `Welcome to this great community! We received your application on at <b><i>${submitDate}</i></b> and it's in revision.<br>We will contact you shortly.`;
    
    const firstName = urlParams.get('firstName');
    const lastName = urlParams.get('lastName');
    const email = urlParams.get('email');
    const phone = urlParams.get('phone');
    const businessPosition = urlParams.get('businessPosition');
    const businessName = urlParams.get('businessName');
    const businessDescription = urlParams.get('businessDescription');
    const membership = urlParams.get('membership');

    document.querySelector('#requestName').innerHTML = firstName;

    let tableInfo = document.createElement('table');
    tableInfo.classList.add('table-info');

    let nameRow = document.createElement('tr');
    let nameKeyCol = document.createElement('td');
    nameKeyCol.innerHTML = "FIRST NAME";
    let nameValueCol = document.createElement('td');
    nameValueCol.innerHTML = firstName;
    nameRow.append(nameKeyCol);
    nameRow.append(nameValueCol);
    
    let lastNameRow = document.createElement('tr');
    let lastNameKeyCol = document.createElement('td');
    lastNameKeyCol.innerHTML = "LAST NAME";
    let lastNameValueCol = document.createElement('td');
    lastNameValueCol.innerHTML = lastName;
    lastNameRow.append(lastNameKeyCol);
    lastNameRow.append(lastNameValueCol);
    
    let emailRow = document.createElement('tr');
    let emailKeyCol = document.createElement('td');
    emailKeyCol.innerHTML = "EMAIL";
    let emailValueCol = document.createElement('td');
    emailValueCol.innerHTML = email;
    emailRow.append(emailKeyCol);
    emailRow.append(emailValueCol);
    
    let phoneRow = document.createElement('tr');
    let phoneKeyCol = document.createElement('td');
    phoneKeyCol.innerHTML = "PHONE";
    let phoneValueCol = document.createElement('td');
    phoneValueCol.innerHTML = phone;
    phoneRow.append(phoneKeyCol);
    phoneRow.append(phoneValueCol);

    let businessPositionRow = document.createElement('tr');
    let businessPositionKeyCol = document.createElement('td');
    businessPositionKeyCol.innerHTML = "BUSINESS POSITION";
    let businessPositionValueCol = document.createElement('td');
    businessPositionValueCol.innerHTML = businessPosition;
    businessPositionRow.append(businessPositionKeyCol);
    businessPositionRow.append(businessPositionValueCol);
    
    let businessNameRow = document.createElement('tr');
    let businessNameKeyCol = document.createElement('td');
    businessNameKeyCol.innerHTML = "BUSINESS NAME";
    let businessNameValueCol = document.createElement('td');
    businessNameValueCol.innerHTML = businessName;
    businessNameRow.append(businessNameKeyCol);
    businessNameRow.append(businessNameValueCol);

    let businessDescriptionRow = document.createElement('tr');
    let businessDescriptionKeyCol = document.createElement('td');
    businessDescriptionKeyCol.innerHTML = "BUSINESS DESCRIPTION";
    let businessDescriptionValueCol = document.createElement('td');
    businessDescriptionValueCol.innerHTML = businessDescription;
    businessDescriptionRow.append(businessDescriptionKeyCol);
    businessDescriptionRow.append(businessDescriptionValueCol);
    
    let membershipRow = document.createElement('tr');
    let membershipKeyCol = document.createElement('td');
    membershipKeyCol.innerHTML = "MEMBERSHIP";
    let membershipValueCol = document.createElement('td');
    membershipValueCol.innerHTML = membership;
    membershipRow.append(membershipKeyCol);
    membershipRow.append(membershipValueCol);

    tableInfo.append(nameRow);
    tableInfo.append(lastNameRow);
    tableInfo.append(emailRow);
    tableInfo.append(businessPositionRow);
    tableInfo.append(businessNameRow);
    tableInfo.append(businessDescriptionRow);
    tableInfo.append(membershipRow);

    root.append(tableInfo);
    
} else if(formType == 2){
    document.querySelector('#thankyou-message').innerHTML = `We received your message on at <b><i>${submitDate}</i></b>.<br>You will be contacted shortly by a consultant, stay alert.`;

    const name = urlParams.get('name');
    const email = urlParams.get('email');
    const concern = urlParams.get('concern');

    document.querySelector('#requestName').innerHTML = name;

    let mailContainer = document.createElement('div');
    mailContainer.classList.add('mail-card');
    let headingTitle = document.createElement('h2');
    headingTitle.innerHTML = name;
    let headingSubTitle = document.createElement('h4');
    headingSubTitle.innerHTML = email;
    let divisor = document.createElement('div');
    divisor.classList.add('divisor');
    let mailContent = document.createElement('p');
    mailContent.innerHTML = concern;

    mailContainer.append(headingTitle);
    mailContainer.append(headingSubTitle);
    mailContainer.append(divisor);
    mailContainer.append(mailContent);

    root.append(mailContainer);
}