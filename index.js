function test1() {
    for(let i=1; i<=10; i++){
        console.log("*".repeat(i));
     }
}



function test2() {
    var k, n
    var totalNumberofRows = 10;
    var output = '';
    for (var i = 1; i <= totalNumberofRows; i++) {
        
        for (var k = totalNumberofRows - i; k >= 1; k--){
            output += '0';
        }
        for (var j = 1; j <= i; j++) {
            output += '*' + '';
        }
        console.log(output);
        output = '';
    }
}


function test3(n){
    for(var i=1; i<= n; i++){
        var myval = '0'.repeat(n-i);
        var myval1 = '*'. repeat(i*2 -1)
        console.log(myval + myval1 + myval);
    }
    
}

 console.log(test1())
console.log(test2())
 console.log(test3(6))