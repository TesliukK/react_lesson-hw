var user = { name: 'max', age: 18, gender: 'male' };
console.log(user);
var sum = function (a, b) {
    return a + b;
};
console.log(sum(2, 5));
var showSum = function (a, b) {
    console.log(a + b);
};
showSum(2, 3);
var incAge = function (someUser, inc) {
    someUser.age += inc;
    return someUser;
};
incAge(user, 2);
console.log(incAge);
