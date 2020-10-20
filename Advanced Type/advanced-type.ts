export { } // quick fix global variable

/**
 * case : transform existing interface to new interface without modify existing interface..
 * Partial<T>
 * Required<T>
 * Readonly<T>
 * Pick<T>
 * Omit<T>
 */

interface User {
    id: number;
    name: string;
    age?: number; // // ? = optional
    createdAt: Date;
}

/* umum */
// function CreateUser(data: User) { }
// CreateUser({
//     id: 1,
//     name: 'Apip',
//     // age: 28,
//     createdAt: new Date()
// });

/* Partial<T> */
/* untuk membuat type data optional */
// function CreateUser(data: Partial<User>) { }
// CreateUser({
//     id: 1,
//     // name: 'Apip',
//     age: 28,
//     createdAt: new Date()
// });

/* Required<T> */
/* untuk membuat type data tidak optional(wajib)/kebalikan Partial */
// function CreateUser(data: Required<User>) { }
// CreateUser({
//     id: 1,
//     name: 'Apip',
//     age: 28,
//     createdAt: new Date()
// });

/* Readonly<T> */
/* untuk membuat value tidak dapat diubah */
// function CreateUser(data: Readonly<User>) {
//     // data.id = 2;  // tidak bisa diubah
// }
// CreateUser({
//     id: 1,
//     name: 'Apip',
//     age: 28,
//     createdAt: new Date()
// });

/* Pick<T> */
/* untuk mengambil property yg diinginkan saja */
// function CreateUser(data: Pick<User, 'id' | 'name'>) { }
// CreateUser({
//     id: 1,
//     name: 'Apip',
//     // age: 28,
//     // createdAt: new Date()
// });

/* Omit<T> */
/* untuk mengambil property yg dikecualikan saja/kebalikan dari pick */
// function CreateUser(data: Omit<User, 'id' | 'name'>) { }
// CreateUser({
//     // id: 1,
//     // name: 'Apip',
//     age: 28,
//     createdAt: new Date()
// });


/**
 * case #1 : object with flexibleproperty name, type..
 * case #2 : object of object..
 * Record<T>
 */

/* case #1 */
/* untuk membuat object dengan property dan value secara flexible */
// type Response = Record<string, string | number>;
// const message: Response = {
//     id: '2',
//     name: 'Apip',
//     age: 28
// };
/* case #2 */
// type Users = Record<string, User>;
// const allUsers: Users = {
//     "1": { id: 1, name: 'apip', age: 28, createdAt: new Date() },
//     "2": { id: 1, name: 'apip', createdAt: new Date() }
// }


/* Extract<T, U> */
/* untuk mengambil property yang sama dengan menggunakan 'keyof' */
/* Exclude<T, U> */
/* untuk mengambil property yang tidak sama dengan menggunakan 'keyof'/kebalikan extract */

interface Post {
    id: string;
    title: string;
    createdAt: Date;
}

type ExtType = Extract<keyof User, keyof Post>;
type ExcType = Exclude<keyof User, keyof Post>;
type myNewType = Record<string, ExtType>;
type mySecondType = Record<string, ExcType>;



