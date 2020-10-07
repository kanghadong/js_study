// js 언어만으로는 반드시 new를 써서 생성자 함수를 호출하게 할 도리가 없다.
// instanceof 연산자를 통해 우회적으로 강제할 수는 있다.
function Marsupial(name, nocturnal) {
  if (! (this instanceof Marsupial)) {
    throw new Error('이 객체는 new를 사용하여 생성해야 합니다.');
  }

  this.name = name;
  this.isNorcturnal = nocturnal;
}

var slider = Marsupial('슬라이더', true);