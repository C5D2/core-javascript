function earth() {
  let water = true;
  let apple = {
    founder: "steve jobs",
    ceo: "tim cook",
    product: ["iphone", "ipad", "macbook"],
  };

  //   function tiger(value) {
  //     water = value;
  //     // return water;
  //     // return apple;
  //   }

  //   return tiger;

  return function (value) {
    water = value;
  };
}

earth();

const UFO = earth();

UFO(0); // water = 0;
// UFO().ceo;

// function earth(){

//     let water = true;

//     let apple = {
//       founder:'Steve Jobs',
//       ceo:'Tim Cook',
//       product: ['iphone','macbook','macStudio','appleWatch']
//     }

//     return function (value){
//       water = value
//       // return apple
//     }
//   }

//   const UFO = earth()

//   UFO(0)

/* ----- -------------------------------- ----- */

// 도대체 어디에 쓰는 건가요?
const first = document.querySelector(".first");

// function handleClick() {
//   let isClicked = false;
//   return () => {
//     if (!isClicked) {
//       document.body.style.background = "orange";
//     } else {
//       document.body.style.background = "white";
//     }
//     isClicked = !isClicked;
//   };
// }
// first.addEventListener("click", handleClick());

// IIFE 즉시 실행 함수
const handleClick = (() => {
  let isClicked = false;

  return function () {
    if (!isClicked) {
      document.body.style.background = "orange";
    } else {
      document.body.style.background = "white";
    }

    isClicked = !isClicked;
  };
})();

first.addEventListener("click", handleClick);

function useState(initValue) {
  let value = initValue;

  function read() {
    return value;
  }

  function write(newValue) {
    value = newValue;
  }

  return [read, write];
}

const [state, setState] = useState(111);

// const read = state(111)[0];
// const write = state()[1];
