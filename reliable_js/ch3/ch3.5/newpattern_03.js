// new가 없을때 자동으로 new를 붙여 인스턴스를 만들어 반환하는 방법
function Marsupial(name, nocturnal) {
  if (! (this instanceof Marsupial)) {
    return new Marsupial(name, nocturnal);
  }

  this.name = name;
  this.isNorcturnal = nocturnal;
}

var slider = Marsupial('슬라이더', true);