let screen= document.getElementById("visible");
const boundary_width=400;
const boundary_height=400;
// fps = 60;
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
  }

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }
 let vx;
 let vy;
 let radius;
 
function Ball(){
    this.ball= document.createElement("div");
    this.ball.style.width="40px";
    this.ball.style.height="40px";
    this.ball.classList.add("ball");

    this.radius=20;
    // console.log(this.radius);

    this.x= getRandomInt(0,boundary_width);
    // console.log(this.x);
    this.y= getRandomInt(0,boundary_height);
    // console.log(this.y);

    this.ball.style.top=this.y+"px";
    this.ball.style.left=this.x+"px";

    this.dx= getDirection();
    this.dy= getDirection();

    this.vx = 200;
    this.vy = 200;

    this.draw=function(){
        screen.appendChild(this.ball);
    }     

    this.move=function(){ 
            setInterval(()=>{
                this.x+=this.vx/60*this.dx;
                this.y+=this.vy/60*this.dy;
                this.ball.style.left=this.x+"px";
                this.ball.style.top=this.y+"px";
                this.checkWallCollision();
                this. checkBallCollision();
                // this.resolveCollision();  
            },1000/60);
    }
    this.checkWallCollision = function () {
        if (this.x+2*this.radius> boundary_width|| this.x<=0) {
          this.vx*=-1;
        }
        if (this.y+2*this.radius> boundary_height|| this.y-this.radius <=0) {
            this.vy*=-1;
          }
        }
      this.checkBallCollision=function(){
        ballArray.forEach(function(item, index, array) {
            let i = index;
            for(i=0;i<ballCount;i++){
                for(j=1;j<ballCount;j++){
                    this.x = Math.abs(ballArray[i].x-ballArray[j].x);
                    this.y = Math.abs(ballArray[i].y-ballArray[j].y);
                    let sum_radius= ballArray[i].radius+ ballArray[j].radius;
                    let length = Math.sqrt(this.x*this.x+this.y*this.y);
                    if (this.x*this.x+this.y*this.y<=sum_radius*sum_radius){
                    
                        ballArray[i].x = -ballArray[i].x;
                        ballArray[i].y = -ballArray[i].y;
                        ballArray[j].x = -ballArray[j].x;
                        ballArray[j].y = -ballArray[j].y;
                        ballArray[i].x = ballArray[j].x+(sum_radius-length)*-ballArray[j].dx;
                        ballArray[i].y = ballArray[j].y+(sum_radius-length)*-ballArray[j].dy;
                     
                    return true;
                         }
                     else{
                        return false;
                    }
                }
            }
                })
         }

}
function getDirection(){
let a = getRandomArbitrary(-1,1);
return a;
}

const ballCount =10;
const ballArray =[];
function click(){
for(let i =0;i<ballCount;i++){
    const ball= new Ball();
    ballArray.push(ball);
    ball.draw();
    ball.move();
}
}
click();



// function resolveCollision(){
//     this.x = Math.abs(ballArray[i].x-ballArray[j].x);
//     this.y = Math.abs(ballArray[i].y-ballArray[j].y);
//     let sum_radius= ballArray[i].radius+ ballArray[j].radius;
//     let length = Math.sqrt(this.x*this.x+this.y*this.y);
//     let unit_x = this.x / length;
//     let unit_y = this.y /length;
//     ballArray[i].x = ballArray[j].x+(sum_radius)*unit_x;
//     ballArray[i].y = ballArray[j].y+(sum_radius)*unit_y;
//     console.log("resolved");
// }


