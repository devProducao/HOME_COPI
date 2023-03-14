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

        html +=`
            <div class="itemResponsabilidade">
                <h1>
                    ${titulo}
                </h1>
                <h2 class="descriptionResponsabilidade">
                    ${data}
                </h2>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRT9DIPGiYFhLIv2c5uE4Blp7E5BVyBn_4AWpKl6Y&s" alt="dia mundial da qualidade" width="100%">
                <p>
                    ${corpo}
                </p>
                <button>leia mais</button>
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
    request.open('GET', 'http://127.0.0.1:5000/todasEdicoes');
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
        url: 'http://127.0.0.1:5000/todasEdicoes',
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
