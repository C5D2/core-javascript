import { getNode, getRandom } from "./lib/index.js";
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

const submit = getNode("#submit");
const nameField = getNode("#nameField");
const result = getNode(".result");

getRandom(6);

function handleJujeob(e) {
  e.preventDefault();
  const name = nameField.value;
  const list = jujeobData(name);
  const pick = list[getRandom(list.length)];
  console.log(pick);
  result.textContent = "";
  result.insertAdjacentHTML("beforeend", pick);
}

submit.addEventListener("click", handleJujeob);

// [phase-2]
