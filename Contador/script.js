function calcular() {
    var iminicio = document.getElementById("iminicio")
    var imfim = document.getElementById("imfim")
    var imsalto = document.getElementById("imsalto")
    if (iminicio.value.length == 0 || imfim.value.length == 0 || imsalto.value.length == 0) {
        window.alert("alguma caixa não foi preenchida")
    }
    else{
        var inicio = iminicio.value
        var fim = imfim.value
        var salto = imsalto.value
        res= document.getElementById("res")
        
        while (inicio<=fim) {
            console.log("inicio")
            inicio=inicio+salto
        }
        
    }
}