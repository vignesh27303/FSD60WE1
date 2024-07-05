var todoreq = new XMLHttpRequest()
var web = "https://restcountries.com/v3.1/all"
todoreq.open("GET",web)
todoreq.send()
todoreq.onreadystatechange = function(){
    const data = JSON.parse (this.response)
    
    function Continent(Element){
        return Element.continents == "Asia"
    }
    function populate(Element){
        return(Element.population < 200000  )  

    }
    function totpop(carry,next){
       // console.log(Number(carry.population), "+" , Number(next.population))
        return(carry + Number.parseInt(next.population)   )
    }
    function curr(Element){
        console.log(Element.currencies )
        return (Element.currencies == "INR")
    }
    

    const data1 = data.filter(Continent)
    console.log(data1)
    const data2 = data.filter(populate)
    console.log(data2)
    const data3 = data.reduce(totpop)
    console.log(data3)
    const data4 = data.filter(curr)
    console.log(data4)
    data.forEach((Element) =>{console.log(Element.capital,Element.name,Element.flag)})
}