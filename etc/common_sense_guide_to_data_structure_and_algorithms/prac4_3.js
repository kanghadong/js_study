function bubbleSort(list) {
  let unsortedUntilIndex = list.length - 1;
  let sorted = false;

  while (!sorted) {
    sorted = true;

    for (let i = 0; i < unsortedUntilIndex; i++) {
      if (list[i] > list[i + 1]) {
        sorted = false;
        let temp = list[i + 1];
        list[i + 1] = list[i];
        list[i] = temp;
      }
    }
    unsortedUntilIndex = unsortedUntilIndex - 1;
  }
}

const list = [65, 55, 45, 35, 25, 15, 10];
bubbleSort(list);

console.log(list);