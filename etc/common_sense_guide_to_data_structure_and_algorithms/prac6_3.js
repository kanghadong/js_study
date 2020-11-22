function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let position = i;
    let tempValue = array[i];

    while(position > 0 && array[position - 1] > tempValue) {
      array[position] = array[position - 1];
      position = position -1;
    }
    array[position] = tempValue;
  }
}

const array = [2, 4, 7, 1, 3];
insertionSort(array);

console.log(array);