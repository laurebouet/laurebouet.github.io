// selectionne les differents pays
var elt_A = document.querySelectorAll('#F,#K,#P,#U');
console.log(elt_A);
var elt_F = document.querySelectorAll('#A,#K,#P,#U');
console.log(elt_F);
var elt_K = document.querySelectorAll('#A,#F,#P,#U');
console.log(elt_K);
var elt_P = document.querySelectorAll('#A,#F,#K,#U');
console.log(elt_P);
var elt_U = document.querySelectorAll('#A,#F,#K,#P');
console.log(elt_U);
var elt_all = document.querySelectorAll('#A,#F,#K,#P,#U');
console.log(elt_all);
var all = elt_all.length;
// longueur de chaque liste id individuel
var elt_a = document.querySelectorAll('#A').length;
console.log(elt_a);
var elt_f = document.querySelectorAll('#F').length;
console.log(elt_f);
var elt_k = document.querySelectorAll('#K').length;
console.log(elt_k);
var elt_p = document.querySelectorAll('#P').length;
console.log(elt_p);
var elt_u = document.querySelectorAll('#U').length;
console.log(elt_u);
// fonctions
var x = document.getElementById("btn1");
x.addEventListener("click", myFunction1);
function myFunction1() {
    var cpt=0;
    for(var i = 0; i < elt_A.length; i += 1){
        elt_A[i].hidden=true;
        cpt++;
    }
    document.getElementById("res").innerHTML =elt_a+" résulat(s) trouvé(s)";

}
var y = document.getElementById("btn2");
y.addEventListener("click", myFunction2);
function myFunction2() {
    for(var i = 0; i < elt_F.length; i += 1){
        elt_F[i].hidden=true;
    }
    document.getElementById("res").innerHTML =elt_f+" résulat(s) trouvé(s)";

}
var z = document.getElementById("btn3");
z.addEventListener("click", myFunction3);
function myFunction3() {
    for(var i = 0; i < elt_K.length; i += 1){
        elt_K[i].hidden=true;
    }
    document.getElementById("res").innerHTML =elt_k+" résulat(s) trouvé(s)";
}
var w = document.getElementById("btn4");
w.addEventListener("click", myFunction4);
function myFunction4() {
    for(var i = 0; i < elt_P.length; i += 1){
        elt_P[i].hidden=true;
    }
    document.getElementById("res").innerHTML =elt_p+" résulat(s) trouvé(s)";
}
var t = document.getElementById("btn5");
t.addEventListener("click", myFunction5);
function myFunction5() {
    var cpt=0;
    for(var i = 0; i < elt_U.length; i += 1){
        elt_U[i].hidden=true;
        cpt++;
    }
    document.getElementById("res").innerHTML =elt_u+" résulat(s) trouvé(s)";
}
var v = document.getElementById("btn6");
v.addEventListener("click", myFunction6);
function myFunction6() {
    for(var i = 0; i < elt_all.length; i += 1){
        elt_all[i].hidden=false;
    }
    document.getElementById("res").innerHTML =all+" résulat(s) trouvé(s)";
}