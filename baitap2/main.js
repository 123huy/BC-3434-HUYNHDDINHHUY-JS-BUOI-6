document.getElementById("btnTinhTong").onclick = function multiple(){
    var x = document.getElementById("xNumber").value*1;
    var n = document.getElementById("yNumber").value*1;
    var result = 0;
    for(var i = 1; i <= n; i++ ){
        result += Math.pow(x, i)
    }
    document.getElementById("showInfo").innerHTML = "Tổng: " + result;
}