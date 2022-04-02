function selecionarPrato(a,b){

    const pratoSelecionado = document.querySelector(a);
	const possuiClasse = pratoSelecionado.classList.contains("prato-selecionado");

    const mostrar = document.querySelector(".prato-selecionado")
    const mostrarValor = document.querySelector(".valor-prato-selecionado")

    if(mostrar !== null){

            mostrar.classList.remove("prato-selecionado");
            mostrarValor.classList.remove("valor-prato-selecionado")

                const elemento = document.querySelector(a);
                elemento.classList.add("prato-selecionado");

                const selecionarValor = document.querySelector(b);
                selecionarValor.classList.add("valor-prato-selecionado")
    }

    else{

        if(possuiClasse===false){
            const elemento = document.querySelector(a);
            elemento.classList.add("prato-selecionado");

            const selecionarValor = document.querySelector(b);
            selecionarValor.classList.add("valor-prato-selecionado")

        }

    }

    // const selecionarValor = document.querySelector(b);
    // selecionarValor.classList.add("valor-prato-selecionado")
}

function selecionarBebida(a,b){

    const bebidaSelecionado = document.querySelector(a);
	const possuiClasse = bebidaSelecionado.classList.contains("bebida-selecionado");

    const mostrar = document.querySelector(".bebida-selecionado");
    const mostrarValorBebida = document.querySelector(".valor-bebida-selecionado")

    if(mostrar !== null){

            mostrar.classList.remove("bebida-selecionado");
            mostrarValorBebida.classList.remove("valor-bebida-selecionado");
            

                const elemento = document.querySelector(a);
                elemento.classList.add("bebida-selecionado");

                const selecionarValor = document.querySelector(b);
                selecionarValor.classList.add("valor-bebida-selecionado")
    }

    else{

        if(possuiClasse===false){
            const elemento = document.querySelector(a);
            elemento.classList.add("bebida-selecionado");

            const selecionarValor = document.querySelector(b);
            selecionarValor.classList.add("valor-bebida-selecionado")
        }

    }
    // const selecionarValorDois = document.querySelector(".valor-bebida-selecionado");
    // alert(selecionarValorDois.innerHTML)
}

// function selecionarSobremesa(a,b){

//     const sobremesaSelecionado = document.querySelector(a);
// 	const possuiClasse = sobremesaSelecionado.classList.contains("sobremesa-selecionado");

//     const mostrar = document.querySelector(".sobremesa-selecionado")

//     if(mostrar !== null){

//             mostrar.classList.remove("sobremesa-selecionado");

//                 const elemento = document.querySelector(a);
//                 elemento.classList.add("sobremesa-selecionado");
//     }

//     else{

//         if(possuiClasse===false){
//             const elemento = document.querySelector(a);
//             elemento.classList.add("sobremesa-selecionado");
//         }

//     }
// }

function notaFiscal(){

    const selecionarValorDois = document.querySelector(".valor-prato-selecionado");

    const selecionarValorUm = document.querySelector(".valor-bebida-selecionado");

    const soma = Number(selecionarValorDois.innerHTML) + Number(selecionarValorUm.innerHTML)

    alert(soma);
}