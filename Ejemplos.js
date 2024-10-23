function numero_mayor(){
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);


    if (num1>=num2) {
        document.getElementById('resultado').textContent = ("El numero mayor es: " + num1);

    }
    else if (num2 >= num1){
        document.getElementById('resultado').textContent = ("El numero mayor es: " + num2);
    }
    else {
        document.getElementById('resultado').textContent = "Pendejo";
    }


}


function ope(){

    var operacion = document.getElementById("operacion").value;

    var num1 = parseFloat(document.getElementById("num1.1").value);

    var num2 = parseFloat(document.getElementById("num2.1").value);

    switch(operacion){
        
        case "suma": 

        resultado = num1 + num2; 
        

        document.getElementById('resultado2').textContent = ("El resultado es: " + resultado);

        break;

        case "resta":
            
        resultado = num1 - num2; 
        

        document.getElementById('resultado2').textContent = ("El resultado es: " + resultado);

        break;

        
        case "multiplicacion":
            
        resultado = num1 * num2; 
        

        document.getElementById('resultado2').textContent = ("El resultado es: " + resultado);

        break;

        
        case "division":
            
        resultado = num1 / num2; 
        

        document.getElementById('resultado2').textContent = ("El resultado es: " + resultado);

    }
     

}






function for1(){

    var num1 = document.getElementById("num1.3").value;
    var resultado = ""; 

    for (let i = 1; i <= 10; i++) {
        let r = i * num1;
        resultado += (num1 + " x " + i + " = " + r + "<br>" );  
    }

    document.getElementById('resultado3').innerHTML = resultado;

    var resultado = document.getElementById("for1-1");

    resultado.style.padding = "12px";

}

function whilee(){

    var num1 = document.getElementById("num1.4").value;

    var  salida='', digito;

    do{
        digito =  num1%10;

        num1 = parseInt(num1/10);

        salida += digito+'  ';

    }while (num1 >0)

        document.getElementById("resultado4").textContent = ("Los digitos son: " + salida);
}



function whilee2(){

    var num1 = document.getElementById("num1.5").value;

    num1 = parseInt(num1);

    var contador=0;

    while(num1>0){

        num1= parseInt(num1/10);

        contador++;

    }

    document.getElementById("resultado5").textContent = "El número tiene " + contador + " dígitos.";
}