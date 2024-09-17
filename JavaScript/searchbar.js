//bar de recherche

function searchbar(){
    var input, filter, article, title, i, nb_art, cpt, box;
    cpt=0;
    input =  document.getElementById("recherche");
    
    filter = input.value.toUpperCase();

    nb_art = document.getElementsByTagName("article");
    

    for(i=0;i<nb_art.length+1;i++){

        text_art = document.getElementById("textart");
        title = document.getElementsByClassName("art_title");
        box = document.getElementsByClassName("art");

        console.log(i)

        txtvalue = box[i].textContent || title[i].innerText;

        if(txtvalue.toUpperCase().indexOf(filter) > -1){
            console.log("oui "+ txtvalue);
            
            box[i].style.display = "";
            
            cpt=cpt+1;
        }
        else{
            console.log("non "+ txtvalue);
            
            box[i].style.display = "none";
        }
        console.log(cpt);
    }
    document.getElementById("res").innerHTML =cpt+" résulat(s) trouvé(s)";
}
