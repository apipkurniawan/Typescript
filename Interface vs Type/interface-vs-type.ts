/**
 * ALIASES  
 */



/**
 * OBJECT  
 */
interface User {
    name: string;
    age: number;
}

type TUser = {
    name: string;
    age: number;
}


/**
 * MERGE  
 */
interface Song {
    songName: string;
}
interface Song {
    artistName: string;
}

const mySong: Song = {
    artistName: 'Virgoun',
    songName: 'Srat Cinta Untuk Starla'
}


/**
 * INTERSECTION & UNION
 */
type CnthA = {
    id: number;
    propA: string;
}
type CnthB = {
    id: number;
    propB?: string;
    isTest: boolean;
}

// Intersection => wajib menggunakan property di dalam kedua tpe tsb
type IntersectionAB = CnthA & CnthB;
let valI: IntersectionAB = {
    id: 1,
    propA: 'testA',
    // propB: 'testb'
    isTest: true
}
// Union => tidak wajib menggunakan property di dalam kedua tpe tsb/kebaikan intersection
type UnionAB = CnthA | CnthB;
let valU: UnionAB = {
    id: 1,
    // propA: 'testA',
    // propB: 'testb'
    isTest: true
}


/**
 * IMPLEMENTES 
 * bisa menggunakan interface atau type
 */
// interface Person {
//     name: string;
//     age: number;
//     getName(id: number): string;
// }
type Person = {
    name: string;
    age: number;
    getName(id: number): string;
}

class People implements Person {
    name: string;
    age: number;
    constructor(
        name: string,
        age: number
    ) {
        this.name = name;
        this.age = age
    }

    getName(id: number) {
        return 'ya';
    };
}


/**
 * EXTEND
 */
interface Adress {
    street: string;
}
interface Profile extends Adress {
    name: string;
    gender: string;
    getAge(id: number): string;
}
class Human implements Profile {
    name: string;
    gender: string;
    street: string;
    constructor(
        name: string,
        gender: string,
        street: string
    ) {
        this.name = name;
        this.gender = gender;
        this.street = street;
    }

    getAge(id: number) {
        return 'ya';
    };
}