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
    let startpage = document.getElementById("startgame");
    startpage.style.display="none";
    canvas_body.style.display="block";
}

function isgoat(row,col){
    if(Math.round(row)==row && Math.round(col)== col){
        if((row>=0 && row<5) && (col>=0&&col<5) && pieces[row][col]==2){
            return true;
        }
    }

}