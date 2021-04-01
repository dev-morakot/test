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
            output += '0' + '';
        }
        for (var j = 1; j <= i; j++) {
            output += '*' + '';
        }
        console.log(output);
        output = '';
    }
}


function test3(n){
    var a = '';
    var n = 6;
    var m = (n-1); 
    for(i=1; i <= n; i++)
    {
        a = a.trim();
        a = ' '.repeat(m) + a + (i > 1 ? ' ' : '') + '*';
        console.log(a);
        m--;
       
    }
    
}

 console.log(test1())
console.log(test2())
 console.log(test3())