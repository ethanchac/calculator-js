const container = document.querySelector("#container");
const div = document.querySelector("#display");
//numbers
const button0 = document.querySelector("#zero");
const button1 = document.querySelector("#one");
const button2 = document.querySelector("#two");
const button3 = document.querySelector("#three");
const button4 = document.querySelector("#four");
const button5 = document.querySelector("#five");
const button6 = document.querySelector("#six");
const button7 = document.querySelector("#seven");
const button8 = document.querySelector("#eight");
const button9 = document.querySelector("#nine");
//operators
const bplus = document.querySelector("#add");
const bdiv = document.querySelector("#divide");
const bmul = document.querySelector("#multiply");
const bmin = document.querySelector("#minus");
//equals
const bequals = document.querySelector("#equal");
//clear
const bclear = document.querySelector("#clear");

var text = document.getElementById("display");
var num1 = "";
var num2 = "";
let op = false;
var operator = 0;

button0.addEventListener("click", () =>{
    if(op === false){
        num1 += "0";
        div.innerHTML = num1;
        console.log("num1 is ",num1);
    }else{
        num2 += "0";
        div.innerHTML = num2;
        console.log("num2 is ",num2);
    }
});
button1.addEventListener("click", () =>{
    if(op === false){
        num1 += "1";
        div.innerHTML = num1;
        console.log("num1 is ",num1);
    }else{
        num2 += "1";
        div.innerHTML = num2;
        console.log("num2 is ",num2);
    }
});
button2.addEventListener("click", () =>{
    if(op === false){
        num1 += "2";
        div.innerHTML = num1;
        console.log("num1 is ",num1);
    }else{
        num2 += "2";
        div.innerHTML = num2;
        console.log("num2 is ",num2);
    }
});
button3.addEventListener("click", () =>{
    if(op === false){
        num1 += "3";
        div.innerHTML = num1;
        console.log("num1 is ",num1);
    }else{
        num2 += "3";
        div.innerHTML = num2;
        console.log("num2 is ",num2);
    }
});
button4.addEventListener("click", () =>{
    if(op === false){
        num1 += "4";
        div.innerHTML = num1;
        console.log("num1 is ",num1);
    }else{
        num2 += "4";
        div.innerHTML = num2;
        console.log("num2 is ",num2);
    }
});
button5.addEventListener("click", () =>{
    if(op === false){
        num1 += "5";
        div.innerHTML = num1;
        console.log("num1 is ",num1);
    }else{
        num2 += "5";
        div.innerHTML = num2;
        console.log("num2 is ",num2);
    }
});
button6.addEventListener("click", () =>{
    if(op === false){
        num1 += "6";
        div.innerHTML = num1;
        console.log("num1 is ",num1);
    }else{
        num2 += "6";
        div.innerHTML = num2;
        console.log("num2 is ",num2);
    }
});
button7.addEventListener("click", () =>{
    if(op === false){
        num1 += "7";
        div.innerHTML = num1;
        console.log("num1 is ",num1);
    }else{
        num2 += "7";
        div.innerHTML = num2;
        console.log("num2 is ",num2);
    }
});
button8.addEventListener("click", () =>{
    if(op === false){
        num1 += "8";
        div.innerHTML = num1;
        console.log("num1 is ",num1);
    }else{
        num2 += "8";
        div.innerHTML = num2;
        console.log("num2 is ",num2);
    }
});
button9.addEventListener("click", () =>{
    if(op === false){
        num1 += "9";
        div.innerHTML = num1;
        console.log("num1 is ",num1);
    }else{
        num2 += "9";
        div.innerHTML = num2;
        console.log("num2 is ",num2);
    }
});
let ans = 0;
bdiv.addEventListener("click", () =>{
    if(op === true){
        ans = parseInt(num1) / parseInt(num2);
        div.innerHTML = ans;
        num1 = ans.toString();
        num2 = "";
    }
    op = true;
    operator = 1;
})
bplus.addEventListener("click", () =>{
    if(op === true){
        ans = parseInt(num1) + parseInt(num2);
        div.innerHTML = ans;
        num1 = ans.toString();
        num2 = "";
    }
    op = true;
    operator = 2;
})
bmul.addEventListener("click", () =>{
    if(op === true){
        ans = parseInt(num1) * parseInt(num2);
        div.innerHTML = ans;
        num1 = ans.toString();
        num2 = "";
    }
    op = true;
    operator = 3;
})
bmin.addEventListener("click", () =>{
    if(op === true){
        ans = parseInt(num1) - parseInt(num2);
        div.innerHTML = ans;
        num1 = ans.toString();
        num2 = "";
    }
    op = true;
    operator = 4;
})
bequals.addEventListener("click", () =>{
    switch(operator){
        case 1:
            ans = parseInt(num1) / parseInt(num2);
            console.log(parseInt(num1) / parseInt(num2));
            div.innerHTML = ans;
            break;
        case 2:
            ans = parseInt(num1) + parseInt(num2);
            console.log(parseInt(num1) + parseInt(num2));
            div.innerHTML = ans;
            break;
        case 3:
            ans = parseInt(num1) * parseInt(num2);
            console.log(parseInt(num1) * parseInt(num2));
            div.innerHTML = ans;
            break;
        case 4:
            ans = parseInt(num1) - parseInt(num2);
            console.log(parseInt(num1) - parseInt(num2));
            div.innerHTML = ans;
            break;
    }
    num1 = "";
    num2 = "";
    op = false;
})
bclear.addEventListener("click", () =>{
    num1 = "";
    num2 = "";
    op = false;
    div.innerHTML = "";
});