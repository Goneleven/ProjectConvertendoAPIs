
//chama api e retorna o json
fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL').then(response => {
    return response.json()
}).then(economia => {
    console.log(economia)
    document.getElementById("dolar").value = economia.USDBRL.bid;
    document.getElementById("moeda").innerHTML = economia.USDBRL.code;

})