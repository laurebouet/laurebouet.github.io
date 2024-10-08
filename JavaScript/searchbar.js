//bar de recherche

function searchbar(){
    var input, filter, altText, img, i, articles, count;
    count=0;
    input =  document.getElementById("recherche");
    filter = input.value.toUpperCase();
    articles = document.getElementsByClassName("article");

    // console.log(articles.length);

    for(i=0;i<articles.length+1;i++){

        img= document.getElementsByClassName("imgart")[i] ;
        altText = img.alt;

        console.log(img);
        console.log(altText);
        if(altText.toUpperCase().indexOf(filter) > -1){
            articles[i].style.display = "";
            count=count+1;
        }
        else{
            articles[i].style.display = "none";
        }
    }
    document.getElementById("res").innerHTML =count+" résulat(s) trouvé(s)";
}
