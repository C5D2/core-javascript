import {
  shake,
  addClass,
  clearContents,
  showAlert,
  getNode,
  getRandom,
  insertLast,
  isNumericString,
  removeClass,
  copy,
} from "./lib/index.js";
import jujeobData from "./data/data.js";

//  [phase-1]
// 1. 주접 떨기 버튼을 클릭할 수 있는 핸들러를 연결해 주세요.
// -button click addEventListener
// 2. input 값을 (콘솔에)가져와 주세요.
// 3. jujeob 데이터를 가져오기
// 4. jujeobData 함수에 input.value를 넣어주세요
// 5. 랜덤한 주접 한개를 pick
// - jujeobData => return
// - array => array[] + getRandom(n)
// 6. pick을 result에 렌더링해주세요.
// - result 내용 비우기(clearContents, node.textContent = "")
// - pick text => insertAdjacentHTML("beforeend", text), insertLast()

// [phase-2]
// 1. 아무 값도 입력 받지 못했을 때 예외처리(alert)
// 2. 공백 문자를 받았을 때 예외처리(alert)
// - String.prototype.replace + regExp
// 3. 숫자형 문자를 받았을 때 예외처리(alert)

const submit = getNode("#submit");
const nameField = getNode("#nameField");
const result = getNode(".result");

function handleJujeob(e) {
  e.preventDefault();
  const name = nameField.value;
  const list = jujeobData(name);
  const pick = list[getRandom(list.length)];
  //   console.log(pick);
  //   result.textContent = "";
  //   result.insertAdjacentHTML("beforeend", pick);

  if (!name || name.replace(/\s*/g, "") === "") {
    // alert-error에게 is-active 클래스 추가
    // 2초 뒤에 alert-error에게 is-active 클래스 제거
    showAlert(".alert-error", "이름을 입력해주세요");
    shake.restart(); // restart()는 gsap이 가지고 있는 메서드
    return;
  }

  // const errorMessage = getNode(".alert-error");
  // errorMessage.classList.add("is-active");
  // setTimeout(() => {
  //   errorMessage.classList.remove("is-active");
  // }, 2000);
  if (!isNumericString(name)) {
    showAlert(".alert-error", "제대로 된 이름을 입력해주세요.");
    return;
  }

  clearContents(result);
  insertLast(result, pick);
}

function handleCopy() {
  const text = this.textContent;

  if (!nameField.value) return;

  copy.then(() => {
    showAlert(".alert-success", "클립보드 복사 완료!!");
  });
}

submit.addEventListener("click", handleJujeob);
result.addEventListener("click", handleCopy);
