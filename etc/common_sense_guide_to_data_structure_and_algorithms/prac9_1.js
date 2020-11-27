function countdown1(number) {
  for (let i = number; i >= 0; i--) {
    console.log(i);
  }
}

countdown1(10);

function countdown2(number) {
  console.log(number);
  if (number > 0) {
    countdown2(number -1);
  }
}

countdown2(10);