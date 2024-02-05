// querySelector

const idField = document.querySelector("#idField");
const submit = document.querySelector(".btn");

// eventListener
// 정규 표현식 넣고 맞는지 안 맞는지 확인할 것

function handleCheckId() {
  if (this.value === "hello") {
    console.log(this.value);
    idField.classList.remove("is-active");
  } else {
    console.log("error!");
    idField.classList.add("is-active");
  }
}

// 제출 눌렀을 때 조건이 충족되면 제출 페이지로 이동, 아니면 이벤트 막기
function handleSubmit(e) {
  e.preventDefault();
  console.log("제출!!");
}

idField.addEventListener("input", handleCheckId);
submit.addEventListener("click", handleSubmit);

// classList

// preventDefault
