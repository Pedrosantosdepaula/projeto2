function mostrarDataHora(){
    const date = new Date ();

    console.log(date.toLocaleTimeString()); 

    document.getElementById('date').innerText = date.toLocaleTimeString()
}
mostrarDataHora();

function alterarNomeAlteracaoMaiusculo() {
    const nomeAlteracao = document.getElementById('nome-alteracao');
    nomeAlteracao.innerText = nomeAlteracao.innerText.toUpperCase();
}
alterarNomeAlteracaoMaiusculo();