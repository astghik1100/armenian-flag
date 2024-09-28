let flagArr=['#FF0000EF','blue','orange']
let i=0
let flagTag=document.querySelector('.flag')
function makeFlag(){
    if(!flagArr[i]){
        return;
    }
    flagTag.innerHTML+=`
    <div class="flag-field" style="background-color: ${flagArr[i]}"></div>
   `
    i++
}