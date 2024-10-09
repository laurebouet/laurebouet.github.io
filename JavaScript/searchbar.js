//bar de recherche

function searchbar(){
    var input, filter, altText, img, i, objets,objet, count;
    count=0;
    input =  document.getElementById("recherche");
    filter = input.value.toUpperCase();
    objets = document.getElementsByClassName("objet");
    // console.log(objets.length);

    for(i=0;i<objets.length+1;i++){
        
        objet = document.getElementsByClassName("imageObjet");

        // objet = document.querySelector(".imageObjet");
        // console.log(objets[i]);
        // altText=objet.alt;
        // console.log(altText);
        // console.log(objet);

        img= document.getElementsByClassName("imageObjet")[i];
        altText = img.alt;
        
        if(altText.toUpperCase().indexOf(filter) > -1){
            objets[i].style.display = "";
            // objet.style.display = "";
            console.log(img);
            console.log(altText);
            count=count+1;
        }
        else{
            objets[i].style.display = "none";
            // objet.style.display = "none";
        }
    }
    document.getElementById("res").innerHTML =count+" résulat(s) trouvé(s)";
}
