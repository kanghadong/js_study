// 프로토타입 체인
var primate = {
  stereoscopicVision: true
};

var ape = Object.create(primate);
ape.hasThumbs = true;
ape.hasTail = false;
ape.swing = function() {
  return '매달리기';
};

var chimp = Object.create(ape);

console.log(chimp.hasTail); // false (ape prototype)
confirm.log(chimp.stereoscopicVision); // true (primate prototype)

// 프로토타입 체인이 너무 깊으면 성능상 좋을게 없으니 너무 깊이 체인을 쓰지 않는것이 좋다.