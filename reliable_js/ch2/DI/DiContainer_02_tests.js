describe('DiContainer', function() {
  var container;

  beforeEach(function() {
    container = new DiContainer();
  });

  describe('register(name, dependencies, func)', function() {
    it('인자가 하나라도 빠졌거나 타입이 잘못되면 예외를 던진다', function() {
      var badArgs = [
        [],
        ['Name'],
        ['Name', ['Dependency1', 'Dependency2']],
        ['Name', function() {}],
        [1, ['a', 'b'], function() {}],
        ['Name', [1,2], function() {}],
        ['Name', ['a','b'], 'should be a functions']
      ];

      badArgs.forEach(function(args) {
        expect(function() {
          container.register.apply(container, args);
        }).toThrow();
      });
    });
  });

  describe('get(name)', function() {
    it('성명이 등록되어 있지 않으면 undefined를 반환한다.', function() {
      expect(container.get('notDefined')).toBeUndefined();
    });
  });
});