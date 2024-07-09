let input=document.querySelectorAll("#input")[0];
let h1el=document.querySelector("h1") 
let button=document.querySelectorAll("#button")[0];
    
   button.addEventListener("click",function(e){
            let result=eval(input.value)  ;
            let endRes=h1el.innerHTML=result;
   })