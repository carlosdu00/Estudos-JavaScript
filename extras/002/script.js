var fotohora = document.getElementById("fotohora")

        var agora = new Date()
        var hora = agora.getHours()
        var frase = document.getElementById("frase")
        frase.innerText = (`Agora são ${hora} horas`)
        if(hora<=5 || hora>=20){
            fotohora.src="imagens/noite.png"
        }
        else if(hora<=7){
            fotohora.src="imagens/nascersol.png"
        }
        else if(hora<=17){
            fotohora.src="imagens/dia.png"
        }
        else{
            fotohora.src="imagens/porsol.png"
        }