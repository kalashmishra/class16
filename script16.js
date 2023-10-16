var fs=document.querySelector("#fs");
var closebtn=document.querySelector("#closebtn");
var modal=document.querySelector("#modal");
var btn=document.querySelector("#btn");
btn.addEventListener("click",function(){
    fs.style.opacity=1;
    modal.style.top="10%";
    fs.style.pointerEvents="initial";
})
closebtn.addEventListener("click",function(){
    fs.style.opacity=0;
    modal.style.top="-10%";
    
})




