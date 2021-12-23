
let myElement = document.getElementById("box");
myElement.style.width="400px";
myElement.style.height="400px";
myElement.style.border="2px solid red";
var plot_points=[{
        x : 40,
        y : 90
        },
        {
            x : 145,
            y : 95
        },
        {
            x : 55,
            y : 105
        },
        {
            x : 95,
            y : 85
        },
        {
            x : 45,
            y : 60
        }
];
function add_points(array_name){
    for(i=0;i<array_name.length;i++){
        let points = document.createElement("div");
            points.style.width = "10px";
            points.style.height = "10px";
            points.style.position = "absolute";
            points.style.top = array_name[i].y + "px";
            points.style.left = array_name[i].x + "px";
            points.style.background = "black";
            points.style.borderRadius = "50%";
        myElement.appendChild(points);
        points.onclick = function(event){
            // console.log("clicked",event.target);
            event.target.style.background="green";
        };
        }   
}
add_points(plot_points);

