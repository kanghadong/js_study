CallbackArrow = CallbackArrow || {};

CallbackArrow.rootFunction = function() {
  CallbackArrow.firstFunction(CallbackArrow.firstCallback);
};

CallbackArrow.firstFunction = function(callback1) {
  callback1(arg);
};

CallbackArrow.secondFunction = function(callback2) {
  callback2(arg);
};

CallbackArrow.thirdFunction = function(callback3) {
  callback3(arg);
};

CallbackArrow.fourthFunction = function(callback4) {
  callback4(arg);
};

CallbackArrow.firstCallback = function() {
  // 첫번째 콜백 로직
  CallbackArrow.secondFunction(CallbackArrow.secondCallback);
};

CallbackArrow.secondCallback = function() {
  // 두번째 콜백 로직
  CallbackArrow.thirdFunction(CallbackArrow.thirdCallback);
};

CallbackArrow.thirdCallback = function() {
  // 세번째 콜백 로직
  CallbackArrow.fourthFunction(CallbackArrow.fourthCallback);
};

CallbackArrow.fourthCallback = function() {
  // 네번째 콜백 로직
};

// 콜백함수마다 이름이 붙어있어 디버깅 스택 추적이 용이하며, 단위테스트도 가능하다.