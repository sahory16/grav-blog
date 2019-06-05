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
        var lim = document.getElementById("num").value;
               var x,y;
                var c = "";

                for (x=0;x<lim;x++){
                    for(y=0;y<=x;y++){
                        c = c +"*";
                    }
                    c = c +"<br>"; 
                }
                for (x=0;x<lim;x++){
                    for(y=0;y<lim;y++){
                        if(y<=x){
                            c = c +"&nbsp";
                        }else{
                             c = c +"*";
                        }
                    }
                    c = c +"<br>"; 
                }
                document.getElementById("figura").innerHTML = c;
                document.getElementById("num").value=" "; 
           
    }
</script>
Se debe ingresar un valor para darle el tamaño a la figura.

 <p>
    <label for="num">Ingrese un número:</label><br>
    <input type="number" id="num" min="1"  onkey="Figura()"/><br><br>
    <code id="figura" class="fig"></code>
</p>



