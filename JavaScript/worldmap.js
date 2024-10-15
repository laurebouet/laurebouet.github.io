

var worldmap = document.querySelectorAll("path");
var names = document.querySelectorAll('path');

// console.log(worldmap.length);
visited = 
['FR','PT','TZ','ES',
'FI','DK','BG','TN','GB','BR','HR'
,'ME','NO','NL','SE','IT','GR','IS'];

for (var i=0;i<visited.length;i++){
    const id = document.getElementById(visited[i]);

    id.addEventListener(
        "mouseover",
        (event) => {
        event.target.style.fill ='#843434';
        },
        true
      );
    id.addEventListener(
      "mouseout", (event) => { 
        event.target.style.fill = "black"; });
}



// document.addEventListener('DOMContentLoaded', function() {
// var countries = document.querySelectorAll('.country');
//   countries.forEach(element => {
//     const titles = element.getAttributeNS('http://www.w3.org/1999/xlink','title');
//     console.log(titles);
//   });

// });