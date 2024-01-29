/* -------------------- */
/* Do While Loop        */
/* -------------------- */

// let i = 0;

// do {
//   console.log(i);
//   if (i === 2) {
//     console.log("2222");
//   }

//   i++;
// } while (i < 5);

// do ~ while 문 (역순환)
// - prompt 창을 띄워 사용자로 하여금 순환 횟수를 요청
// - 사용자로부터 요청된 횟수 만큼 역방향으로 순환 출력
// - 사용자로부터 요청된 횟수가 0보다 작을 경우,
//   '최초 실행된 메시지입니다. 이 메시지는 조건이 거짓이어도 볼 수 있습니다.' 출력
// - 순환 중단

// let loopCount = prompt("반복횟수를 입력해주세요.", 0);
// let i = loopCount;
// do {
//   console.log(i);
// } while (i--);

// let repeat = prompt("몇 번 반복하시겠습니까?", 0);
// do {
//   console.log(repeat);
// } while (repeat--);

// do ~ while 문 (순환)
// - 위 do ~ while 문을 순방향으로 순환되도록 설정

let first = document.querySelector(".first");

// do {
//   first = first.nextSibling;
// } while (first.nodeType !== document.ELEMENT_NODE);

// console.log(first);

function next(node) {
  if (typeof node === "string") {
    node = document.querySelector(node);
  }

  do {
    node = node.nextSibling;
  } while (node.nodeType !== 1);

  return node;
}

const second = next(first);

console.log(second);

function prev(node) {
  //   if (!node) throw new Error("선택된 ELEMENT의 이전 요소는 존재하지 않습니다.");

  if (typeof node === "string") {
    node = document.querySelector(node);
  }
  do {
    node = node.previousSibling;
  } while (node.nodeType !== 1);

  return node;
}

console.log(prev(".second"));
// prev(second);
