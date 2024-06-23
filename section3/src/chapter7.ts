/*
타입 좁히기
조건문 등을 이용해 넓은 타입에서 좁은 타입으로
타입을 상황에 따라 좁히는 방법
*/ 

type Person = {
    name: string;
    age: number;
};

// value => number : toFixed
// value => string : toUpperCase
// value => Date : getTime
// typeof (null) = object
// value => Person:name은 age살 입니다.
function func(value: number | string | Date | null | Person) {
    if (typeof value === 'number'){
        console.log(value.toFixed()); // <- number 타입으로 추론
    }else if (typeof value === 'string'){
        console.log(value.toUpperCase()); // <- string 타입으로 추론
    }else if(value instanceof Date){
        console.log(value.getTime());
    }else if(value && 'age' in value){
        console.log(`${value.name}은  ${value.age}살 입니다.`)
    }
}
let num:number = 10;
let str:string = 'hello';
let date:Date = new Date();
let per:Person = {
    name: 'John',
    age: 10
}

func(num);
func(str);
func(date);
func(per);