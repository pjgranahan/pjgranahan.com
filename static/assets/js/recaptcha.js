function invokeChallenge() {
    alert("invoking challenge");

    // Check if contact info exists in cookies
    var contactInfo = Cookies.getJSON(CONTACT_INFO_COOKIE_NAME);
    if (contactInfo === undefined) {
        grecaptcha.render("contactInfo", {sitekey: "{{ .Site.Params.RecaptchaSiteKey }}", size: "compact", callback: "onSuccessfulValidation"});
    } else {
        substituteContactInfo(contactInfo)
    }

    return false;
}

function onSuccessfulValidation(token) {
    alert(token);

    // Adapted from http://stackoverflow.com/a/9713078/3394807
    var http = new XMLHttpRequest();
    var url = "https://api.pjgranahan.com/site/recaptcha/verify";
    var body = JSON.stringify({"g-captcha-response": token});
    http.open("POST", url, true);

    //Send the proper header information along with the request
    http.setRequestHeader("Content-type", "application/json");

    http.onreadystatechange = function() {//Call a function when the state changes.
        if(http.readyState == 4 && http.status == 200) {
            alert(http.responseText);
            var contactInfo = JSON.parse(http.responseText);
            Cookies.set(CONTACT_INFO_COOKIE_NAME, contactInfo, { expires: 7, path: '', domain: 'www.pjgranahan.com', secure: true });
            substituteContactInfo(contactInfo);
        }
    };
    http.send(body);
}

function substituteContactInfo(contactInfo) {
        // Grab email address 'a' tag and populate its link and text
    var emailAddressLink = document.getElementById('email_address');
    emailAddressLink.href = "mailto:" + contactInfo.email_address;
    emailAddressLink.innerHTML = contactInfo.email_address;

    // Grab phone number 'a' tag and populate its link and text
    var phoneNumberLink = document.getElementById('phone_number');
    phoneNumberLink.href = "tel:" + contactInfo.phone_number;
    phoneNumberLink.innerHTML = contactInfo.phone_number;
}

var CONTACT_INFO_COOKIE_NAME = "contactInfo";

window.onload = function () {
    var contactInfo = document.getElementById("contactInfo");
    contactInfo.onclick = invokeChallenge;
};