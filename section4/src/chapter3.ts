// 함수 오버로딩
/*
하나의 함수 func
모든 매개변수의 타입 number
매개변수가 1개 -> 매개변수 * 20
매개변수가 3개 -> sum(매개변수)
*/

// 구현부 없는 버전들 -> 오버로드 시그니쳐 (작성 필수)
function func(a:number):void;
function func(a:number, b:number, c:number):void;

// 실제 구현부 -> 구현 시그니쳐 
// 구현부를 작성하면 오버로드 시그니쳐의 에러가 사라짐
function func(a:number, b?:number, c?:number) {
    if(typeof b === 'number' && typeof c === 'number'){
        console.log(a+b+c);
    } else {
        console.log(a*20);
    }
}

// 오버로드 시그니쳐의 버젼과 같아야 에러를 발생하지 않음
// func(); <- 에러
func(1);
// func(1, 2); <- 에러
func(1, 2, 3);

