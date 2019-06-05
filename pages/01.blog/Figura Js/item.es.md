---
title: JavaScript
published: true
date: '17:34 06/03/2019'
taxonomy:
    category:
        - blog
    tag:
        - javascript
continue_link: false
shortcodes:
    assets:
        enabled: true
        options:
            type: jss
            inline: false
---

<script type="text/javascript">
    function armandoFigura() {
    var n = document.getElementById("nun").value;
        if(isNaN(n)){
                alert("El dato ingresado no es un numero entero");
                document.getElementById("nun").value=" "; 
                
            }else{
                  var x,y;
                var blancos = "";

                for (x=0;x<max;x++){
                    for(y=0;y<=x;y++){
                        blancos = blancos +"*";
                    }
                    blancos = blancos +"<br>"; 
                }
                for (x=0;x<n;x++){
                    for(y=0;y<n;y++){
                        if(y<=x){
                            blancos = blancos +"&nbsp";
                        }else{
                             blancos = blancos +"*";
                        }
                    }
                    blancos = blancos +"<br>"; 
                }
                document.getElementById("figura").innerHTML = blancos;
                document.getElementById("nun").value=" ";  
            }
}
</script>
### Formando figuras
#### En este post mostraremos una figura utilizando javascript.
===

 <p><label for="valor">Ingrese un número:</label><br><input type="text" id="num" onkeyup="armandoFigura()"/><br><br>
    <div id="figura" class="fig"></div>
</p>


