function numero_mayor(){ //llamamos a la funcion
    var num1 = parseFloat(document.getElementById('num1').value); //obtenemos el valor del numero 1
    var num2 = parseFloat(document.getElementById('num2').value); //obtenemos el valor numero 2


    if (num1>=num2) { //definimos la condicion
        document.getElementById('resultado').textContent = ("El numero mayor es: " + num1);//primera sentencia

    }
    else if (num2 >= num1){ //edfinimos la condicion 2
        document.getElementById('resultado').textContent = ("El numero mayor es: " + num2); //segunda sentencia
    }
    else { //y por ultimo definimos un else
        document.getElementById('resultado').textContent = "Valor no valido"; //ultima sentencia
    }


}


function ope(){ // llamamos a la funcion 

    var operacion = document.getElementById("operacion").value; //Obtnemos el valor en texto de que operacion

    var num1 = parseFloat(document.getElementById("num1.1").value); //obenemos el valor de el numero 1

    var num2 = parseFloat(document.getElementById("num2.1").value); //obtenemos el valor numero 2

    switch(operacion){ //definimos los casos para la variable operacion
        
        case "suma": //en caso de que el valor pedidio sea = "suma" hara lo siguiente

        resultado = num1 + num2; //en la variable resultado guardamos la suma
        

        document.getElementById('resultado2').textContent = ("El resultado es: " + resultado); //mostramos el resultado de la suma en el html

        break; //marcamos el cierre del case

        case "resta": //en caso de que el valor obtenido sea resta hara lo siguiente
            
        resultado = num1 - num2; //guarda la resta en la variable resultado
        

        document.getElementById('resultado2').textContent = ("El resultado es: " + resultado); //mostramos el resultado

        break; //marcamos el cierre del caso

        
        case "multiplicacion": //en caso de que sea = a "multiplicacion" hara lo siguiente
            
        resultado = num1 * num2; //almacena la multiplicacion en la variable resultado
        

        document.getElementById('resultado2').textContent = ("El resultado es: " + resultado); //mostramos el resultado 

        break; //marcamos el cierre del caso

        
        case "division": //en caso de que la variable sea = "division" hara lo siguiente
            
        resultado = num1 / num2; //Almacena la division en la variable resultado
        

        document.getElementById('resultado2').textContent = ("El resultado es: " + resultado); //mostramos el resultado

    }
     

}






function for1(){ //llamamos a la funcion

    var num1 = document.getElementById("num1.3").value; //obtenemos en valor del numero 1
    var resultado = ""; //declaramos una variable vacia que almacenara el resultado

    for (let i = 1; i <= 10; i++) { //declaramos el contador 1 que se inicializa en 1 y mientras i sea menor o igual que diez, a i se le ira sumando por 1
        let r = i * num1; //hacemos una variable donde almacenemos el resultado de la multiplicacion
        resultado += (num1 + " x " + i + " = " + r + "<br>" );  //almacenmos la tabla de multiplicar
    }

    document.getElementById('resultado3').innerHTML = resultado; //mostramos el resultado

    var resultado = document.getElementById("for1-1"); // obtenemos el id de el contenedor de las tablas de multiplicar

    resultado.style.padding = "12px"; //y le damos un estilo de padding 12px par el espacido interno

}

function whilee(){ //llamamos a la funcion 

    var num1 = document.getElementById("num1.4").value; //obtenemos el valor del numero 1

    var  salida='', digito; //Definimos una variable vacia donde se almacenaran los datos de salida

    do{ //hacer
        digito =  num1%10; //el "%" nos muestra el resto que queda al hacer una division y sacamos el ultimo numero 

        num1 = parseInt(num1/10); //al dividorlo entre 10 sacamos el primer numero

        salida += digito+'  '; //a la salida le agregamos el digito y un espaciado para que no se vean juntos

    }while (num1 >0) //mientras el numero sea mayor que cero

        document.getElementById("resultado4").textContent = ("Los digitos son: " + salida); //mostrar los digitos 
}



function whilee2(){ //llamamos a la funcion

    var num1 = document.getElementById("num1.5").value; //obtenemos el valor del numero 1

    num1 = parseInt(num1); // pasamos el numero a entero para desacernos del decimal 

    var contador=0; //iniciamos un contador en 0

    while(num1>0){ //hacer eto mientras el num1 sea mayor a 0

        num1= parseInt(num1/10);  //lo divisimos entre 10 para deshacernos del numero faltante

        contador++; //y cada que el num1 sea mayor a 0 el contador se ira sumando de uno en uno

    }

    document.getElementById("resultado5").textContent = "El número tiene " + contador + " dígitos."; //muestra el resultado
}