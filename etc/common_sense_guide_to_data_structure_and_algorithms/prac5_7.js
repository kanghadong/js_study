// O(N + (N/2)) => O(1.5N)
function makeEvenIndexArray1(array) {
  let newArray = [];

  array.forEach((item, index) => {
    if (index % 2 === 0) {
      newArray.push(item);
    }
  });

  return newArray;
}

console.log(makeEvenIndexArray1([1,2,3,4,5,6]));

// O(N/2 + N/2) => O(N)
function makeEvenIndexArray2(array) {
  let newArray = [];
  let index = 0;

  while(index < array.length) {
    newArray.push(array[index]);
    index+=2;
  }

  return newArray;
}
console.log(makeEvenIndexArray2([1,2,3,4,5,6]));