// 객체
// let user:object = {
//     id:1,
//     name:'이정환',
// };
// object는 object라는 것만 표현
// user.id; <- object 형식에 id 속성이 없습니다.
// 객체 리터럴 타입
// 구조적 타입 시스템 -> property based type system
// 자바와 같이 이름을 기준으로 타입을 정하는 것은 명목적 타입 시스템
let user = {
    id: 1,
    name: '이정환',
};
user = {
    name: '홍길동',
};
let config = {
    apiKey: 'MY API KEY'
};
export {};
// config.apiKey='Hacked'; <- 에러
