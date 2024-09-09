// @import "variables.css"

var worldmap = document.querySelectorAll("path");
var names = document.querySelectorAll('path');

// console.log(worldmap.length);
visited = 
['FR','PT','TZ','ES',
'FI','DK','BG','TN','GB','BR','HR'
,'ME','NO','NL','SE','IT','GR','IS'];

for (var i=0;i<visited.length;i++){
    const id = document.getElementById(visited[i]);
    // var color = document.getElementById("legend");

    id.addEventListener(
        "mouseover",
        (event) => {
        event.target.style.fill ='#F5B994';
        // event.target.innerHTML = "pays visité";

        setTimeout(() => {
            event.target.style.fill = "black";
        }, 200);
        },
        true
      );
}