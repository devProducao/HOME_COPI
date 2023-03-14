function validar() {

    email = document.getElementById("email").value
    senha = document.getElementById("senha").value

    let request = new XMLHttpRequest();
    request.open('POST', 'http://127.0.0.1:5000/login');
    request.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    const body = JSON.stringify({"email": email, "senha": senha});
    request.send(body)

    request.onprogress = function(){
        console.log("get data...");
    }

    request.onload = () =>{
        var objeto = JSON.parse(request.responseText);

        if (objeto['token'] == 'senha invalida'){
            alert("senha invalida")
        }
        else if (objeto['token'] == 'nao encontrado'){
            alert("Usuario não encontrado")
        }
    }
}