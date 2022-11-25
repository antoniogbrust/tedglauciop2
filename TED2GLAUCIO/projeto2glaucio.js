function mostrarMensagem (){

   
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var idade = document.getElementById("idade").value;
    var MaiorIdade = document.getElementById("MaiorIdade").value;
    var newsletter = document.getElementById("newsletter").value;
    var mensagem = document.getElementById("mensagem").value;


    const Pessoa = {
        nome1: nome,
        email1: email,
        idade1: idade,
        MaiorIdade1: MaiorIdade,
        newsletter1: newsletter,
        mensagem1: mensagem
    }

    
    console.log(Pessoa.nome1);
    console.log(Pessoa.email1);
    console.log(Boolean(MaiorIdade));
    console.log(Pessoa.idade1);
    console.log(Boolean(newsletter));
    console.log(Pessoa.mensagem1)
}

function limparCampos() {

    document.getElementById("nome").value = ""
    document.getElementById("email").value = ""
    document.getElementById("idade").value = ""
    document.getElementById("MaiorIdade").checked = false;
    document.getElementById("newsletter").checked = false;
    document.getElementById("mensagem").value = ""

}
