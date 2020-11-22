// 이차 문제
function hasDuplicateValue(array) {
  let steps = 0;

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      steps++;

      if (i !== j && array[i] === array[j]) {
        return true;
      }
    }
  }

  console.log(steps);
  return false;
}

hasDuplicateValue([1,2,3,4,5,6]);