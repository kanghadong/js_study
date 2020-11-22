function linearSearch(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return value;
    } else if (array[i] > value) {
      console.log('해당 값 존재하지 않음');
      break;
    }
  }
}

const array = [3, 17, 75, 80, 202];
const value = 22;

console.log(linearSearch(array, value));