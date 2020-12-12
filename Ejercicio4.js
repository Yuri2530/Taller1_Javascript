var valores = [true,5,false,"hola","adios",2];

//console.log(typeof(true));
let a_string = "", b_booleanos = "", c_numeros = [];


for (let i = 0; i < valores.length; i++) {
   if(typeof(valores[i])==="string"){
    a_string += "Posicion : "+i+ " Valor :"+valores[i]+"<br>";
   }else if(typeof(valores[i])==="boolean"){
    b_booleanos += "Posicion : "+i+ " Valor :"+valores[i]+"<br>";
   }else if(typeof(valores[i])==="number"){
       let resultados = [];
       resultados["Posicion"] = i;
       resultados["Numero"] = valores[i];
       c_numeros.push(resultados);
}
    
}

function operaciones_matematicas(numeros){
let resultado = "";
resultado += "Posicion: "+numeros[0]["Posicion"]+" Valor : "+numeros[0]["Numero"]+"<br>Posicion : " +numeros[1]["Posicion"]+" Valor : "+numeros[1]["Numero"]+ "<br> Operaciones Matemática <br> Suma  "+numeros[0]["Numero"]+" + "+numeros[1]["Numero"]+" = "+(numeros[0]["Numero"] + numeros[1]["Numero"])+" <br>";
resultado += "Resta "+numeros[0]["Numero"]+" - "+numeros[1]["Numero"]+" = "+(numeros[0]["Numero"] - numeros[1]["Numero"])+"<br>";
resultado += "Multiplicacion "+numeros[0]["Numero"]+" * "+numeros[1]["Numero"]+" = "+(numeros[0]["Numero"] * numeros[1]["Numero"])+"<br>";    
resultado += "division "+numeros[0]["Numero"]+" / "+numeros[1]["Numero"]+" = "+(numeros[0]["Numero"] / numeros[1]["Numero"])+"<br>";
return resultado;
    
}
document.write(a_string,b_booleanos,operaciones_matematicas(c_numeros));