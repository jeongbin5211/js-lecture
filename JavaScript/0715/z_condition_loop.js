// 조건문과 반복문의 베스트 practice

//! 1. 조건문

// 자주하는 실수

//? == 대신 ===를 사용하지 않는 것
// 자바스크립트에서 == 연산자는 두 값을 비교할 때 타입 변환을 수행하지만
// === 연산자는 타입 변환이 없이 엄격하게 비교
// 예상치 못한 결과를 피하기 위해 === 연산자를 사용하는것이 더 좋습니다.

if (1 == "1") {
  // true, 타입 변환 발생
}

if (1 === "1") {
  // false, 타입 변환 발생안함
}

//? 조건문에서 불필요한 조건 사용
// if (x === true) 대신에 if (x)를 사용할 수 있습니다.

if (isValid === true) {
  // ...Worst
}

if (isValid) {
  // ...Best
}

// 부정 연산자 (!)사용

// if (x === false) 대신에 if (!x)를 사용할 수 있습니다.

//! 2. 반복문

// 자주하는 실수

//? 배열의 길이를 매 반복마다 계산하는 것
// 배열의 길이는 루프 바깥에서 한 번만 계산하는 것이 효율적

// 비효율적인 방법
for (let index = 0; index < array.length; index++) {

}

// 효율적인 방법
let length = array.length;
for (let index = 0; index < length; index++) {
  
}

// 추가 설명 //

// 가능하면 map, reduce, filter와 같은 고차 함수를 사용하세요. 이러한 함수는 코드를 더 간결하고 가독성 있게 만듭니다.

// 루프가 많은 양의 데이터를 처리해야하는 경우에는 웹 워커를 사용하여 메인쓰레드가 차단되는 것을 방지할 수 있습니다.

// 무한 루프를 방지하기 위해 반복문에 종료 조건을 명확하게 설정하세요.

// 이러한 지침을 따르면, 자바스크립트의 조건문과 반복문을 더 효과적으로 사용할 수 있습니다. 또한, 코드의 가독성과 유지 보수성이 향상됩니다.