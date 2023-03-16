//this function ensure the input from calculator shown on screen    
function clk(val){
document.getElementById("inputbox").value=document.getElementById("inputbox").value+val;
}    
//clear the screen    
function clrdisp(){
document.getElementById("inputbox").value=" ";
}    
//manipulate the expression
function eql(){
var text=document.getElementById("inputbox").value;
    var result=eval(text);
    document.getElementById("inputbox").value=result;
}    

  function del(){
  document.getElementById("inputbox").value=document.getElementById("inputbox").value.toString().slice(0,-1);
  }  
    
    
    
    
    
    
