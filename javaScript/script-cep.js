//preencher os inputs com arrow functions(informações)
const preencherFormulario = (endereco) => {
    document.getElementById("rua").value = endereco.logradouro;
    document.getElementById("bairro").value = endereco.bairro;
    document.getElementById("cidade").value = endereco.localidade;
    document.getElementById("estado").value = endereco.uf;
}
//Verificação de caracteres
const cepValido = (cep) => {
    if (cep.length == 8) {
        return true;
    } else {
        return false;
    }
}
//buscar API
//Com async e await podemos trabalhar com código assíncrono em um estilo mais parecido com o bom e velho código síncrono.

//Pega o cep escrito e pesquisa na api
const pesquisarCep = async () => {
    const cep = document.getElementById("cep").value;
    const url = `http://viacep.com.br/ws/${cep}/json/`;
    
    //envia nos quadros
    if (cepValido(cep)) {
        const dados = await fetch(url);
        const endereco = await dados.json();
        preencherFormulario(endereco);
    }
}
document.getElementById("cep").addEventListener("focusout", pesquisarCep);