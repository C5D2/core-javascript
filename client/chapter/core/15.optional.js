/* -------------------------- */
/* Optional Chaining          */
/* -------------------------- */

const portableFan = {
  maker: "fromB",
  brand: "FD221",
  type: "neckband",
  photo: {
    static: "https://bit.ly/3OS50UD",
    animate: "https://bit.ly/3P8646q",
  },
  getFullName() {
    return `${this.brand}, ${this.maker}`;
  },
};

// 아래 코드는 문제가 있어 런타임 중 오류가 발생합니다.
// console.log(portableFan.photos.animate);

// 오류를 발생시키지 않으려면 아래와 같이 작성해야 합니다.
// if ('photos' in portableFan) {
//   if ('animate' in portableFan.photos) {
//     console.log(portableFan.photos.animate);
//   }
// }

// 위 구문을 논리곱 연산자를 사용한 방식으로 변경해봅니다.
portableFan && portableFan.photos && portableFan.photos.animate;

// 위 구문을 옵셔널 체이닝을 사용한 구문으로 변경해봅니다.
portableFan.photos?.animate;

// 메서드 사용 시, 옵셔널 체이닝을 사용해봅니다.
const fullName = portableFan.getFullName?.();
// portableFan의 getFullName이라는 메서드가 있으면 실행시키고 없으면 실행시키지 마!

// 객체의 프로퍼티 접근 시, 옵셔널 체이닝을 사용해봅니다.

// web API(Application Programming Interface)

// sync(동기)) & async(비동기)
// 동기적으로 일처리되고 있는 코드에서 setTimeout을 작동해서 비동기적으로 일처리가 됨

// debounce throttle

// const timer = setTimeout(() => {
//   console.log(2);
// }, 3000);

// clearTimeout(timer);

// console.log(1);
// console.log(3);

let count = 0;

const timer = setInterval(() => {
  //   console.log(++count);

  if (count === 100) {
    clearInterval(timer);
  }
}, 10);

const button = document.querySelector(".click");

setTimeout(() => {
  const template =
    /* html */
    `<button type="button" class="click">click</button>`;
  document.body.insertAdjacentHTML("beforeend", template);
}, 3000);

button?.addEventListener("click", () => {});

// requestAnimationFrame()
