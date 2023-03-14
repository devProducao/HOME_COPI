const filmes = [
    "https://www.themoviedb.org/t/p/original/2yQUnpc1BXgesJrfcdoRa6jTAnA.jpg",
    "https://www.themoviedb.org/t/p/original/p4tEfYSXFLl7qOXA7QwKF9R1qfV.jpg",
    "https://www.themoviedb.org/t/p/original/oJagOzBu9Rdd9BrciseCm3U3MCU.jpg",
    "https://www.themoviedb.org/t/p/original/hJgEf18Sw8iwtQCzCSIQqGOLaq6.jpg",
    "https://www.themoviedb.org/t/p/original/reKs8y4mPwPkZG99ZpbKRhBPKsX.jpg",
    "https://www.themoviedb.org/t/p/original/uKval7QmEozy7R05FEvE3H9Qice.jpg"
  ];
  const filmesDestaque = [
    "https://www.themoviedb.org/t/p/original/xLxgVxFWvb9hhUyCDDXxRPPnFck.jpg",
    "https://www.themoviedb.org/t/p/original/bzDAfXoqNAvWUe7uss2NE3BmRqy.jpg",
    "https://www.themoviedb.org/t/p/original/2umU3r6V4V2gTmSnZJmH61nTorF.jpg",
    "https://www.themoviedb.org/t/p/original/owGZCAje2VKrGGdwxM7peVwhErx.jpg",
    "https://www.themoviedb.org/t/p/original/jtLB7xJKcbekmOYkb5NZditBsgk.jpg",
    "https://www.themoviedb.org/t/p/original/1sBx2Ew4WFsa1YY32vlHt079O03.jpg"
  ];
  const filmesDestaqueTrailer = [
    "https://www.youtube.com/embed/jfVTJm9NilA",
    "https://www.youtube.com/embed/hWBxoH4-4yw",
    "https://www.youtube.com/embed/yyJBHeU0sBE",
    "https://www.youtube.com/embed/Q_jxROwH8qg",
    "https://www.youtube.com/embed/fYlZDTru55g",
    "https://www.youtube.com/embed/X4bF_quwNtw"
  ];
  const nomeFilmes = [
    "Pantera Negra",
    "Um Principe em Nova York",
    "O poderoso chefão",
    "Nova Ordem Espacial",
    "The Walking Dead",
    "Ginny e Georgia"
  ];
  const categoriaFilmes = [
    "acao",
    "comedia",
    "suspense",
    "acao",
    "suspense",
    "comedia"
  ];
  const trailerFilmes = [
    "https://www.youtube.com/embed/KszSDnO3GGk",
    "https://www.youtube.com/embed/EE10xW7Shdw",
    "https://www.youtube.com/embed/y_-YWEot_7w",
    "https://www.youtube.com/embed/l1ESdTFqjCM",
    "https://www.youtube.com/embed/R1v0uFms68U",
    "https://www.youtube.com/embed/GApM0D2gI1s"
  ];
  const nomeFilmesDestaque = [
    "Coringa",
    "Soul",
    "Godzilla 2",
    "Colheita Maldita",
    "The Good Doctor",
    "Lúcifer"
  ];
  const categoriaFilmesDestaque = [
    "acao",
    "infantil",
    "acao",
    "suspense",
    "suspense",
    "acao"
  ];
  const btnHamburguer = document.querySelector("label");
  const Categoria = document.querySelectorAll("input");
  const buttonClose = document.querySelector("#closeButton");
  const buscarField = document.querySelector(".buscar-field input");
  
  if (typeof localStorage.getItem("Imagem do Conteúdo") !== "object") {
    var categoriaAdd = localStorage["Categorias"].split(",");
    var imagemAdd = localStorage["Imagem do Conteúdo"].split(",");
    var nomeAdd = localStorage["Nome do Conteúdo"].split(",");
    var trailerAdd = localStorage["Trailer do Conteúdo"].split(",");
  } else {
    var categoriaAdd = "";
    var imagemAdd = "";
    var nomeAdd = "";
    var trailerAdd = "";
  }
  console.log(categoriaAdd);
  console.log(imagemAdd);
  console.log(nomeAdd);
  console.log(trailerAdd);
  
  document.write("<h2>Destaques</h2>");
  document.write('<div class="filmesDestaque container">');
  
  for (let i = 0; i < filmesDestaque.length; i++) {
    document.write(
      `<div class="${categoriaFilmesDestaque[i]} ${replaceSpecialChars(
        nomeFilmesDestaque[i]
      )}"><img onclick="exibirTrailer('${
        filmesDestaqueTrailer[i]
      }')" class="filme" src="${filmesDestaque[i]}">`
    );
    document.write(`<p>${nomeFilmesDestaque[i]}</p>`);
    document.write(`<a href="" onclick="exibirtrailer(${trailerFilmes[i]})" >Assistir</a>
    
    </div>`);
  }
  document.write("</div>");
  
  function remove(item) {
    document.querySelector("." + item).remove();
  }
  
  function replaceSpecialChars(str) {
    return str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "") // Remove acentos
      .replace(/([^\w]+|\s+)/g, "") // Substitui espaço e outros caracteres por hífen
      .replace(/\-\-+/g, "-") // Substitui multiplos hífens por um único hífen
      .replace(/(^-+|-+$)/, "") // Remove hífens extras do final ou do inicio da string
      .toLowerCase();
  }
  
  document.write('<div class="Gerais container">');
  
  for (let i = 0; i < filmes.length; i++) {
    document.write(
      `<div class="${categoriaFilmes[i]} ${replaceSpecialChars(
        nomeFilmes[i]
      )}"><img onclick="exibirTrailer('${
        trailerFilmes[i]
      }')" class="filmeNormal" src="${filmes[i]}">`
    );
    document.write(`<p>${nomeFilmes[i]}</p>`);
    document.write(`<button onclick="exibirTrailer('${
      trailerFilmes[i]
    }')">Assistir</button>
    <img class="lixoBtn" onclick="remove('${replaceSpecialChars(
      nomeFilmes[i]
    )}')" src="https://cdn.icon-icons.com/icons2/1489/PNG/512/rubbishbin_102620.png">
    </div>
    `);
  }
  
  for (let i = 0; i < filmes.length; i++) {
    document.querySelector("#searchs").innerHTML += `
    <option value="${nomeFilmes[i]}">
  
    `;
  }
  
  for (let i = 0; i < nomeAdd.length; i++) {
    document.querySelector("#searchs").innerHTML += `
    <option value="${nomeAdd[i]}">
  
    `;
  }
  
  for (let i = 0; i < filmesDestaque.length; i++) {
    document.querySelector("#searchs").innerHTML += `
    <option value="${nomeFilmesDestaque[i]}">
  
    `;
  }
  
  for (
    let i = 0;
    i < categoriaAdd.length &&
    i < nomeAdd.length &&
    i < imagemAdd.length &&
    i < trailerAdd.length;
    i++
  ) {
    if (nomeAdd[i] !== "") {
      document.write(
        `<div class="${categoriaAdd[i].slice(0)} ${replaceSpecialChars(
          nomeAdd[i]
        )}"><img onclick="exibirTrailer('${trailerAdd[
          i
        ].trim()}')" class="filmeNormal" src="${imagemAdd[i]}">`
      );
      document.write(`<p>${nomeAdd[i]}</p>`);
      document.write(`<button onclick="exibirTrailer('${trailerAdd[
        i
      ].trim()}')" >Assistir</button>
      <img class="lixoBtn" onclick="remove('${replaceSpecialChars(
        nomeAdd[i]
      )}')" src="https://cdn.icon-icons.com/icons2/1489/PNG/512/rubbishbin_102620.png">
      </div>`);
    }
  }
  document.write("</div>");
  
  function converterLink(link) {
    return link.replace("watch?v=", "embed/");
  }
  
  function exibirTrailer(trailerLink) {
    document.querySelector("body").classList.add("trailer");
    document.querySelector(".iframe-field").innerHTML = `
    
    <div class="iframe">
    <iframe class="iframe" width="760" height="415" src="${converterLink(
      trailerLink
    )}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  
    <button class="closeTrailer" onclick="closeTrailer()">X</button>
  
    </div>
    `;
  }
  
  function closeTrailer() {
    document.querySelector("body").classList.remove("trailer");
    document.querySelector(".iframe-field").innerHTML = "";
  }
  
  btnHamburguer.addEventListener("click", function () {
    document.getElementById("categorias").classList.toggle("ativo");
  });
  buttonClose.addEventListener("click", function () {
    document.querySelector(".adicionar").classList.remove("ativo");
    document.querySelector("#menu-hamburguer").checked = false;
  });
  
  function adicionar() {
    const categoria = document.querySelector("select");
    const imagemBanner = document.querySelector("#imagemBanner");
    const nomeFilme = document.querySelector("#nomeFilme");
    const trailerFilme = document.querySelector("#linkTrailer");
    console.log(trailerFilme.value);
    if (
      categoria.value &&
      imagemBanner.value &&
      nomeFilme.value &&
      trailerFilme.value != ""
    ) {
      if (trailerFilme.value.startsWith("https://www.youtube.com/watch?v=")) {
        if (
          imagemBanner.value.endsWith(".jpg") ||
          imagemBanner.value.endsWith(".jpeg") ||
          imagemBanner.value.endsWith(".png")
        ) {
          document.getElementById("categorias").classList.remove("ativo");
          categoriaAdd += `, ${categoria.value}`;
          imagemAdd += `, ${imagemBanner.value}`;
          nomeAdd += `, ${nomeFilme.value}`;
          trailerAdd += `, ${trailerFilme.value}`;
          localStorage.setItem("Categorias", categoriaAdd);
          localStorage.setItem("Imagem do Conteúdo", imagemAdd);
          localStorage.setItem("Nome do Conteúdo", nomeAdd);
          localStorage.setItem("Trailer do Conteúdo", trailerAdd);
          swal({
            title: "Bom trabalho!",
            text:
              "Conteúdo adicionado corretamente! Reinicie o site para ver as modificações.",
            icon: "success"
          });
        } else {
          swal(
            "Oops",
            "O link da imagem deve terminar com .jpg, .jpeg ou .png Ex: https://www.themoviedb.org/t/p/w220_and_h330_face/56Z9eh4k9pzR6Yhy201nq2Qoa0n.jpg",
            "error"
          );
        }
      } else {
        swal("Oops", "O link do trailer deve ser do  youtube!", "error");
      }
    } else {
      swal("Oops", "Há campos vazios!", "error");
    }
  }
  
  function categoria(categoria) {
    console.log(categoria);
    if (categoria === "acao") {
      document.querySelectorAll(".comedia").forEach((comedia) => {
        comedia.classList.add("remove");
      });
  
      document.querySelectorAll(".acao").forEach((acao) => {
        acao.classList.remove("remove");
      });
  
      document.querySelectorAll(".suspense").forEach((suspense) => {
        suspense.classList.add("remove");
      });
  
      document.querySelectorAll(".infantil").forEach((infantil) => {
        infantil.classList.add("remove");
      });
    } else if (categoria === "comedia") {
      document.querySelectorAll(".comedia").forEach((comedia) => {
        comedia.classList.remove("remove");
      });
  
      document.querySelectorAll(".acao").forEach((acao) => {
        acao.classList.add("remove");
      });
  
      document.querySelectorAll(".suspense").forEach((suspense) => {
        suspense.classList.add("remove");
      });
  
      document.querySelectorAll(".infantil").forEach((infantil) => {
        infantil.classList.add("remove");
      });
    } else if (categoria === "suspense") {
      document.querySelectorAll(".comedia").forEach((comedia) => {
        comedia.classList.add("remove");
      });
  
      document.querySelectorAll(".acao").forEach((acao) => {
        acao.classList.add("remove");
      });
  
      document.querySelectorAll(".suspense").forEach((suspense) => {
        suspense.classList.remove("remove");
      });
  
      document.querySelectorAll(".infantil").forEach((infantil) => {
        infantil.classList.add("remove");
      });
    } else if (categoria === "infantil") {
      document.querySelectorAll(".comedia").forEach((comedia) => {
        comedia.classList.add("remove");
      });
  
      document.querySelectorAll(".acao").forEach((acao) => {
        acao.classList.add("remove");
      });
  
      document.querySelectorAll(".suspense").forEach((suspense) => {
        suspense.classList.add("remove");
      });
  
      document.querySelectorAll(".infantil").forEach((infantil) => {
        infantil.classList.remove("remove");
      });
    }
  }
  
  function ativarAdicionar() {
    document.querySelector(".adicionar").classList.add("ativo");
    document.getElementById("categorias").classList.remove("ativo");
    document.querySelector("#menu-hamburguer").checked = false;
  }
  
  function buscar() {
    console.log(replaceSpecialChars(buscarField.value));
    document.querySelectorAll(".Gerais > div").forEach((filme) => {
      filme.classList.add("remove");
    });
    document.querySelectorAll(".filmesDestaque > div").forEach((filme) => {
      filme.classList.add("remove");
    });
    document.querySelectorAll("h2").forEach((filme) => {
      filme.classList.add("remove");
    });
    document
      .querySelectorAll(`.${replaceSpecialChars(buscarField.value)}`)
      .forEach((filme) => {
        filme.classList.remove("remove");
      });
  }
  