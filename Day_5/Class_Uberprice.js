class uberPrice{
    constructor (rate,distance){
        this.rate = rate
        this.distance = distance
    }
        getPrice()
        {
            return (this.rate * this.distance)
        }
    
}

let Price = new uberPrice(9,20) 
let totalFare = Price.getPrice()
console.log(totalFare)


