interface IUser {
    name: string,
    age: number,
    gender: string
}
 const user:IUser = {name:'max',age:18,gender:'male'}
console.log(user);


const sum = (a: number, b: number) => {
    return a + b
}
console.log(sum(2, 5));

const showSum = (a: number, b: number) => {
    console.log(a + b);
}
showSum(2, 3)

const incAge = (someUser:IUser, inc:number)=>{
    someUser.age+=inc
    return someUser
}
console.log(incAge(user, 2));
