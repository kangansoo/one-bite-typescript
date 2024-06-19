// number 
// : number <= 타입 주석 or 타입 어노테이션
let num1: number = 123;
let num2: number = -123;
let num3: number = 0.123;
let num4: number = -0.123;
let num5: number = Infinity;
let num6: number = -Infinity;
let num7: number = NaN;

// num1.toUpperCase(); 에러
num1.toFixed(); //소수점 자리 자르기

//string
let str1 : string = "hello";
let str2 : string = 'hello';
let str3 : string = `hello`;
let str4 : string = `hello ${num1}`;

// str1.toFixed(); 에러

//boolean
let bool1 : boolean = true;
let bool2 : boolean = false;

//null
let null1 : null = null;

// undefined
let unde1 : undefined = undefined;

// "strictNullChecks": false(tsconfig.json)
// let numA : number = null;

// 리터럴 타입
// 리터럴 -> 값
let numA:10 = 10;
// numA = 12; 에러
let strA : 'hello' = 'hello';
let boolA : true = true;




