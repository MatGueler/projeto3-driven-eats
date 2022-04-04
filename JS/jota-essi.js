function finalizar(){
    if(document.querySelector(".prato-selecionado") !== null & document.querySelector(".bebida-selecionada") !== null
    & document.querySelector(".sobremesa-selecionada") !== null){

        const finalizar = document.querySelector(".menu-finalizar");
        finalizar.classList.add("desativar")

        const confirmar = document.querySelector(".menu-confirmar")
        confirmar.classList.remove("desativar")
    }
}

function escolherPrato(selecionado,nomePrato,valorPrato,icone){

    const pratoEscolhido = document.querySelector(selecionado);
    const nomePratoEscolhido = document.querySelector(nomePrato);
    const valorPratoEscolhido = document.querySelector(valorPrato);
    const iconePratoEscolhido = document.querySelector(icone);

    if(document.querySelector(".prato-selecionado") === null){
        pratoEscolhido.classList.add("prato-selecionado");
        nomePratoEscolhido.classList.add("nome-prato-selecionado");
        valorPratoEscolhido.classList.add("valor-prato-selecionado");
        iconePratoEscolhido.classList.add("icone-selecionado")
        iconePratoEscolhido.classList.remove("desativar")

    }

    else{
        const pratoMarcado = document.querySelector(".prato-selecionado");
        const nomePratoMarcado = document.querySelector(".nome-prato-selecionado");
        const valorPratoMarcado = document.querySelector(".valor-prato-selecionado");
        const iconePratoSelecionado = document.querySelector(".icone-selecionado")

        pratoMarcado.classList.remove("prato-selecionado");
        nomePratoMarcado.classList.remove("nome-prato-selecionado");
        valorPratoMarcado.classList.remove("valor-prato-selecionado");
        iconePratoSelecionado.classList.remove("icone-selecionado")
        iconePratoSelecionado.classList.add("desativar")

        pratoEscolhido.classList.add("prato-selecionado");
        nomePratoEscolhido.classList.add("nome-prato-selecionado");
        valorPratoEscolhido.classList.add("valor-prato-selecionado");
        iconePratoEscolhido.classList.add("icone-selecionado")
        iconePratoEscolhido.classList.remove("desativar")
    }

    finalizar()
}

function escolherBebida(selecionado,nomeBebida,valorBebida,icone){

    const bebidaEscolhida = document.querySelector(selecionado);
    const nomeBebidaEscolhida = document.querySelector(nomeBebida);
    const valorBebidaEscolhida = document.querySelector(valorBebida);

    if(document.querySelector(".bebida-selecionada") === null){
        bebidaEscolhida.classList.add("bebida-selecionada");
        nomeBebidaEscolhida.classList.add("nome-bebida-selecionada");
        valorBebidaEscolhida.classList.add("valor-bebida-selecionada");
    }

    else{
        const bebidaMarcada = document.querySelector(".bebida-selecionada");
        const nomeBebidaMarcada = document.querySelector(".nome-bebida-selecionada");
        const valorBebidaMarcada = document.querySelector(".valor-bebida-selecionada");

        bebidaMarcada.classList.remove("bebida-selecionada");
        nomeBebidaMarcada.classList.remove("nome-bebida-selecionada");
        valorBebidaMarcada.classList.remove("valor-bebida-selecionada");

        bebidaEscolhida.classList.add("bebida-selecionada");
        nomeBebidaEscolhida.classList.add("nome-bebida-selecionada");
        valorBebidaEscolhida.classList.add("valor-bebida-selecionada");
    }

    finalizar()

}

function escolherSobremesa(selecionado,nomeSobremesa,valorSobremesa,icone){

    const sobremesaEscolhida = document.querySelector(selecionado);
    const nomeSobremesaEscolhida = document.querySelector(nomeSobremesa);
    const valorSobremesaEscolhida = document.querySelector(valorSobremesa);

    if(document.querySelector(".sobremesa-selecionada") === null){
        sobremesaEscolhida.classList.add("sobremesa-selecionada");
        nomeSobremesaEscolhida.classList.add("nome-sobremesa-selecionada");
        valorSobremesaEscolhida.classList.add("valor-sobremesa-selecionada");
    }

    else{
        const sobremesaMarcada = document.querySelector(".sobremesa-selecionada");
        const nomeSobremesaMarcada = document.querySelector(".nome-sobremesa-selecionada");
        const valorSobremesaMarcada = document.querySelector(".valor-sobremesa-selecionada");

        sobremesaMarcada.classList.remove("sobremesa-selecionada");
        nomeSobremesaMarcada.classList.remove("nome-sobremesa-selecionada");
        valorSobremesaMarcada.classList.remove("valor-sobremesa-selecionada");

        sobremesaEscolhida.classList.add("sobremesa-selecionada");
        nomeSobremesaEscolhida.classList.add("nome-sobremesa-selecionada");
        valorSobremesaEscolhida.classList.add("valor-sobremesa-selecionada");
    }

    finalizar()

}

