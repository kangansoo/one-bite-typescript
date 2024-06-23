// 타입 단언 (type assertion)

type Person = {
    name: string;
    age: number;
}

// 타입 단언
let person = {} as Person;
person.name = '홍길동';
person.age = 27;

type Dog = {
    name: string;
    color: string;
}

let dog = {
    name : '돌돌이',
    color : 'brown',
    breed : "진도",
} as Dog;

/* 
타입 단언의 규칙
값 as 단언 <- 단언식
A as B
A가 B의 슈퍼타입이거나
A가 B의 서브타입이어야 함
*/

let num1 = 10 as never; // never는 모든 타입의 서브타입
let num2 = 10 as unknown; // unknown은 모든 타입의 슈퍼타입

let num3 = 10 as unknown as string; // 다중 단언, 좋은 방법은 아님

// const 단언
let num4 = 10 as const;

let cat = {
    name: "야옹이",
    color: 'yellow',
} as const; // <- readonly로 수정할 수 없게 만듬

// Non Null 단언
type Post = {
    title: string;
    author?: string;
}

let post :Post = {
    title:'게시글1',
    author: '홍길동'
}

// 에러
// number 타입의 값에 undefined가 들어갈 수 없음
// const len:number = post.author?.length;
const len:number = post.author!.length;