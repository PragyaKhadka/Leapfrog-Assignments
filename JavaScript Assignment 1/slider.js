//image_number= window.prompt("Please enter total number of images in the slider","1");
let container = document.getElementById("image-container");
var image_number = 6;
container.style.width=image_number*15+"rem";
container.style.height="15rem";
container.style.border="1px solid white"
container.style.position="absolute";

let wrap= document.getElementById("wrapper");
wrap.style.width="15rem";
wrap.style.height="15rem";
wrap.style.border = "2px solid red";
wrap.style.position="relative";
wrap.style.left="15rem";
wrap.style.top="15rem";
wrap.style.overflow="hidden";

let picture = document.getElementsByClassName("image");
for(var i=0;i<image_number;i++){
picture[i].style.position="absolute";
picture[i].style.width = "15rem";
picture[i].style.height = "15rem";
picture[i].style.background="white";

};
for(var i=1;i<image_number;i++){
    picture[i].style.left =i*15+"rem";
}

let next_btn = document.createElement("img");
next_btn.src="Images/d-right.png";
document.body.appendChild(next_btn);
next_btn.style.width="2.5rem";
next_btn.style.position="absolute";
next_btn.style.top="22rem";
next_btn.style.left="28rem";
var iid=0;
next_btn.onclick= function next_image(){
        console.log("clicked me");
        let interval = setInterval(function(){   
            
                if(iid==(image_number-1)*3){ 
                    iid=-1;
                }
                if(iid!==(image_number-1)*3 && iid<(image_number-1)*3){
                    iid++;  
                    }
                console.log(iid);
                element = container.style.left=-iid*5+"rem";
                
                if(iid%3===0){
                    clearInterval(interval);
                }  
            },200)
           
} 
let prev_btn = document.createElement("img");
prev_btn.src="Images/d-left.png";
document.body.appendChild(prev_btn);
prev_btn.style.width="2.5rem";
prev_btn.style.position="absolute";
prev_btn.style.top="22rem";
prev_btn.style.left="14.8rem";
prev_btn.onclick = function previous_image(){
    console.log(iid);
    console.log("clicked");
    let interval = setInterval(function(){  
     if(iid==0){
         iid=(image_number)*3-2;
     }
     if(iid!==0 && iid>0){
        iid--;
    }
    element = container.style.left= -iid*15+"rem";  
    console.log(iid);
                element = container.style.left=-iid*5+"rem";
                
                if(iid%3===0){
                    clearInterval(interval);
                }
            },200) 
     
}
const dots = [];
for(var i=0;i<image_number;i++){
dots[i] = new Image();
dots[i].src = "Images/circle.png";
}
for(var i=0; i<dots.length;i++){
wrap.appendChild(dots[i]).className="indicate";
dots[i].style.width="0.8rem";
dots[i].style.position="absolute";
dots[i].style.top="14rem";
dots[i].style.marginLeft="5rem";
dots[i].style.cursor="pointer";
}
for(var i=0;i<dots.length;i++){
    dots[i].style.left =i*0.8+"rem";
}
dots.forEach(function(item, index, array) {
dots[index].onclick = function change_img(){    
    currentIndex = index;
    container.style.left=-currentIndex*15+"rem";
    console.log(index);
      }
    })
  
