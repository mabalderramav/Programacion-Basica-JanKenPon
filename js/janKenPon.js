/*
 * Variable
*/
var piedra = 0;
var papel = 1;
var tijera = 2;
/*
 * End Variable
*/
/*
* Metod
*/
//Genera un numero aleatorio entre un rango de enteros
function aleatorio(minimo,maximo)
{
    var numero = Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
    return numero;
}
function getOpciones()
{
    return ["Piedra","Papel","Tijera"];
}
function validar(opcion)
{
    if(!isNaN(opcion))
    {
        if(opcion % 1 == 0)
        {
            return true;
        }
    }
    return false;
}
function comprobar(opcionUsuario, opcionMaquina)
{
    if(opcionUsuario == piedra)
    {
        if(opcionMaquina == piedra)
        {
            alert("Empataste con la maquina :D");
        }
        else if(opcionMaquina == papel)
        {
            alert("Perdiste con la maquina :(");
        }
        else if(opcionMaquina == tijera)
        {
            alert("Le ganaste a la maquina :)");
        }
    }
    else if(opcionUsuario == papel)
    {
        if(opcionMaquina == piedra)
        {
            alert("Le ganaste a la maquina :)"); 
        }
        else if(opcionMaquina == papel)
        {
            alert("Empataste con la maquina :D");
        }
        else if(opcionMaquina == tijera)
        {
            alert("Perdiste con la maquina :(");
        }
    }
    else if(opcionUsuario == tijera)
    {
        if(opcionMaquina == piedra)
        {
            alert("Perdiste con la maquina :("); 
        }
        else if(opcionMaquina == papel)
        {
            alert("Le ganaste a la maquina :)");
        }
        else if(opcionMaquina == tijera)
        {
            alert("Empataste con la maquina :D");
        }
    }
}

/*
 * End Motod
*/
/*
 * Event
*/
function jugar()
{
    var opcionUsuario = document.getElementById("txtOpcion").value;
    if(validar(opcionUsuario))//Valida que no sea una cadena de texto ni un numero decimal
    {
        if(opcionUsuario > 0 && opcionUsuario < 4)
        {
            opcionUsuario--;
            var minimo = 0;
            var maximo = 2;
            var opcionMaquina = aleatorio(minimo,maximo);
            alert("Tu elegiste " + getOpciones()[opcionUsuario] +
                    "y la maquina eligio " + getOpciones()[opcionMaquina]);
            comprobar(opcionUsuario,opcionMaquina);
        }
        else
        {
            alert("El numero No es una opcion valida");
        }
    }
    else
    {
        alert("El valor ingresado no es un entero");
    }
}

/*
 * End Event
*/