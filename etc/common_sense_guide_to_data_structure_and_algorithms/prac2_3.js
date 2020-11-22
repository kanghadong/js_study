function binarySearch(array, value) {
  let lowerBound = 0;
  let upperBound = array.length - 1;
  let result = 0;
  
  while (lowerBound <= upperBound) {
    let midPoint = (upperBound + lowerBound) / 2;
    midPoint = parseInt(midPoint, 10);

    valueOfMidPoint = array[midPoint];

    if (value < valueOfMidPoint) {
      upperBound = midPoint - 1;
    } else if (value > valueOfMidPoint) {
      lowerBound = midPoint + 1;
    } else if (value === valueOfMidPoint) {
      result = midPoint;
      break;
    }
  }

  return result;
}

const array = [1,2,3,4,5,6,7,8,9];
const value = 3;

console.log('index of binary search 3: ', binarySearch(array, value));