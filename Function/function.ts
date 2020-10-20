/**
 * BASIC
 */
// declaration
function add(x: number, y: number, z?: number): number {
    return x + y + z;
}
console.log(add(3, 4, 8));

// expression
const addEx = function (x, y) {
    return x + y
}
console.log(addEx(6, 7));

// arrow
const addArrow = (x, y) => x + y;
console.log(addArrow(6, 7));

// callback
type Greater = (message: string) => void;
function request(url: string, cb: Greater) {
    cb(url);
}
let fn = (str: string) => console.log(str);
request('http://typescriptlang.org', fn);


/**
 * OPTIONAL & DEFAULT PARAMETER
 */
// function with object
type Contact = {
    firstName: string;
    lastName: string;
    lang: string;
    gender?: string;
}
function submitContact(namaDepan: string, namaBlkg: string, gender?: string, lang = 'indonesia'): Contact {
    return {
        firstName: namaDepan,
        lastName: namaBlkg,
        lang,
        ...(gender && { gender })
    }
}
console.log(submitContact('apip', 'kur', 'laki-laki'));


/**
 * REST PARAMETER
 */
function fruitCollection(item: string, ...restItems: string[]) {
    return item + ' ' + restItems.join(' ');
}
console.log(fruitCollection('nanas', 'apple', 'jeruk', 'semongko'));


/**
 * CONDITIONAL TYPE WITH UNION
 * don't use 'any'
 */
// solution 1 : union
function CT(param: string | number): string | number {
    return param;
}

// solution 2 : generic
function CT_generic<T>(param: T): T {
    return param;
}
console.log(CT_generic<string>('hallo'));
console.log(CT_generic<number>(234));

// solution 3 : overloading
function CT_overload(param: string): string;
function CT_overload(param: number): number;
function CT_overload(param: any): any {
    return param;
}
console.log(CT_overload('hallo'));
console.log(CT_overload(4432));
// console.log(CT_overload(true)); // tidak bisa dieksekusi krn harus string/number

