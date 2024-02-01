/* ----------------------------- */
/* Prototype and inheritance     */
/* ----------------------------- */

// 프로토타입 상속(prototypal inheritance)을 사용하여 객체를 확장합니다.

// 여러가지 동물들을 키우는 게임 : 고양이,강아지,호랑이,사자,늑대,여우

// 동물 -> 호랑이 -> 어떤 호랑이

// getter setter

const animal = {
  legs: 4,
  tail: true,
  stomach: [],
  get eat() {
    return this.stomach;
  },
  set eat(food) {
    this.prey = food;
    this.stomach.push(food);
  },
};

const tiger = {
  pattern: "호랑이무늬",
  hunt(target) {
    this.prey = target;
    return `${target}에게 조용히 접근합니다.`;
  },
  __proto__: animal,
};

// tiger.__proto__ = animal;

const 백두산호랑이 = {
  color: "white",
  name: "백랑이",
  __proto__: tiger,
};

const 용마산호랑이 = {
  color: "greenyellow",
  name: "선돌이",
  __proto__: tiger,
};

// animal.setEat("과일");

// 생성자 함수

function Animal() {
  this.legs = 4;
  this.tail = true;
  this.stomach = [];

  this.getEat = function () {
    return this.stomach;
  };

  this.setEat = function (food) {
    this.prey = food;
    this.stomach.push(food);
  };
}

const a = new Animal();

function Tiger(name) {
  Animal.call(this);
  this.name = name;
  this.pattern = "호랑이무늬";
  this.hunt = function (target) {
    this.prey = target;
    return `${target}에게 천천히 접근한다.`;
  };
}

Tiger.bark = function () {
  return "어흥";
};

// Tiger.prototype = a // Animal.call(this)를 해도 되지만 이 경우는 상속이 아닌 능력을 다 가지게 되는 것

const 한라산호랑이 = new Tiger("한돌이");

// 생성자 함수는 객체를 리턴하면 객체를 보여줌, 그래서 return을 쓰지 않음

// call, apply, bind 함수의 메서드

// this를 전달해줄 수 있음

function sum(a, b) {
  console.log(this);
}

// 대신 실행함 매개변수 어떻게 받음?

// call과 apply는 바로 실행
// sum.call("a", 10, 20);
// this= 1, 뒤에 10, 20이 매개변수

// sum.apply("a, [10, 20]");
// apply는 매개변수를 배열로 전달해줘야 함

// bind는 나중에 실행

const aa = sum.bind("a", 10, 30);
// bind는 묶어만 두고 바로 실행하지 않음

// call은 this를 대신 전달해줄 수 있는 능력이 있음
// this를 강제로 바꿔버리는 게 call의 능력
