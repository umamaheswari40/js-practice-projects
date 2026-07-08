const textbox=document.getElementById("textbox");
const toFarenheit=document.getElementById("toFarenheit");
const toCelsius=document.getElementById("toCelsius");
const mytext=document.getElementById("mytext");
let temp;



function convert(){
    if(toFarenheit.checked){
        temp=Number(textbox.value);
        temp=(temp*9/5)+32;
        mytext.textContent=temp.toFixed(1) + "°F";
    }
    else if(toCelsius.checked){
        temp=Number(textbox.value);
        temp=(temp-32)*5/9;
        mytext.textContent=temp.toFixed(1) + "°C";
    }
    else{
        mytext.textContent="Please select a conversion type.";
    }
}