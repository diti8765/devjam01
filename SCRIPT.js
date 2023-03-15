let input = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('Click', (e) =>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }
    
    
     else if(e.target.innerHTML == 'AC'){
        string = "";
        input.value = string;
    }
    else if(e.target.innerHTML == 'DEL'){
    string = string.substring(0, string.length-1);
    input.value = string;
    }
    else{
        string += e.target.innerHTML;
        input.value = string;
    }
    )
})
    
function clk(val){
document.getElementById("inputbox").value=document.getElementById("inputbox").value+val;
}    
    
function clrdisp(){
document.getElementById("inputbox").value=" ";
}    

function eql(){
var text=document.getElementById("inputbox").value;
    var result=eval(text);
    document.getElementById("inputbox").value=result;
}    

    
    
    
    
    
    
    
