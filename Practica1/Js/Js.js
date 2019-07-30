var getTexto;
var numeros="0123456789";
var letras="abcdefghiyjklmnñopqrstuvwxyz0123456789";
var Iscomplet=false;
var count1=0;
var count2=0;
var count3=0;
var txt="";
var count4=0;
var i=0;
var datos;
function funcion(){

 getTexto=document.getElementById("texto").value;
 datos=document.getElementById("historial");
 console.log(getTexto);
 
if(getTexto!="")
funciones();
else{
  alert("Campo vacio");
}

}

function funciones(){
tiene_numeros();
symbols();
tiene_letras();

if(Iscomplet==true){
  Iscomplet=false;
}

if(count1-1==getTexto.length){
  txt="Numero";
  Iscomplet=true;
}
if(count3==getTexto.length && Iscomplet==false){
  txt="Symbolo";
  Iscomplet=true;
  
}
if(count2-1==getTexto.length && Iscomplet==false){
  txt="Identificador";
  Iscomplet=true;
}

if(Iscomplet==false){
  Identificador();
}

var auxText1="<tr>"+"<td>"+getTexto+"</td>" +"<td style="+"color:red"+">"+txt+"</td>"+"</tr>";
var auxText2="<tr>"+"<td>"+getTexto+"</td>" +"<td style="+"black:red"+">"+txt+"</td>"+"</tr>";

if(txt=="Error"){
  datos.innerHTML=datos.innerHTML+auxText1;
}else{
  datos.innerHTML=datos.innerHTML+auxText2;
}

count1=0;
count2=0;
count3=0;


}

function tiene_numeros(){
  
    
   for(i=0; i<=getTexto.length; i++){
      if (numeros.indexOf(getTexto.charAt(i),0)!=-1 ){
        count1=count1+1;
      }else{
          break;       
      }
   }
}



function tiene_letras(){
  var auxtexto = getTexto.toLowerCase();
  var le="abcdefghiyjklmnñopqrstuvwxyz";
   for(i=0; i<=getTexto.length; i++){
      if (le.indexOf(auxtexto.charAt(i),0)!=-1 ){
        count2=count2+1;
      }
      else{    
        break;
      }
   }  
}
function symbols(){
  var auxtexto = getTexto.toLowerCase();
  for(i=0; i<=getTexto.length; i++){
     if (letras.indexOf(auxtexto.charAt(i),0)==-1){
       count3=count3+1;    
     }
     else{
       break;
     }
   
  }  
}

function Identificador(){
  var le="abcdefghiyjklmnñopqrstuvwxyz";
  var auxtexto = getTexto.toLowerCase();
  var aux=auxtexto.split("",1);
  var aux2=le.split("",le.length);
  
  for(i=0;i<le.length;i++){
   if(aux[0]== aux2[i]){
    for(i=0; i<=getTexto.length; i++){
      if (letras.indexOf(auxtexto.charAt(i),0)!=-1){
        count4=count4+1;
        txt="Identificador";
      }
      else{
        txt="Error";
        break;
      }
   }
  break;
   }else{
     if(i==getTexto.length){
       txt="Error";
     }
     continue;
   }
  }
console.log(txt);
}
