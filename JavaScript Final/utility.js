// let canvas= document.getElementById('canvas');
// const ctx = canvas.getContext('2d');
function drawgoats(x0,y0){
    ctx.beginPath();
    ctx.fillStyle='green';
    ctx.arc(x0,y0,20,0,2*Math.PI);
    ctx.stroke();
    ctx.fill();
    }
function placegoats(x,y){
    // if(x==left_pad|| y==top_pad||x==left_pad+1*spacing || y==top_pad+1*spacing||x==left_pad+2*spacing || y==top_pad+2*spacing||x==left_pad+3*spacing || y==top_pad+3*spacing||x==left_pad+4*spacing || y==top_pad+4*spacing){
    //         drawgoats(x,y);
    //  }
    let left_pad=100;
    let top_pad=100;
    let spacing=100;
    //first row
    // if(!(x>left_pad-10)&&!(x<=left_pad+10)&&!(y>=top_pad-10)&&!(y<=top_pad+10)){
    //     drawgoats(x,y);
    //     goat_num+=1;
    //  }
    if(x>left_pad+1*spacing-10&&x<=left_pad+1*spacing+10&&y>=top_pad-10&&y<=top_pad+10){
     drawgoats(x,y);
     goat_num+=1;
    }
    if(x>left_pad+2*spacing-10&&x<=left_pad+2*spacing+10&&y>=top_pad-10&&y<=top_pad+10){
        drawgoats(x,y);
        goat_num+=1;
       }
    if(x>left_pad+3*spacing-10&&x<=left_pad+3*spacing+10&&y>=top_pad-10&&y<=top_pad+10){
        drawgoats(x,y);
        goat_num+=1;
       }
    // if(!(x>left_pad+4*spacing-10)&&!(x<=left_pad+4*spacing+10)&&!(y>=top_pad-10)&&!(y<=top_pad+10)){
    //     drawgoats(x,y);
    //     goat_num+=1;
    //    }
    
    //second row
    if(x>left_pad-10&&x<=left_pad+10&&y>=top_pad+1*spacing-10&&y<=top_pad+1*spacing+10){
        drawgoats(x,y);
        goat_num+=1;
     }
    if(x>left_pad+1*spacing-10&&x<=left_pad+1*spacing+10&&y>=top_pad+1*spacing-10&&y<=top_pad+1*spacing+10){
     drawgoats(x,y);
     goat_num+=1;
    }
    if(x>left_pad+2*spacing-10&&x<=left_pad+2*spacing+10&&y>=top_pad+1*spacing-10&&y<=top_pad+1*spacing+10){
        drawgoats(x,y);
        goat_num+=1;
       }
    if(x>=left_pad+3*spacing-10&&x<=left_pad+3*spacing+10&&y>=top_pad+1*spacing-10&&y<=top_pad+1*spacing+10){
        drawgoats(x,y);
        goat_num+=1;
       }
    if(x>left_pad+4*spacing-10&&x<=left_pad+4*spacing+10&&y>=top_pad+1*spacing-10&&y<=top_pad+1*spacing+10){
        drawgoats(x,y);
        goat_num+=1;
       }
  
    //third_row
    if(x>left_pad-10&&x<=left_pad+10&&y>=top_pad+2*spacing-10&&y<=top_pad+2*spacing+10){
        drawgoats(x,y);
        goat_num+=1;
     }
    if(x>left_pad+1*spacing-10&&x<=left_pad+1*spacing+10&&y>=top_pad+2*spacing-10&&y<=top_pad+2*spacing+10){
     drawgoats(x,y);
     goat_num+=1;
    }
    if(x>left_pad+2*spacing-10&&x<=left_pad+2*spacing+10&&y>=top_pad+2*spacing-10&&y<=top_pad+2*spacing+10){
        drawgoats(x,y);
        goat_num+=1;
       }
    if(x>left_pad+3*spacing-10&&x<=left_pad+3*spacing+10&&y>=top_pad+2*spacing-10&&y<=top_pad+2*spacing+10){
        drawgoats(x,y);
        goat_num+=1;
       }
    if(x>left_pad+4*spacing-10&&x<=left_pad+4*spacing+10&&y>=top_pad+2*spacing-10&&y<=top_pad+2*spacing+10){
        drawgoats(x,y);
        goat_num+=1;
       }
    
    //fourth row
    if(x>left_pad-10&&x<=left_pad+10&&y>=top_pad+3*spacing-10&&y<=top_pad+3*spacing+10){
        drawgoats(x,y);
        goat_num+=1;
     }
    if(x>left_pad+1*spacing-10&&x<=left_pad+1*spacing+10&&y>=top_pad+3*spacing-10&&y<=top_pad+3*spacing+10){
     drawgoats(x,y);
     goat_num+=1;
    }
    if(x>left_pad+2*spacing-10&&x<=left_pad+2*spacing+10&&y>=top_pad+3*spacing-10&&y<=top_pad+3*spacing+10){
        drawgoats(x,y);
        goat_num+=1;
       }
    if(x>left_pad+3*spacing-10&&x<=left_pad+3*spacing+10&&y>=top_pad+3*spacing-10&&y<=top_pad+3*spacing+10){
        drawgoats(x,y);
        goat_num+=1;
       }
    if(x>left_pad+4*spacing-10&&x<=left_pad+4*spacing+10&&y>=top_pad+3*spacing-10&&y<=top_pad+3*spacing+10){
        drawgoats(x,y);
        goat_num+=1;
       }
    
    
    //fifth row
    // if(!(x>left_pad-10)&&!(x<=left_pad+10)&&!(y>=top_pad+4*spacing-10)&&!(y<=top_pad+4*spacing+10)){
    //     drawgoats(x,y);
    //  }
    if(x>left_pad+1*spacing-10&&x<=left_pad+1*spacing+10&&y>=top_pad+4*spacing-10&&y<=top_pad+4*spacing+10){
     drawgoats(x,y);
     goat_num+=1;
    }
    if(x>left_pad+2*spacing-10&&x<=left_pad+2*spacing+10&&y>=top_pad+4*spacing-10&&y<=top_pad+4*spacing+10){
        drawgoats(x,y);
        goat_num+=1;
       }
    if(x>left_pad+3*spacing-10&&x<=left_pad+3*spacing+10&&y>=top_pad+4*spacing-10&&y<=top_pad+4*spacing+10){
        drawgoats(x,y);
        goat_num+=1;
       }
    // if(!(x>left_pad+4*spacing-10)&&!(x<=left_pad+4*spacing+10)&&!(y>=top_pad+4*spacing-10)&&!(y<=top_pad+4*spacing+10)){
    //     drawgoats(x,y);
    //    }
    
    console.log(goat_num);
}