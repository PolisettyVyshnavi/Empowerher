// console.log(`5+7=${5+7}`)


// const message=`
// This is first line
// This is seconf line
// This is third line`
// console.log(message)


// const firstName="John"
// const lastName="Doe"
// console.log(`FullName:${firstName} ${lastName}`)


// const square=n=>(n*n)
// console.log(square(4))


// const obj = {
//   value: 50,
//   test: () => console.log(this.value)
// };
// obj.test();
// //because arrow function is inherit this keyword from their surrounding scope


// const obj = {
//   value: 50,
//   test() {
//     console.log(this.value)
//   }
// };
// obj.test();


// const product = {name: "Pen", price: 10 };
// const value={...product}
// console.log(value)


// const a = { x: 1 };
// const b = { y: 2 };
// const merge={...a,...b}
// console.log(merge)


// const maxValue=(...nums)=>{
//     return Math.max(...nums)
// }
// console.log(maxValue(35,57,234,86))


// const laptop = { brand: "Dell", ram: "8GB" };
// const{brand}=laptop
// console.log(brand)


// const info={}
// console.log(info?.user)


// for (var i = 0; i < 3; i++) {}
// console.log(i); //output 3


// for (let j = 0; j < 3; j++) {}
// console.log(j); //output error 


// const locks the binding not necessarily the value inside if it's an object or array


// const speed=kmph>60?"Fast":"Normal"


// const age=46;
// const res=age>=18?"Adult":"Minor"
// console.log(res)


// const number=89
// const result=number>0?"Positive":number==0?"Zero":"Negative"
// console.log(result)


// const nums=[1,2,3]
// const merge=[...nums,4,5]
// console.log(merge)


// const a=["x","y"]
// const b=["z"]
// const merge=[...a,...b]
// console.log(merge)


// function printnames(...names){
//     return names
// }
// console.log(printnames("A","B","C"))


// const user={id:101,status:"active"}
// const{id,status}=user
// console.log(id)
// console.log(status)


// const id = 101;
// const role = "admin";
// const user = {
//   id,
//   role
// };
// console.log(user)


// const id = 101;
// const role = "admin";
// const user = {
//   id,
//   role,
//   greet(){
//       return `Hello, I am ${this.role} with Id {this.id}`
//   }
// };
// console.log(user)
// console.log(user.greet())


// const today=new Date().toDateString()
// console.log(today)


// const name="Nani"
// const score=90
// console.log(`Hello ${name},your score is ${score}/100`)


// const add=(a,b)=>(a+b)
// console.log(add(3,4))


// const isAdult=(age)=>age>=18
// console.log(isAdult(45))
// console.log(isAdult(13))


// const double=num=>num*2
// console.log(double(3))
// console.log(double(9))


// const arr=[1,2,3]
// const clone=[...arr]
// console.log(clone)


// const arr=[1,2,3]
// const clone=[100,...arr]
// console.log(clone)


// const obj1={id:300,role:"manager"}
// const obj2={role:"admin",status:"active"}
// const merge={...obj1,...obj2}
// console.log(merge)


// const user = {
//   name: "Alex",
//   address: {
//     city: "Bangalore"
//   }
// };
// console.log(user?.address?.city)


// const user = {
//   name: "Alex",
//   job: {
//     city: "Bangalore"
//   }
// };
// console.log(user?.job?.title)


const user = {
  name: "Alex"
};
console.log(user?.job?.title)