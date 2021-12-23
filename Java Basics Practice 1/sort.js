var car =[
    {
        id : 1,
        color:"red",
        name:"VolksWagon"
    },
    {
        id:2,
        color:"yellow",
        name:"Ferrari"
    },
    {
        id:3,
        color:"blue",
        name:"Lambhorgini"
    }
]
function sortByKey(array, key) {
  return array.sort((a, b) => {
    let x = a[key];
    let y = b[key];
    
    return ((x < y) ? -1 : ((x > y) ? 1 : 0));
  });
}
console.log(sortByKey(car,"name"));