document.getElementById("btnTinh").onclick = function(){
    var m = document.getElementById("number").value * 1;
    var n = 1;

    for(var i = 1; i <= m; i++){
        n *= i;
    }
    document.getElementById("showInfo").innerHTML = "Giai thừa: " + n;
}