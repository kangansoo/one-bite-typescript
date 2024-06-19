// enum 타입
// 여러가지 값들에 각각 이름으 부여해 열거해두고 사용하는 타입

enum Role {
    ADMIN, //0, <- 디폴트는 0부터, 10을 넣으면 1씩 증가
    USER, //1, <- 10을 넣으면 admin=0, user=10, guest=11
    GUEST, //2,
}

enum Language {
    korean = 'ko',
    english = 'en'
}

const user1 = {
    name:'이정환',
    role:Role.ADMIN, // <- 관리자
    language : Language.korean
}

const user2 = {
    name:'홍길동',
    role:Role.USER // <- 일반 유저
}

const user3 = {
    name:'아무개',
    role:Role.GUEST // <- 게스트
}

console.log(user1, user2, user3);

