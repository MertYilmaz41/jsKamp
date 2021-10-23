//var,let,const

let sayi1 = 10;
sayi1 = "Engin Demiroğ"
let student = {id:1, name:"Engin"}
//console.log(student)

function save(puan=10,ogrenci) 
{
    console.log(ogrenci.name + " : " + puan)
}
//save(undefined,student);

let students = ["Mert","Başar","İlker","Melih"]

//console.log(students)

let students2 = [student,{id:2, name:"Yavuz"},"İstanbul",{city:"İzmir"}]
//console.log(students2)

//REST
//PARAMS (C#)
//varArgs(JAVA)
let showProducts = function (id,...products) 
{
    console.log(id)
    console.log(products[0])    
}

//console.log(typeof showProducts)
//showProducts(10,["Elma","Armut","Karpuz"])

//SPREAD
let points = [1,2,3,4,50,4,60,14]
//console.log(...points)
//console.log(Math.max(...points))
//console.log(..."ABC","D",..."EFG","H")

//DESTRUCTURING
let populations = [10000,20000,30000,[40000,100000]]
let [small,medium,high,[veryHigh,max]] = populations
// console.log(small)
// console.log(medium)
// console.log(high)
// console.log(veryHigh)
// console.log(max)

function someFunction([small1],number) 
{
    console.log(small1)
}

//someFunction(populations)

let category = {id:1, name:"İçecek"}
console.log(category.id)
console.log(category.name) //or console.log(category["name"])

let {id,name} = category
console.log(id)
console.log(name)