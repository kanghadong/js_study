// 프로토타입 상속

// 공유 프로토타입 ape
var ape = {
  hasThumbs: true,
  hasTail: false,
  swing: function() {
    return '매달리기';
  }
};

var chimp = Object.create(ape);

var bonobo = Object.create(ape);
bonobo.habitat = '중앙 아프리카';
console.log(bonobo.habitat);
console.log(bonobo.hasTail);
console.log(bonobo.swing());

// ape은 공유 프로퍼티여서 수정시 chimp, bonobo다 영향을 받음
ape.hasThumbs = false;
console.log(chimp.hasThumbs); // false
console.log(bonobo.hasThumbs); // false