// 함수 타입 정의

// 어떤 타입의 매개변수를 받고, 어떤 타입의 결과 값을 반환하는지 이야기
// 반환 값에 타입을 설정하지 않아도 number + number 이므로 number로 추론
function func(a : number, b : number) : number {
    return a + b;
}

// 화살표 함수의 타입 정의
const add = (a : number, b : number) : number => a + b;

// 함수의 매개변수
// 선택 매개변수는 가장 뒤에 작성해야 함
function introduce(name="홍길동", age:number, tall?:number){
    console.log(`name: ${name}`);
    if(typeof tall === 'number'){
        console.log(`tall: ${tall+10}`);
        //if 문을 통해 타입 좁히기를 하지 않으면
        // tall?은 number | undefined의 유니온 타입이기 때문에 + 연산자에서 오류
    }
    
}

introduce("홍길동", 22, 191);
introduce("홍길동", 22);

// rest 파라미터 사용
// tuple 타입은 정해진 갯수를 [number, number, number]와 같이 작성해야 함
function getSum(...rest:number[]) {
    let sum = 0;
    rest.forEach((it)=>(sum += it));

    return sum;
}
getSum(1, 2, 3) // 6
getSum(1, 2, 3, 4, 5) // 15


