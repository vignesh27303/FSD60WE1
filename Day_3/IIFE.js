/* Print the odd numbers in the array*/
(function (){
    var a = [2,34,5,87,9]
    var l = a.length
    console.log("odd Numbers present in the array are :")
    for(var i=0;i<=l-1;i++){
        if (a[i]%2 != 0){
            console.log(a[i])
        }
    }
    
})()

/* Convert all the strings to title caps in a string array */
(function (){
    var str=["ram","Try","gEt","flY"]
    var l=str.length
    console.log("Converted strings to upper case:")
    for(var i=0;i<=l-1;i++){
       console.log(str[i].toUpperCase())   
    }
})()

/*Sum of all numbers in an array */
(function(){
	
console.log("Sum of all nummbers in an array: " + sum)    
})()

/* Return all the prime numbers in an array */
(function (){
    var num =[4,1,5,7,10,45,43]
    var l = num.length
    var flag = 0
    console.log("The Prime numbers from the list are : ")
    for(var i =0;i<=l-1;i++){
        for(var j=2;j<num[i];j++){
            if(num[i]%j == 0){
                flag = 1
            }
        }
        if (flag == 0 && (num[i] != 1)){
            console.log(num[i])
        }
        else{
            flag = 0
        }
    }
} )()

/* Return all the palindromes in an array */
(function (){
    var a =["PEP","MAM","121","456","today","madam"]
    var l = a.length
    for(var i=0;i<=l-1;i++){
        var sl = a[i].length
        var rev = " "
        var org = a[i]
        for(var j=sl-1;j>=0;j--){   
            rev = rev + a[i][j]
        }
        if (rev == org){
            console.log(org)
        }
        
    }
})()

/*Return median of two sorted arrays of the same size. */
(function(a,b){
    var c = a.concat(b)
    console.log(c)
    var l = c.length
    var m1 = 0
    var mdn = 0
    console.log(l)
    if(l%2 ==0){
        m1 = l/2
        mdn = (c[m1] + c[m1 - 1])/2
    }
    else{
        m1 = Math.round(l/2)
        mdn = c[m1 -1]
    }
    console.log(mdn)
})([1,2,3,4,5,6,9],[45,56,76,87,98,99])

/* Remove duplicates from an array */
(function (arr1){
    var arr2 = []
    var l = arr1.length
    for(var i=0;i<=l-1;i++){
        if(arr2.indexOf(arr1[i]) == -1 ){
            arr2.push(arr1[i]) 
        }
    }
    console.log(arr2)
})([23,45,34,66,88,66,77,45])

/* Rotate the array by k times */
(function(a,k){
    var l = a.length
    var b = []
    for(i=0;i<=l-1;i++){
    if(i<k){
        b.push(a[l+i-k])
    }
    else{
        b.push(a[i-k])
    }}
console.log(b)        
} )([4,5,2,3,9,10,31],4)