/* ------------------- */
/* Logical Operators   */
/* ------------------- */

let a = 10;
let b = "";
let value = Boolean(b); // false

// 논리곱(그리고) 연산자
let AandB = a && b;

console.log(AandB);

// 논리합(또는) 연산자
let AorB = a || b;
console.log(AorB);

// logical or assignment 논리합 할당 연산자
// a = a || b;
// a ||= b;

// let count = 10;
// count *= 10;
// count = count * 10;

// 부정 연산자
let reverseValue = !value;

// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy = true && " " && [] && { thisIsFalsy: false };
// 공백 true, 배열은 생성이 되는 순간부터 값이 있다고 판단 true, { thisIfFalsy: false }가 반환

// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy = false || "" || [2, 3].length || { thisIsFalsy: true };

// 상황
// 1. 사용자가 취소 버튼을 누른 경우 => null
// 2. 사용자가 ESC 버튼을 누른 경우 => null
// 3. 아무것도 입력하지 않았을 경우 => ""
// 4. 띄어쓰기를 입력한 경우 => " "
// 대소구문 없이 인증 가능하게 처리

// let admin = prompt(
//   "관리자 세계에 오신 것을 환영합니다. 키워드를 입력해주세요."
// );

// if (admin?.toLowerCase() === "admin") {
//   let password = prompt("비밀번호를 입력해주세요.");
//   if (password?.toLowerCase() === "themaster") {
//     alert("환영합니다!");
//   } else if (password.replace(/\s*/g, "") === "" || password === null) {
//     alert("취소되었습니다.");
//   } else {
//     alert("인증에 실패하였습니다.");
//   }
// } else if (admin.replace(/\s*/g, "") === "" || admin === null) {
//   alert("취소되었습니다.");
// } else {
//   alert("인증에 실패하였습니다.");
// }

function login() {
  let userName = prompt("아이디를 입력해 주세요");

  if (!userName) return; // 함수는 return 문을 만나면 해당 코드의 실행을 종료

  if (userName.toLowerCase() === "admin") {
    let password = prompt("비밀번호를 입력해 주세요.");

    if (password.toLowerCase() === "themaster") {
      console.log("로그인 성공! 환영합니다~!");
    } else {
      console.log("비밀번호를 잘못 입력하셨습니다.");
    }
  } else if (userName === null || userName.replace(/\s*/g, "") === "") {
    console.log("취소했습니다.");
  } else {
    console.log("올바른 사용자가 아닙니다!");
  }
}

// login();

function sum() {
  return 10 + 20;
}
