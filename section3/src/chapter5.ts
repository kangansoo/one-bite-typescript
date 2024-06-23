// 타입 추론

let a = 10;
let b = "hello";
let c = {
    id : 1,
    name:"홍길동",
    profile:{
        nickname:"abcd"
    },
    url : ['https://localhost:3030']
};

let { id, name, profile} = c;
let [one, two, three] = [1, "hello", true];

function func(message="hello") {
    return "hello";
}

// 암묵적 any 타입 <- 추천 X
// any 타입의 진화
let d;

d = 10; // number 타입
d.toFixed(); // number 타입으로 추론
// d.toUpperCase(); 에러

d="hello"; // string 타입
d.toUpperCase(); // number 타입으로 추론
// d.toFixed(); 에러

// const의 초기화는 리터럴 타입으로 추론
const num = 10; 
const str = "hello";

let arr = [1, 'string'];



