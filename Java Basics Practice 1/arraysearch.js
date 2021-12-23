var fruits = [{id:1, name:"Banana", color:"Yellow"},
{id:2, name:"Apple", color:"Red"}
]
function searchByName(obj_name,prop_name){
let fruits_info = obj_name.find( fruits_info => fruits_info.name == prop_name);
console.log(fruits_info);
}
searchByName("Banana","");
function searchByName(obj_name,prop_name){
    let fruits_info = obj_name.find( fruits_info => fruits_info.name == prop_name);
    console.log(fruits_info);
    }


