function Senha() {
    let maiuscula = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let minusculo = "abcdefghijklmnopqrstuvwxyz";
    let numeros = "0123456789";
    let simbolos = "!@#$%¨&*()|/*-+{}[]";
    
    let aleatorio = maiuscula + minusculo + numeros + simbolos;
    
    tamanhoSenha = 16;
    let senha = "";
    
    for (let i = 0; i < tamanhoSenha; i++) {
        let randomNumber = Math.floor(Math.random() * aleatorio.length);
        senha += aleatorio.substring(randomNumber, randomNumber + 1);
    }
    // console.log(senha);

    document.querySelector('div.senha').innerHTML += "<p>" + senha + "</p>";
}