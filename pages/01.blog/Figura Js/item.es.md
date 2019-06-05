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
    function figura()
    {
    var n = document.getElementById("num").value;
        var dato=parseInt(n);
   
        if(Number.isInteger(dato))
        {
             var i,j;
       var banco="";
       var asterisco="*";
       var salto="<br>";
    for ( i = 0;i < n; i++) {
        {
            for (j = 0; j < i; j++) {
               banco=banco+asterisco;
            }
            blanco=blanco+salto;
        }
        for (i = 0; i < n; i++) {
            for (j = 0; j < n; j++) {
                if (j < i) {
                    blanco=blanco+" ";
                } else {
                    blanco=blanco+asterisco;
                }
            }
            blanco=blanco+salto;
        }
    }
        
        
        document.getElementById("figura").innerHTML = blanco;
                document.getElementById("num").value=" ";
        } else
        {
            alert("El dato ingresado no es un numero entero");
                document.getElementById("valor").value=" "; 
        }
}
</script>
Se debe ingresar un valor para darle el tamaño a la figura.

 <p><label for="num">Ingrese un número:</label><br><input type="text" id="num" onkeyup="figura()"/><br><br><code id="figura" class="fig"></code></p>



