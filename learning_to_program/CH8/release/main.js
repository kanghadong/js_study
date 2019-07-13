var kbValues = {
  projectName: 'kittenbook',
  versionName: '0.0.1',
  areaCodes: {
    '408': 'Silicon Valley',
    '702': 'Las Vegas',
    '801': 'Northern Utah',
    '765': 'West Lafayette',
    '901': 'Memphis',
    '507': 'Rochester, MN'
  }
};

function getAreaCodes() {
  return kbValues.areaCodes;
}
function getUserName() {
  var userName = prompt('Hello, what\'s your name?');

  if (!userName) {
    userName = prompt('You didn\'t enter a name. Really, what\'s your name?');
  }

  return userName;
}

function getPhoneNumber(userName) {
  var phoneNumber = prompt('Hello ' + userName + ', what\'s your phone number?');

  if (!validatePhoneNumber(phoneNumber)) {
    phoneNumber = prompt('Please enter a valid phone number.');
  }

  return phoneNumber;
}

function validatePhoneNumber(phoneNumber) {
  return phoneNumber.match(/(?:1-)?\(?\d{3}[\-\)]\d{3}-\d{4}/);
}

function getLocation(phoneNumber) {
  var phoneNumberPattern = /(?:1-)?\(?\d{3}[\-\)]\d{3}-\d{4}/;
  var phoneMatches = phoneNumberPattern.exec(phoneNumber);
  var areaCodes, areaCode, locationName;

  if (phoneMatches) {
    areaCode = phoneMatches[1];
    areaCodes = getAreaCodes();
    locationName = areaCodes[areaCode];
  }

  return locationName? locationName : 'somewhere';
}

function getImages() {
  var images = document.querySelectorAll('div.userContentWrapper img, div.pinHolder img');
  return images;
}
function getImageHeight(image) {
  return image.height;
}

function getImageWidth(image) {
  return image.width;
}

function replaceImages(images, location) {
  var baseImageUrl, height, width, image;

  switch(location) {
    case 'Memphis':
      baseImageUrl = 'http://placepuppy.it/';
      break;
    default:
      baseImageUrl = 'http://placekitten.com/g/';
      break;
  }

  for (var i = 0, len = image.length; i < len; i++) {
    image = images[i];
    height = getImageHeight(image);
    width = getImageWidth(image);
    image.src = baseImageUrl + width + '/' + height;
  }
}
function main() {
  var userName = getUserName();
  var phoneNumber = getPhoneNumber(userName);
  var location = getLocation(phoneNumber);
  var images = getImages();

  setInterval(function() {
    images = getImages();
    replacesImages(images, location);
  }, 3000);
}