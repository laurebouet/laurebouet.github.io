
window.onload = function() {
visited = 
['FR','PT','TZ','ES',
'FI','DK','BG','TN','GB','BR','HR'
,'ME','NO','NL','SE','IT','GR','IS'];



var text = document.getElementById("counttext");
var count = 0;
console.log(visited)
    let counts = setInterval(updateCount, 70);

    function updateCount(){
        count++;
        text.innerHTML=count;
        
        if (count === visited.length) {
            clearInterval(counts);
        }  
    } 
}
    