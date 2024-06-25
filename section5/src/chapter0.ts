// 인터페이스

interface Person {
    readonly name : string;
    age? : number;
    sayHi() : void; // 호출 시그니쳐
    sayHi(a:number, b:number): void;
}

// 인터페이스에서는 유니온, 인터섹션 타입 설정이 불가능
// 밑의 식처럼 타입 별칭에 설정해야 함
type Type1 = number | string | Person;
type Type2 = number & string & Person;

const person : Person = {
    name : "이정환",
    sayHi: function () {
        console.log("Hi");
    },
}

// person.name = "홍길동"; <- 에러
person.sayHi();
person.sayHi(1, 2);




