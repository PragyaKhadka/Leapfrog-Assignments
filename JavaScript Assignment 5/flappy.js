let screenview= document.getElementById("view");
let bird= document.getElementById("bird");
// let block= document.getElementById("block");
let block= document.getElementById("block1");
let hole= document.getElementById("hole1");
// let hole= document.getElementById("hole2");
let score= document.getElementById("score");
document.body.appendChild(score);
let scores=0;
let highscore = 0;
score.style.width="200px";
score.style.height="100px";
score.style.padding="4px";
score.style.position="absolute";
score.style.backgroundColor="white";
score.style.borderRadius="5%";
score.style.fontSize="48px";
score.style.left="1000px";
score.style.top="20px";

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

function hole_position(){
    hole_pos= getRandomInt(7,230);
    hole.style.top=hole_pos+"px";
}

document.addEventListener("animationiteration",function(event){
    hole_position();
});

let gravity= setInterval(function(){
    bird_posT= parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
    view_height=parseInt(window.getComputedStyle(view).getPropertyValue("height"));
    if(bird_posT<=558){
    bird.style.top= (bird_posT+1)+"px";
    }
    else{     
        clearInterval();
    }
},1);
let jump=function(event){
        if(event.code == "Space"){
            if(bird_posT>0){    
            bird_posT= parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
            bird.style.top = (bird_posT-80)+"px";
         }  
        } 
    }
document.addEventListener("keyup",jump);

 detectCollision= setInterval(function(){
    hole_posT=parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
    hole_height=parseInt(window.getComputedStyle(hole).getPropertyValue("height"));
    hole_posL=parseInt(window.getComputedStyle(hole).getPropertyValue("left")); 


    block_posL=parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    bird_posT=parseInt(window.getComputedStyle(bird).getPropertyValue("top"));

    bird_posL=parseInt(window.getComputedStyle(bird).getPropertyValue("left"));

    view_height=parseInt(window.getComputedStyle(view).getPropertyValue("height"));
    if(bird_posT<=hole_posT==false && bird_posT<hole_posT+hole_height&&hole_posL<=130&&hole_posL>60){
          
       scores+=1;
    }  
    var newhighscore; 
    if(score==0){
         localStorage.setItem('highscore',0);
        }
    if(scores>0 && scores>localStorage.getItem('highscore')){
        var max_score= Math.max(scores,highscore);
        localStorage.setItem('highscore',max_score);
    }
    score.innerHTML=`<p>Score:${scores}</p>
                <p style="font-size:30px">High Score:${localStorage.getItem('highscore')}</p>` 
    if(bird_posT<=hole_posT && block_posL<=140 && block_posL>60||bird_posT>=hole_posT+hole_height&&block_posL<=140 && block_posL>60){              
        block.style.animation="none";
        hole.style.animation="none";      
        block.style.left="140px";
        hole.style.left="140px" 
        bird.style.top=bird_posT+"px"; 
        document.removeEventListener("keyup",jump);     
        notify();   
        button.style.display="block";     
     }   
  
    },100);
function notify(){
    let end_banner = document.createElement("div");
    end_banner.innerHTML=`<p>(Fatal...)<p>
                             <p>You Lost!!!    </p>
                            <p> Click the Restart Button to Play Again!!</p><br>
                             <p> Your Score is: ${scores}</p>
                             <p> The High Score is: ${localStorage.getItem('highscore')}</p>`       
    end_banner.style.width="500px";
    end_banner.style.height="240px";
    end_banner.style.border="1px solid snow"
    end_banner.style.borderRadius="20%"
    end_banner.style.background="white";
    end_banner.style.fontWeight="bold";
    end_banner.style.fontSize="28px";
    end_banner.style.position ="absolute";
    end_banner.style.textAlign="center";
    end_banner.style.top="200px";
    end_banner.style.left="50px";
    view.appendChild(end_banner);
        }
        let button= document.getElementById("btn");
        button.onclick = function reload(){
            location.reload();
            }   



function home(){
        let start_banner = document.createElement("div");
        start_banner.innerHTML=`<p>(Welcome to The Game!!)<p>
                            <p> Press  The Spacebar to Play The Game</p><br>`

        start_banner.style.width="vw";
        start_banner.style.height="vh";
        start_banner.style.border="1px solid snow"
        start_banner.style.borderRadius="20%"
        start_banner.style.background="white";
        start_banner.style.fontWeight="bold";
        start_banner.style.fontSize="28px";
        start_banner.style.position ="absolute";
        start_banner.style.textAlign="center";
        start_banner.style.top="200px";
        start_banner.style.left="970px";
        document.body.appendChild(start_banner);
    }
    home();
   