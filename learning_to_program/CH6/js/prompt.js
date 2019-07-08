var userName = prompt('Hello, what\'s your name?');
var phoneNumber = prompt('Hello ' + userName + ', what\'s your phone number?');
var phoneNumberPattern = /(?:1-)?\(?\d{3}[\-\)]\d{3}-\d{4}/;

var output = '<h1>Hello, ' + userName + '!</h1>';

if (phoneNumberPattern.test(phoneNumber)) {
  output = output + '<p>' + kbValues.projectName + '  ' + kbValues.versionNumber + ' viewed on: ' + kbValues.currentTime + '</p>';
} else {
  output = output + '<h2>That phone number is invalid: ' + phoneNumber;
}

document.body.innerHTML = output;
