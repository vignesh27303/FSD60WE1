/*Print odd numbers in an array */
var fn1 = () => {
    var a = [2,34,5,87,9]
    var l = a.length
    var b =[]
    for(var i=0;i<=l-1;i++){
        if (a[i]%2 != 0){
            b.push(a[i])
        }
    }
    return(b)
}

var a = fn1()
console.log(a)

/* Convert all the strings to title caps in a string array */

var fn1 = () => {
        var str=["ram","Try","gEt","flY"]
    var l=str.length
    var str1 =[]
    for(var i=0;i<=l-1;i++){
       str1[i]= str[i].toUpperCase()  
    }
return(str1)    
}
var a = fn1()
console.log(a)

/* Sum of all numbers in an array */
var fn1 = () => {
        var num = [56, 34,76,90,100,456,2000]
    var sum = 0  
    var l = num.length
    for (var i=0;i<=l-1;i++){
        sum = sum + num[i]
    }
return (sum)    
}

var a = fn1()
console.log(a)

/*Return all the prime numbers in an array */
var fn1 = () => {
            var num =[4,1,5,7,10,45,43]
    var l = num.length
    var b =[]
    var flag = 0
    console.log("The Prime numbers from the list are : ")
    for(var i =0;i<=l-1;i++){
        for(var j=2;j<num[i];j++){
            if(num[i]%j == 0){
                flag = 1
            }
        }
        if (flag == 0 && (num[i] != 1)){
            b.push(num[i])
        }
        else{
            flag = 0
        }
    }
    return b 
}

var a = fn1()
console.log(a)

/*Return all the palindromes in an array*/
var fn1= () => {
        var a =["PEP","MAM","121","456","today","madam"]
    var l = a.length
    var b =[]
    for(var i=0;i<=l-1;i++){
        var sl = a[i].length
        var rev = " "
        var org = a[i]
        for(var j=sl-1;j>=0;j--){   
            rev = rev + a[i][j]
        }
        if (rev == org){
            b.push(org)
        }
        
    }
return b     
}
var m = fn1()
console.log(m)
