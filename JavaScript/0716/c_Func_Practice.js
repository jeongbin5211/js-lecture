//! 윤년인지 확인하는 함수

// 4로 나누어 떨어지는 해는 윤년이다
// 100으로 나누어 떨어지는 해는 윤년이 아니다
// 400으로 나누어 떨어지는 해는 윤년이다

// 실행 결과(console창)

// 2020년은 윤년일까?
// 2010년은 윤년일까?

function yoon(year) {
  if (year % 4 === 0) {
    console.log(`${year}년은 윤년입니다.`);
  } else if (year % 100 === 0) {
    console.log(`${year}년은 윤년이 아닙니다.`);
  } else if (year % 400 === 0) {
    console.log(`${year}년은 윤년입니다.`);
  } else {
    console.log(`${year}년은 윤년이 아닙니다.`);
  }
}

yoon(2020);
yoon(2010);

function isLeapYear(year) {
  return (year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0); 
}

console.log(`2020년은 윤년일까? === ${isLeapYear(2020)}`);
console.log(`2010년은 윤년일까? === ${isLeapYear(2010)}`);

//! A부터 B까지 더하는 함수

// A부터 B까지의 범위를 지정 -> 범위 안에 있는 숫자를 모두 더하는 함수 구현

function sumAll(a, b) {
  let output = 0;
  for (let i = a; i <= b; i++) {
    output += i;
  }
  return output;
}

console.log(`2부터 100까지의 합: ${sumAll(2, 100)}`);

//! 최솟값 구하는 함수

// 매개변수로 숫자들의 배열을 입력하면
// 배열 내부에 있는 숫자 중에서 가장 작은 값을 구하는 함수
// 기초 알고리즘 시험에 많이 출제되는 문제

// for of 반복문 사용

// 변수 output을 배열의 첫 번째 요소로 설정한 뒤
// 배열 전체에 반복을 돌려서 output보다 더 작은 값이 있는지 계속해서 확인하는 코드를 사용

function min(array) {
  let output2 = array[0];
  for (const item of array) {
    if (output2 > item) {
      output2 = item;
    }
  }
  return output2;
}

const testArray = [52, 112, 34, 1351, 36, 4];
console.log(`${testArray} 중에서`);
console.log(`최솟값은 ${min(testArray)} 입니다.`);

function max(array) {
  let output3 = array[0];
  for (let item2 of array) {
    // 현재 output보다 더 작은 item이 있으면
    if (output3 < item2) {
      // output의 값을 item으로 변경
      output3 = item2;
    }
  }
  return output3;
}

console.log(`${testArray} 중에서`);
console.log(`최대값은 ${max(testArray)} 입니다.`);
