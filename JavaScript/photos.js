//bar de recherche
function search(){
    var input, filter, ul, li, i, a, txtvalue, cpt;
    cpt=0;
    input =  document.getElementById("recherche");
    filter = input.value.toUpperCase();
    ul = document.getElementById("photos");
    li = ul.getElementsByTagName("li");
    for(i=0;i<li.length;i++){
        a = li[i].getElementsByTagName("a")[0];
        txtvalue = a.textContent || a.innerText;
        if(txtvalue.toUpperCase().indexOf(filter)> -1){
            li[i].style.display = "";
            cpt=cpt+1;
        }
        else{
            li[i].style.display = "none";
        }
    }
    document.getElementById("res").innerHTML =cpt+" résulat(s) trouvé(s)";
}
