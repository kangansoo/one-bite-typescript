// number 
// : number <= 타입 주석 or 타입 어노테이션
let num1 = 123;
let num2 = -123;
let num3 = 0.123;
let num4 = -0.123;
let num5 = Infinity;
let num6 = -Infinity;
let num7 = NaN;
// num1.toUpperCase(); 에러
num1.toFixed(); //소수점 자리 자르기
//string
let str1 = "hello";
let str2 = 'hello';
let str3 = `hello`;
let str4 = `hello ${num1}`;
// str1.toFixed(); 에러
//boolean
let bool1 = true;
let bool2 = false;
//null
let null1 = null;
// undefined
let unde1 = undefined;
// "strictNullChecks": false(tsconfig.json)
// let numA : number = null;
// 리터럴 타입
// 리터럴 -> 값
let numA = 10;
// numA = 12; 에러
let strA = 'hello';
let boolA = true;
export {};
