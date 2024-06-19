// unknown 타입
// 모든 타입의 슈퍼 타입

function unkownExam(){
    let a : unknown = 1;
    let b : unknown = 'hello';
    let c : unknown = true;
    let d : unknown = null;    
    let e : unknown = undefined;

    let unknownVar:unknown;

    // let num:number =  unknownVar;
};

// never 타입
// 모든 타입의 sub 타입

function neverExam(){
    function neverFunc():never{
        while(true) {}
    }

    let num:number = neverFunc();
    let str:string = neverFunc();
    let bool:boolean = neverFunc();
}

// void 타입
// undefined의 슈퍼타입

function voidExam(){
    function voidFunc():void {
        console.log('hi');
        return undefined;
    }

    let voidVar:void = undefined;
}

// any 타입
// 모든 타입의 슈퍼타입이 될 수도 있고
// 모든 타입의 서브타입이 될 수도 있음(never 빼고)

function anyExam(){
    let unknownVar:unknown;
    let anyVar:any;
    let undefinedVar:undefined;
    let neverVar:never;

    anyVar = unknownVar;
    undefinedVar = anyVar;
    // neverVar = anyVar; <- 에러
}



