function verificar() {
    var agora = new Date()
    var ano = agora.getFullYear()
    var fano = document.getElementById("txtano")
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert("Erro! Ano não informado ou errado")
    }
    else {
        var idade = ano - fano.value
        var fsex = document.getElementsByName("radsex")
        var foto = document.getElementById("foto")
        var genero = ""
        if (fsex[0].checked) {
            genero = "Homem"
            if (idade >= 0 && idade < 10) {
                foto.src = "midia/foto-bebe-m.png"
            }
            else if (idade < 21) {
                foto.src = "midia/foto-jovem-m.png"
            }
            else if (idade < 50) {
                foto.src = "midia/foto-adulto-m.png"
            }
            else {
                foto.src = "midia/foto-idoso-m.png"
            }
        }
        else {
            genero = "Mulher"
            if (idade >= 0 && idade < 10) {
                foto.src = "midia/foto-bebe-f.png"
            }
            else if (idade < 21) {
                foto.src = "midia/foto-jovem-f.png"
            }
            else if (idade < 50) {
                foto.src = "midia/foto-adulto-f.png"
            }
            else {
                foto.src = "midia/foto-idoso-f.png"
            }
        }
        var res = document.getElementById("res")
        res.innerText = `${genero} de ${idade} anos`
    }
}
