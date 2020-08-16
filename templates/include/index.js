window.onload = ()=>{

 
//let la = document.querySelector('#some').dataset.items;// поиск html узла с JSON
//window.open("")
let la = document.querySelector('#some')
let href = la.getAttribute("href")

let container = document.getElementById("data_container")
let table = document.createElement("table");
container.appendChild(table)
let tr = document.createElement("tr")
table.appendChild(tr).innerHTML ="Хуй пизда говно собака, с вами Готя забияка"
table.appendChild(tr).innerHTML ="Хуй пизда говно собака, с вами Готя забияка"
//console.log(href)
//let a  = JSON.parse(href)//парсинг JSON
// console.log (a)//сделать поиск по индексу

let setTable = (value)=>{
  for (let k in value)
   if (typeof(value[k])==="object"){
     setTable(value[k])
   }else{
     console.log(` k = ${k} value = ${value[k]}`)
   }
  //for (const [key , value] of Object.entries(data)){
   // for (const[key1,value1] of Object.entries(value)){
  //  console.dir("key "+key1 +" "+ "data "+value1["1"])
  //  }
 //  }
 }

fetch(href).then(function(response) {
  response.json().then(function(data) 
  {//получение json через fetch
    setTable(data) 

  });

});
}

