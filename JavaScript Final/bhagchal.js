let canvas_bg = document.getElementById("canvas_body");
let canvas= document.getElementById('canvas');
let startpage = document.getElementById("startgame");
let gamestatus=document.getElementById('game_status');
let gametype=document.getElementById("choose_gametype");
let notification = document.getElementById("notify");
const ctx = canvas.getContext('2d');
ctx.canvas.width= window.innerWidth;
ctx.canvas.height= window.innerHeight;

let top_pad=150;
let left_pad=100;
let spacing=100;
let board_height=550;
let board_width=500;
let mid_h=350;
let mid_w=300;
let tiger_radius=25;
let goat_radius=20;
let piece_posX = -1;
let piece_posY =-1;

let pieces =new Array(5);
for(i=0;i<pieces.length;i++){
    pieces[i]=new Array(5);
    for(j=0;j<pieces.length;j++){
        pieces[i][j]=0;
    }
}
pieces[0][0]=1;
pieces[0][4]=1;
pieces[4][0]=1;
pieces[4][4]=1;
console.log(pieces);
goats_eaten=0;
goats_remain=20;
goat_clicked=0;
clickedgoat_row=0;
clickedgoat_col=0;
tiger_clicked=0;
clickedtiger_row=0;
clickedtiger_col=0;
turn=2;
function game(n){
game_type=n;
drawboard();
drawpieces();
}

function drawline(x1,y1,x2,y2){
    ctx.lineWidth="2";
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.stroke();
}
function drawboard(){  
    var grd = ctx.createLinearGradient(0,0, spacing*4+tiger_radius*2, spacing*4+tiger_radius*2);
    grd.addColorStop(0.9, "#c19a6b");
    grd.addColorStop(1,"#80461b");
    grd.addColorStop(0.7, "#80461b");
    grd.addColorStop(0.5, "#c19a6b");
    grd.addColorStop(0.3, "#80461b");
    ctx.fillStyle = grd;  
    //ctx.fillStyle="#b38b6d";
    //ctx.lineWidth="10";
    ctx.strokeStyle="#654321";
    ctx.strokeRect(left_pad-tiger_radius, top_pad-tiger_radius, spacing*4+tiger_radius*2, spacing*4+tiger_radius*2)
    // ctx.stroke();
    ctx.fillRect(left_pad-tiger_radius, top_pad-tiger_radius, spacing*4+tiger_radius*2, spacing*4+tiger_radius*2)
    ctx.strokeStyle="#28282B";
    ctx.strokeRect(left_pad, top_pad, spacing*4, spacing*4);
    drawline(left_pad,board_height,board_width,top_pad);
    drawline(board_width,board_height,left_pad,top_pad);
    for(let i=0;i<5;i++){
        drawline(left_pad+i*spacing,top_pad,left_pad+i*spacing,top_pad+spacing*4);
        drawline(left_pad,top_pad+i*spacing,left_pad+spacing*4,top_pad+i*spacing); 
    }
    // ctx.moveTo(left_pad, top_pad+spacing*2);
	// ctx.lineTo(left_pad+spacing*2, top_pad);
	// ctx.lineTo(left_pad+spacing*4, top_pad+spacing*2);
	// ctx.lineTo(left_pad+spacing*2, top_pad+spacing*4);
	// ctx.lineTo(left_pad, top_pad+spacing*2);
	// ctx.stroke();
    drawline(left_pad,mid_h,mid_w,top_pad);
    drawline(left_pad,mid_h,mid_w,board_height);
    drawline(mid_w,board_height,board_width,mid_h);
    drawline(mid_w,top_pad,board_width,mid_h);      
    // drawpieces();  
}
let tiger_image= new Image();
tiger_image.onload=drawtiger();
//tiger_image.onerror=function(){alert(img1.src+' failed to load.');};
tiger_image.src="Images/tigerfinal.png";
let goat_image= new Image();
goat_image.onload=drawgoat();
goat_image.src="Images/goatfinal.png";

function drawtiger(i,j){
    ctx.drawImage(tiger_image,left_pad+j*spacing-30,top_pad+i*spacing-30);
}
function drawgoat(i,j){

    ctx.drawImage(goat_image,left_pad+j*spacing-40,top_pad+i*spacing-25);
}

function drawpieces(){
    let goat_image= new Image();
    goat_image.src="Images/goatfinal.png";
    for(i=0;i<5;i++){
        for(j=0;j<5;j++){
            if(pieces[i][j]==1){
                drawtiger(i,j);
                //  ctx.beginPath();
                // ctx.fillStyle='#FF7F50';
                // ctx.arc(left_pad+j*spacing,top_pad+i*spacing,25,0,2*Math.PI,true);
                // // ctx.stroke();
                // ctx.fill();
               
        }
        else if(pieces[i][j]==2){
            drawgoat(i,j);
           // ctx.drawImage(goat_image,left_pad+j*spacing-40,top_pad+i*spacing-25);
            // ctx.beginPath();
            // ctx.fillStyle='green';
            // ctx.arc(left_pad+j*spacing,top_pad+i*spacing,20,0,2*Math.PI,true);
            // ctx.fill();
        }
        }
    } 
}
drawboard();
drawpieces();
document.onmousemove = getmouse_pos;
canvas.onmousedown = clicked;
canvas.onmouseup = mouseup;
let mouse_posX= 0;
let mouse_posY= 0;

