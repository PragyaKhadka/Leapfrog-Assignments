//image_number= window.prompt("Please enter total number of images in the slider","1");
//t_i= window.prompt("Transition time of pictures in milliseconds","200");
image_number = 6;//number of images in a set
t_i=200;//transition_time for next and previous buttons
h_t=1500;//hold_time for each frames
var dots = [];
for(var i=0;i<image_number;i++){
dots[i] = new Image();
dots[i].src = "Images/circle.png";
}
let unique;
let unique1;
let wrap;
var a;
//here a is the unique name, b is the left position of viewport and c is the top position of viewport
let start = function setName(a,b,c){
    unique1 = a;
    wrap = document.getElementById(`${unique1}wrapper`);
    // a=`${unique1}indicate`;
    // console.log(a)
    var slide = new slider(a,b,c);
    slide.wrap();
    slide.container();
}
class slider{
    constructor(unique_name,viewport_left,viewport_top){
        wrap.style.left = viewport_left;
        wrap.style.top =  viewport_top;
        unique= unique_name;
   }
    wrap(){
        wrap.style.width="15rem";
        wrap.style.height="15rem"; 
        wrap.style.border = "2px solid red";
        wrap.style.position="relative";
        wrap.style.overflow="hidden";
    }    
    container(){
        let container = document.getElementById(`${unique}image-container`);
        // a = `${unique}image-container`;
        // console.log(a);
        container.style.width=image_number*15+"rem";
        container.style.height="15rem";
        container.style.border="1px solid white"
        container.style.position="absolute";
        //next button
        let next_btn = document.createElement("img");
        next_btn.src="Images/d-right.png";
        wrap.appendChild(next_btn).className=`${unique}btn`;
        next_btn.style.width="2.5rem";
        next_btn.style.position="absolute";
        next_btn.style.top="6.5rem";
        next_btn.style.left="12.8rem";
        let clicked = false;
        function check(){
            clicked = true;
            // console.log(clicked);
        }
        // var t_i=200;
        var iid=0;
        next_btn.onclick= function next_image(){
                console.log("clicked me");
                let interval = setInterval(function (){   
                        check();
                        if(iid==(image_number-1)*3){ 
                            iid=-1;
                        }
                        if(iid!==(image_number-1)*3 && iid<(image_number-1)*3){
                            iid++;  
                            }
                        container.style.left=-iid*5+"rem";
                        console.log(iid);
                        if(iid%3===0){
                            clearInterval(interval);
                        }  
                    },t_i);           
        } ;
        //frames
        function frame(){
            if(clicked === false){
            if(iid==(image_number-1)){ 
                iid=-1;
            }
            if(iid!==(image_number-1) && iid<(image_number-1)){
                iid++;  
                }
            container.style.left=-iid*15+"rem";
            
        }
        }
        setInterval(frame,h_t);
        //previous button
        let prev_btn = document.createElement("img");
        prev_btn.src="Images/d-left.png";
        wrap.appendChild(prev_btn);
        prev_btn.style.width="2.5rem";
        prev_btn.style.position="absolute";
        prev_btn.style.top="6.5rem";
        prev_btn.style.left="-.3rem";
        prev_btn.onclick = function previous_image(){
            check();
            let interval = setInterval(function(){  
            if(iid==0){
                iid=(image_number)*3-2;
            }
            if(iid!==0 && iid>0){
                iid--;
            } 
            console.log(iid);
            container.style.left=-iid*5+"rem";
                        
                        if(iid%3===0){
                            clearInterval(interval);
                        }
                    },t_i);
            
        };
        //dots
        dots.className=`${unique}indicate`;
        for(var i=0; i<dots.length;i++){
            wrap.appendChild(dots[i]);
            // a = `${unique}indicate`;
            // console.log(a);
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
                check();  
                let currentIndex = index;
                container.style.left=-currentIndex*15+"rem";
                console.log(index);
                }
                })
    //picture
    let picture = document.getElementsByClassName(`${unique}image`);
    for(var i=0;i<image_number;i++){
    picture[i].style.position="absolute";
    picture[i].style.width = "15rem";
    picture[i].style.height = "15rem";
    picture[i].style.background="white";
    };
    for(var i=0;i<image_number;i++){
        picture[i].style.left =i*15+"rem";
    }

    }

}
start("first_","0rem","0rem");
start("second_","20rem","-15rem");
start("third_","40rem","-30rem");

