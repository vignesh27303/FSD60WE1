var req = new XMLHttpRequest()
var web = "https://restcountries.com/v3.1/all"
req.open("GET",web)
req.send()
req.onreadystatechange = function () {
    const arr = JSON.parse(this.response)
    const T1 =arr.filter((item) => {
       return (item.continents == "Asia")
    })
    const T2 = arr.filter((item) => {
        return ( Number(item.population) < 200000 )
    })
    arr.forEach((item) =>{
        console.log(item.name,item.capital,item.flag)
    })
    const T3 = arr.reduce((total,next) => {
         return(total + next.population)
    },0)
    const T4 = arr.filter((item) => {
        return (item.currencies = "USD")
    })
    console.log(T1)
    console.log(T2)
    console.log(T3)
    console.log(T4)
}