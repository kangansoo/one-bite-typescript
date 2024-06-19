// 타입 별칭
// 타입 별칭 생성
// 같은 스코프에서는 중복될 수 없음
type User = {
    id:number; 
    name:string;
    nickname:string;
    birth:string;
    bio:string;
    location:string;
}

function func() {
    // func() 안에서는 재정의 가능
    type User={}
}

let user:User = {
    id:1,
    name:'이정환',
    nickname:'winterlood',
    birth:'1997.01.24',
    bio:'안녕하세요',
    location:'부천시'
};

let user2:User = {
    id:2,
    name:'홍길동',
    nickname:'winterlood',
    birth:'1997.01.24',
    bio:'안녕하세요',
    location:'부천시'
};

// 인덱스 시그니처
// type CountryCodes = {
//     Korea:string;
//     UnitedState:string;
//     UnitedKingdom:string;
// };

// 코드가 많이 필요하게 된다면 만들기 빡세짐 <- 인덱스 시그니처
// 인덱스 시그니처
type CountryCodes = {
    [key:string]:string;
};

let countryCodes:CountryCodes = {
    Korea:'ko',
    UnitedState:'us',
    UnitedKingdom:'uk',
};

type CountryNumberCodes = {
    [key:string]:number;
    Korea:number;
    // Korea:string; <- 에러
    // 프로퍼티의 value 값과 일치하거나 호환해야 함.
}

let countryNumberCodes:CountryNumberCodes = {
    Korea:410,
    UnitedState:840,
    UnitedKingdom:826,
}
// 인덱스 시그니처는 규칙을 위반하지만 않는다면 허용함
