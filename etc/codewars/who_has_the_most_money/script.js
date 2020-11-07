class Student {
  constructor(name, fives, tens, twenties) {
    this.name = name;
    this.fives = fives;
    this.tens = tens;
    this.twenties = twenties;
  }
}

const andy = new Student("Andy", 0, 0, 2);
const stephen = new Student("Stephen", 0, 4, 0);

function getTotalMoney(student) {
  return student.fives * 5 + student.tens * 10 + student.twenties * 20;
};

function mostMoney(students) {
  if (students.length === 1) {
    return students[0].name;
  }

  let richStudent = students[0];
  let maxMoney = getTotalMoney(richStudent);
  let duplicateCount = 1;

  for (let i = 1; i < students.length; i++) {
    const totalMoney = getTotalMoney(students[i]);

    if (totalMoney > maxMoney) {
      richStudent = students[i];
      maxMoney = totalMoney;
      duplicateCount = 1;
    } else if (totalMoney === maxMoney) {
      duplicateCount++;
    }
  }

  if (students.length === duplicateCount) {
    return 'all';
  }

  return richStudent.name;
}