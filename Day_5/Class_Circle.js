/* Class Circle task */

class Circle{
    constructor (r=1.0,c="red"){
        this.radius = r 
        this.color  = c 
    }
    getRadius(){
        return (this.radius)
    }
    setRadius(){
        this.radius = 5 
    }
    getColor(){
        return (this.color) 
    }
    setColor(){
        this.color = "black"
    }
    toString(){
     return ("Circle[radius=" + this.radius + ",color=" + this.color + "]" )     
    }
    getArea()
    {
        return (3.14 * this.radius * this.radius)
    }
    getCircumferece(){
        return (2 * 3.14 * this.radius)
    }
    
}

let C1 = new Circle()
C1.setRadius()
console.log(C1.getArea())
let C2 = new Circle(2.34564)
C2.getRadius()
console.log(C2.toString())
C2.setColor()
console.log(C2.getColor())
let C3 = new Circle(34.56,"Blue")
console.log(C3.getCircumferece())