// setStorage()

import { isString } from "./typeOf.js";

// 윈도우 객체에서 구조분해 할당으로 localStorage를 가져옴
const { localStorage: storage } = window;

export function setStorage(key, value) {
  return new Promise((resolve, reject) => {
    if (isString(key)) {
      storage.setItem(key, JSON.stringify(value));
      resolve();
    } else {
      reject({ message: "key는 문자 타입이어야 합니다." });
    }
  });
}

export function getStorage(key) {
  return new Promise((resolve, reject) => {
    if (isString(key)) {
      resolve(JSON.parse(storage.getItem(key)));
    } else {
      reject({ message: "key는 문자 타입이어야 합니다." });
    }
  });
}

// const data = await getStorage("user");
// console.log(data); // {name: "tiger"}

// getStorage("user").then((res) => {
//   console.log(res);
// });

// getStorage("user")

// setStorage("user", { name: "tiger" }).then(() => {
//   storage.getItem("user").toUpperCase();
// });

// storage.getItem("user");

// localStorage.setItem("user", JSON.stringify({ name: "nara", age: 35 }));

// console.log(JSON.parse(localStorage.getItem("user")));

// storage.removeItem("user")
// storage.clear();

export function deleteStorage(key) {
  return new Promise((resolve, reject) => {
    !key ? storage.clear() : storage.removeItem(key);
    resolve();
  });
}

// deleteStorage("user"); // user data delete
// deleteStorage(); // all data delete
