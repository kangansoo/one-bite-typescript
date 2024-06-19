// void
// void -> 공허

function func1():string {
    return 'hello';
}

function func2():void {
    console.log('hello');
}

let a:void;
// 에러, void 변수는 undefined만 가능
// a = 1;
// a = 'hello';
// a = {};
a = undefined;

// never
// never -> 불가능한 타입
function func3():never {
    while(true){}
}

function func4():never {
    throw new Error();
}

let b : never;
// 어떤 값도 담을 수 없음
