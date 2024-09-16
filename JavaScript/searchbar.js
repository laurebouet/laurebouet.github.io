//bar de recherche

function searchbar(){
    var input, filter, article, title, i, a, nb_art, cpt;
    cpt=0;
    input =  document.getElementById("recherche");
    
    filter = input.value.toUpperCase();
    // console.log("input "+ filter)
    // main = document.getElementsByClassName("continent_eu");
    nb_art = document.getElementsByTagName("article");
    
    // title = article.getElementsByTagName("a");

    // console.log("number "+ nb_art.length)
    // console.log("title  "+article.innerText);

    for(i=1;i<nb_art.length+1;i++){
        text_art = document.getElementById("textart");
        title = document.getElementsByClassName("art_title");
        article = document.getElementsByClassName("art");
        console.log(i)
        console.log("zone art "+filter)
        console.log(title[i].textContent)
    //     console.log("article "+ article.textContent)
    //     console.log("title  "+title.innerText);
        // a = title[i].getElementsByTagName("h3")[0];
        // console.log("titre "+ title.textContent)
        // console.log("titre "+ a.textContent)
        // console.log("search "+ filter)

        // console.log("txtvalue "+ txtvalue)
        txtvalue = title[i].textContent || title[i].innerText;
        if(txtvalue.toUpperCase().indexOf(filter)>-1){
            console.log("oui "+ i + txtvalue)
            // txtvalue.style.display = "";
            document.getElementsByClassName("art")[i].style.display = "";
            // title[i].style.display = "";
            // .style.display = "";
            // article[i].style.display = "";
            // nb_art[i].style.display = "";
            cpt=cpt+1;
        }
        else{
            console.log("non "+ i + txtvalue)
            // title[i].style.display = "none";
            document.getElementsByClassName("art")[i].style.display = "none";
            // title[i].style.display = "none";

            // article[i].style.display = "none";
            // nb_art[i].style.display = "none";
        }

        // if(title[i].innertext==filter){
            
        //     console.log("oui "+ title[i])
        // }
        // else{
        //     console.log("non "+ title[i])
        // }


        // txtvalue = a.textContent || a.innerText;
        // console.log("txtvalue "+ txtvalue.textContent)
        // if(a> -1){
        //     title[i].style.display = "";
        //     cpt=cpt+1;
        // }
        // else{
        //     title[i].style.display = "none";
        // }
    }
    document.getElementById("res").innerHTML =cpt+" résulat(s) trouvé(s)";
}
