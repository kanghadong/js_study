CallbackArrow = CallbackArrow || {};

CallbackArrow.rootFunction = function() {
  CallbackArrow.firstFunction(function(arg) {
    // 첫번째 콜백 로직
    CallbackArrow.secondFunction(function(arg) {
      // 두번째 콜백 로직
      CallbackArrow.thirdFunction(function(arg) {
        // 세번째 콜백 로직
        CallbackArrow.fourthFunction(function(arg) {
          // 네번째 콜백 로직
        });
      });
    });
  });
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

// 읽기도 어렵고 단위테스트도 사실상 불가능하다.