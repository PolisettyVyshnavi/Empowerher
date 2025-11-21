// const arr1=[1,2,3];
// const arr2=[4,5]
// const merge=[...arr1,...arr2]
// console.log(merge)


// const sums=(...nums)=>nums.reduce((acc,nums)=>acc+nums,0)
// console.log(sums(1,2,3,4,5,6))
// console.log(sums(7,4))


const user={name:"Alice",age:22,address:{city:"Bangalore",pin:560001}}
const {name,address:{city,pin}}=user
console.log(name)
console.log(city)
console.log(pin)