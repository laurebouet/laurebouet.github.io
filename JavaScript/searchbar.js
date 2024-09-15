//bar de recherche
function searchbar(){
    var input, filter, article, title, i, a, txtvalue, cpt;
    cpt=0;
    input =  document.getElementById("recherche");
    filter = input.value.toUpperCase();
    article = document.getElementsByClassName("art");
    title = article.getElementsByTagName("a");
    for(i=0;i<title.length;i++){
        a = title[i].getElementsByTagName("h3")[0];
        txtvalue = a.textContent || a.innerText;
        if(txtvalue.toUpperCase().indexOf(filter)> -1){
            title[i].style.display = "";
            cpt=cpt+1;
        }
        else{
            title[i].style.display = "none";
        }
    }
    document.getElementById("res").innerHTML =cpt+" résulat(s) trouvé(s)";
}
