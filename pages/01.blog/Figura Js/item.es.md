---
title: JavaScript
published: true
date: '17:34 06/03/2019'
taxonomy:
    category:
        - blog
    tag:
        - javascript
continue_link: true
---

### Formando figuras
#### En este post mostraremos una figura utilizando javascript.

===
<script type="text/javascript">
    function myFunction() {
        var max = document.getElementById("valor").value;
        var dato = parseInt(max);

            if(dato%1==0)){
                var filas,columnas;
                var cadena = "";

                for (filas=0;filas<max;filas++){
                    for(columnas=0;columnas<=filas;columnas++){
                        cadena = cadena +"*";
                    }
                    cadena = cadena +"<br>"; 
                }
                for (filas=0;filas<max;filas++){
                    for(columnas=0;columnas<max;columnas++){
                        if(columnas<=filas){
                            cadena = cadena +"&nbsp";
                        }else{
                             cadena = cadena +"*";
                        }
                    }
                    cadena = cadena +"<br>"; 
                }
                document.getElementById("figura").innerHTML = cadena;
                document.getElementById("valor").value=" "; 
            }else{
                alert("El dato ingresado no es un numero entero");
                document.getElementById("valor").value=" "; 
            }
    }
</script>
Se debe ingresar un valor para darle el tamaño a la figura.

 <p><label for="valor">Ingrese un número:</label><br><input type="text" id="valor" onkeyup="myFunction()"/><br><br><code id="figura" class="fig"></code></p>



