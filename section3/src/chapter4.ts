/*
대수 타입
-> 여러 개의 타입을 합성해서 새롭게 만들어낸 타입
-> 합집합 타입과 교집합 타입이 존재
*/


// 1. 합집합 - Union 타입
let a : string | number | boolean | {};
a=1;
a="hello";
a=true;

let arr : (number | boolean | string)[] = [1, "hello", true];



type Union1 = Dog | Person;

let union1 : Union1 = {
    name: "",
    color: "",
};

let uion2 : Union1 = {
    name: "",
    language: "",
}

let uion3 : Union1 = {
    name: "",
    color: "",
    language: "",
}

/* 교집합 부분만 가지고 있으면 안 됨 
let uion4 : Union1 = {
    name: "",
}
*/

// 교집합 - Intersection 타입

let variable: number & string; // <- never 타입

// 기본 타입의 대부분은 never 타입, 객체 타입에서 주로 사용함
// 객체의 교집합 타입 - 각 객체의 타입이 전부 들어 있어야 함

type Dog = {
    name: string;
    color: string;
}

type Person = {
    name: string;
    language: string;
}

type Intersection = Dog & Person;

let intersection1: Intersection = {
    name: "",
    color: "",
    language: "",
}

