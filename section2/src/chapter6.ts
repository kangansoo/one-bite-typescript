// any
// 특정 변수의 타입을 확실히 모를 때
let anyVar:any = 10;
// anyVar = 'hello';
// anyVar = {};
// anyVar = ()=>{};

// anyVar.toUpperCase();
// anyVar.toFixed();

let num:number = 10;
num = anyVar

// any는 모든 타입 검사를 통과하지만 런타임에서 에러를 발생
// ts의 장점을 모두 포기하는 것

// unknown
let unknownVar: unknown;

unknownVar = '';
unknownVar = 1;
unknownVar = () => {};

// 에러
// num = unknownVar;
// unknownVar.toUpperCase();
// unknownVar = unknownVar + 10;

// 타입 정제 시에는 가능
if(typeof unknownVar === 'number'){
    num = unknownVar;
}

