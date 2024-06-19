// 배열
// 숫자 배열
let numArr:number[] = [1, 2, 3];
// 문자 배열
let strArr:string[] = ['hello', 'im', 'winterlood'];
// 불리안 배열
let boolArr:Array<boolean> = [true, false, true];

//배열 타입이 다양할 경우 (유니온)
let multiArr:(string | number)[] = [1, 'hello'];

// 다차원 배열의 타입
// number 타입의 배열을 저장하는 배열
let doubleArr:number[][] = [
    [1, 2, 3],
    [4, 5]
];


// 튜플
// 길이와 타입이 고정
let tup1:[number, number] = [1, 2];
let tup2:[number, string, boolean] = [1, '2', true];

// 배열을 사용하기 때문에 push와 pop을 사용 가능
// push와 pop 등 배열 메서드를 사용할 때는 인식하지 못하여 에러를 발생시키지 않음
tup1.push(1);
tup1.push(2);
tup1.pop();

// 튜플 사용 예제
const users:[string, number][] = [
    ["이정환", 1],
    ['이아무개', 2],
    ["김아무개", 3],
    ['박아무개', 4],
    // [5, '최아무개']  <- 동료가 잘못 넣은 데이터
]





