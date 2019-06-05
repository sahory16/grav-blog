function figura() {
    var n = document.getElementById("num").value;
    var i,j;
    for ( i = 0;i < n; i++)
    {
        for ( j = 0;j < i; j++)
        {
            document.write("*");
        }
        document.write("<br>");
    }

    for ( i = 0;i < n;i++)    {
        for ( j = 0;j<n;j++)
        {
            if (j < i) {
                document.write(" ");
            } else {
                document.write("*");
            }
        }
        document.write("<br>");
    }

}