// 함수 타입 호환성
// 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가?
// 1. 반환 값의 타입이 호환되는가
// 2. 매개변수의 타입이 호환되는가

// 기준 1. 반환 값이 호환되는가
type A = () => number;
type B = () => 10;

let a:A = () => 10; // 넘버
let b:B = () => 10; // 넘버 리터럴

a = b;
// b = a; <- 에러 : 다운 캐스팅 이슈

// 기준 2. 매개변수가 호환되는가
// 2-1 매개변수의 개수가 같을 때
type C = (value:number)=>void;
type D = (value:10)=>void;

let c: C = (value) => {};
let d: D = (value) => {};

// c = d; <- 에러 : 업 캐스팅 이슈
d = c;

type Animal = {
    name:string;
};

type Dog = {
    name:string;
    color:string;
};

let animalFunc = (animal:Animal) => {
    console.log(animal.name);
};
let dogFunc = (dog:Dog) => {
    console.log(dog.name);
    console.log(dog.color);
};

// animalFunc = dogFunc; <- 에러 : 업 캐스팅 이슈
let testFunc = (animal:Animal)=>{
    console.log(animal.name);
    // console.log(animal.color); <- 에러
}

dogFunc = animalFunc;
let testFunc2 = (dog:Dog) => {
    console.log(dog.name);
};

// 2-2 매개변수의 개수가 다를 때
type Func1 = (a:number, b:number)=>void; //매개변수 개수가 다를 때는 타입이 같아야 함
type Func2 = (a:number) => void;

let func1:Func1 = (a, b) => {};
let func2:Func2 = (a) => {};

func1 = func2;
// func2 = func1; <- 에러


