// 인터페이스의 확장

interface Animal { // type Animal 도 확장 가능
    name: string;
    color: string;
}

interface Dog extends Animal {
    // name: "hello" <- 동일한 프로퍼티는 재정의가 가능함(원본 타입의 서브타입만 가능)
    isBark: boolean;
}

const dog: Dog = {
    name: '',
    color: '',
    isBark: true
}

interface Cat extends Animal {
    isScratch: boolean;
}

interface Chicken extends Animal {
    isFly: boolean;
}

interface DogCat extends Dog, Cat {}

const dogCat: DogCat = {
    name: '',
    color: '',
    isBark: true,
    isScratch: true,
}