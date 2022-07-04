function Senha() {
    var maiuscula = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var minusculo = "abcdefghijklmnopqrstuvwxyz";
    var numeros = "0123456789";
    var simbolos = "!@#$%¨&()|/-+{}[]";
    
    aleatorio = maiuscula + minusculo + numeros + simbolos;
    
    tamanhoSenha = 16;
    var senha = "";
    
    for (var i = 0; i < tamanhoSenha; i++) {
        var randomNumber = Math.floor(Math.random() * aleatorio.length);
        senha += aleatorio.substring(randomNumber, randomNumber + 1);
    }
    // console.log(senha);

    document.querySelector('div.senha').innerHTML += "<p>" + senha + "</p>";
}