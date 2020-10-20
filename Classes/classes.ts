/**
 *  BASIC
 */
// class User {
//     // properties
//     id: number;
//     firstName: string;
//     lastName: string;

//     // method
//     login() { }
//     register() { }

//     constructor(
//         id: number,
//         firstName: string,
//         lastName: string
//     ) { // constructr adalah method built-in 
//         this.id = id;
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
// }
// let myUser = new User(1, "apip", "kurniawan"); // instance


/**
 *  ACCESS MODIFIERS & INHERITANCE / SUB-CLASS
 */
// class Person { // root-class
//     id: number;
//     firstName: string;
//     lastName: string;
//     protected isSave: boolean;
//     private token: string;

//     constructor(
//         id: number,
//         firstName: string,
//         lastName: string,
//     ) {
//         this.id = id;
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.token = '65465';
//         this.isSave = true;
//     }
// }
// let myPerson = new Person(2, 'apip', 'awan'); // instance root-class
// // myPerson.isSave = true; // tidak bisa di akses karena protected
// // myPerson.token = 'jjj'; // tidak bisa di akses karena private

// class EnhacementPerson extends Person { // sub-class adalah kelas turunan atau yang mewarisi dari class root
//     location: string;
//     constructor(
//         location: string,
//         id: number,
//         firstName: string,
//         lastName: string
//     ) {
//         super(id, firstName, lastName);
//         this.location = location;
//         this.isSave; // bisa diakses di sub-class walaupun protected
//     }
// }

// let myNewUser = new EnhacementPerson('kuningan', 2, 'apip', 'awan'); // instance sub-class
// myNewUser.firstName = 'tes';
// // myNewUser.isSave = false; // tidak bisa diakses di instance karena protected


/**
 *  STATIC MEMBER
 */
// class User {
//     id: number;
//     firstName: string;
//     lastName: string;
//     static MAX_FAILED_LOGIN = 2;
//     private retryLogin = 0;

//     // method 
//     login(username: string, password: string) {
//         this.retryLogin += 1;
//         if (username === 'admin' && password === 'admin') {
//             return true;
//         }
//         if (this.retryLogin > User.MAX_FAILED_LOGIN) {
//             return "Max Login Attempted";
//         }
//         return false;
//     }
//     constructor(
//         id: number,
//         firstName: string,
//         lastName: string,
//     ) {
//         this.id = id;
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
// }
// User.MAX_FAILED_LOGIN = 3;
// let myUser = new User(2, 'apip', 'kurniawan');
// console.log(myUser.login('', ''));


/**
 *  ABSTRACT CLASSES
 */
abstract class Root {
    done: boolean;
}

class User extends Root {
    firstName: string;

    constructor(firstName: string) {
        super(); // untuk abstract class harus menggunakan method super()
        this.firstName = firstName;
        this.done = true;
    }
}
