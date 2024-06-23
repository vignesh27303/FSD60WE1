/*Movie class task */
 
class movie {
    constructor (title,studio,rating = "PG"){
        this.title = title
        this.studio = studio
        this.rating = rating
    }
    getPG () {
        
        if(this.rating == "PG"){  
          return (this.title)
        }
    
    }
}
var English = new movie("Casino Royale","Eon Productions","PG13")
console.log(English)
var l 
var arr = []
arr = [new movie("Kanchana 1","ragav productions","PG"),new movie("Muni 1","Bala Production"),new movie("GOAT","malayalam","PG16")]
l=arr.length    
var b=[]
for(var i=0;i<=l-1;i++){
    if (arr[i].getPG() != undefined){
    b.push(arr[i].getPG())
    }}
    console.log("Movies with rating PG :"+ b)