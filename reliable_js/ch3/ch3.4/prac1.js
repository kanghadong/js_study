var chimp = {
  hasThumbs: true,
  swing: function() {
    return '나무 꼭대기에 대롱대롱 매달려 있네요.';
  }
};

chimp.toString();
// toString()은 chimp객체에 없지만, 
// chimp의 prototype인 Object.prototype을 찾아보고 여기에 정의된 toString을 발견, 실행한다.