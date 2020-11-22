function intersection(firstArray, secondArray) {
  let result = [];

  for (let i = 0; i < firstArray.length; i++) {
    for (let j = 0; j < firstArray.length; j++) {
      if (firstArray[i] === secondArray[j]) {
        result.push(firstArray[i]);
        break;
      }
    }
  }

  return result;
}

console.log(intersection([3,1,4,2], [4,5,3,6]));