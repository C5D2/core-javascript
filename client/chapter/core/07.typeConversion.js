/* --------------------- */
/* Type Conversion       */
/* --------------------- */

/* 데이터 → 문자 ----------------------------------------------------------- */

// number
const YEAR = 2024; // YEAR 찐상수
console.log(String(YEAR)); // 명시적 형 변환
console.log(YEAR + ""); // 암시적 형 변환
// console.log((YEAR + "     ").trim()); //trim 공백 제거

// undefined, null
let days = null;
let weekend;

// 암시적 형 변환(문자형)
console.log(days + "");
console.log(weekend + "");

// boolean
let isClicked = false;
console.log(isClicked + ""); //false 문자형으로 변환

/* 데이터 → 숫자 ----------------------------------------------------------- */

// undefined
let friend;
console.log(Number(friend)); //결과 NaN

// null
let money = null;
console.log(Number(money)); //결과 숫자 0

// boolean
let cutie = true;
console.log(Number(cutie)); //결과 숫자 1

// string
let num = "250";
console.log(Number(num)); //결과 숫자 250, 명시적 형 변환
console.log(num * 1); //결과 숫자 250, 암시적 형 변환
console.log(num / 1);
console.log(+num);

// numeric string
const width = "105.3px";
console.log(Number(width)); //결과 NaN
console.log(parseInt(width)); //결과 숫자 105, 명시적 형 변환
console.log(parseFloat(width)); //결과 숫자 105.3, 명시적 형 변환

/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, ''
console.log(Boolean(friend)); // false
console.log(Boolean(money)); // false
console.log(Boolean(" ")); // true
console.log(Boolean(0)); // false
console.log(Boolean("0")); // true
// 빈문자 -> '' / 공백 문자 -> ' '

// 위에 나열한 것 이외의 것들
// const value = Number(prompt("값을 입력해주세요"));
// const value = prompt("값을 입력해주세요") / 1;
// const value = prompt("값을 입력해주세요") * 1;
const value = +prompt("값을 입력해주세요");
const numberValue = +value;

// console.log(Number(value) + 50); // 명시적 형 변환
// console.log(value * 1 + 50); // 암시적 형 변환
// console.log(value / 1 + 50);
console.log(+value + 50);
console.log(numberValue + 50);
