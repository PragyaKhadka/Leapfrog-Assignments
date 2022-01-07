// import {placegoats} from './utility.js';
let canvas= document.getElementById('canvas');
let boxes= document.getElementsByClassName('box');
const ctx = canvas.getContext('2d');
ctx.canvas.width= window.innerWidth;
ctx.canvas.height= window.innerHeight;
// ctx.canvas.background = pink;
let top_pad=100;
let left_pad=100;
let spacing=100;
let board_height=500;
let board_width=500;
let mid_h=300;
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
turn=2;
goats_eaten=0;
goats_remain=2;
goat_clicked=0;
clickedgoat_row=0;
clickedgoat_col=0;
tiger_clicked=0;
clickedtiger_row=0;
clickedtiger_col=0;


function drawline(x1,y1,x2,y2){
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.stroke();
}
function drawboard(){
    ctx.fillStyle="#FF69B4";
    ctx.fillRect(left_pad-tiger_radius, top_pad-tiger_radius, spacing*4+tiger_radius*2, spacing*4+tiger_radius*2)
    ctx.strokeStyle="white";
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
    
}
drawboard();
drawpieces();

function drawpieces(){
    for(i=0;i<5;i++){
        for(j=0;j<5;j++){
            if(pieces[i][j]==1){
                ctx.beginPath();
                ctx.fillStyle='#FF7F50';
                ctx.arc(left_pad+j*spacing,top_pad+i*spacing,25,0,2*Math.PI,true);
                // ctx.stroke();
                ctx.fill();
        }
        else if(pieces[i][j]==2){
            ctx.beginPath();
            ctx.fillStyle='green';
            ctx.arc(left_pad+j*spacing,top_pad+i*spacing,20,0,2*Math.PI,true);
            // ctx.stroke();
            ctx.fill();
        }
        }
    } 
}
//drawpieces();
document.onmousemove = getmouse_pos;
canvas.onmousedown = clicked;
canvas.onmouseup = mouseup;
let mouse_posX= 0;
let mouse_posY= 0;

function getmouse_pos(event){
   
    mouse_posX = event.clientX;
	mouse_posY = event.clientY;
    // let rect= canvas.getBoundingClientRect();
    // mouse_posX = event.clientX-rect.left;
    // mouse_posY = event.clientY-rect.top;
    // console.log("Coordinate x: " + mouse_posX, 
    // "Coordinate y: " + mouse_posY);
    mouse_posX = mouse_posX - canvas.offsetLeft;
	mouse_posY = mouse_posY - canvas.offsetTop;
    return true;
}
function distance(x1,y1,x2,y2){
    let distance=Math.sqrt(Math.pow((x2-x1),2)+Math.pow((y2-y1),2));
    return(distance);
}
function check_valid_move(r1,c1,r2,c2){
    if(distance(r1,c1,r2,c2)<2){
        if((r1+c1)%2==0){
            return 1;
        }
        else{
            if(distance(r1,c1,r2,c2)==1){
                return 1;
            }
        }
    }
    return 0;
}
function clicked(){
    for(i=0;i<5;i++){
        for(j=0;j<5;j++){
            pos_x = left_pad+j*spacing;
            pos_y = top_pad+i*spacing;
            //console.log(pos_x);
            if((mouse_posX>pos_x-goat_radius)&&(mouse_posX<pos_x+goat_radius)&&(mouse_posY>pos_y-goat_radius)&&(mouse_posY<pos_y+goat_radius)){
                piece_posX=i;
                piece_posY=j;
                console.log("x",piece_posX)
                console.log("y",piece_posY)
            }

        }
    }
    if(piece_posX>-1){
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
            console.log("x1",piece_posX);
            console.log("y1",piece_posY);
            console.log("r",clickedgoat_row);
            console.log("c",clickedgoat_col);
            if(check_valid_move(clickedgoat_row,clickedgoat_col,piece_posX,piece_posY)==1){
                console.log("i am in")
                //console.log(pieces[clickedgoat_row][clickedgoat_col]); 
                //console.log(pieces[clickedgoat_row][clickedgoat_col]);
                pieces[piece_posX][piece_posY]=2;
                pieces[clickedgoat_row][clickedgoat_col]=0;
                goat_clicked = 0;
                turn= 1;
                } 
        }

    }
    if(turn==1&&pieces[piece_posX][piece_posY]==1){
        tiger_clicked=1;
        clickedtiger_row=piece_posX;
        clickedtiger_col=piece_posY;
    }
    else if(turn==1 && tiger_clicked==1 && pieces[piece_posX][piece_posY]==0){
        if(check_valid_move(clickedtiger_row,clickedtiger_col,piece_posX,piece_posY)==1){
            console.log("i am in");
            pieces[piece_posX][piece_posY]=1;
            pieces[clickedtiger_row][clickedtiger_col]=0;
            goat_clicked = 0;
            turn= 2;
            } 
        }
}
piece_posX=-1;
piece_posY=-1;
drawboard();
drawpieces();
// console.log(check_valid_move(2,1,2,2));
// // console.log("dist",distance(1,1,0,0));
function mouseup(){
    drawboard();
    drawpieces();
    if(goat_clicked!=0){
    clicked();
    }
}
