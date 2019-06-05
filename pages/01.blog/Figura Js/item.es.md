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
    function figura() {
    var n = document.getElementById("num").value;
    var i,j;
    for ( i = 0;i < n; i++) {
        {
            for (j = 0; j < i; j++) {
                document.write("*");
            }
            document.write("<br>");
        }
        for (i = 0; i < n; i++) {
            for (j = 0; j < n; j++) {
                if (j < i) {
                    document.write(" ");
                } else {
                    document.write("*");
                }
            }
            document.write("<br>");
        }
    }
}
</script>
Se debe ingresar un valor para darle el tamaño a la figura.

 <p><label for="valor">Ingrese un número:</label><br><input type="text" id="valor" onkeyup="figura()"/><br><br><code id="figura" class="fig"></code></p>



