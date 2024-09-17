

visited = 
['FR','PT','TZ','ES',
'FI','DK','BG','TN','GB','BR','HR'
,'ME','NO','NL','SE','IT','GR','IS'];



var number = document.getElementById("countnumber");
var count = 0;
console.log(visited)
console.log(number)



for(var i=0;i<visited.length;i++){
    console.log(visited[i])
    setTimeout(()=>{
    count++;
    number.innerHTML=count
    },200)
    
}