function getmouse_pos(event){
    mouse_posX = event.clientX;
	mouse_posY = event.clientY;
    mouse_posX = mouse_posX - canvas.offsetLeft;
	mouse_posY = mouse_posY - canvas.offsetTop;
    return true;
}
let click_sound= new Audio("Sounds/Mouseclick.mp3");
click_sound.volume=0.1;
let victory_sound= new Audio("Sounds/victoryff.swf.mp3");
victory_sound.volume=0.1;
let tiger_sound= new Audio("Sounds/tigersnarl.mp3");
tiger_sound.volume=1;
function clicked(){
    for(i=0;i<5;i++){
        for(j=0;j<5;j++){
            pos_x = left_pad+j*spacing;
            pos_y = top_pad+i*spacing;
            if((mouse_posX>pos_x-goat_radius)&&(mouse_posX<pos_x+goat_radius)&&(mouse_posY>pos_y-goat_radius)&&(mouse_posY<pos_y+goat_radius)){
                piece_posX=i;
                piece_posY=j;   
                click_sound.play();
            }

        }
    }
    if(piece_posX>-1){
        if(game_type==1 || game_type==2){
        if(turn==2 && goats_remain>0 && pieces[piece_posX][piece_posY]==0){
            goats_remain = goats_remain-1;
            pieces[piece_posX][piece_posY]=2;
            turn = 1;
        }
        else if(turn==2 && goats_remain==0 && pieces[piece_posX][piece_posY]==2){
            goat_clicked= 1;
            clickedgoat_row=piece_posX;
            clickedgoat_col=piece_posY;
        }
        else if(turn==2 && goat_clicked==1 && pieces[piece_posX][piece_posY]==0){
            if(check_legal_move(clickedgoat_row,clickedgoat_col,piece_posX,piece_posY)==1){
                //console.log(pieces[clickedgoat_row][clickedgoat_col]); 
                //console.log(pieces[clickedgoat_row][clickedgoat_col]);
                pieces[piece_posX][piece_posY]=2;
                pieces[clickedgoat_row][clickedgoat_col]=0;
                goat_clicked = 0;
                turn= 1;
                } 
            }
        }
    }

    if(game_type==1){
    if(turn==1 && pieces[piece_posX][piece_posY]==1){
        console.log(piece_posX,piece_posY);
        tiger_clicked=1;
        clickedtiger_row=piece_posX;
        clickedtiger_col=piece_posY;
    }
    else if(turn==1 && tiger_clicked==1 && pieces[piece_posX][piece_posY]==0){
        if(check_legal_move(clickedtiger_row,clickedtiger_col,piece_posX,piece_posY)==1){
            //console.log("i am in");
            pieces[piece_posX][piece_posY]=1;
            pieces[clickedtiger_row][clickedtiger_col]=0;
            tiger_clicked = 0;
            turn= 2;
            } 
        else if(check_legal_jump(clickedtiger_row,clickedtiger_col,piece_posX,piece_posY)==1){
            tiger_sound.play();
            pieces[piece_posX][piece_posY]=1;
            pieces[clickedtiger_row][clickedtiger_col]=0;
            pieces[(piece_posX+clickedtiger_row)/2][(piece_posY+clickedtiger_col)/2]=0;
            tiger_clicked=0;
            turn=2;
            goats_eaten+=1;
            console.log(goats_eaten);
        }
    }
}
if(game_type==2 && turn==1){
        tiger_bestmove();
    }
    piece_posX=-1;
    piece_posY=-1;

let winner = decide_winner();
    if(winner==1 && turn==2){
        notify();
        }
        else if(winner==2 && turn==1){
        notify();
        }
        drawboard();
        drawpieces();
        update();
}

function display_winnerimage(){
    let winners = decide_winner();
    if(winners==1){
            return `<img src="Images/crownedt.png" style="height:80px; width:80px; position:absolute; left:500px;top:100px">`;
            
    }
    else if(winners==2){
        return `<img src="Images/crownedg.png" style="height:80px; width:80px; position:absolute; left:500px;top:100px">`;
        }
}

function display_winner(){
    let winners = decide_winner();
    if(winners==1){
        return "THE TIGERS"
    }
    else if(winners==2){
            return "THE GOATS";
        }
}

let para= document.createElement("paragraph");
gamestatus.appendChild(para);
function update(){
    para.innerHTML=` <p style= "fontFamily:Risque; color:#654321; fontSize:22px;font-family:Risque; font-weight:bold;">&nbsp; &nbsp;Goats On Hand: ${goats_remain}&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Goats Eaten: ${goats_eaten}&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Turn of: ${turnof()}</p>`
}
function turnof(){
    if(turn==1){
        return `<img style="height=1px; width=1px;position:absolute;top:25px;"src="Images/tigerfinal.png" alt="TIGER">`;
    }
    if(turn==2){
        return `<img style="height=1px; width=1px;position:absolute;left:370px;top:25px;"src="Images/goatfinal.png" alt="GOAT">`;
    }
    if(turn==0){
        return"";
        }
}
update();
drawpieces();
function mouseup(){
   drawboard();
   drawpieces();
    if(tiger_clicked!=0||goat_clicked!=0){
    clicked();
    }
    update();
}
function decide_winner(){
 if (goats_eaten>=5){
     return 1;   
 }
 for(r1=0;r1<5;r1++){
     for(c1=0;c1<5;c1++){
         if(pieces[r1][c1]==1){
            for(r2=0;r2<5;r2++){
                for(c2=0;c2<5;c2++){
                    if(pieces[r2][c2]==0){
                        if(check_legal_jump(r1,c1,r2,c2)==1||check_legal_move(r1,c1,r2,c2)==1){
                        return 0;
                        }
                    }
                }
            }
        }
    }
}
return 2;
}