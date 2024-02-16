/* global gsap */

import { dragon, insertLast } from "./lib/index.js";

const END_POINT = "https://jsonplaceholder.typicode.com/users";

// 1. user 데이터를 tiger 함수를 사용해 fetch 해주세요.
const response = await dragon.get(END_POINT);
console.log(response.data);

// 2. 함수 안에 넣기(renderUserList)
// 3. html, css 붙여넣기
// 4. 유저 데이터를 화면에 렌더링
// - 유저 데이터(array) 순환하여 모든 아이템 뽑아내기(forEach)
// - 템플릿 변수 만들기(article)
// - template literal을 사용하여 데이터 집어넣기(보간 : interpolation)
// - insertLast 함수를 사용하여 화면에 렌더링하기

async function renderUserList() {
  const response = await dragon.get(END_POINT);
  //   const array = { ...response.data };
  console.log(response.data);
  const userData = response.data;
  userData.forEach((item) => {
    return item;
  });

  const template = `<article class="user-card" data-index="user-1">
    <h3 class="user-name">${userData.name}</h3>
    <div class="user-resouce-info">
      <div>
        <a class="user-email" href="mailto:tiger@euid.dev"
          >${`email`}</a
        >
      </div>
      <div>
        <a
          class="user-website"
          href="http://tiger.com"
          target="_blank"
          rel="noopener noreferer"
          >${`address`}</a
        >
      </div>
    </div>
    <button class="delete">삭제</button>
  </article>`;

  insertLast(".user-card", template);
}

renderUserList();
