
function ValidarDni(){

    const dniCharacters = "TRWAGMYFPDXBNJZSQVHLCKE"
    let dni = document.getElementById("dni").value.toUpperCase();
    let result = document.getElementById("result");
    let numbers =  dni.slice(0, -1);
    let dniChar = dni.slice(-1);

    if (!/^[0-9]{8}[A-Z]$/.test(dni)) {
        result.innerText = "Formato de DNI incorrecto.";
        return;
    }

    let index = parseInt(numbers % 23);
    console.log(index);
    let char = dniCharacters[index];
    console.log(char)

    if(dniChar === char){
        result.innerText = "DNI valido";
    }else{
        result.innerText = `Error! la letra deberia ser: ${char}`
    }

};