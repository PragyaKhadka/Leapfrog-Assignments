abc = [1,2,3,4];
function transform(array,i){
   let a=[];
    for(i;i<array.length;i++){
            a[i] = array[i]*2 ;
            console.log(a[i]);
    }
}
transform(abc,0);