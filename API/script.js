document.getElementById("pesquisaCep").addEventListener('click', PesquisarCep)
async function PesquisarCep(){
    let cep = document.getElementById('cep').value

    const apiViaCep =  'https://viacep.com.br/ws/'+cep+'/json/'

    const resCep = await fetch(apiViaCep)
    const data = await resCep.json()
    if (data.erro == true)
        alert("Cep inválido")
    else
        document.getElementById("rua").value=`${data.logradouro} ${data.bairro} ${data.localidade} ${data.uf}`
}
apiKey = "58225c2cb32667f688885c7ec54a57ca"
apiBDImagemUnsplash = "https://source.unsplash.com/1600x900/?";
apiBandeiraPais = "https://flagsapi.com/"
tempElement = document.querySelector("#temperatura");
climaIconElement = document.querySelector("#clima-icon");
dadosTemp = document.querySelector(".dadosTemperatura")
dadosLog = document.querySelector(".dadosLogradouro")


document.querySelector("#verificarClima").addEventListener("click", async (e) => {
    e.preventDefault();
    dadosTemp.style.display = "block"
    let cidade = document.querySelector("input[name='cidade']").value
    const apiClimaURL = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&appid=${apiKey}&lang=pt_br`;
    const res = await fetch(apiClimaURL)
    const data = await res.json()
    if (data.cod === "404"){
        alert("Cidade Inválida")
        return
    }
    temperatura.innerText = parseFloat(data.main.temp)+"º";
    humidade.innerText = parseFloat(data.main.humidity)+"%"
    vento.innerText = parseFloat(data.wind.speed)+ "km/h"
    tempo.innerText = data.weather[0].description;
    png = "/flat/64.png"
    document.getElementById("cidadeTemp").innerText = cidade;
    document.getElementById("icone").setAttribute("src", `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
    document.getElementById("imgPais").setAttribute("src", apiBandeiraPais+data.sys.country+png);
    document.getElementById('imgCidade').setAttribute("src",apiBDImagemUnsplash+cidade);
    apiKey = "58225c2cb32667f688885c7ec54a57ca"
})