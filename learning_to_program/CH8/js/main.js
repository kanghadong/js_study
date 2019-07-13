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