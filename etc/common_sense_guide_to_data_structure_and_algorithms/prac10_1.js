// Basic Quick Sort = Not in place (별도의 메모리 공간이 필요, stable한 정렬이 가능)
function quickSort(array) {
  if (array.length < 2) {
    return array;
  }

  const pivot = [array[0]];
  const left = [];
  const right = [];

  for (let i = 1; i < array.length; i++) {
    if (array[i] < pivot[0]) {
      left.push(array[i]);
    } else if (array[i] > pivot[0]) {
      right.push(array[i]);
    } else {
      pivot.push(array[i]);
    }
  }
  console.log(`left: ${left}, pivot: ${pivot}, right: ${right}`);
  return quickSort(left).concat(pivot, quickSort(right));
}

const sorted = quickSort([5,3,7,5,1,5,9]);
console.log(sorted);


// in place 방법
function quickSort2(array, left = 0, right = array.length - 1) {
  if (left >= right) {
    return;
  }

  const mid = Math.floor((left + right) / 2);
  const pivot = array[mid];
  const partition = divide(array, left, right, pivot);

  quickSort2(array, left, partition - 1);
  quickSort2(array, partition, right);

  function divide(array, left, right, pivot) {
    console.log(`array: ${array}, left: ${array[left]}, pivot: ${pivot}, right: ${array[right]}`);
    
    while(left <= right) {
      while(array[left] < pivot) {
        left++;
      }
      
      while(array[right] > pivot) {
        right--;
      }

      if (left <= right) {
        let swap = array[left];
        array[left] = array[right];
        array[right] = swap;
        left++;
        right--;
      }
    }
    return left;
  }

  return array;
}

const sorted2 = quickSort2([5,3,7,5,1,5,9]);
console.log(sorted2);
