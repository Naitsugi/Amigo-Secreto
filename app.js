// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

let n;
let amigoSorteado;
let p = document.getElementById("resultado");

function agregarAmigos(){
    p.innerHTML="";
    let nombre = document.getElementById("amigo").value;
    if(nombre==""){
        alert("Ingrese un nombre correcto");
        return;
    }else{
    amigos.push(nombre);
    console.log(amigos);
    limpiarImput()
    }
}
 let lista ;

function mostrarAmigos(){

    lista = document.getElementById("listaAmigos");
    //console.log(lista)
    lista.innerHTML = "";

    for(i=0; i<amigos.length; i++){
        lista.innerHTML += "<li>" + amigos[i] + "</li>";
    }
}

function agregarYMostrar() {
    agregarAmigos();
    mostrarAmigos();
}

function limpiarImput(){
    document.getElementById("amigo").value="";
}


function sorteo(){

    if (amigos.length==0){
        alert("No has ingresado ningún nombre")
    }else{
        n=Math.floor(Math.random()*amigos.length);
        amigoSorteado=amigos[n];
        console.log(n);
        console.log(amigoSorteado);
        
        lista.innerHTML="";
        p.innerHTML = `<li>El amigo sorteado es: ${amigoSorteado}</li>`;
        amigos=[];
    }
}
