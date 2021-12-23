let newElement = document.getElementById("arena");
newElement.style.width="500px";
newElement.style.height="500px";
newElement.style.border="2px solid green";

const point = document.createElement("div")
point.style.width="50px";
point.style.height="50px";
point.style.position="absolute";
point.style.left ="225px";
point.style.top="0px";
point.style.background="yellow";
point.style.borderRadius="60%";
newElement.appendChild(point);
let t = parseInt(point.style.top);
var bounce = 1;
setInterval(() => {
    if(t>460 ){
        bounce = -1;
        const topVal = t + "px";
        point.style.top = topVal;
        t = t + bounce;
       
     }
     if(t<0){
         bounce = -bounce;
         const topVal = t + "px";
         point.style.top = topVal;
          t =Math.abs (t + bounce);
     }
     else{
        const topVal = t + "px";
        point.style.top = topVal;
        t = t + bounce;
    }
}, 1);
 
