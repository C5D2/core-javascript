import { setStorage, getStorage, deleteStorage, getNode, clearContents } from "./lib/index.js";

// 1. textField의 값을 로컬스토리지에 저장해주세요.
// - Input.addEvent...

// 2. 페이지 로딩 시 바로 실행되는 함수 만들기 (IIFE)
// 3. 스토리지값을 가져와 textField에 넣기

const textField = getNode("#textField");
const clear = getNode('[data-name="clear"]');

const handleTextField = (e) => {
  const value = e.currentTarget.value;
  setStorage("text", value);
};

const handleClear = () => 
    deleteStorage("text").then(clearContents(textField))


textField.addEventListener("input", handleTextField);

clear.addEventListener(
  "click",
  handleClear)
  // function init() {
  //   console.log("init");
  // }

  // window.addEventListener("DOMContentLoaded", init);

  // IIFE
  // (() => {
  //   getStorage("text").then((res) => {
  //     textField.value = res;
  //   });
  // })();

  // IIAFE
  async () => {
    const data = await getStorage("text");
    textField.value = data;
  }
)();
