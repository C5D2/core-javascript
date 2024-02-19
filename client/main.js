/* global gsap */

import {
  delayP,
  dragon,
  getNode as $,
  changeColor,
  renderSpinner,
  renderUserCard,
  renderEmptyCard,
  clearContents,
} from "./lib/index.js";

/* -------------------------------------------- */
/*                    get 통신                    */
/* -------------------------------------------- */

const END_POINT = "http://localhost:3000/users";

// [phase-1]
// 1. user 데이터를 tiger 함수를 사용해 fetch 해주세요.
const response = await dragon.get(END_POINT);
const userCardInner = $(".user-card-inner");
// 2. 함수 안에 넣기(renderUserList)
// 3. html, css 붙여넣기
// 4. 유저 데이터를 화면에 렌더링
// - 유저 데이터(array) 순환하여 모든 아이템 뽑아내기(forEach)
// - 템플릿 변수 만들기(article)
// - template literal을 사용하여 데이터 집어넣기(보간 : interpolation)
// - insertLast 함수를 사용하여 화면에 렌더링하기

async function renderUserList() {
  renderSpinner(userCardInner);
  try {
    await delayP();

    gsap.to(".loadingSpinner", {
      opacity: 0,
      onComplete() {
        $(".loadingSpinner").remove();
      },
    });

    const response = await dragon.get(END_POINT);

    const userData = response.data;

    userData.forEach((user) => renderUserCard(userCardInner, user));
    changeColor(".user-card");
    gsap.from(".user-card", {
      x: 100,
      opacity: 0,
      stagger: 0.1,
    });
  } catch {
    renderEmptyCard(userCardInner);
  }
}

renderUserList();

/* -------------------------------------------- */
/*                   delete 통신                  */
/* -------------------------------------------- */

// [phase-2]
// delete 통신 이후
// 기존 유저의 목록 제거
// 유저 목록 fetch 이후 다시 렌더링

function handleDelete(e) {
  const button = e.target.closest("button");
  const article = e.target.closest("article");

  if (!button) return;
  const id = article.dataset.index.slice(5);

  //   tiger.delete() 미니 과제
  // dragon.delete(END_POINT + `/${id}`);
  dragon.delete(`${END_POINT}/${id}`).then(() => {
    clearContents(userCardInner);
    renderUserList();
  });

  // article의 dataset.index
}

userCardInner.addEventListener("click", handleDelete);

/* -------------------------------------------- */
/*                    post 통신                   */
/* -------------------------------------------- */

const createButton = $(".create");
const cancelButton = $(".cancel");
const doneButton = $(".done");

const handleCreate = () => {
  gsap.to(".pop", { autoAlpha: 1 });
};

const handleCancel = (e) => {
  e.stopPropagation();
  gsap.to(".pop", { autoAlpha: 0 });
};

const handleDone = (e) => {
  e.preventDefault(); // html 태그의 기본 동작 차단

  // name 값 가져오기
  // email 값 가져오기
  // website 값 가져오기

  const name = $("#nameField").value;
  const email = $("#emailField").value;
  const website = $("#siteField").value;

  // post 통신

  // - 1. name, email, website 담고 있는 객체를 생성
  const obj = {
    name,
    email,
    website,
  };

  // - 2. post 통신의 body에 객체 전달
  dragon.post(END_POINT, obj).then(() => {
    // - 3. 유저 목록 지우기 (clearContents)
    clearContents(userCardInner);

    // - 4. 유저 목록 렌더링하기(renderUserList)
    renderUserList();

    // - 5. 팝업창 닫기
    gsap.to(".pop", { autoAlpha: 0 });
    // handleCancel(e);
  });
};

createButton.addEventListener("click", handleCreate);
cancelButton.addEventListener("click", handleCancel);
doneButton.addEventListener("click", handleDone);
