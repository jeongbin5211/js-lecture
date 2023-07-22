// DOM

// Document Object Model
// 웹 페이지를 프로그래밍 방식으로 조작하고 관리할 수 있는 인터페이스
// HTML 문서의 구조를 트리 구조로 표현, 이를 이용해 js를 사용하여 문서의 내용, 구조, 스타일을 동적으로 변경할 수 있다.

//! DOM의 정의
// HTML 문서는 트리 구조로 표현됩니다.
// 이 트리의 각 요소(웹 페이지의 각 부분)를 '노드' 라고 함
// 노드 타입: Document, Element, Text, Comment 등

//! DOM 사용

let headinig = document.getElementById('myHeading');
headinig.textContent = 'Hello, World!';

//! DOM 요소 선택

//? 1. 요소 선택 방법

//* getElementById
// 주어진 id 속성을 가진 요소를 찾아 반환
// id는 페이지 내에서 유일

let title = document.getElementById('title');

//* getElementsByClassName
// 주어진 클리스 이름을 가진 모든 요소를 HTMLCollection로 반환

let items = document.getElementsByClassName('item');

//* getElementsByTagName
// 주어진 태그 이름을 가진 모든 요소를 HTMLCollection로 반환

let tags = document.getElementsByTagName('p');

//* querySelector
// 주어진 css 선택자와 일치하는 첫 번째 요소를 반환

let firstItem = document.querySelector('.item');

//* querySelectorAll
// 주어진 css 선택자와 일치하는 모든 요소를 NodeList로 반환

let allItems = document.querySelectorAll('item');

//? 2. NodeList와 HTMLCollection
// getElementsByClassName
// getElementsByTagName
// 위 두가지 방법은 HTMLCollection을 반환
// 실시간으로 원본 문서와 동기화

// querySelectorAll
// NodeList를 반환
// 정적으로 동기화

//? 3. 선택된 요소의 조작

let title2 = document.getElementById('title2');

// 속성 변경
title2.style.color = 'blue';

// 텍스트 내용 변경
title2.textContent = '응애 힘들어'

// HTML 내용 변경
title2.innerHTML = '<i>살려줘</i>';

//! DOM 요소 조작

//? 1. DOM 요소의 속성 변경
// .style 속성: css스타일 변경 가능

let title3 = document.getElementById('title3');

// CSS 스타일 변경
title3.style.color = 'brown';
title3.style.fontSize = '24px';

// 다른 속성 변경
title3.className = 'highlight';

//? 2. DOM 요소의 내용 변경
// .textContent, .innerHTML 사용

let paragraph = document.querySelector('p');

// 텍스트 내용 변경

paragraph.textContent = 'Hello';

// HTML 내용 변경
paragraph.innerHTML = '<i>살려줘</i>';

//? 3. DOM 요소 추가 & 삭제
// .createElement() / .appendChild(): 새로운 DOM 요소 생성 추가
// .removeChild(): DOM요소 삭제

let ul = document.querySelector('ul');
let li = document.querySelector('li');

li.textContent = 'New Item';
ul.appendChild(li);

// 삭제 방법
// let firstItem2 = document.querySelector('li');
// ul.removeChild(firstItem2);

//! DOM 요소 이벤트
let button = document.querySelector('button');

button.addEventListener('click', function () {
    alert('Button Clicked!');
});

//? DOM 요소 생성하기
// document.createElement(): 새로운 요소를 생성하고 그 요소를 반환

let newDiv = document.createElement('div');

//? DOM 요소에 내용 추가
// textContent, innerHTML

newDiv.textContent = 'Hello JS'; // 위치를 아직 지정하지 않아서 화면에 나오지는 않음

//? DOM 요소 페이지에 추가
// appendChild(), insertBefore()

let body = document.querySelector('body');
body.appendChild(newDiv);

//? 특정 위치에 DOM 요소 추가
// insertBefore(추가할 요소, 새 요소를 삽입할 위치 바로 앞에 있는 요소)

let firstChild = body.firstChild;
body.insertBefore(newDiv, firstChild);

//? DOM 요소 삭제
// removeChild(삭제할 자식 요소)
// body.removeChild(newDiv)