function validar(){
    if(document.formulario.name.value.length != 0 && document.formulario.email.value.length != 0 && document.formulario.textArea.value.length != 0){
        alert("Tu consulta fue enviada");
    } else if(document.formulario.name.value.length == 0){
        alert("¡Falta tu nombre!");
    } else if (document.formulario.email.value.length == 0){
        alert("¡Falta tu email!");
    } else if(document.formulario.textArea.value.length == 0){
        alert("¿No nos vas a consultar nada?");
    }
}

// let card = document.getElementsByClassName("card");
// console.log(card);

// const jsonData = new XMLHttpRequest()
// jsonData.open('GET', 'productos.json', true);
// jsonData.send();
// jsonData.onreadystatechange = function(){
//     if(this.readyState == 4 && this.status == 200){
//         console.log(this.responseText);
//         var productos = JSON.parse(this.responseText);
//         console.log(productos);
//         console.log(typeof(productos));

//         for(i in productos){
//             console.log(productos[i]);
//         }
//     }
// }

// function ponerPrecio(i){
//     i = 0;
//     while(i<=5){
//         card.innerHTML(productos[i]);
//         i++;
//     }
// }

