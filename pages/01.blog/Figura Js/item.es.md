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
    function Figura() {
        var max = document.getElementById("num").value;
        var dato = parseInt(max);

            if(Number.isInteger(dato)){
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
                document.getElementById("num").value=" "; 
            }else{
                alert("El dato ingresado no es un numero entero");
                document.getElementById("num").value=" "; 
            }
    }
</script>
Se debe ingresar un valor para darle el tamaño a la figura.

 <p><label for="num">Ingrese un número:</label><br><input type="text" id="num" onkeyup="Figura()"/><br><br><code id="figura" class="fig"></code></p>



