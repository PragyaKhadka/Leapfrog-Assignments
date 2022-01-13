function distance(x1,y1,x2,y2){
    let distance=Math.sqrt(Math.pow((x2-x1),2)+Math.pow((y2-y1),2));
    return(distance);
}

function check_legal_move(r1,c1,r2,c2){
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

function check_legal_jump(r1,c1,r2,c2){
    midpoint_row=(r1+r2)/2;
    midpoint_col=(c1+c2)/2;
    if(distance(r1,c1,midpoint_row,midpoint_col)==0.5*distance(r1,c1,r2,c2)){
        if(check_legal_move(r1,c1,midpoint_row,midpoint_col) && check_legal_move(midpoint_row,midpoint_col,r2,c2) && isgoat(midpoint_row,midpoint_col)){
            return 1;
        }
    }
}

function startgame(){
    startpage.style.display="none";
    canvas_body.style.display="none";
    notification.style.display="none";
    gametype.style.display="block";
}

function choose_game(){
    startpage.style.display="none";
    canvas_body.style.display="block";
    notification.style.display="none";
    gametype.style.display="none";
}
function isblank(row,col){
    if(Math.round(row)==row && Math.round(col)== col){
        if((row>=0 && row<5) && (col>=0&&col<5) && pieces[row][col]==0){
            return true;
        }
    }
}

function istiger(row,col){
    if(Math.round(row)==row && Math.round(col)== col){
        if((row>=0 && row<5) && (col>=0&&col<5) && pieces[row][col]==1){
            return true;
        }
    }
}

function isgoat(row,col){
    if(Math.round(row)==row && Math.round(col)== col){
        if((row>=0 && row<5) && (col>=0&&col<5) && pieces[row][col]==2){
            return true;
        }
    }
}
function reload(){
        location.reload();
}
function notify(){
    victory_sound.play();
    turn=0;
    let p_notify = document.createElement("p")
    notification.appendChild(p_notify);
    p_notify.innerHTML=`${display_winnerimage()}<br>
                        <p style="color:#6B8E23;font-size:28px;font-family:Risque;position:absolute; left:350px;top:180px;"> ${display_winner()} WIN THE MATCH...</p><br>
                        <p style="color:#AB6B51;font-size:22px;font-family:Risque;position:absolute; left:330px;top:220px;">[Click on the New Game Button to Play Again]</p>`;
    startpage.style.display="none";
    canvas_body.style.display="block";
    notification.style.display="block";
    console.log("in notify");
}
function tiger_bestmove(){
    max_point=0;
    max_r1=0; max_c1=0; max_r2=0; max_c2=0;
   
        for(r1=0;r1<5;r1++){
        for(c1=0;c1<5;c1++){
            for(r2=0;r2<5;r2++){
                for(c2=0;c2<5;c2++){
                    let points=0;
                    if(istiger(r1,c1) && isblank(r2,c2)){
                        if(check_legal_jump(r1,c1,r2,c2)==1){
                            points = points+10000;
                            points = points+ evaluate_move(r1,c1,r2,c2);
                        }
                        if(check_legal_move(r1,c1,r2,c2)==1){
                            points = points+30;
                            points= points+ evaluate_move(r1,c1,r2,c2);
                        }
                        if(points>=max_point){
                            max_r1=r1;
                            max_r2=r2;
                            max_c1=c1;
                            max_c2=c2;
                            max_point=points;
                        }
                    }
                }
            }
        }
    }
    if(max_point!=0){
        pieces[max_r1][max_c1]=0;
        pieces[max_r2][max_c2]=1;
        if(max_point>=1000){
            pieces[(max_r1+max_r2)/2][(max_c1+max_c2)/2]=0;
            goats_eaten=goats_eaten+1;
            tiger_sound.play();
        }
        turn=2;
    }
}
function evaluate_move(){
    score=0;
    for(i=r2-2;i<=r2+2;i=i+2){
        for(j=c2-2;j<=c2+2;j=j+2){
            if(check_legal_jump(r2,c2,i,j)==1 && isblank(i,j)){
                score=score+100;
            } 
        }
    }
    for(i=r1-2;i<=r1+2;i=i+2){
        for(j=c1-2;j<=c1+2;j=j+2){
            if(check_legal_move(i,j,r1,c1)==1 && istiger(i,j)){
                score=score+50;
            }
        }
    }
if((r2+c2)%2==0){
    score = score+10;
}
if(r2==0||r2==4||c2==0||c2==4){
    score = score+5;
}
score = score+Math.abs(Math.pow(r2-2,3)+Math.pow(c2-2,3));
return score;
}
