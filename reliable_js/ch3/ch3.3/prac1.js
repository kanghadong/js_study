// 임의 모듈 패턴
var MyApp = MyApp || {};

MyApp.wildlifePreserveSimulator = function(animalMaker) {
  var animals = [];

  return {
    addAnimal: function(species, sex) {
      animals.push(animalMaker.make(species, sex));
    },
    getAnimalCount: function() {
      return animals.length;
    }
  };
};


// 사용 예
var preserve = MyApp.wildlifePreserveSimulator(realAnimalMaker);
preserve.addAnimal(gorilla, female);