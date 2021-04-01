function test1() {
    for(let i=1; i<=10; i++){
        console.log("*".repeat(i));
     }
}



function test2() {
    let k;
    let totalNumberofRows = 10;
    let output = '';
    for (let i = 1; i <= totalNumberofRows; i++) {
        
        for (let k = totalNumberofRows - i; k >= 1; k--){
            output += '0';
        }
        for (let j = 1; j <= i; j++) {
            output += '*' + '';
        }
        console.log(output);
        output = '';
    }
}


function test3(n){
    for(let i=1; i<= n; i++){
        let myval = '0'.repeat(n-i);
        let myval1 = '*'. repeat(i*2 -1)
        console.log(myval + myval1 + myval);
    }
    
}

 console.log(test1())
console.log(test2())
 console.log(test3(6))