function notaFiscal(){

    const procurarPrato = document.querySelector(".nome-prato-selecionado").innerHTML;
    const procurarValorPrato = document.querySelector(".valor-prato-selecionado").innerHTML;

    const procurarBebida = document.querySelector(".nome-bebida-selecionada").innerHTML;
    const procurarValorBebida = document.querySelector(".valor-bebida-selecionada").innerHTML;

    const procurarSobremesa = document.querySelector(".nome-sobremesa-selecionada").innerHTML;
    const procurarValorSobremesa = document.querySelector(".valor-sobremesa-selecionada").innerHTML;

    const abrirTelaConfirmacao = document.querySelector(".tela-pos-pedido")
    abrirTelaConfirmacao.classList.remove("desativar")

    const colocarTelaFundo = document.querySelector(".tela-fundo");
    colocarTelaFundo.classList.remove("desativar")


    const somaTotal = Number(procurarValorPrato) + Number(procurarValorBebida) + Number(procurarValorSobremesa)

    // const mensagem = "Olá, gostaria de fazer o pedido: \n"+
    // "- Prato: " + procurarPrato + "\n"+
    // "- Bebida: " + procurarBebida + "\n"+
    // "- Sobremesa: " + procurarSobremesa + "\n"+
    // "- Total: R$" + somaTotal.toFixed(2)

    // const url = encodeURI("https://wa.me/55999695914?text="+mensagem)

    // window.open(url)

    // ADICIONAR NOME NA TELA

    const mostrarNomePrato = document.querySelector(".confirmacao-nome-prato")
    mostrarNomePrato.innerHTML = procurarPrato

    const mostrarNomeBebida = document.querySelector(".confirmacao-nome-bebida")
    mostrarNomeBebida.innerHTML = procurarBebida
    
    const mostrarNomeSobremesa = document.querySelector(".confirmacao-nome-sobremesa")
    mostrarNomeSobremesa.innerHTML = procurarSobremesa

    // ADICIONAR VALOR DE CADA ITEM NA TELA

    const mostrarValorPrato = document.querySelector(".confirmacao-valor-prato")
    mostrarValorPrato.innerHTML = "R$ " + procurarValorPrato

    const mostrarValorBebida = document.querySelector(".confirmacao-valor-bebida")
    mostrarValorBebida.innerHTML = "R$ " + procurarValorBebida
    
    const mostrarValorSobremesa = document.querySelector(".confirmacao-valor-sobremesa")
    mostrarValorSobremesa.innerHTML = "R$ " + procurarValorSobremesa

    // ADICIONAR VALOR TOTAL NA TELA

    const valorTotal = document.querySelector(".confirmacao-valor-total")
    valorTotal.innerHTML = "R$ " + somaTotal.toFixed(2)
}

function chamar(){

    const procurarPrato = document.querySelector(".nome-prato-selecionado").innerHTML;
    const procurarValorPrato = document.querySelector(".valor-prato-selecionado").innerHTML;

    const procurarBebida = document.querySelector(".nome-bebida-selecionada").innerHTML;
    const procurarValorBebida = document.querySelector(".valor-bebida-selecionada").innerHTML;

    const procurarSobremesa = document.querySelector(".nome-sobremesa-selecionada").innerHTML;
    const procurarValorSobremesa = document.querySelector(".valor-sobremesa-selecionada").innerHTML;

    const abrirTelaConfirmacao = document.querySelector(".tela-pos-pedido")
    abrirTelaConfirmacao.classList.remove("desativar")


    const somaTotal = Number(procurarValorPrato) + Number(procurarValorBebida) + Number(procurarValorSobremesa)

    const mensagem = "Olá, gostaria de fazer o pedido: \n"+
    "- Prato: " + procurarPrato + "\n"+
    "- Bebida: " + procurarBebida + "\n"+
    "- Sobremesa: " + procurarSobremesa + "\n"+
    "- Total: R$" + somaTotal.toFixed(2)

    const url = encodeURIComponent(mensagem)

    window.open("https://wa.me/?text=" + url)
}

function cancelar(){
    const abrirTelaConfirmacao = document.querySelector(".tela-pos-pedido")
    abrirTelaConfirmacao.classList.add("desativar")

    const colocarTelaFundo = document.querySelector(".tela-fundo");
    colocarTelaFundo.classList.add("desativar")
}