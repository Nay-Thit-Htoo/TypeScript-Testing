// let geet: Function;
// geet = () => {

//     console.log('hello, again');
// };

// const add = (a: number, b: number, c: number | string = 10) => {

//     console.log(a + b);
//     console.log(c);
// };

// add(5, 10);

// const minus = (a: number, b: number) => {

//     return a + b;
// };
// let result:number = minus(10, 7);


type docOne = string | number;
const logDetails = (uid: docOne, item: string) => {
    console.log(`${item} has a uid of ${uid}`);
};

const greet = (user: { name: string, uid: string | number }) => {
    console.log(`${user.name} say hello`);
};

