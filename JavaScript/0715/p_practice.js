// 구구단 만들기 //

// 1 ~ 9 단
// 중첩된 for문 사용
// 첫 번째 루트 : 구구단이 몇 단인지 반복
// 두 번째 루트 : 각 구구단이 실제 연산되는 반복

// 브라우저 출력
// 템플릿 문자열 (``)

// let dan = prompt('원하는 단을 입력하세요');

// for (let index = 1; index < 10; index++) {
//   document.write(`${dan} * ${index} = ${dan * index}<br />`);
// };

for (let dan = 1; dan < 10; dan++) {
  document.write(`${dan}단<br/>`);
    for (let index = 1; index < 10; index++) {
      document.write(`${dan} * ${index} = ${dan * index}<br />`);
    };
};