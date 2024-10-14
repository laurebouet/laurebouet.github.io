//bar de recherche

function searchbar(){
    var input, filter, altText, img, i, objets, count;
    count=0;
    input =  document.getElementById("recherche");
    filter = input.value.toUpperCase();
    objets = document.getElementsByClassName("objet");

    for(i=0;i<objets.length;i++){
        
        // objet = document.getElementsByClassName("imageObjet");
        img= document.getElementsByClassName("imageObjet")[i];
        altText = img.alt;
        
        if(altText.toUpperCase().indexOf(filter) > -1){
            console.log(img);
            console.log(altText);

            objets[i].style.display = "";
            count=count+1;
        }
        else{
            objets[i].style.display = "none";
        }
    }
    document.getElementById("res").innerHTML =count+" résulat(s) trouvé(s)";
}
