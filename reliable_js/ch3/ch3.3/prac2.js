// 싱글톤 모듈
var MyApp = MyApp || {};

MyApp.wildlifePreserveSimulator = (function() {
  var animals = [];

  return {
    addAnimal: function(animalMaker, species, sex) {
      animals.push(animalMaker.make(species, sex));
    },
    getAnimalCount: function() {
      return animals.length;
    }
  };
}()); // <- 즉시 실행됨!


// 사용 예
MyApp.wildlifePreserveSimulator.addAnimal(realAnimalMaker, gorilla, female);