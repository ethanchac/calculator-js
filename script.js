const container = document.querySelector("#container");
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

var text = document.getElementById("display");
var num1 = "";
var num2 = "";
let op = false;
var operator = 0;

button0.addEventListener("click", () =>{
    if(op === false){
        num1 += "0";
        console.log("num1 is ",num1);
    }else{
        num2 += "0";
        console.log("num2 is ",num2);
    }
});
button1.addEventListener("click", () =>{
    if(op === false){
        num1 += "1";
        console.log("num1 is ",num1);
    }else{
        num2 += "1";
        console.log("num2 is ",num2);
    }
});
button2.addEventListener("click", () =>{
    if(op === false){
        num1 += "2";
        console.log("num1 is ",num1);
    }else{
        num2 += "2";
        console.log("num2 is ",num2);
    }
});
button3.addEventListener("click", () =>{
    if(op === false){
        num1 += "3";
        console.log("num1 is ",num1);
    }else{
        num2 += "3";
        console.log("num2 is ",num2);
    }
});
button4.addEventListener("click", () =>{
    if(op === false){
        num1 += "4";
        console.log("num1 is ",num1);
    }else{
        num2 += "4";
        console.log("num2 is ",num2);
    }
});
button5.addEventListener("click", () =>{
    if(op === false){
        num1 += "5";
        console.log("num1 is ",num1);
    }else{
        num2 += "5";
        console.log("num2 is ",num2);
    }
});
button6.addEventListener("click", () =>{
    if(op === false){
        num1 += "6";
        console.log("num1 is ",num1);
    }else{
        num2 += "6";
        console.log("num2 is ",num2);
    }
});
button7.addEventListener("click", () =>{
    if(op === false){
        num1 += "7";
        console.log("num1 is ",num1);
    }else{
        num2 += "7";
        console.log("num2 is ",num2);
    }
});
button8.addEventListener("click", () =>{
    if(op === false){
        num1 += "8";
        console.log("num1 is ",num1);
    }else{
        num2 += "8";
        console.log("num2 is ",num2);
    }
});
button9.addEventListener("click", () =>{
    if(op === false){
        num1 += "9";
        console.log("num1 is ",num1);
    }else{
        num2 += "9";
        console.log("num2 is ",num2);
    }
});
bdiv.addEventListener("click", () =>{
    op = true;
    operator = 1;
})
bplus.addEventListener("click", () =>{
    op = true;
    operator = 2;
})
bmul.addEventListener("click", () =>{
    op = true;
    operator = 3;
})
bmin.addEventListener("click", () =>{
    op = true;
    operator = 4;
})
bequals.addEventListener("click", () =>{
    switch(operator){
        case 1:
            console.log(parseInt(num1) / parseInt(num2));
        case 2:
            console.log(parseInt(num1) + parseInt(num2));
        case 3:
            console.log(parseInt(num1) * parseInt(num2));
        case 4:
            console.log(parseInt(num1) - parseInt(num2));
    }
    num1 = "";
    num2 = "";
    op = false;
})