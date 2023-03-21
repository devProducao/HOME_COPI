const listaEdicoes = [
    "Pantera Negra",
    "Um Principe em Nova York",
    "O poderoso chefão",
    "Nova Ordem Espacial",
    "The Walking Dead",
    "Ginny e Georgia"
];


for (let i = 0; i < listaEdicoes.length; i++) {
    document.querySelector("#searchs").innerHTML += `
    <option value="${listaEdicoes[i]}">
  
    `;
}

for (let i = 0; i < nomeAdd.length; i++) {
    document.querySelector("#searchs").innerHTML += `
    <option value="${nomeAdd[i]}">
  
    `;
}


function renderizarEdicoes(response){

    const divContent = document.getElementById('div_content');
    let html = '';

    // ${id}
    for(i = 0; i < response.length; i++){
        titulo = response[i]['titulo']
        corpo = response[i]['corpo']
        data = response[i]['data_str']
        imagem = response[i]['url_foto']

        html +=`
            <div class="itemResponsabilidade" id="${imagem}">
                <h1 style="font-size: 1.5rem; padding-left: 5px;">
                    ${titulo}
                </h1>
                <h2 class="descriptionResponsabilidade">
                    ${data}
                </h2>
                <img src="./img/${imagem}" alt="${imagem}}" width="100%">
                <p>
                    ${corpo}
                </p>
            </div>
        `;  
        // document.getElementById('div_content').innerHTML = view.render()
    }
    divContent.innerHTML = html;
}


function renderizar_pagina_edicao(){
    
}


function search() {
    let input = document.getElementById('search').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('itemResponsabilidade');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";                 
        }
    }
}


function carregar_edicoes(){
    let request = new XMLHttpRequest();
    request.open('GET', 'https://app.projetos.copiporto.com.br/todasEdicoes');
    request.setRequestHeader('Content-Type', 'application/json;charset=UTF-8')

    request.onprogress = function(){
        console.log("get data...");
    }

    request.onload = function(){
        var objeto = JSON.parse(request.responseText);
        console.log(objeto)
    }

    request.send()
}

function carregar_dados(){
    $.ajax({
        url: 'https://app.projetos.copiporto.com.br/todasEdicoes',
        type: 'GET',
        dataType: 'json',
        success: function(response) {
            renderizarEdicoes(response)
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log('erro')
        }
      });
}
