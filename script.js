setInterval(Bubbles,300);
function Bubbles(){
    const x =document.querySelector("div");
    const Bubbles =document.createElement("span");
    let size=Math.random();
    Bubbles.style.width=60 +size+"px";
    Bubbles.style.height=60 +size+"px";
    Bubbles.style.top=Math.random()*innerHeight+"px";
    Bubbles.style.left=Math.random()*innerWidth+"px";

x.appendChild(Bubbles);
setTimeout(() => {
    Bubbles.remove();
},2000);
}