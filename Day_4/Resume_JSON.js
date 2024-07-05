const arr=[{"name"        :"Vignesh",
           "qualification": "B.E",
           "company"      : "google" ,
           "experience"   : 10,
           "10th mark"    : 98,
           "12th mark"    : 99,
           "skills"       : ["JSON","node.js","js","react"],

}]
arr.forEach((item) => {
    console.log(item)
})
l = arr.length
for(var i=0;i<l;i++){
    console.log(arr[i])
}
for(let n in arr){
    console.log(arr[n])
}
for(let y of arr){
    console.log(y)
}