// import {placegoats} from './utility.js';
let canvas= document.getElementById('canvas');
let boxes= document.getElementsByClassName('box');
const ctx = canvas.getContext('2d');
ctx.canvas.width= window.innerWidth;
 ctx.canvas.height= window.innerHeight;
// ctx.canvas.background = pink;
function drawline(x1,y1,x2,y2){
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.stroke();
}
let top_pad=100;
let left_pad=100;
let spacing=100;
let board_height=500;
let board_width=500;
let mid_h=300;
let mid_w=300;
function drawboard(){
    drawline(left_pad,board_height,board_width,top_pad);
    drawline(board_width,board_height,left_pad,top_pad);
    for(let i=0;i<5;i++){
        drawline(left_pad+i*spacing,top_pad,left_pad+i*spacing,top_pad+spacing*4);
        drawline(left_pad,top_pad+i*spacing,left_pad+spacing*4,top_pad+i*spacing); 
    }
    drawline(left_pad,mid_h,mid_w,top_pad);
    drawline(left_pad,mid_h,mid_w,board_height);
    drawline(mid_w,board_height,board_width,mid_h);
    drawline(mid_w,top_pad,board_width,mid_h);
}
drawboard();

// function drawtigers(x0,y0){
// ctx.beginPath();
// ctx.fillStyle='#FF7F50';
// ctx.arc(x0,y0,25,0,2*Math.PI);
// ctx.stroke();
// ctx.fill();
// }
// drawtigers(100,100);
// drawtigers(100,500);
// drawtigers(500,100);
// drawtigers(500,500);
// let goat_num = 0;
// let handler= function(event){
//     const rect= canvas.getBoundingClientRect();
//     let x = event.clientX-rect.left;
//     let y = event.clientY-rect.top;
//     console.log(x,y);
//     placegoats(x,y);
//     if(goat_num==3){
//     canvas.removeEventListener('click',handler());
//     }
// }
// canvas.addEventListener('click',handler);


let goat_num = 0;
function placegoat(i){
            let goat_img =document.createElement("img");
            goat_img.id="goat"
            goat_img.src="Images/goat.jpg";
            goat_img.draggable="true";
            boxes[i].appendChild(goat_img);
            goat_num+=1;   
            if(goat_num == 20){
                boxes[i].removeEventListener('click',handler);
              }               
}

for(let i=0;i<25;i++){
var handler= placegoat.bind(null,i);
 if(i!==0&&i!==4&&i!==20&&i!==24){
    boxes[i].addEventListener('click',handler,{once:true});
}

}


// //placegoat(0);

// goat_img.addEventListener('dragstart', e=>{
//     e.dataTransfer.setData("text/plain",goat_img.id);
// })
// for(let i=0;i<25;i++){
// boxes[i].addEventListener('dragover',e =>{
//     e.preventDefault();
     
// });
// }
// for(let i=0;i<25;i++){
// boxes[i].addEventListener("drop",e=>{
//     e.preventDefault();
//     var data= e.dataTransfer.getData("text/plain");
//     const goat_img = document.getElementById(data);
//     boxes[i].appendChild(goat_img);
// })
// }
//  function allowDrop(ev) {
//     ev.preventDefault();
//   }
  
//   function drag(ev) {
//     ev.dataTransfer.setData("img", ev.target.id);
//   }
  
//   function drop(ev) {
//     ev.preventDefault();
//     var data = ev.dataTransfer.getData("img");
//     ev.target.appendChild(document.getElementById(data));
//   }
