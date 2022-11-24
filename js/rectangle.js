//create JS DOM Elements objects
const form=document.getElementById("form-body");
const propLength=document.getElementById("input-len");
const propBreadth=document.getElementById("input-bre");
const resultContainer=document.getElementById("result-container");
const result=document.getElementById("result-text");
const resetBtn=document.getElementById("btn-reset")
const backBtn=document.querySelector("#btn-back");
const alert=document.getElementById("alert-container");


//adding submit event listener to the form
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let lenght=propLength.value;
    let breadth=propBreadth.value;
    let area= lenght*breadth;
    let perimeter= (2*lenght+2*breadth);
    resultContainer.style.backgroundColor="white"
    alert.hidden=false;
    result.textContent=`Area of the rectangle is ${area}, while its perimeter is ${perimeter}`
})
resetBtn.addEventListener('click',()=>{
    resultContainer.hidden=true;
    location.reload();
})


backBtn.addEventListener('click',(e)=>{
document.location.href="./"
})

 



