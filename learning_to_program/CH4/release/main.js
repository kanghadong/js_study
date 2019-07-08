var projectName = 'kittenbook';
var versionName = '0.0.1';
var currentDate = new Date();

var currentTime = 
  currentDate.getFullYear() + '-' + 
  (currentDate.getMonth() + 1) + '-' + 
  currentDate.getDate() + 'at ' + 
  currentDate.getHours() + ':' + 
  currentDate.getMinutes() + ':' + 
  currentDate.getSeconds(); 
var username = prompt('Hello, what\'s your name?');
document.body.innerHTML = 
  '<h1>Hello, ' + username + '!</h1>' + 
  '<p>' + projectName + ' ' + versionName + 
  ' accessed on:' + currentTime + '</p>';
