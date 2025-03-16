let reciverID = document.getElementById("reciver");
let convertBtn = document.getElementById("convert");
let resetBtn = document.getElementById("reset");
let changeBtn = document.getElementById("change");
let titleElem = document.getElementById("title");

function convert(){
    if (titleElem.innerHTML == "Convert Celsius to Fahrenheit")
        if (reciverID.value == ""){
            alert("Please enter a value");
        }
        else if (isNaN(reciverID.value)){
            alert("Please enter a number");
        }
        else{
            let reciverValue = reciverID.value;
            reciverValue = (reciverValue * 9/5) + 32;
            reciverID.value = reciverValue;
        }
    else{
        if (reciverID.value == ""){
            alert("Please enter a value");
        }
        else if (isNaN(reciverID.value)){
            alert("Please enter a number");
        
        }
        else{
            let reciverValue = reciverID.value;
            reciverValue = (reciverValue - 32) * 5/9;
            reciverID.value = reciverValue;
        }
    }
}

function reset(){
    reciverID.value = "";
}

function change(){
    if (titleElem.innerHTML == "Convert Celsius to Fahrenheit"){
        document.title = "F° to C°";
        reciverID.placeholder = "Fahrenheit";
        titleElem.innerHTML = "Convert Fahrenheit to Celsius";
    }
    else{
        document.title = "C° to F°";
        reciverID.placeholder = "Celsius";
        titleElem.innerHTML = "Convert Celsius to Fahrenheit";
    }
}