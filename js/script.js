function mostrarDataHora(){
    const date = new Date ();

    console.log(date.toLocaleString());

    document.getElementById('date').innerText = date.toLocaleString()
}
mostrarDataHora();

function alterarNomeAlteracaoMaiusculo() {
    const nomeAlteracao = document.getElementById('nome-alteracao');
    nomeAlteracao.innerText = nomeAlteracao.innerText.toUpperCase();
}
alterarNomeAlteracaoMaiusculo();