let button=document.createElement("button");
document.body.appendChild(button).className="btn";
button.innerHTML="Start Game"
button.style.fontSize="18px";
button.style.fontWeight="bold";
button.style.left="0px";
button.style.top="65px";
button.style.position="absolute";

button.onclick = function reload(){
    location.reload();
}
let road= document.getElementById("road");
let player= document.getElementById("player");
let obstacle= document.getElementById("obstacle");
let scores=0;
let score = document.getElementById("score");
document.body.appendChild(score);
score.style.position="absolute";
score.style.left="0px";
score.style.top="0px";
score.style.color="white";
score.style.fontSize="40px";
player.style.left="135px";


function moveplayerLeft(){
   player_pos= parseInt(window.getComputedStyle(player).getPropertyValue("left"));
//    console.log(player_pos);
   player_pos-=100;
   if(player_pos>=35){
   player.style.left=player_pos+"px";
   }
};
function moveplayerRight(){
    player_pos= parseInt(window.getComputedStyle(player).getPropertyValue("left"));
 //    console.log(player_pos);
    player_pos+=100;
    if(player_pos<=235)
    player.style.left=player_pos+"px";
}
player_posL= parseInt(window.getComputedStyle(player).getPropertyValue("left"));
obstacle_posL=parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));
 document.addEventListener("keydown",function(event){
    //  console.log(event);
    if(event.key =="ArrowLeft" ){
        moveplayerLeft();

        if(player_posL!==obstacle_posL){
            scores+=0;
        }
        else{
        scores+=1;
        // console.log(scores);
        }
    }
    if(event.key == "ArrowRight" ){
        moveplayerRight();
        if(player_posL!==obstacle_posL){
            scores+=0;
        }
        else{
        scores+=1;
        // console.log(scores);
        }
    }
 });

document.addEventListener("animationiteration",function(event){
//    setInterval(function() {
    const obstacle_pos=[35,135,235];
    let a = Math.floor((Math.random()*3));
    console.log(a);
    const obstacle_pos1=[235,35,135];
    let b = Math.floor((Math.random()*3));
    console.log(b);
    obstacle.style.left=obstacle_pos[a]+"px"||obstacle_pos[b]+"px";
    // console.log(obstacle_pos[a]);
//    },1500);
});
checkOverlapping = setInterval(function(){
    player_posL= parseInt(window.getComputedStyle(player).getPropertyValue("left"));
    obstacle_posL=parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));
    score.innerHTML=`SCORES:+${scores}`
    player_posT= parseInt(window.getComputedStyle(player).getPropertyValue("top"));
    obstacle_posT=parseInt(window.getComputedStyle(obstacle).getPropertyValue("top"));
    if(player_posL ==  obstacle_posL && obstacle_posT>=420){
        // alert("crashedd"); 
        // road.appendChild(end_banner);
        road.style.animation="none";
        if (scores==0){
            scores=0;
        }
        // else{
        // scores==scores;
        // }
        obstacle.style.animation="none";
        obstacle.style.top = obstacle_posT+"px";
        player.style.left = player_posL+"px";
        notify();
        clearInterval(checkOverlapping);
        return true;
    }
},100);

function notify(){
let end_banner = document.createElement("div");
end_banner.innerHTML=`<p>(Oh no! The car crashed!!)<p>
                     <p>Your Game has Ended.</p>
                      <p> Click the Start Game Button to Play Again!!</p><br>
                     <p> Your Score is: ${scores}</p>`
                    
end_banner.style.width="500px";
end_banner.style.height="220px";
end_banner.style.border="1px solid snow"
end_banner.style.background="skyblue";
end_banner.style.fontWeight="bold";
end_banner.style.fontSize="28px";
end_banner.style.position ="absolute";
end_banner.style.textAlign="center";
end_banner.style.top="200px";
end_banner.style.left="-100px";
road.appendChild(end_banner);
}
function speedCheck(){
    setInterval(function(){
        if (checkOverlapping!==true){
            road_speed =parseInt(window.getComputedStyle(road).getPropertyValue("animationDuration"));
            road_speed-=100;
            road.style.animationDuration=road_speed+"px";
            obstacle_speed =parseInt(window.getComputedStyle(obstacle).getPropertyValue("animationDuration"));
            obstacle_speed-=100;
            obstacle.style.animationDuration=obstacle_speed+"px";
        }

    },10000);
}
