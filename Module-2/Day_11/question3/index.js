// function countcategories(categories){
//     return categories.reduce((acc,category)=>{
//         acc[category]=(acc[category]||0)+1
//         return acc
//     },{})
// }
// const categories=["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"]
// console.log(countcategories(categories))


function countcategories(categories){
    const counts= categories.reduce((acc,category)=>{
        acc[category]=(acc[category]||0)+1
        return acc
    },{})
    return Object.entries(counts)
    .sort((a,b)=>b[1]-a[1])
    .map(entry=>entry[0])
}
const categories=["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"]
console.log(countcategories(categories))